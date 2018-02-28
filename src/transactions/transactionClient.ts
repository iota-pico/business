import { IApiClient } from "@iota-pico/api/dist/interfaces/IApiClient";
import { IAttachToTangleRequest } from "@iota-pico/api/dist/models/IAttachToTangleRequest";
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
import { IProofOfWork } from "@iota-pico/crypto/dist/interfaces/IProofOfWork";
import { Address } from "@iota-pico/data/dist/data/address";
import { AddressSecurity } from "@iota-pico/data/dist/data/addressSecurity";
import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Input } from "@iota-pico/data/dist/data/input";
import { SignatureFragment } from "@iota-pico/data/dist/data/signatureFragment";
import { Tag } from "@iota-pico/data/dist/data/tag";
import { Transaction } from "@iota-pico/data/dist/data/transaction";
import { Transfer } from "@iota-pico/data/dist/data/transfer";
import { Trits } from "@iota-pico/data/dist/data/trits";
import { TryteNumber } from "@iota-pico/data/dist/data/tryteNumber";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { BusinessError } from "../error/businessError";
import { AccountData } from "../interfaces/accountData";
import { IBackgroundTaskService } from "../interfaces/IBackgroundTaskService";
import { ITimeService } from "../interfaces/ITimeService";
import { ITransactionClient } from "../interfaces/ITransactionClient";
import { PromoteOptions } from "../interfaces/promoteOptions";
import { TransferOptions } from "../interfaces/transferOptions";
import { BackgroundTaskService } from "../services/backgroundTaskService";
import { TimeService } from "../services/timeService";
import { BundleSigning } from "./bundleSigning";
import { TransactionSigning } from "./transactionSigning";

/**
 * Default implementation of the ITransactionClient.
 */
export class TransactionClient implements ITransactionClient {
    /* @internal */
    private static readonly NULL_HASH_TRYTES: string = "9".repeat(243);

    /* @internal */
    private static readonly MAX_TIMESTAMP_VALUE: number = (Math.pow(3, 27) - 1) / 2;

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

    /**
     * Create a new instance of the TransactionClient.
     * @param apiClient An API Client to communicate through.
     * @param proofOfWork Proof of work module to use, if undefined will use remote.
     * @param timeService A class which can provide the time.
     * @param backgroundTaskService A class which can provide background tasks.
     */
    constructor(apiClient: IApiClient,
                proofOfWork?: IProofOfWork,
                timeService: ITimeService = new TimeService(),
                backgroundTaskService: IBackgroundTaskService = new BackgroundTaskService()) {
        this._apiClient = apiClient;
        this._proofOfWork = proofOfWork;
        this._timeService = timeService;
        this._backgroundTaskService = backgroundTaskService;
    }

    /**
     * Initialize the client.
     */
    public async initialize(): Promise<void> {
        if (this._proofOfWork) {
            await this._proofOfWork.initialize();
        }
    }

    /**
     * Returns the list of transaction in progress.
     * @returns Promise which resolves to a list of hashes or rejects with error.
     */
    public async getTransactionsInProgress(): Promise<Hash[]> {
        const response = await this._apiClient.getTips();
        if (response && response.hashes) {
            return response.hashes.map(hash => Hash.fromTrytes(Trytes.fromString(hash)));
        } else {
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
            return response.hashes.map(hash => Hash.fromTrytes(Trytes.fromString(hash)));
        } else {
            return [];
        }
    }

    /**
     * Get the transaction details of specific transactions.
     * @returns Promise which resolves to the list of transactions or rejects with error.
     */
    public async getTransactionsObjects(transactionHashes: Hash[]): Promise<Transaction[]> {
        if (!ArrayHelper.isTyped(transactionHashes, Hash)) {
            throw new BusinessError("The transactionHashes must be an array of type Hash");
        }

        const request: IGetTrytesRequest = {
            hashes: transactionHashes.map(hash => hash.toTrytes().toString())
        };

        const response = await this._apiClient.getTrytes(request);
        if (response && response.trytes) {
            return response.trytes.map(trytes => Transaction.fromTrytes(Trytes.fromString(trytes)));
        } else {
            return [];
        }
    }

