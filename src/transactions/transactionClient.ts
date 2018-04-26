import { IApiClient } from "@iota-pico/api/dist/interfaces/IApiClient";
import { IBroadcastTransactionsRequest } from "@iota-pico/api/dist/models/IBroadcastTransactionsRequest";
import { ICheckConsistencyRequest } from "@iota-pico/api/dist/models/ICheckConsistencyRequest";
import { IFindTransactionsRequest } from "@iota-pico/api/dist/models/IFindTransactionsRequest";
import { IGetBalancesRequest } from "@iota-pico/api/dist/models/IGetBalancesRequest";
import { IGetInclusionStatesRequest } from "@iota-pico/api/dist/models/IGetInclusionStatesRequest";
import { IGetTransactionsToApproveRequest } from "@iota-pico/api/dist/models/IGetTransactionsToApproveRequest";
import { IGetTrytesRequest } from "@iota-pico/api/dist/models/IGetTrytesRequest";
import { IStoreTransactionsRequest } from "@iota-pico/api/dist/models/IStoreTransactionsRequest";
import { IWereAddressesSpentFromRequest } from "@iota-pico/api/dist/models/IWereAddressesSpentFromRequest";
import { ArrayHelper } from "@iota-pico/core/dist/helpers/arrayHelper";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { IBackgroundTaskService } from "@iota-pico/core/dist/interfaces/IBackgroundTaskService";
import { ILogger } from "@iota-pico/core/dist/interfaces/ILogger";
import { ITimeService } from "@iota-pico/core/dist/interfaces/ITimeService";
import { NullLogger } from "@iota-pico/core/dist/loggers/nullLogger";
import { BackgroundTaskService } from "@iota-pico/core/dist/services/backgroundTaskService";
import { TimeService } from "@iota-pico/core/dist/services/timeService";
import { ISS } from "@iota-pico/crypto/dist/hash/iss";
import { TransactionHelper } from "@iota-pico/crypto/dist/helpers/transactionHelper";
import { IProofOfWork } from "@iota-pico/crypto/dist/interfaces/IProofOfWork";
import { Address } from "@iota-pico/data/dist/data/address";
import { AddressSecurity } from "@iota-pico/data/dist/data/addressSecurity";
import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Input } from "@iota-pico/data/dist/data/input";
import { SignatureMessageFragment } from "@iota-pico/data/dist/data/signatureMessageFragment";
import { Tag } from "@iota-pico/data/dist/data/tag";
import { Transaction } from "@iota-pico/data/dist/data/transaction";
import { Transfer } from "@iota-pico/data/dist/data/transfer";
import { Trits } from "@iota-pico/data/dist/data/trits";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { BusinessError } from "../error/businessError";
import { AddressHelper } from "../helpers/addressHelper";
import { BundleHelper } from "../helpers/bundleHelper";
import { ITransactionClient } from "../interfaces/ITransactionClient";
import { AccountData } from "../types/accountData";
import { PromoteOptions } from "../types/promoteOptions";
import { TransferOptions } from "../types/transferOptions";
import { ProofOfWorkApi } from "./proofOfWorkApi";

/**
 * Default implementation of the ITransactionClient.
 */
export class TransactionClient implements ITransactionClient {
    /* @internal */
    private static readonly NULL_HASH_TRYTES: string = "9".repeat(243);

    /* @internal */
    private static readonly MAX_INPUTS: number = 500;

    /* @internal */
    private readonly _apiClient: IApiClient;

    /* @internal */
    private readonly _proofOfWork: IProofOfWork;

    /* @internal */
    private readonly _timeService: ITimeService;

    /* @internal */
    private readonly _backgroundTaskService: IBackgroundTaskService;

    /* @internal */
    private readonly _logger: ILogger;

    /**
     * Create a new instance of the TransactionClient.
     * @param apiClient An API Client to communicate through.
     * @param proofOfWork Proof of work module to use, if undefined will use remote.
     * @param timeService A class which can provide the time.
     * @param backgroundTaskService A class which can provide background tasks.
     * @param logger Logger to send transaction info to.
     */
    constructor(apiClient: IApiClient,
                proofOfWork?: IProofOfWork,
                timeService?: ITimeService,
                backgroundTaskService?: IBackgroundTaskService,
                logger?: ILogger) {
        if (ObjectHelper.isEmpty(apiClient)) {
            throw new BusinessError("The apiClient must not be empty");
        }
        this._apiClient = apiClient;
        this._proofOfWork = proofOfWork || new ProofOfWorkApi(apiClient);
        this._timeService = timeService || new TimeService();
        this._backgroundTaskService = backgroundTaskService || new BackgroundTaskService();
        this._logger = logger || new NullLogger();
    }

    /**
     * Returns the list of transaction in progress.
     * @returns Promise which resolves to a list of hashes or rejects with error.
     */
    public async getTransactionsInProgress(): Promise<Hash[]> {
        this._logger.info("===> TransactionClient::getTransactionsInProgress");
        const response = await this._apiClient.getTips();
        if (response && response.hashes) {
            const resp = response.hashes.map(hash => Hash.fromTrytes(Trytes.fromString(hash)));
            this._logger.info("<=== TransactionClient::getTransactionsInProgress", resp);
            return resp;
        } else {
            this._logger.info("<=== TransactionClient::getTransactionsInProgress", []);
            return [];
        }
    }

