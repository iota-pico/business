Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("@iota-pico/core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const nullLogger_1 = require("@iota-pico/core/dist/loggers/nullLogger");
const backgroundTaskService_1 = require("@iota-pico/core/dist/services/backgroundTaskService");
const timeService_1 = require("@iota-pico/core/dist/services/timeService");
const iss_1 = require("@iota-pico/crypto/dist/hash/iss");
const transactionHelper_1 = require("@iota-pico/crypto/dist/helpers/transactionHelper");
const address_1 = require("@iota-pico/data/dist/data/address");
const addressSecurity_1 = require("@iota-pico/data/dist/data/addressSecurity");
const bundle_1 = require("@iota-pico/data/dist/data/bundle");
const hash_1 = require("@iota-pico/data/dist/data/hash");
const input_1 = require("@iota-pico/data/dist/data/input");
const tag_1 = require("@iota-pico/data/dist/data/tag");
const transaction_1 = require("@iota-pico/data/dist/data/transaction");
const transfer_1 = require("@iota-pico/data/dist/data/transfer");
const trits_1 = require("@iota-pico/data/dist/data/trits");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const businessError_1 = require("../error/businessError");
const addressHelper_1 = require("../helpers/addressHelper");
const bundleHelper_1 = require("../helpers/bundleHelper");
const proofOfWorkApi_1 = require("./proofOfWorkApi");
/**
 * Default implementation of the ITransactionClient.
 */
class TransactionClient {
    /**
     * Create a new instance of the TransactionClient.
     * @param apiClient An API Client to communicate through.
     * @param proofOfWork Proof of work module to use, if undefined will use remote.
     * @param timeService A class which can provide the time.
     * @param backgroundTaskService A class which can provide background tasks.
     * @param logger Logger to send transaction info to.
     */
    constructor(apiClient, proofOfWork, timeService, backgroundTaskService, logger) {
        if (objectHelper_1.ObjectHelper.isEmpty(apiClient)) {
            throw new businessError_1.BusinessError("The apiClient must not be empty");
        }
        this._apiClient = apiClient;
        this._proofOfWork = proofOfWork || new proofOfWorkApi_1.ProofOfWorkApi(apiClient);
        this._timeService = timeService || new timeService_1.TimeService();
        this._backgroundTaskService = backgroundTaskService || new backgroundTaskService_1.BackgroundTaskService();
        this._logger = logger || new nullLogger_1.NullLogger();
    }
    /**
     * Returns the list of transaction in progress.
     * @returns Promise which resolves to a list of hashes or rejects with error.
     */
    async getTransactionsInProgress() {
        this._logger.info("===> TransactionClient::getTransactionsInProgress");
        const response = await this._apiClient.getTips();
        if (response && response.hashes) {
            const resp = response.hashes.map(hash => hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(hash)));
            this._logger.info("<=== TransactionClient::getTransactionsInProgress", resp);
            return resp;
        }
        else {
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
    async findTransactions(bundles, addresses, tags, approvees) {
        this._logger.info("===> TransactionClient::findTransactions", bundles, addresses, tags, approvees);
        const hasBundle = bundles !== undefined && bundles !== null && bundles.length > 0;
        const hasAddresses = addresses !== undefined && addresses !== null && addresses.length > 0;
        const hasTags = tags !== undefined && tags !== null && tags.length > 0;
        const hasApprovees = approvees !== undefined && approvees !== null && approvees.length > 0;
        if (hasBundle && !arrayHelper_1.ArrayHelper.isTyped(bundles, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The bundles must be an array of type Hash");
        }
        if (hasAddresses && !arrayHelper_1.ArrayHelper.isTyped(addresses, address_1.Address)) {
            throw new businessError_1.BusinessError("The addresses must be an array of type Address");
        }
        if (hasTags && !arrayHelper_1.ArrayHelper.isTyped(tags, tag_1.Tag)) {
            throw new businessError_1.BusinessError("The tags must be an array of type Tag");
        }
        if (hasApprovees && !arrayHelper_1.ArrayHelper.isTyped(approvees, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The approvees must be an array of type Hash");
        }
        if (!hasBundle && !hasAddresses && !hasTags && !hasApprovees) {
            throw new businessError_1.BusinessError("You must provide bundles, addresses, tags or approvees");
        }
        const request = {
            bundles: hasBundle ? bundles.map(bundle => bundle.toTrytes().toString()) : undefined,
            addresses: hasAddresses ? addresses.map(address => address.toTrytes().toString()) : undefined,
            tags: hasTags ? tags.map(tag => tag.toTrytes().toString()) : undefined,
            approvees: hasApprovees ? approvees.map(approvee => approvee.toTrytes().toString()) : undefined
        };
        const response = await this._apiClient.findTransactions(request);
        if (response && response.hashes) {
            const resp = response.hashes.map(hash => hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(hash)));
            this._logger.info("<=== TransactionClient::findTransactions", resp);
            return resp;
        }
        else {
            this._logger.info("<=== TransactionClient::findTransactions", []);
            return [];
        }
    }
    /**
     * Get the transaction details of specific transactions.
     * @param transactionHashes The hashes to get the transactions for.
     * @returns Promise which resolves to the list of transactions or rejects with error.
     */
    async getTransactionsObjects(transactionHashes) {
        this._logger.info("===> TransactionClient::getTransactionsObjects", transactionHashes);
        if (!arrayHelper_1.ArrayHelper.isTyped(transactionHashes, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The transactionHashes must be an array of type Hash");
        }
        const request = {
            hashes: transactionHashes.map(hash => hash.toTrytes().toString())
        };
        const response = await this._apiClient.getTrytes(request);
        if (response && response.trytes) {
            const resp = response.trytes.map(trytes => transaction_1.Transaction.fromTrytes(trytes_1.Trytes.fromString(trytes)));
            this._logger.info("<=== TransactionClient::getTransactionsObjects", resp);
            return resp;
        }
        else {
            this._logger.info("<=== TransactionClient::getTransactionsObjects", []);
            return [];
        }
    }
    /**
     * Get the inclusion states of a list of transaction hashes.
     * @param transactionHashes The hashes to get the inclusion states for.
     * @returns Promise which resolves to the list of inclusion states or rejects with error.
     */
    async getLatestInclusion(transactionHashes) {
        this._logger.info("===> TransactionClient::transactionHashes");
        if (!arrayHelper_1.ArrayHelper.isTyped(transactionHashes, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The transactionHashes must be an array of type Hash");
        }
        const nodeInfo = await this._apiClient.getNodeInfo();
        if (nodeInfo && numberHelper_1.NumberHelper.isInteger(nodeInfo.latestSolidSubtangleMilestone)) {
            const request = {
                transactions: transactionHashes.map(hash => hash.toTrytes().toString()),
                tips: [nodeInfo.latestSolidSubtangleMilestone]
            };
            const response = await this._apiClient.getInclusionStates(request);
            if (response && response.states) {
                this._logger.info("<=== TransactionClient::transactionHashes", response.states);
                return response.states;
            }
            else {
                this._logger.info("<=== TransactionClient::transactionHashes", []);
                return [];
            }
        }
        else {
            throw new businessError_1.BusinessError("The node could not provide the latestSolidSubtangleMilestone");
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
    async getNewAddress(seed, startIndex, endIndex, includeChecksum, security) {
        this._logger.info("===> TransactionClient::getNewAddress", seed, startIndex, endIndex, includeChecksum, security);
        if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The seed must be of type Hash");
        }
        if (!objectHelper_1.ObjectHelper.isEmpty(startIndex) && !objectHelper_1.ObjectHelper.isType(startIndex, Number)) {
            throw new businessError_1.BusinessError("The startIndex must be an integer", { startIndex });
        }
        const localStartIndex = startIndex || 0;
        if (localStartIndex < 0) {
            throw new businessError_1.BusinessError("The startIndex must be >= 0", { localStartIndex });
        }
        const hasEndIndex = numberHelper_1.NumberHelper.isInteger(endIndex);
        const localSecurity = security || addressSecurity_1.AddressSecurity.medium;
        let addresses;
        if (hasEndIndex) {
            if (!numberHelper_1.NumberHelper.isInteger(endIndex) || endIndex < 0) {
                throw new businessError_1.BusinessError("The endIndex must be a number >= 0", { endIndex });
            }
            const total = endIndex - startIndex + 1;
            if (total <= 0 || total > TransactionClient.MAX_INPUTS) {
                throw new businessError_1.BusinessError(`The total must be > 0 and <= ${TransactionClient.MAX_INPUTS}`, { total });
            }
            addresses = await this.getAddressesByIndex(seed, startIndex, endIndex, includeChecksum, localSecurity);
        }
        else {
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
    async getAddressesByIndex(seed, startIndex, endIndex, includeChecksum, security) {
        this._logger.info("===> TransactionClient::getAddressesByIndex", seed, startIndex, endIndex, includeChecksum, security);
        if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The seed must be of type Hash");
        }
        if (!numberHelper_1.NumberHelper.isInteger(startIndex) || startIndex < 0) {
            throw new businessError_1.BusinessError("The startIndex must be a number >= 0", { startIndex });
        }
        if (!numberHelper_1.NumberHelper.isInteger(endIndex) || endIndex < 0) {
            throw new businessError_1.BusinessError("The endIndex must be a number >= 0", { endIndex });
        }
        const total = endIndex - startIndex + 1;
        if (total <= 0 || total > TransactionClient.MAX_INPUTS) {
            throw new businessError_1.BusinessError(`The total must be > 0 and <= ${TransactionClient.MAX_INPUTS}`, { total });
        }
        if (!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3) {
            throw new businessError_1.BusinessError("The security must be between 1 and 3", { security });
        }
        const addresses = [];
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
    async getAddressesToUnused(seed, startIndex, includeChecksum, security) {
        this._logger.info("===> TransactionClient::getAddressesToUnused", seed, startIndex, includeChecksum, security);
        if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The seed must be of type Hash");
        }
        if (!numberHelper_1.NumberHelper.isInteger(startIndex) || startIndex < 0) {
            throw new businessError_1.BusinessError("The startIndex must be a number >= 0", { startIndex });
        }
        if (!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3) {
            throw new businessError_1.BusinessError("The security must be between 1 and 3", { security });
        }
        let localStartIndex = startIndex;
        let isUsed;
        const addresses = [];
        do {
            const address = this.generateAddress(seed, localStartIndex++, security, includeChecksum);
            addresses.push(address);
            const addressNoChecksum = address.toTrytes().toString();
            const spentFromRequest = {
                addresses: [addressNoChecksum]
            };
            const spentFromResponse = await this._apiClient.wereAddressesSpentFrom(spentFromRequest);
            isUsed = spentFromResponse && spentFromResponse.states && spentFromResponse.states.length > 0 ? spentFromResponse.states[0] : false;
            if (!isUsed) {
                const findTransactionsRequest = {
                    addresses: [addressNoChecksum]
                };
                const findResponse = await this._apiClient.findTransactions(findTransactionsRequest);
                isUsed = findResponse && findResponse.hashes && findResponse.hashes.length > 0;
            }
        } while (isUsed);
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
    async getInputs(seed, startIndex, endIndex, security, totalRequired) {
        this._logger.info("===> TransactionClient::getInputs", seed, startIndex, endIndex, security, totalRequired);
        if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The seed must be of type Hash");
        }
        if (!numberHelper_1.NumberHelper.isInteger(startIndex) || startIndex < 0) {
            throw new businessError_1.BusinessError("The startIndex must be a number >= 0", { startIndex });
        }
        if (!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3) {
            throw new businessError_1.BusinessError("The security must be between 1 and 3", { security });
        }
        if (!numberHelper_1.NumberHelper.isInteger(totalRequired) || totalRequired < 0) {
            throw new businessError_1.BusinessError("The totalRequired must be >= 0", { totalRequired });
        }
        const addresses = await this.getNewAddress(seed, startIndex, endIndex, false, security);
        const request = {
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
                    inputs.push(input_1.Input.fromParams(addresses[i], security, startIndex + i, balance));
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
            throw new businessError_1.BusinessError("Not enough combined balance in the addresses to satisfy the total required", { totalRequired, totalBalance });
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
    async prepareTransfers(seed, transfers, transferOptions) {
        this._logger.info("===> TransactionClient::prepareTransfers", seed, transfers, transferOptions);
        if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The seed must be of type Hash");
        }
        if (!arrayHelper_1.ArrayHelper.isTyped(transfers, transfer_1.Transfer)) {
            throw new businessError_1.BusinessError("The transfers must be an array of Transfer objects");
        }
        const localTransferOptions = transferOptions || {};
        localTransferOptions.security = localTransferOptions.security || addressSecurity_1.AddressSecurity.medium;
        const emptyTrytes = trytes_1.Trytes.fromString("");
        const addHMAC = !objectHelper_1.ObjectHelper.isEmpty(localTransferOptions.hmacKey);
        let addedHMAC = false;
        // If message or tag is not supplied, provide it
        transfers.forEach(transfer => {
            transfer.message = transfer.message ? transfer.message : emptyTrytes;
            transfer.tag = transfer.tag || tag_1.Tag.EMPTY;
            if (addHMAC && transfer.value > 0) {
                // tslint:disable:restrict-plus-operands false positive
                transfer.message = trytes_1.Trytes.fromString(TransactionClient.NULL_HASH_TRYTES + transfer.message.toString());
                addedHMAC = true;
            }
        });
        // Create a new bundle
        const prepared = bundleHelper_1.BundleHelper.prepareBundle(this._timeService, transfers);
        const bundle = prepared.bundle;
        const lastTag = prepared.lastTag;
        const totalValue = prepared.totalValue;
        const signatureMessageFragments = prepared.signatureMessageFragments;
        // Get inputs if we are sending tokens
        if (totalValue > 0) {
            //  Case 1: user provided inputs
            //  Validate the inputs by calling getBalances
            if (localTransferOptions.inputs) {
                const request = {
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
                    throw new businessError_1.BusinessError("Not enough balance in the input addresses to satisfy the total for the transfer");
                }
                await this.addRemainder(seed, bundle, localTransferOptions, confirmedInputs, signatureMessageFragments, totalValue, lastTag, addedHMAC);
            }
            else {
                // No inputs supplied so we need to get some
                const inputsResponse = await this.getInputs(seed, 0, undefined, localTransferOptions.security, totalValue);
                await this.addRemainder(seed, bundle, localTransferOptions, inputsResponse.inputs, signatureMessageFragments, totalValue, lastTag, addedHMAC);
            }
        }
        else {
            // If no input required, don't sign and simply finalize the bundle
            bundleHelper_1.BundleHelper.finalizeBundle(bundle);
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
    async attachToTangle(bundle, depth, minWeightMagnitude, reference) {
        this._logger.info("===> TransactionClient::attachToTangle", bundle, depth, minWeightMagnitude, reference);
        if (!objectHelper_1.ObjectHelper.isType(bundle, bundle_1.Bundle)) {
            throw new businessError_1.BusinessError("The bundle must be an array of type Bundle");
        }
        if (!arrayHelper_1.ArrayHelper.isTyped(bundle.transactions, transaction_1.Transaction)) {
            throw new businessError_1.BusinessError("The bundle.transactions must be an array of type Transaction");
        }
        if (!numberHelper_1.NumberHelper.isInteger(depth) || depth <= 0) {
            throw new businessError_1.BusinessError("The depth must be a number > 0", { depth });
        }
        if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new businessError_1.BusinessError("The minWeightMagnitude must be a number > 0", { minWeightMagnitude });
        }
        const transactionsToApproveRequest = {
            depth,
            reference: reference ? reference.toTrytes().toString() : undefined
        };
        const transactionsToApprove = await this._apiClient.getTransactionsToApprove(transactionsToApproveRequest);
        const allTrytes = await this._proofOfWork.pow(hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(transactionsToApprove.trunkTransaction)), hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(transactionsToApprove.branchTransaction)), bundle.transactions.map(t => t.toTrytes()), minWeightMagnitude);
        const powTransactions = allTrytes.map(returnTrytes => transaction_1.Transaction.fromTrytes(returnTrytes));
        const newBundle = new bundle_1.Bundle();
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
    async sendTransactions(bundle, depth, minWeightMagnitude, reference) {
        this._logger.info("===> TransactionClient::sendTransactions", bundle, depth, minWeightMagnitude, reference);
        const attachedTransactionsBundle = await this.attachToTangle(bundle, depth, minWeightMagnitude, reference);
        const storeTransactionsRequest = {
            trytes: attachedTransactionsBundle.transactions.map(t => t.toTrytes().toString())
        };
        await this._apiClient.storeTransactions(storeTransactionsRequest);
        const broadcastTransactionsRequest = {
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
    async sendTransfer(seed, depth, minWeightMagnitude, transfers, transferOptions, reference) {
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
    async isPromotable(transactionTail) {
        this._logger.info("===> TransactionClient::isPromotable", transactionTail);
        if (!objectHelper_1.ObjectHelper.isType(transactionTail, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The transactionTail must be an object of type Hash");
        }
        const checkConsistencyRequest = {
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
    async isReattachable(addresses) {
        this._logger.info("===> TransactionClient::isReattachable", addresses);
        if (!arrayHelper_1.ArrayHelper.isTyped(addresses, address_1.Address)) {
            throw new businessError_1.BusinessError("The addresses must be an object of type Address");
        }
        const addrsTxsMap = {};
        for (let i = 0; i < addresses.length; i++) {
            const addressString = addresses[i].toTrytes().toString();
            addrsTxsMap[addressString] = [];
        }
        const transactions = await this.findTransactionObjects(undefined, addresses);
        const valueTransactions = [];
        transactions.forEach((transaction) => {
            if (transaction.value.toNumber() < 0) {
                const txAddress = transaction.address;
                const txHash = transactionHelper_1.TransactionHelper.hash(transaction);
                addrsTxsMap[txAddress.toTrytes().toString()].push(txHash);
                valueTransactions.push(txHash);
            }
        });
        let results;
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
        }
        else {
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
    async promoteTransaction(transactionTail, depth, minWeightMagnitude, transfers, promoteOptions) {
        this._logger.info("===> TransactionClient::promoteTransaction", transactionTail, depth, minWeightMagnitude, transfers, promoteOptions);
        if (!objectHelper_1.ObjectHelper.isType(transactionTail, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The transactionTail must be an object of type Hash");
        }
        if (!numberHelper_1.NumberHelper.isInteger(depth) || depth <= 0) {
            throw new businessError_1.BusinessError("The depth must be a number > 0", { depth });
        }
        if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new businessError_1.BusinessError("The minWeightMagnitude must be a number > 0", { minWeightMagnitude });
        }
        if (!arrayHelper_1.ArrayHelper.isTyped(transfers, transfer_1.Transfer)) {
            throw new businessError_1.BusinessError("The transfers must an array of Transfer objects");
        }
        const localPromoteOptions = promoteOptions || {};
        if (objectHelper_1.ObjectHelper.isEmpty(localPromoteOptions.interrupt)) {
            localPromoteOptions.interrupt = false;
        }
        if (localPromoteOptions.interrupt === false || (typeof localPromoteOptions.interrupt === "function" && !localPromoteOptions.interrupt())) {
            const isPromotable = await this.isPromotable(transactionTail);
            if (isPromotable) {
                const sendTransferResponse = await this.sendTransfer(hash_1.Hash.fromTrytes(transfers[0].address.toTrytes()), depth, minWeightMagnitude, transfers, undefined, transactionTail);
                if (numberHelper_1.NumberHelper.isInteger(localPromoteOptions.delay)) {
                    return this._backgroundTaskService.create(async () => this.promoteTransaction(transactionTail, depth, minWeightMagnitude, transfers, localPromoteOptions), localPromoteOptions.delay);
                }
                else {
                    this._logger.info("<=== TransactionClient::promoteTransaction", sendTransferResponse);
                    return sendTransferResponse;
                }
            }
            else {
                throw new businessError_1.BusinessError("Transaction is not promotable");
            }
        }
        else {
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
    async getBundle(transactionHash) {
        this._logger.info("===> TransactionClient::getBundle", transactionHash);
        if (!objectHelper_1.ObjectHelper.isType(transactionHash, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The transactionHash must be an object of type Hash");
        }
        const transactions = await this.traverseBundle(transactionHash);
        const bundle = new bundle_1.Bundle();
        bundle.transactions = transactions;
        const isValid = bundleHelper_1.BundleHelper.isValid(bundle);
        if (!isValid) {
            throw new businessError_1.BusinessError("Invalid bundle provided");
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
    async traverseBundle(trunkTransaction, bundleHash) {
        this._logger.info("===> TransactionClient::traverseBundle", trunkTransaction, bundleHash);
        if (!objectHelper_1.ObjectHelper.isType(trunkTransaction, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The trunkTransaction must be an object of type Hash");
        }
        const allBundleTransactions = [];
        let newTrunkTransaction = trunkTransaction;
        let newBundleHash = bundleHash;
        do {
            const getTrytesRequest = {
                hashes: [newTrunkTransaction.toTrytes().toString()]
            };
            const getTrytesResponse = await this._apiClient.getTrytes(getTrytesRequest);
            const trytes = !objectHelper_1.ObjectHelper.isEmpty(getTrytesResponse) &&
                !objectHelper_1.ObjectHelper.isEmpty(getTrytesResponse.trytes) &&
                getTrytesResponse.trytes.length > 0 ? getTrytesResponse.trytes[0] : undefined;
            if (objectHelper_1.ObjectHelper.isEmpty(trytes)) {
                throw new businessError_1.BusinessError("Bundle transactions not visible");
            }
            else {
                const transactionObject = transaction_1.Transaction.fromTrytes(trytes_1.Trytes.fromString(trytes));
                // If first transaction to search is not a tail, return error
                const hasHash = !objectHelper_1.ObjectHelper.isEmpty(newBundleHash);
                if (!hasHash && transactionObject.currentIndex.toNumber() !== 0) {
                    throw new businessError_1.BusinessError("Invalid tail transaction supplied");
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
    async reattachBundle(transactionHash, depth, minWeightMagnitude) {
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
    async rebroadcastBundle(transactionHash) {
        this._logger.info("===> TransactionClient::rebroadcastBundle", transactionHash);
        const bundle = await this.getBundle(transactionHash);
        const broadcastTransactionsRequest = {
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
    async findTransactionObjects(bundles, addresses, tags, approvees) {
        this._logger.info("===> TransactionClient::findTransactionObjects", bundles, addresses, tags, approvees);
        const transactions = await this.findTransactions(bundles, addresses, tags, approvees);
        if (transactions.length > 0) {
            const resp = await this.getTransactionsObjects(transactions);
            this._logger.info("<=== TransactionClient::findTransactionObjects", resp);
            return resp;
        }
        else {
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
    async getTransfers(seed, startIndex, endIndex, security, inclusionStates) {
        this._logger.info("===> TransactionClient::getTransfers", seed, startIndex, endIndex, security, inclusionStates);
        if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The seed must be of type Hash");
        }
        let localStartIndex = startIndex;
        if (!numberHelper_1.NumberHelper.isInteger(localStartIndex)) {
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
    async getAccountData(seed, startIndex, endIndex, security) {
        this._logger.info("===> TransactionClient::getAccountData", seed, startIndex, endIndex, security);
        if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The seed must be of type Hash");
        }
        let localStartIndex = startIndex;
        if (!numberHelper_1.NumberHelper.isInteger(localStartIndex)) {
            localStartIndex = 0;
        }
        const addresses = await this.getNewAddress(seed, localStartIndex, endIndex, false, security || addressSecurity_1.AddressSecurity.medium);
        const bundles = await this.bundlesFromAddresses(addresses, true);
        const accountData = {
            latestAddress: addresses.pop(),
            addresses,
            transfers: bundles,
            inputs: [],
            balance: 0
        };
        const balanceRequest = {
            addresses: accountData.addresses.map(add => add.toTrytes().toString()),
            threshold: 100
        };
        const balanceResponse = await this._apiClient.getBalances(balanceRequest);
        for (let i = 0; i < balanceResponse.balances.length; i++) {
            const balance = parseInt(balanceResponse.balances[i], 10);
            if (balance > 0) {
                accountData.inputs.push(input_1.Input.fromParams(accountData.addresses[i], security || addressSecurity_1.AddressSecurity.medium, localStartIndex + i, balance));
                accountData.balance += balance;
            }
        }
        this._logger.info("<=== TransactionClient::getAccountData", accountData);
        return accountData;
    }
    /* @internal */
    async bundlesFromAddresses(addresses, inclusionStates) {
        const transactionObjects = await this.findTransactionObjects(undefined, addresses, undefined, undefined);
        // set of tail transactions
        const tailTransactions = new Set();
        const nonTailBundleHashes = new Set();
        transactionObjects.forEach((transaction) => {
            // Sort tail and nonTails
            if (transaction.currentIndex.toNumber() === 0) {
                tailTransactions.add(transactionHelper_1.TransactionHelper.hash(transaction).toTrytes().toString());
            }
            else {
                nonTailBundleHashes.add(transaction.bundle.toTrytes().toString());
            }
        });
        if (nonTailBundleHashes.size > 0) {
            const nonTailBundleTransactions = await this.findTransactionObjects(Array.from(nonTailBundleHashes).map(hash => hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(hash))));
            nonTailBundleTransactions.forEach((transaction) => {
                if (transaction.currentIndex.toNumber() === 0) {
                    tailTransactions.add(transactionHelper_1.TransactionHelper.hash(transaction).toTrytes().toString());
                }
            });
        }
        const finalBundles = [];
        const tailTxArray = Array.from(tailTransactions);
        // If inclusionStates, get the confirmation status
        // of the tail transactions, and thus the bundles
        let tailTxStates;
        if (inclusionStates) {
            tailTxStates = await this.getLatestInclusion(tailTxArray.map(tail => hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(tail))));
        }
        // Map each tail transaction to the getBundle function
        // format the returned bundles and add inclusion states if necessary
        for (let i = 0; i < tailTxArray.length; i++) {
            const bundle = await this.getBundle(hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(tailTxArray[i])));
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
    generateAddress(seed, index, security, includeChecksum) {
        const key = iss_1.ISS.key(seed, index, security);
        const digests = iss_1.ISS.digests(key);
        const addressTrits = iss_1.ISS.address(digests);
        let addressTrytesString = trits_1.Trits.fromArray(addressTrits).toTrytes().toString();
        if (includeChecksum) {
            addressTrytesString += addressHelper_1.AddressHelper.createChecksum(addressTrits, 9);
        }
        return address_1.Address.fromTrytes(trytes_1.Trytes.fromString(addressTrytesString));
    }
    /* @internal */
    async addRemainder(seed, bundle, transferOptions, inputs, signatureMessageFragments, totalValue, tag, addedHMAC) {
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
                if (remainder > 0 && !objectHelper_1.ObjectHelper.isEmpty(transferOptions) && objectHelper_1.ObjectHelper.isType(transferOptions.remainderAddress, address_1.Address)) {
                    // Remainder bundle entry
                    bundle.addTransactions(1, transferOptions.remainderAddress, remainder, tag, timestamp);
                    // Final function for signing inputs
                    bundleHelper_1.BundleHelper.signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, addedHMAC);
                }
                else if (remainder > 0) {
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
                    bundleHelper_1.BundleHelper.signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, addedHMAC);
                }
                else {
                    // If there is no remainder, do not add transaction to bundle
                    // simply sign and return
                    bundleHelper_1.BundleHelper.signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, addedHMAC);
                }
            }
            else {
                // If multiple inputs provided, subtract the totalTransferValue by
                // the inputs balance
                totalTransferValue -= inputs[i].balance;
            }
        }
    }
}
/* @internal */
TransactionClient.NULL_HASH_TRYTES = "9".repeat(243);
/* @internal */
TransactionClient.MAX_INPUTS = 500;
exports.TransactionClient = TransactionClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb25DbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFVQSwwRUFBdUU7QUFDdkUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUl6RSx3RUFBcUU7QUFDckUsK0ZBQTRGO0FBQzVGLDJFQUF3RTtBQUN4RSx5REFBc0Q7QUFDdEQsd0ZBQXFGO0FBRXJGLCtEQUE0RDtBQUM1RCwrRUFBNEU7QUFDNUUsNkRBQTBEO0FBQzFELHlEQUFzRDtBQUN0RCwyREFBd0Q7QUFFeEQsdURBQW9EO0FBQ3BELHVFQUFvRTtBQUNwRSxpRUFBOEQ7QUFDOUQsMkRBQXdEO0FBQ3hELDZEQUEwRDtBQUMxRCwwREFBdUQ7QUFDdkQsNERBQXlEO0FBQ3pELDBEQUF1RDtBQUt2RCxxREFBa0Q7QUFFbEQ7O0dBRUc7QUFDSDtJQXNCSTs7Ozs7OztPQU9HO0lBQ0gsWUFBWSxTQUFxQixFQUNyQixXQUEwQixFQUMxQixXQUEwQixFQUMxQixxQkFBOEMsRUFDOUMsTUFBZ0I7UUFDeEIsSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNqQyxNQUFNLElBQUksNkJBQWEsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLElBQUksSUFBSSwrQkFBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxJQUFJLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxxQkFBcUIsSUFBSSxJQUFJLDZDQUFxQixFQUFFLENBQUM7UUFDbkYsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUksSUFBSSx1QkFBVSxFQUFFLENBQUM7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