    /**
     * Get the inclusion states of a list of transaction hashes.
     * @returns Promise which resolves to the list of inclusion states or rejects with error.
     */
    public async getLatestInclusion(transactionHashes: Hash[]): Promise<boolean[]> {
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
                return response.states;
            } else {
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
            const total = endIndex - startIndex + 1;
            if (total <= 0 || total > TransactionClient.MAX_INPUTS) {
                throw new BusinessError(`The total must be > 0 and <= ${TransactionClient.MAX_INPUTS}`, { total });
            }

            addresses = await this.getAddressesByIndex(seed, startIndex, endIndex, includeChecksum, localSecurity);
        } else {
            addresses = await this.getAddressesToUnused(seed, startIndex, includeChecksum, localSecurity);
        }

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
        if (!ObjectHelper.isType(seed, Hash)) {
            throw new BusinessError("The seed must be of type Hash");
        }
        if (!NumberHelper.isInteger(startIndex) || startIndex < 0) {
            throw new BusinessError("The startIndex must be a number >= 0", { startIndex });
        }
        if (!NumberHelper.isInteger(endIndex) || endIndex <= 0) {
            throw new BusinessError("The endIndex must be a number > 0", { endIndex });
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

        if (totalRequired > 0 && totalBalance < totalRequired) {
            throw new BusinessError("Not enough combined balance in the addresses to satisfy the total required", { totalRequired, totalBalance });
        }

        return { inputs, totalBalance };
    }