    /**
     * Find the transactions which match the specified input and return. All input values are lists,
     * for which a list of return values (transaction hashes), in the same order, is returned for all
     * individual elements. Using multiple of these input fields returns the intersection of the values.
     * @param bundles Bundles to lookup transaction hashes for.
     * @param addresses Addresses to lookup transaction hashes for.
     * @param tags Tags to lookup transaction hashes for.
     * @param approvees Approvees to lookup transaction hashes for.
     * @returns Promise which resolves with a list of hashes or rejects with error.
     */
    public async findTransactions(bundles?: Hash[], addresses?: Address[], tags?: Tag[], approvees?: Hash[]): Promise<Hash[]> {
        this._logger.info("===> TransactionClient::findTransactions", bundles, addresses, tags, approvees);

        const hasBundle = bundles !== undefined && bundles !== null && bundles.length > 0;
        const hasAddresses = addresses !== undefined && addresses !== null && addresses.length > 0;
        const hasTags = tags !== undefined && tags !== null && tags.length > 0;
        const hasApprovees = approvees !== undefined && approvees !== null && approvees.length > 0;

        if (hasBundle && !ArrayHelper.isTyped(bundles, Hash)) {
            throw new BusinessError("The bundles must be an array of type Hash");
        }

        if (hasAddresses && !ArrayHelper.isTyped(addresses, Address)) {
            throw new BusinessError("The addresses must be an array of type Address");
        }

        if (hasTags && !ArrayHelper.isTyped(tags, Tag)) {
            throw new BusinessError("The tags must be an array of type Tag");
        }

        if (hasApprovees && !ArrayHelper.isTyped(approvees, Hash)) {
            throw new BusinessError("The approvees must be an array of type Hash");
        }

        if (!hasBundle && !hasAddresses && !hasTags && !hasApprovees) {
            throw new BusinessError("You must provide bundles, addresses, tags or approvees");
        }

        const request: IFindTransactionsRequest = {
            bundles: hasBundle ? bundles.map(bundle => bundle.toTrytes().toString()) : undefined,
            addresses: hasAddresses ? addresses.map(address => address.toTrytes().toString()) : undefined,
            tags: hasTags ? tags.map(tag => tag.toTrytes().toString()) : undefined,
            approvees: hasApprovees ? approvees.map(approvee => approvee.toTrytes().toString()) : undefined
        };

        const response = await this._apiClient.findTransactions(request);
        if (response && response.hashes) {
            const resp = response.hashes.map(hash => Hash.fromTrytes(Trytes.fromString(hash)));
            this._logger.info("<=== TransactionClient::findTransactions", resp);
            return resp;
        } else {
            this._logger.info("<=== TransactionClient::findTransactions", []);
            return [];
        }
    }

    /**
     * Get the transaction details of specific transactions.
     * @param transactionHashes The hashes to get the transactions for.
     * @returns Promise which resolves to the list of transactions or rejects with error.
     */
    public async getTransactionsObjects(transactionHashes: Hash[]): Promise<Transaction[]> {
        this._logger.info("===> TransactionClient::getTransactionsObjects", transactionHashes);
        if (!ArrayHelper.isTyped(transactionHashes, Hash)) {
            throw new BusinessError("The transactionHashes must be an array of type Hash");
        }

        const request: IGetTrytesRequest = {
            hashes: transactionHashes.map(hash => hash.toTrytes().toString())
        };

        const response = await this._apiClient.getTrytes(request);
        if (response && response.trytes) {
            const resp = response.trytes.map(trytes => Transaction.fromTrytes(Trytes.fromString(trytes)));
            this._logger.info("<=== TransactionClient::getTransactionsObjects", resp);
            return resp;
        } else {
            this._logger.info("<=== TransactionClient::getTransactionsObjects", []);
            return [];
        }
    }

    /**
     * Get the inclusion states of a list of transaction hashes.
     * @param transactionHashes The hashes to get the inclusion states for.
     * @returns Promise which resolves to the list of inclusion states or rejects with error.
     */
    public async getLatestInclusion(transactionHashes: Hash[]): Promise<boolean[]> {
        this._logger.info("===> TransactionClient::transactionHashes");
        if (!ArrayHelper.isTyped(transactionHashes, Hash)) {
            throw new BusinessError("The transactionHashes must be an array of type Hash");
        }

        const nodeInfo = await this._apiClient.getNodeInfo();
        if (nodeInfo && NumberHelper.isInteger(nodeInfo.latestSolidSubtangleMilestone)) {
            const request: IGetInclusionStatesRequest = {
                transactions: transactionHashes.map(hash => hash.toTrytes().toString()),
                tips: [nodeInfo.latestSolidSubtangleMilestone]
            };
            const response = await this._apiClient.getInclusionStates(request);
            if (response && response.states) {
                this._logger.info("<=== TransactionClient::transactionHashes", response.states);
                return response.states;
            } else {
                this._logger.info("<=== TransactionClient::transactionHashes", []);
                return [];
            }
        } else {
            throw new BusinessError("The node could not provide the latestSolidSubtangleMilestone");
        }
    }

    /**
     * Generates addresses with index-based or using apis.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param endIndex The end index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to the list of addresses or rejects with error.
     */
    public async getNewAddress(seed: Hash, startIndex?: number, endIndex?: number, includeChecksum?: boolean, security?: AddressSecurity): Promise<Address[]> {
        this._logger.info("===> TransactionClient::getNewAddress", seed, startIndex, endIndex, includeChecksum, security);
        if (!ObjectHelper.isType(seed, Hash)) {
            throw new BusinessError("The seed must be of type Hash");
        }

        if (!ObjectHelper.isEmpty(startIndex) && !ObjectHelper.isType(startIndex, Number)) {
            throw new BusinessError("The startIndex must be an integer", { startIndex });
        }

        const localStartIndex = startIndex || 0;

        if (localStartIndex < 0) {
            throw new BusinessError("The startIndex must be >= 0", { localStartIndex });
        }

        const hasEndIndex = NumberHelper.isInteger(endIndex);
        const localSecurity = security || AddressSecurity.medium;

        let addresses;
        if (hasEndIndex) {
            if (!NumberHelper.isInteger(endIndex) || endIndex < 0) {
                throw new BusinessError("The endIndex must be a number >= 0", { endIndex });
            }

            const total = endIndex - startIndex + 1;
            if (total <= 0 || total > TransactionClient.MAX_INPUTS) {
                throw new BusinessError(`The total must be > 0 and <= ${TransactionClient.MAX_INPUTS}`, { total });
            }

            addresses = await this.getAddressesByIndex(seed, startIndex, endIndex, includeChecksum, localSecurity);
        } else {
            addresses = await this.getAddressesToUnused(seed, startIndex, includeChecksum, localSecurity);
        }

        this._logger.info("<=== TransactionClient::getNewAddress", addresses);
        return addresses;
    }

