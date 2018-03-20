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
        if (!numberHelper_1.NumberHelper.isInteger(endIndex) || endIndex <= 0) {
            throw new businessError_1.BusinessError("The endIndex must be a number > 0", { endIndex });
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
     * @param transferOptions
     *      @property inputs List of inputs used for funding the transfer.
     *      @property security Security level to be used for the private key / addresses.
     *      @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to.
     *      @property hmacKey Hmac key to sign the bundle.
     *      @property reference The transaction to reference.
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
     *      @property inputs List of inputs used for funding the transfer.
     *      @property security Security level to be used for the private key / addresses.
     *      @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to.
     *      @property hmacKey Hmac key to sign the bundle.
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
     *      @property delay Delay between promotion transfers
     *      @property interrupt Flag or method to terminate promotion.
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
     * @param addresses The addresses to get the transaction objects for.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb25DbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFVQSwwRUFBdUU7QUFDdkUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUl6RSx3RUFBcUU7QUFDckUsK0ZBQTRGO0FBQzVGLDJFQUF3RTtBQUN4RSx5REFBc0Q7QUFDdEQsd0ZBQXFGO0FBRXJGLCtEQUE0RDtBQUM1RCwrRUFBNEU7QUFDNUUsNkRBQTBEO0FBQzFELHlEQUFzRDtBQUN0RCwyREFBd0Q7QUFFeEQsdURBQW9EO0FBQ3BELHVFQUFvRTtBQUNwRSxpRUFBOEQ7QUFDOUQsMkRBQXdEO0FBQ3hELDZEQUEwRDtBQUMxRCwwREFBdUQ7QUFDdkQsNERBQXlEO0FBQ3pELDBEQUF1RDtBQUt2RCxxREFBa0Q7QUFFbEQ7O0dBRUc7QUFDSDtJQXNCSTs7Ozs7OztPQU9HO0lBQ0gsWUFBWSxTQUFxQixFQUNyQixXQUEwQixFQUMxQixXQUEwQixFQUMxQixxQkFBOEMsRUFDOUMsTUFBZ0I7UUFDeEIsRUFBRSxDQUFDLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sSUFBSSw2QkFBYSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxJQUFJLElBQUksK0JBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsSUFBSSxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcscUJBQXFCLElBQUksSUFBSSw2Q0FBcUIsRUFBRSxDQUFDO1FBQ25GLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxJ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