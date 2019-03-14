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
        this._logger.info("<=== TransactionClient::getTransactionsInProgress", []);
        return [];
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
        this._logger.info("<=== TransactionClient::findTransactions", []);
        return [];
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
        this._logger.info("<=== TransactionClient::getTransactionsObjects", []);
        return [];
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
            this._logger.info("<=== TransactionClient::transactionHashes", []);
            return [];
        }
        throw new businessError_1.BusinessError("The node could not provide the latestSolidSubtangleMilestone");
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
                this._logger.info("<=== TransactionClient::promoteTransaction", sendTransferResponse);
                return sendTransferResponse;
            }
            throw new businessError_1.BusinessError("Transaction is not promotable");
        }
        this._logger.info("<=== TransactionClient::promoteTransaction", undefined);
        return undefined;
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
        this._logger.info("<=== TransactionClient::findTransactionObjects", []);
        return [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb25DbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFVQSwwRUFBdUU7QUFDdkUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUl6RSx3RUFBcUU7QUFDckUsK0ZBQTRGO0FBQzVGLDJFQUF3RTtBQUN4RSx5REFBc0Q7QUFDdEQsd0ZBQXFGO0FBRXJGLCtEQUE0RDtBQUM1RCwrRUFBNEU7QUFDNUUsNkRBQTBEO0FBQzFELHlEQUFzRDtBQUN0RCwyREFBd0Q7QUFFeEQsdURBQW9EO0FBQ3BELHVFQUFvRTtBQUNwRSxpRUFBOEQ7QUFDOUQsMkRBQXdEO0FBQ3hELDZEQUEwRDtBQUMxRCwwREFBdUQ7QUFDdkQsNERBQXlEO0FBQ3pELDBEQUF1RDtBQUt2RCxxREFBa0Q7QUFFbEQ7O0dBRUc7QUFDSCxNQUFhLGlCQUFpQjtJQXNCMUI7Ozs7Ozs7T0FPRztJQUNILFlBQ0ksU0FBcUIsRUFDckIsV0FBMEIsRUFDMUIsV0FBMEIsRUFDMUIscUJBQThDLEVBQzlDLE1BQWdCO1FBQ2hCLElBQUksMkJBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDakMsTUFBTSxJQUFJLDZCQUFhLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUM5RDtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxJQUFJLElBQUksK0JBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsSUFBSSxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcscUJBQXFCLElBQUksSUFBSSw2Q0FBcUIsRUFBRSxDQUFDO1FBQ25GLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxJQUFJLElBQUksdUJB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