    /**
     * Generates new addresses index-based.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param endIndex The end index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to the list of addresses or rejects with error.
     */
    public async getAddressesByIndex(seed: Hash, startIndex: number, endIndex: number, includeChecksum: boolean, security: AddressSecurity): Promise<Address[]> {
        this._logger.info("===> TransactionClient::getAddressesByIndex", seed, startIndex, endIndex, includeChecksum, security);

        if (!ObjectHelper.isType(seed, Hash)) {
            throw new BusinessError("The seed must be of type Hash");
        }
        if (!NumberHelper.isInteger(startIndex) || startIndex < 0) {
            throw new BusinessError("The startIndex must be a number >= 0", { startIndex });
        }
        if (!NumberHelper.isInteger(endIndex) || endIndex < 0) {
            throw new BusinessError("The endIndex must be a number >= 0", { endIndex });
        }
        const total = endIndex - startIndex + 1;
        if (total <= 0 || total > TransactionClient.MAX_INPUTS) {
            throw new BusinessError(`The total must be > 0 and <= ${TransactionClient.MAX_INPUTS}`, { total });
        }
        if (!NumberHelper.isInteger(security) || security < 1 || security > 3) {
            throw new BusinessError("The security must be between 1 and 3", { security });
        }

        const addresses: Address[] = [];

        for (let i = 0; i < total; i++) {
            addresses.push(this.generateAddress(seed, startIndex + i, security, includeChecksum));
        }

        this._logger.info("<=== TransactionClient::getAddressesByIndex", addresses);
        return Promise.resolve(addresses);
    }

    /**
     * Generates new address which havent been used using apis.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to an addresses list, the first unused address is the last in the list or rejects with error.
     */
    public async getAddressesToUnused(seed: Hash, startIndex: number, includeChecksum: boolean, security: AddressSecurity): Promise<Address[]> {
        this._logger.info("===> TransactionClient::getAddressesToUnused", seed, startIndex, includeChecksum, security);
        if (!ObjectHelper.isType(seed, Hash)) {
            throw new BusinessError("The seed must be of type Hash");
        }
        if (!NumberHelper.isInteger(startIndex) || startIndex < 0) {
            throw new BusinessError("The startIndex must be a number >= 0", { startIndex });
        }
        if (!NumberHelper.isInteger(security) || security < 1 || security > 3) {
            throw new BusinessError("The security must be between 1 and 3", { security });
        }

        let localStartIndex = startIndex;
        let isUsed;
        const addresses = [];

        do {
            const address = this.generateAddress(seed, localStartIndex++, security, includeChecksum);

            addresses.push(address);

            const addressNoChecksum = address.toTrytes().toString();

            const spentFromRequest: IWereAddressesSpentFromRequest = {
                addresses: [addressNoChecksum]
            };

            const spentFromResponse = await this._apiClient.wereAddressesSpentFrom(spentFromRequest);

            isUsed = spentFromResponse && spentFromResponse.states && spentFromResponse.states.length > 0 ? spentFromResponse.states[0] : false;
            if (!isUsed) {
                const findTransactionsRequest: IFindTransactionsRequest = {
                    addresses: [addressNoChecksum]
                };

                const findResponse = await this._apiClient.findTransactions(findTransactionsRequest);

                isUsed = findResponse && findResponse.hashes && findResponse.hashes.length > 0;
            }
        }
        while (isUsed);

        this._logger.info("<=== TransactionClient::getAddressesToUnused", addresses);
        return Promise.resolve(addresses);
    }

    /**
     * Get the input data for a range of addresses.
     * @param seed The seed to get the input data for.
     * @param startIndex The start index to get the addresses.
     * @param endIndex The end index to get the addresses.
     * @param security The security level used to create the addresses.
     * @param totalRequired The threshold at which total balance to stop gathering addresses.
     * @returns Promise which resolves to the inputs for each address or rejects with error.
     */
    public async getInputs(seed: Hash, startIndex: number, endIndex: number, security: AddressSecurity, totalRequired: number): Promise<{ inputs: Input[]; totalBalance: number }> {
        this._logger.info("===> TransactionClient::getInputs", seed, startIndex, endIndex, security, totalRequired);

        if (!ObjectHelper.isType(seed, Hash)) {
            throw new BusinessError("The seed must be of type Hash");
        }
        if (!NumberHelper.isInteger(startIndex) || startIndex < 0) {
            throw new BusinessError("The startIndex must be a number >= 0", { startIndex });
        }
        if (!NumberHelper.isInteger(security) || security < 1 || security > 3) {
            throw new BusinessError("The security must be between 1 and 3", { security });
        }
        if (!NumberHelper.isInteger(totalRequired) || totalRequired < 0) {
            throw new BusinessError("The totalRequired must be >= 0", { totalRequired });
        }

        const addresses = await this.getNewAddress(seed, startIndex, endIndex, false, security);

        const request: IGetBalancesRequest = {
            addresses: addresses.map(add => add.toTrytes().toString()),
            threshold: 100
        };

        const response = await this._apiClient.getBalances(request);

        const inputs = [];
        let totalBalance = 0;

        if (response) {
            for (let i = 0; i < addresses.length; i++) {
                const balance = parseInt(response.balances[i], 10);
                if (balance > 0) {
                    inputs.push(Input.fromParams(addresses[i], security, startIndex + i, balance));
                    totalBalance += balance;

                    if (totalRequired > 0 && totalBalance >= totalRequired) {
                        break;
                    }
                }
            }
        }

        const resp = { inputs, totalBalance };
        this._logger.info("<=== TransactionClient::getInputs", resp);

        if (totalRequired > 0 && totalBalance < totalRequired) {
            throw new BusinessError("Not enough combined balance in the addresses to satisfy the total required", { totalRequired, totalBalance });
        }

        return resp;
    }