    /**
     * Prepares transfer by generating bundle, finding and signing inputs.
     * @param seed The seed to prepare the transfer for.
     * @param transfers The transfers to prepare.
     * @param transferOptions
     *      @property inputs List of inputs used for funding the transfer.
     *      @property security Security level to be used for the private key / addresses.
     *      @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to.
     *      @property hmacKey Hmac key to sign the bundle.
     *      @property reference The transaction to reference.
     * @returns Promise which resolves to the array of Trytes for the transfer or rejects with error.
     */
    public async prepareTransfers(seed: Hash, transfers: Transfer[], transferOptions?: TransferOptions): Promise<Trytes[]> {
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
                transfer.message = Trytes.fromString(TransactionClient.NULL_HASH_TRYTES + transfer.message.toString());
                addedHMAC = true;
            }
        });

        // Create a new bundle
        const bundle = new Bundle();
        let lastTag: Tag;

        let totalValue: number = 0;
        const signatureFragments: SignatureFragment[] = [];

        //  Iterate over all transfers, get totalValue
        //  and prepare the signatureFragments, message and tag
        for (let i = 0; i < transfers.length; i++) {
            let signatureMessageLength = 1;

            // If message longer than 2187 trytes, increase signatureMessageLength (add 2nd transaction)
            const messageString = transfers[i].message.toString();
            if (messageString.length > SignatureFragment.LENGTH) {
                // Get total length, message / maxLength (2187 trytes)
                signatureMessageLength += Math.floor(messageString.length / SignatureFragment.LENGTH);

                let msgCopy = messageString;

                // While there is still a message, copy it
                while (msgCopy) {
                    let fragment = msgCopy.slice(0, SignatureFragment.LENGTH);
                    msgCopy = msgCopy.slice(SignatureFragment.LENGTH, msgCopy.length);

                    // Pad remainder of fragment
                    for (let j = 0; fragment.length < SignatureFragment.LENGTH; j++) {
                        fragment += "9";
                    }

                    signatureFragments.push(SignatureFragment.fromTrytes(Trytes.fromString(fragment)));
                }
            } else {
                // Else, get single fragment with 2187 of 9's trytes
                let fragment = "";

                if (messageString) {
                    fragment = messageString.slice(0, SignatureFragment.LENGTH);
                }

                for (let j = 0; fragment.length < SignatureFragment.LENGTH; j++) {
                    fragment += "9";
                }

                signatureFragments.push(SignatureFragment.fromTrytes(Trytes.fromString(fragment)));
            }

            // get current timestamp in seconds
            const timestamp = Math.floor(this._timeService.msSinceEpoch() / 1000);

            lastTag = transfers[i].tag;

            // Add first entries to the bundle
            bundle.addTransactions(signatureMessageLength, transfers[i].address, transfers[i].value, transfers[i].tag, timestamp);

            // Sum up total value
            totalValue += transfers[i].value;
        }

        let preparedTrytes;

        // Get inputs if we are sending tokens
        if (totalValue) {
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

                preparedTrytes = this.addRemainder(seed, bundle, localTransferOptions, confirmedInputs, signatureFragments, totalValue, lastTag, addedHMAC);
            } else {
                // No inputs supplied so we need to get some
                const inputsResponse = await this.getInputs(seed, 0, undefined, localTransferOptions.security, totalValue);

                preparedTrytes = this.addRemainder(seed, bundle, localTransferOptions, inputsResponse.inputs, signatureFragments, totalValue, lastTag, addedHMAC);
            }
        } else {

            // If no input required, don't sign and simply finalize the bundle
            BundleSigning.finalizeBundle(bundle);
            bundle.addSignatureFragments(signatureFragments);

            const bundleTrytes: Trytes[] = [];
            bundle.transactions.forEach((tx) => {
                bundleTrytes.push(tx.toTrytes());
            });

            preparedTrytes = bundleTrytes.reverse();
        }

        return preparedTrytes;
    }

    /**
     * Wrapper function that does attachToTangle and finally, it broadcasts and stores the transactions.
     * @param trytes The trytes to send.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param reference The reference to send with the trytes.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    public async attachToTangle(trytes: Trytes[], depth: number, minWeightMagnitude: number, reference?: Hash): Promise<Transaction[]> {
        if (!ArrayHelper.isTyped(trytes, Trytes)) {
            throw new BusinessError("The trytes must be an array of type Trytes");
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

        let powTrytes: string[];
        if (this._proofOfWork) {
            const localPowTrytes = await this.localProofOfWork(Hash.fromTrytes(Trytes.fromString(transactionsToApprove.trunkTransaction)),
                                                               Hash.fromTrytes(Trytes.fromString(transactionsToApprove.branchTransaction)),
                                                               minWeightMagnitude,
                                                               trytes);
            powTrytes = localPowTrytes.map(t => t.toString());
        } else {
            const attachToTangleRequest: IAttachToTangleRequest = {
                trunkTransaction: transactionsToApprove.trunkTransaction,
                branchTransaction: transactionsToApprove.branchTransaction,
                minWeightMagnitude: minWeightMagnitude,
                trytes: trytes.map(t => t.toString())
            };

            const attachToTangleResponse = await this._apiClient.attachToTangle(attachToTangleRequest);

            powTrytes = attachToTangleResponse.trytes;
        }

        return powTrytes.map(attachTrytes => Transaction.fromTrytes(Trytes.fromString(attachTrytes)));
    }

    /**
     * Wrapper function that does attachToTangle and finally, it broadcasts and stores the transactions.
     * @param trytes The trytes to send.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param reference The reference to send with the trytes.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    public async sendTrytes(trytes: Trytes[], depth: number, minWeightMagnitude: number, reference?: Hash): Promise<Transaction[]> {
        const transactions = await this.attachToTangle(trytes, depth, minWeightMagnitude, reference);

        const storeTransactionsRequest: IStoreTransactionsRequest = {
            trytes: transactions.map(t => t.toTrytes().toString())
        };

        await this._apiClient.storeTransactions(storeTransactionsRequest);

        const broadcastTransactionsRequest: IBroadcastTransactionsRequest = {
            trytes: storeTransactionsRequest.trytes
        };

        await this._apiClient.broadcastTransactions(broadcastTransactionsRequest);

        return transactions;
    }

    /**
     * Wrapper function that does prepareTransfers, as well as attachToTangle and finally, it broadcasts and stores the transactions locally.
     * @param seed The seed to send the transfer for.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param transfers The transfers to send.
     * @param transferOptions Additional options for the transfer.
     *      @property inputs List of inputs used for funding the transfer.
     *      @property security Security level to be used for the private key / addresses.
     *      @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to.
     *      @property hmacKey Hmac key to sign the bundle.
     * @param reference The reference to send with the trytes.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    public async sendTransfer(seed: Hash, depth: number, minWeightMagnitude: number, transfers: Transfer[], transferOptions?: TransferOptions, reference?: Hash): Promise<Transaction[]> {
        if (!ObjectHelper.isType(seed, Hash)) {
            throw new BusinessError("The seed must be of type Hash");
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

        const transferTrytes = await this.prepareTransfers(seed, transfers, transferOptions);

        return this.sendTrytes(transferTrytes, depth, minWeightMagnitude, reference);
    }

    /**
     * Find out if a transaction is promotable.
     * @param transactionTail The hash of the transaction to be promoted.
     * @returns Promise which resolves to true if the transaction is promotable rejects with an error.
     */
    public async isPromotable(transactionTail: Hash): Promise<boolean> {
        if (!ObjectHelper.isType(transactionTail, Hash)) {
            throw new BusinessError("The transactionTail must be an object of type Hash");
        }

        const checkConsistencyRequest: ICheckConsistencyRequest = {
            tails: [transactionTail.toTrytes().toString()]
        };

        const checkConsistencyResponse = await this._apiClient.checkConsistency(checkConsistencyRequest);

        return checkConsistencyResponse.state;
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
     *      @property delay Delay between promotion transfers
     *      @property interrupt Flag or method to terminate promotion.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    public async promoteTransaction(transactionTail: Hash, depth: number, minWeightMagnitude: number, transfers: Transfer[], promoteOptions?: PromoteOptions): Promise<Transaction[]> {
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

        const isPromotable = await this.isPromotable(transactionTail);

        if (isPromotable) {
            if (localPromoteOptions.interrupt === false || (typeof localPromoteOptions.interrupt === "function" && !localPromoteOptions.interrupt())) {
                const sendTransferResponse = await this.sendTransfer(Hash.fromTrytes(transfers[0].address.toTrytes()), depth, minWeightMagnitude, transfers, undefined, transactionTail);

                if (localPromoteOptions.delay !== undefined) {
                    return this._backgroundTaskService.create<Transaction[]>(
                        async () => this.promoteTransaction(transactionTail, depth, minWeightMagnitude, transfers, promoteOptions),
                        localPromoteOptions.delay);
                } else {
                    return sendTransferResponse;
                }
            } else {
                return undefined;
            }
        } else {
            throw new BusinessError("Transaction is not promotable");
        }
    }

    /**
     * Gets the associated bundle transactions of a single transaction.
     * Does validation of signatures, total sum as well as bundle order.
     * @param trunkTransaction Hash of a trunk or a tail transaction of a bundle.
     * @returns Promise which resolves to the bundle transactions or rejects with an error.
     */
    public async getBundle(trunkTransaction: Hash): Promise<Bundle> {
        if (!ObjectHelper.isType(trunkTransaction, Hash)) {
            throw new BusinessError("The trunkTransaction must be an object of type Hash");
        }

        const transactions = await this.traverseBundle(trunkTransaction);

        const isValid = BundleSigning.isValid(transactions);

        if (!isValid) {
            throw new BusinessError("Invalid bundle provided");
        }

        const bundle = new Bundle();
        bundle.transactions = transactions;
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

        return allBundleTransactions;
    }

    /**
     * Replays a transfer by doing Proof of Work again.
     * @param transactionTail The hash of the transaction to be promoted.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    public async replayBundle(transactionTail: Hash, depth: number, minWeightMagnitude: number): Promise<Transaction[]> {
        if (!ObjectHelper.isType(transactionTail, Hash)) {
            throw new BusinessError("The transactionTail must be an object of type Hash");
        }

        if (!NumberHelper.isInteger(depth) || depth <= 0) {
            throw new BusinessError("The depth must be a number > 0", { depth });
        }

        if (!NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new BusinessError("The minWeightMagnitude must be a number > 0", { minWeightMagnitude });
        }

        const bundle = await this.getBundle(transactionTail);

        const bundleTrytes: Trytes[] = [];

        bundle.transactions.forEach((transaction) => {
            bundleTrytes.push(transaction.toTrytes());
        });

        return this.sendTrytes(bundleTrytes.reverse(), depth, minWeightMagnitude);
    }

    /**
     * Re-Broadcasts a transfer.
     * @param transactionTail The hash of the transaction to be promoted.
     * @returns Promise which resolves or rejects with an error.
     */
    public async broadcastBundle(transactionTail: Hash): Promise<void> {
        if (!ObjectHelper.isType(transactionTail, Hash)) {
            throw new BusinessError("The transactionTail must be an object of type Hash");
        }

        const bundle = await this.getBundle(transactionTail);

        const bundleTrytes: Trytes[] = [];

        bundle.transactions.forEach((transaction) => {
            bundleTrytes.push(transaction.toTrytes());
        });

        const broadcastTransactionsRequest: IBroadcastTransactionsRequest = {
            trytes: bundleTrytes.reverse().map(bt => bt.toString())
        };

        return this._apiClient.broadcastTransactions(broadcastTransactionsRequest);
    }

    /**
     * Get transaction objects by fist performing a findTransactions call.
     * @param addresses The addresses to get the transaction objects for.
     * @param bundles Bundles to lookup transactions for.
     * @param addresses Addresses to lookup transactions for.
     * @param tags Tags to lookup transactions for.
     * @param approvees Approvees to lookup transactions for.
     * @returns Promise which resolves to the list of transactions or rejects with an error.
     */
    public async findTransactionObjects(bundles?: Hash[], addresses?: Address[], tags?: Tag[], approvees?: Hash[]): Promise<Transaction[]> {
        const transactions = await this.findTransactions(bundles, addresses, tags, approvees);
        if (transactions.length > 0) {
            return this.getTransactionsObjects(transactions);
        } else {
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
        if (!ObjectHelper.isType(seed, Hash)) {
            throw new BusinessError("The seed must be of type Hash");
        }
        let localStartIndex = startIndex;
        if (!NumberHelper.isInteger(localStartIndex)) {
            localStartIndex = 0;
        }

        const addresses = await this.getNewAddress(seed, localStartIndex, endIndex, false, security);

        return this.bundlesFromAddresses(addresses, inclusionStates);
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
                tailTransactions.add(BundleSigning.transactionHash(transaction).toTrytes().toString());
            } else {
                nonTailBundleHashes.add(transaction.bundle.toTrytes().toString());
            }
        });

        if (nonTailBundleHashes.size > 0) {
            const nonTailBundleTransactions = await this.findTransactionObjects(Array.from(nonTailBundleHashes).map(hash => Hash.fromTrytes(Trytes.fromString(hash))));

            nonTailBundleTransactions.forEach((transaction) => {
                if (transaction.currentIndex.toNumber() === 0) {
                    tailTransactions.add(BundleSigning.transactionHash(transaction).toTrytes().toString());
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
        const key = TransactionSigning.key(seed, index, security);
        const digests = TransactionSigning.digests(key);
        const addressTrits = TransactionSigning.address(digests);
        let addressTrytesString = Trits.fromArray(addressTrits).toTrytes().toString();

        if (includeChecksum) {
            addressTrytesString += TransactionSigning.createChecksum(addressTrits, 9);
        }

        return Address.fromTrytes(Trytes.fromString(addressTrytesString));
    }

    /* @internal */
    private async addRemainder(seed: Hash, bundle: Bundle, transferOptions: TransferOptions, inputs: Input[],
                               signatureFragments: SignatureFragment[], totalValue: number, tag: Tag, addedHMAC: boolean): Promise<Trytes[]> {
        let finalTrytes: Trytes[];
        let totalTransferValue = totalValue;
        for (let i = 0; i < inputs.length && finalTrytes === undefined; i++) {
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
                    finalTrytes = BundleSigning.signInputsAndReturn(seed, bundle, transferOptions, signatureFragments, inputs, addedHMAC);
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
                    finalTrytes = BundleSigning.signInputsAndReturn(seed, bundle, transferOptions, signatureFragments, inputs, addedHMAC);
                } else {
                    // If there is no remainder, do not add transaction to bundle
                    // simply sign and return
                    finalTrytes = BundleSigning.signInputsAndReturn(seed, bundle, transferOptions, signatureFragments, inputs, addedHMAC);
                }
            } else {
                // If multiple inputs provided, subtract the totalTransferValue by
                // the inputs balance
                totalTransferValue -= inputs[i].balance;
            }
        }

        return finalTrytes;
    }

    private async localProofOfWork(trunkTransaction: Hash, branchTransaction: Hash, minWeightMagnitude: number, trytes: Trytes[]): Promise<Trytes[]> {
        const finalTrytes: Trytes[] = [];
        let previousTransactionHash: Hash;

        for (let i = 0; i < trytes.length; i++) {
            // Start with last index transaction
            // Assign it the trunk / branch which the user has supplied
            // IF there is a bundle, chain  the bundle transactions via
            // trunkTransaction together
            const transaction = Transaction.fromTrytes(trytes[i]);
            transaction.tag = transaction.tag || transaction.obsoleteTag;
            transaction.attachmentTimestamp = TryteNumber.fromNumber(Date.now());
            transaction.attachmentTimestampLowerBound = TryteNumber.fromNumber(0);
            transaction.attachmentTimestampUpperBound = TryteNumber.fromNumber(TransactionClient.MAX_TIMESTAMP_VALUE);

            // If this is the first transaction, to be processed
            // Make sure that it's the last in the bundle and then
            // assign it the supplied trunk and branch transactions

            if (ObjectHelper.isEmpty(previousTransactionHash)) {
                // Check if last transaction in the bundle
                if (transaction.lastIndex.toNumber() !== transaction.currentIndex.toNumber()) {
                    throw new BusinessError("Wrong bundle order. The bundle should be ordered in descending order from currentIndex");
                }
                transaction.trunkTransaction = trunkTransaction;
                transaction.branchTransaction = branchTransaction;
            } else {
                transaction.trunkTransaction = previousTransactionHash;
                transaction.branchTransaction = trunkTransaction;
            }

            const newTrytes = transaction.toTrytes();

            const returnedTrytes = await this._proofOfWork.pow(newTrytes, minWeightMagnitude);
            const nonce = returnedTrytes.toString().substr(-Hash.LENGTH);

            const newTrytesWithNonce = `${newTrytes.toString().substr(0, Transaction.LENGTH - Hash.LENGTH)}${nonce}`;
            const newTransactionWithNonce = Transaction.fromTrytes(Trytes.fromString(newTrytesWithNonce));

            // Calculate the has of the new transaction with nonce and use that as the previous hash for next entry
            previousTransactionHash = BundleSigning.transactionHash(newTransactionWithNonce);

            finalTrytes.push(returnedTrytes);
        }

        // reverse the order so that it's ascending from currentIndex
        return Promise.resolve(finalTrytes.reverse());
    }
}