    /**
     * Prepares transfer by generating bundle, finding and signing inputs.
     * @param seed The seed to prepare the transfer for.
     * @param transfers The transfers to prepare.
     * @param transferOptions Additional options for the transfer.
     * @returns Promise which resolves to the array of Trytes for the transfer or rejects with error.
     */
    public async prepareTransfers(seed: Hash, transfers: Transfer[], transferOptions?: TransferOptions): Promise<Bundle> {
        this._logger.info("===> TransactionClient::prepareTransfers", seed, transfers, transferOptions);

        if (!ObjectHelper.isType(seed, Hash)) {
            throw new BusinessError("The seed must be of type Hash");
        }

        if (!ArrayHelper.isTyped(transfers, Transfer)) {
            throw new BusinessError("The transfers must be an array of Transfer objects");
        }

        const localTransferOptions = transferOptions || {};
        localTransferOptions.security = localTransferOptions.security || AddressSecurity.medium;

        const emptyTrytes = Trytes.fromString("");
        const addHMAC = !ObjectHelper.isEmpty(localTransferOptions.hmacKey);
        let addedHMAC = false;

        // If message or tag is not supplied, provide it
        transfers.forEach(transfer => {
            transfer.message = transfer.message ? transfer.message : emptyTrytes;
            transfer.tag = transfer.tag || Tag.EMPTY;

            if (addHMAC && transfer.value > 0) {
                // tslint:disable:restrict-plus-operands false positive
                transfer.message = Trytes.fromString(TransactionClient.NULL_HASH_TRYTES + transfer.message.toString());
                addedHMAC = true;
            }
        });

        // Create a new bundle
        const prepared = BundleHelper.prepareBundle(this._timeService, transfers);

        const bundle = prepared.bundle;
        const lastTag = prepared.lastTag;
        const totalValue = prepared.totalValue;
        const signatureMessageFragments = prepared.signatureMessageFragments;

        // Get inputs if we are sending tokens
        if (totalValue > 0) {
            //  Case 1: user provided inputs
            //  Validate the inputs by calling getBalances
            if (localTransferOptions.inputs) {
                const request: IGetBalancesRequest = {
                    addresses: localTransferOptions.inputs.map(input => input.address.toTrytes().toString()),
                    threshold: 100
                };

                const balances = await this._apiClient.getBalances(request);
                const confirmedInputs = [];
                let totalBalance = 0;
                for (let i = 0; i < balances.balances.length; i++) {
                    const balance = parseInt(balances.balances[i], 10);

                    // If input has balance, add it to confirmedInputs
                    if (balance > 0) {
                        totalBalance += balance;

                        localTransferOptions.inputs[i].balance = balance;

                        confirmedInputs.push(localTransferOptions.inputs[i]);

                        // if we've already reached the intended input value, break out of loop
                        if (totalBalance >= totalValue) {
                            break;
                        }
                    }
                }

                // Return not enough balance error
                if (totalValue > totalBalance) {
                    throw new BusinessError("Not enough balance in the input addresses to satisfy the total for the transfer");
                }

                await this.addRemainder(seed, bundle, localTransferOptions, confirmedInputs, signatureMessageFragments, totalValue, lastTag, addedHMAC);
            } else {
                // No inputs supplied so we need to get some
                const inputsResponse = await this.getInputs(seed, 0, undefined, localTransferOptions.security, totalValue);

                await this.addRemainder(seed, bundle, localTransferOptions, inputsResponse.inputs, signatureMessageFragments, totalValue, lastTag, addedHMAC);
            }
        } else {
            // If no input required, don't sign and simply finalize the bundle
            BundleHelper.finalizeBundle(bundle);
            bundle.addSignatureMessageFragments(signatureMessageFragments);
        }

        bundle.transactions = bundle.transactions.reverse();

        this._logger.info("<=== TransactionClient::prepareTransfers", bundle);

        return bundle;
    }

    /**
     * Attach the transactions to the tangle by doing proof of work.
     * @param bundle The bundle of transactions to attach.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the bundle of transactions created or rejects with an error.
     */
    public async attachToTangle(bundle: Bundle, depth: number, minWeightMagnitude: number, reference?: Hash): Promise<Bundle> {
        this._logger.info("===> TransactionClient::attachToTangle", bundle, depth, minWeightMagnitude, reference);

        if (!ObjectHelper.isType(bundle, Bundle)) {
            throw new BusinessError("The bundle must be an array of type Bundle");
        }

        if (!ArrayHelper.isTyped(bundle.transactions, Transaction)) {
            throw new BusinessError("The bundle.transactions must be an array of type Transaction");
        }

        if (!NumberHelper.isInteger(depth) || depth <= 0) {
            throw new BusinessError("The depth must be a number > 0", { depth });
        }

        if (!NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new BusinessError("The minWeightMagnitude must be a number > 0", { minWeightMagnitude });
        }

        const transactionsToApproveRequest: IGetTransactionsToApproveRequest = {
            depth,
            reference: reference ? reference.toTrytes().toString() : undefined
        };

        const transactionsToApprove = await this._apiClient.getTransactionsToApprove(transactionsToApproveRequest);

        const allTrytes = await this._proofOfWork.pow(Hash.fromTrytes(Trytes.fromString(transactionsToApprove.trunkTransaction)),
                                                      Hash.fromTrytes(Trytes.fromString(transactionsToApprove.branchTransaction)),
                                                      bundle.transactions.map(t => t.toTrytes()),
                                                      minWeightMagnitude);

        const powTransactions = allTrytes.map(returnTrytes => Transaction.fromTrytes(returnTrytes));

        const newBundle = new Bundle();
        newBundle.transactions = powTransactions;
        this._logger.info("<=== TransactionClient::attachToTangle", newBundle);
        return newBundle;
    }

    /**
     * Wrapper function that does attachToTangle and then stores and broadcasts the transactions.
     * @param bundle The bundle of transactions to send.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the bundle of transactions created or rejects with an error.
     */
    public async sendTransactions(bundle: Bundle, depth: number, minWeightMagnitude: number, reference?: Hash): Promise<Bundle> {
        this._logger.info("===> TransactionClient::sendTransactions", bundle, depth, minWeightMagnitude, reference);

        const attachedTransactionsBundle = await this.attachToTangle(bundle, depth, minWeightMagnitude, reference);

        const storeTransactionsRequest: IStoreTransactionsRequest = {
            trytes: attachedTransactionsBundle.transactions.map(t => t.toTrytes().toString())
        };

        await this._apiClient.storeTransactions(storeTransactionsRequest);

        const broadcastTransactionsRequest: IBroadcastTransactionsRequest = {
            trytes: storeTransactionsRequest.trytes
        };

        await this._apiClient.broadcastTransactions(broadcastTransactionsRequest);

        this._logger.info("<=== TransactionClient::sendTransactions", attachedTransactionsBundle);
        return attachedTransactionsBundle;
    }

    /**
     * Wrapper function that does prepareTransfers and then sendTransactions.
     * @param seed The seed to send the transfer for.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param transfers The transfers to send.
     * @param transferOptions Additional options for the transfer.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    public async sendTransfer(seed: Hash, depth: number, minWeightMagnitude: number, transfers: Transfer[], transferOptions?: TransferOptions, reference?: Hash): Promise<Bundle> {
        this._logger.info("===> TransactionClient::sendTransfer", seed, depth, minWeightMagnitude, transfers, transferOptions, reference);

        const transferTrytes = await this.prepareTransfers(seed, transfers, transferOptions);

        const sentBundle = await this.sendTransactions(transferTrytes, depth, minWeightMagnitude, reference);
        this._logger.info("<=== TransactionClient::sendTransfer", sentBundle);
        return sentBundle;
    }

    /**
     * Find out if a transaction is promotable.
     * @param transactionTail The hash of the transaction to be promoted.
     * @returns Promise which resolves to true if the transaction is promotable rejects with an error.
     */
    public async isPromotable(transactionTail: Hash): Promise<boolean> {
        this._logger.info("===> TransactionClient::isPromotable", transactionTail);

        if (!ObjectHelper.isType(transactionTail, Hash)) {
            throw new BusinessError("The transactionTail must be an object of type Hash");
        }

        const checkConsistencyRequest: ICheckConsistencyRequest = {
            tails: [transactionTail.toTrytes().toString()]
        };

        const checkConsistencyResponse = await this._apiClient.checkConsistency(checkConsistencyRequest);
        this._logger.info("<=== TransactionClient::isPromotable", checkConsistencyResponse.state);
        return checkConsistencyResponse.state;
    }

    /**
     * Determines whether you should replay a transaction or make a new one (either with the same input, or a different one).
     * @param addresses Input address you want to have tested.
     * @returns Promise which resolves to true if the addresses are reattachable or rejects with an error.
     */
    public async isReattachable(addresses: Address[]): Promise<boolean[]> {
        this._logger.info("===> TransactionClient::isReattachable", addresses);
        if (!ArrayHelper.isTyped(addresses, Address)) {
            throw new BusinessError("The addresses must be an object of type Address");
        }

        const addrsTxsMap: { [address: string]: Hash[] } = {};

        for (let i = 0; i < addresses.length; i++) {
            const addressString = addresses[i].toTrytes().toString();
            addrsTxsMap[addressString] = [];
        }

        const transactions = await this.findTransactionObjects(undefined, addresses);

        const valueTransactions: Hash[] = [];
        transactions.forEach((transaction) => {
            if (transaction.value.toNumber() < 0) {
                const txAddress = transaction.address;
                const txHash = TransactionHelper.hash(transaction);

                addrsTxsMap[txAddress.toTrytes().toString()].push(txHash);

                valueTransactions.push(txHash);
            }
        });

        let results: boolean[];
        if (valueTransactions.length > 0) {
            const inclusionStates = await this.getLatestInclusion(valueTransactions);
            results = addresses.map((address) => {
                let shouldReattach = true;

                const txs = addrsTxsMap[address.toTrytes().toString()];

                for (let i = 0; i < txs.length; i++) {
                    const txIndex = valueTransactions.indexOf(txs[i]);
                    shouldReattach = !inclusionStates[txIndex];
                    if (!shouldReattach) {
                        break;
                    }
                }

                return shouldReattach;
            });
        } else {
            results = [];

            for (let i = 0; i < addresses.length; i++) {
                results.push(true);
            }
        }

        this._logger.info("<=== TransactionClient::isReattachable", results);
        return results;
    }

    /**
     * Promotes a transaction by adding spam on top of it, as long as it is promotable.
     * Will promote by adding transfers on top of the current one with delay interval.
     * Use promoteOptions.interrupt to terminate the promotion.
     * If promoteOptions.delay is set to 0 only one promotion transfer will be sent.
     * @param transactionTail The hash of the transaction to be promoted.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param transfers The transfers to send.
     * @param promoteOptions Additional options for the promote.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    public async promoteTransaction(transactionTail: Hash, depth: number, minWeightMagnitude: number, transfers: Transfer[], promoteOptions?: PromoteOptions): Promise<Bundle> {
        this._logger.info("===> TransactionClient::promoteTransaction", transactionTail, depth, minWeightMagnitude, transfers, promoteOptions);

        if (!ObjectHelper.isType(transactionTail, Hash)) {
            throw new BusinessError("The transactionTail must be an object of type Hash");
        }

        if (!NumberHelper.isInteger(depth) || depth <= 0) {
            throw new BusinessError("The depth must be a number > 0", { depth });
        }

        if (!NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new BusinessError("The minWeightMagnitude must be a number > 0", { minWeightMagnitude });
        }

        if (!ArrayHelper.isTyped(transfers, Transfer)) {
            throw new BusinessError("The transfers must an array of Transfer objects");
        }

        const localPromoteOptions = promoteOptions || {};
        if (ObjectHelper.isEmpty(localPromoteOptions.interrupt)) {
            localPromoteOptions.interrupt = false;
        }

        if (localPromoteOptions.interrupt === false || (typeof localPromoteOptions.interrupt === "function" && !localPromoteOptions.interrupt())) {
            const isPromotable = await this.isPromotable(transactionTail);

            if (isPromotable) {
                const sendTransferResponse = await this.sendTransfer(Hash.fromTrytes(transfers[0].address.toTrytes()), depth, minWeightMagnitude, transfers, undefined, transactionTail);

                if (NumberHelper.isInteger(localPromoteOptions.delay)) {
                    return this._backgroundTaskService.create(
                        async () => this.promoteTransaction(transactionTail, depth, minWeightMagnitude, transfers, localPromoteOptions),
                        localPromoteOptions.delay);
                } else {
                    this._logger.info("<=== TransactionClient::promoteTransaction", sendTransferResponse);
                    return sendTransferResponse;
                }
            } else {
                throw new BusinessError("Transaction is not promotable");
            }
        } else {
            this._logger.info("<=== TransactionClient::promoteTransaction", undefined);
            return undefined;
        }
    }

    /**
     * Gets the associated bundle transactions of a single transaction.
     * Does validation of signatures, total sum as well as bundle order.
     * @param transactionHash Hash of a trunk or a tail transaction of a bundle.
     * @returns Promise which resolves to the bundle transactions or rejects with an error.
     */
    public async getBundle(transactionHash: Hash): Promise<Bundle> {
        this._logger.info("===> TransactionClient::getBundle", transactionHash);

        if (!ObjectHelper.isType(transactionHash, Hash)) {
            throw new BusinessError("The transactionHash must be an object of type Hash");
        }

        const transactions = await this.traverseBundle(transactionHash);

        const bundle = new Bundle();
        bundle.transactions = transactions;

        const isValid = BundleHelper.isValid(bundle);

        if (!isValid) {
            throw new BusinessError("Invalid bundle provided");
        }

        this._logger.info("<=== TransactionClient::getBundle", bundle);
        return bundle;
    }

    /**
     * Traverse the Bundle by going down the trunkTransactions until
     * the bundle hash of the transaction is no longer the same.
     * @param trunkTransaction Hash of a trunk or a tail transaction of a bundle.
     * @param bundleHash The bundle hash to match.
     * @returns Promise which resolves to the bundle transactions or rejects with an error.
     */
    public async traverseBundle(trunkTransaction: Hash, bundleHash?: Hash): Promise<Transaction[]> {
        this._logger.info("===> TransactionClient::traverseBundle", trunkTransaction, bundleHash);

        if (!ObjectHelper.isType(trunkTransaction, Hash)) {
            throw new BusinessError("The trunkTransaction must be an object of type Hash");
        }

        const allBundleTransactions: Transaction[] = [];
        let newTrunkTransaction = trunkTransaction;
        let newBundleHash = bundleHash;

        do {
            const getTrytesRequest: IGetTrytesRequest = {
                hashes: [newTrunkTransaction.toTrytes().toString()]
            };

            const getTrytesResponse = await this._apiClient.getTrytes(getTrytesRequest);
            const trytes = !ObjectHelper.isEmpty(getTrytesResponse) &&
                            !ObjectHelper.isEmpty(getTrytesResponse.trytes) &&
                            getTrytesResponse.trytes.length > 0 ? getTrytesResponse.trytes[0] : undefined;

            if (ObjectHelper.isEmpty(trytes)) {
                throw new BusinessError("Bundle transactions not visible");
            } else {
                const transactionObject = Transaction.fromTrytes(Trytes.fromString(trytes));

                // If first transaction to search is not a tail, return error
                const hasHash = !ObjectHelper.isEmpty(newBundleHash);
                if (!hasHash && transactionObject.currentIndex.toNumber() !== 0) {
                    throw new BusinessError("Invalid tail transaction supplied");
                }

                // If no bundle hash, define it
                const localBundleHash = hasHash ? newBundleHash : transactionObject.bundle;

                newTrunkTransaction = undefined;
                newBundleHash = undefined;

                // If same bundle hash continue
                if (localBundleHash.toTrytes().toString() === transactionObject.bundle.toTrytes().toString()) {
                    // Add transaction object to bundle
                    allBundleTransactions.push(transactionObject);

                    // If more than one element then continue
                    if (transactionObject.lastIndex.toNumber() !== 0 || transactionObject.currentIndex.toNumber() !== 0) {
                        newTrunkTransaction = transactionObject.trunkTransaction;
                        newBundleHash = localBundleHash;
                    }
                }
            }
        } while (newTrunkTransaction !== undefined);

        this._logger.info("<=== TransactionClient::traverseBundle", allBundleTransactions);
        return allBundleTransactions;
    }

    /**
     * Wrapper which gets a bundle and then replays a transfer by doing Proof of Work again.
     * @param transactionHash The hash of the transaction to be promoted.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    public async reattachBundle(transactionHash: Hash, depth: number, minWeightMagnitude: number): Promise<Bundle> {
        this._logger.info("===> TransactionClient::reattachBundle", transactionHash, depth, minWeightMagnitude);

        const bundle = await this.getBundle(transactionHash);

        bundle.transactions = bundle.transactions.reverse();

        const sendTransactionsResponse = await this.sendTransactions(bundle, depth, minWeightMagnitude);
        this._logger.info("<=== TransactionClient::reattachBundle", sendTransactionsResponse);
        return sendTransactionsResponse;
    }

    /**
     * Wrapper which gets a bundle and then broadcasts it.
     * @param transactionHash The hash of the transaction to be re-broadcast.
     * @returns Promise which resolves or rejects with an error.
     */
    public async rebroadcastBundle(transactionHash: Hash): Promise<Bundle> {
        this._logger.info("===> TransactionClient::rebroadcastBundle", transactionHash);

        const bundle = await this.getBundle(transactionHash);

        const broadcastTransactionsRequest: IBroadcastTransactionsRequest = {
            trytes: bundle.transactions.reverse().map(bt => bt.toTrytes().toString())
        };

        await this._apiClient.broadcastTransactions(broadcastTransactionsRequest);

        this._logger.info("<=== TransactionClient::rebroadcastBundle", bundle);

        return bundle;
    }

    /**
     * Get transaction objects by fist performing a findTransactions call.
     * @param bundles Bundles to lookup transactions for.
     * @param addresses Addresses to lookup transactions for.
     * @param tags Tags to lookup transactions for.
     * @param approvees Approvees to lookup transactions for.
     * @returns Promise which resolves to the list of transactions or rejects with an error.
     */
    public async findTransactionObjects(bundles?: Hash[], addresses?: Address[], tags?: Tag[], approvees?: Hash[]): Promise<Transaction[]> {
        this._logger.info("===> TransactionClient::findTransactionObjects", bundles, addresses, tags, approvees);

        const transactions = await this.findTransactions(bundles, addresses, tags, approvees);
        if (transactions.length > 0) {
            const resp = await this.getTransactionsObjects(transactions);
            this._logger.info("<=== TransactionClient::findTransactionObjects", resp);
            return resp;
        } else {
            this._logger.info("<=== TransactionClient::findTransactionObjects", []);
            return [];
        }
    }

    /**
     * The transfers which are associated with a seed. The transfers are determined by either calculating
     * deterministically which addresses were already used, or by providing a list of indexes to get the
     * addresses and the associated transfers from. The transfers are sorted by their timestamp.
     * @param seed The seed to get the transfers for
     * @param startIndex The start index to get the transfers for.
     * @param endIndex The end index to get the transfers for.
     * @param security The security level for the transfers.
     * @param inclusionStates Do you want inclusion states in the bundles.
     * @returns Promise which resolves to the requested bundles or rejects with an error.
     */
    public async getTransfers(seed: Hash, startIndex?: number, endIndex?: number, security?: AddressSecurity, inclusionStates?: boolean): Promise<Bundle[]> {
        this._logger.info("===> TransactionClient::getTransfers", seed, startIndex, endIndex, security, inclusionStates);

        if (!ObjectHelper.isType(seed, Hash)) {
            throw new BusinessError("The seed must be of type Hash");
        }
        let localStartIndex = startIndex;
        if (!NumberHelper.isInteger(localStartIndex)) {
            localStartIndex = 0;
        }

        const addresses = await this.getNewAddress(seed, localStartIndex, endIndex, false, security);

        const bundles = await this.bundlesFromAddresses(addresses, inclusionStates);
        this._logger.info("<=== TransactionClient::getTransfers", bundles);
        return bundles;
    }

    /**
     * Similar to getTransfers, just that it returns additional account data.
     * @param seed The seed to get the transfers for
     * @param startIndex The start index to get the transfers for.
     * @param endIndex The end index to get the transfers for.
     * @param security The security level for the transfers.
     * @returns Promise which resolves to the account data or rejects with an error.
     */
    public async getAccountData(seed: Hash, startIndex?: number, endIndex?: number, security?: AddressSecurity): Promise<AccountData> {
        this._logger.info("===> TransactionClient::getAccountData", seed, startIndex, endIndex, security);

        if (!ObjectHelper.isType(seed, Hash)) {
            throw new BusinessError("The seed must be of type Hash");
        }
        let localStartIndex = startIndex;
        if (!NumberHelper.isInteger(localStartIndex)) {
            localStartIndex = 0;
        }

        const addresses = await this.getNewAddress(seed, localStartIndex, endIndex, false, security || AddressSecurity.medium);

        const bundles = await this.bundlesFromAddresses(addresses, true);

        const accountData: AccountData = {
            latestAddress: addresses.pop(),
            addresses,
            transfers: bundles,
            inputs: [],
            balance: 0
        };

        const balanceRequest: IGetBalancesRequest = {
            addresses: accountData.addresses.map(add => add.toTrytes().toString()),
            threshold: 100
        };

        const balanceResponse = await this._apiClient.getBalances(balanceRequest);

        for (let i = 0; i < balanceResponse.balances.length; i++) {
            const balance = parseInt(balanceResponse.balances[i], 10);
            if (balance > 0) {
                accountData.inputs.push(Input.fromParams(accountData.addresses[i], security || AddressSecurity.medium, localStartIndex + i, balance));
                accountData.balance += balance;
            }
        }

        this._logger.info("<=== TransactionClient::getAccountData", accountData);
        return accountData;
    }

    /* @internal */
    private async bundlesFromAddresses(addresses: Address[], inclusionStates: boolean): Promise<Bundle[]> {
        const transactionObjects = await this.findTransactionObjects(undefined, addresses, undefined, undefined);

        // set of tail transactions
        const tailTransactions = new Set<string>();
        const nonTailBundleHashes = new Set<string>();

        transactionObjects.forEach((transaction) => {
            // Sort tail and nonTails
            if (transaction.currentIndex.toNumber() === 0) {
                tailTransactions.add(TransactionHelper.hash(transaction).toTrytes().toString());
            } else {
                nonTailBundleHashes.add(transaction.bundle.toTrytes().toString());
            }
        });

        if (nonTailBundleHashes.size > 0) {
            const nonTailBundleTransactions = await this.findTransactionObjects(Array.from(nonTailBundleHashes).map(hash => Hash.fromTrytes(Trytes.fromString(hash))));

            nonTailBundleTransactions.forEach((transaction) => {
                if (transaction.currentIndex.toNumber() === 0) {
                    tailTransactions.add(TransactionHelper.hash(transaction).toTrytes().toString());
                }
            });
        }

        const finalBundles: Bundle[] = [];
        const tailTxArray = Array.from(tailTransactions);

        // If inclusionStates, get the confirmation status
        // of the tail transactions, and thus the bundles
        let tailTxStates;
        if (inclusionStates) {
            tailTxStates = await this.getLatestInclusion(tailTxArray.map(tail => Hash.fromTrytes(Trytes.fromString(tail))));
        }

        // Map each tail transaction to the getBundle function
        // format the returned bundles and add inclusion states if necessary
        for (let i = 0; i < tailTxArray.length; i++) {
            const bundle: Bundle = await this.getBundle(Hash.fromTrytes(Trytes.fromString(tailTxArray[i])));

            bundle.inclusionState = tailTxStates ? tailTxStates[i] : undefined;
            finalBundles.push(bundle);
        }

        // Sort bundles by timestamp
        finalBundles.sort((a, b) => {
            const x = a.transactions[0].attachmentTimestamp.toNumber();
            const y = b.transactions[0].attachmentTimestamp.toNumber();
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });

        return finalBundles;
    }

    /* @internal */
    private generateAddress(seed: Hash, index: number, security: AddressSecurity, includeChecksum: boolean): Address {
        const key = ISS.key(seed, index, security);
        const digests = ISS.digests(key);
        const addressTrits = ISS.address(digests);
        let addressTrytesString = Trits.fromArray(addressTrits).toTrytes().toString();

        if (includeChecksum) {
            addressTrytesString += AddressHelper.createChecksum(addressTrits, 9);
        }

        return Address.fromTrytes(Trytes.fromString(addressTrytesString));
    }

    /* @internal */
    private async addRemainder(seed: Hash, bundle: Bundle, transferOptions: TransferOptions, inputs: Input[],
                               signatureMessageFragments: SignatureMessageFragment[], totalValue: number, tag: Tag, addedHMAC: boolean): Promise<void> {

        let totalTransferValue = totalValue;
        for (let i = 0; i < inputs.length; i++) {
            const timestamp = Math.floor(this._timeService.msSinceEpoch() / 1000);

            // Add input as bundle entry
            bundle.addTransactions(inputs[i].security, inputs[i].address, -inputs[i].balance, tag, timestamp);

            // If there is a remainder value
            // Add extra output to send remaining funds to
            if (inputs[i].balance >= totalTransferValue) {
                const remainder = inputs[i].balance - totalTransferValue;

                // If user has provided remainder address use it to send remaining funds to
                if (remainder > 0 && !ObjectHelper.isEmpty(transferOptions) && ObjectHelper.isType(transferOptions.remainderAddress, Address)) {
                    // Remainder bundle entry
                    bundle.addTransactions(1, transferOptions.remainderAddress, remainder, tag, timestamp);
                    // Final function for signing inputs
                    BundleHelper.signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, addedHMAC);
                } else if (remainder > 0) {
                    let startIndex = 0;
                    for (let k = 0; k < inputs.length; k++) {
                        startIndex = Math.max(inputs[k].keyIndex, startIndex);
                    }

                    startIndex++;

                    const addresses = await this.getAddressesToUnused(seed, startIndex, false, transferOptions.security);

                    const ts = Math.floor(this._timeService.msSinceEpoch() / 1000);

                    // Remainder bundle entry
                    bundle.addTransactions(1, addresses[addresses.length - 1], remainder, tag, ts);

                    // Final function for signing inputs
                    BundleHelper.signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, addedHMAC);
                } else {
                    // If there is no remainder, do not add transaction to bundle
                    // simply sign and return
                    BundleHelper.signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, addedHMAC);
                }
            } else {
                // If multiple inputs provided, subtract the totalTransferValue by
                // the inputs balance
                totalTransferValue -= inputs[i].balance;
            }
        }
    }
}
