Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("@iota-pico/core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const backgroundTaskService_1 = require("@iota-pico/core/dist/services/backgroundTaskService");
const timeService_1 = require("@iota-pico/core/dist/services/timeService");
const address_1 = require("@iota-pico/data/dist/data/address");
const addressSecurity_1 = require("@iota-pico/data/dist/data/addressSecurity");
const bundle_1 = require("@iota-pico/data/dist/data/bundle");
const hash_1 = require("@iota-pico/data/dist/data/hash");
const input_1 = require("@iota-pico/data/dist/data/input");
const tag_1 = require("@iota-pico/data/dist/data/tag");
const transaction_1 = require("@iota-pico/data/dist/data/transaction");
const transfer_1 = require("@iota-pico/data/dist/data/transfer");
const trits_1 = require("@iota-pico/data/dist/data/trits");
const tryteNumber_1 = require("@iota-pico/data/dist/data/tryteNumber");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const businessError_1 = require("../error/businessError");
const bundleHelper_1 = require("../helpers/bundleHelper");
const signing_1 = require("../sign/signing");
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
     */
    constructor(apiClient, proofOfWork, timeService = new timeService_1.TimeService(), backgroundTaskService = new backgroundTaskService_1.BackgroundTaskService()) {
        this._apiClient = apiClient;
        this._proofOfWork = proofOfWork;
        this._timeService = timeService;
        this._backgroundTaskService = backgroundTaskService;
    }
    /**
     * Initialize the client.
     */
    async initialize() {
        if (this._proofOfWork) {
            await this._proofOfWork.initialize();
        }
    }
    /**
     * Returns the list of transaction in progress.
     * @returns Promise which resolves to a list of hashes or rejects with error.
     */
    async getTransactionsInProgress() {
        const response = await this._apiClient.getTips();
        if (response && response.hashes) {
            return response.hashes.map(hash => hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(hash)));
        }
        else {
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
            return response.hashes.map(hash => hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(hash)));
        }
        else {
            return [];
        }
    }
    /**
     * Get the transaction details of specific transactions.
     * @returns Promise which resolves to the list of transactions or rejects with error.
     */
    async getTransactionsObjects(transactionHashes) {
        if (!arrayHelper_1.ArrayHelper.isTyped(transactionHashes, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The transactionHashes must be an array of type Hash");
        }
        const request = {
            hashes: transactionHashes.map(hash => hash.toTrytes().toString())
        };
        const response = await this._apiClient.getTrytes(request);
        if (response && response.trytes) {
            return response.trytes.map(trytes => transaction_1.Transaction.fromTrytes(trytes_1.Trytes.fromString(trytes)));
        }
        else {
            return [];
        }
    }
    /**
     * Get the inclusion states of a list of transaction hashes.
     * @returns Promise which resolves to the list of inclusion states or rejects with error.
     */
    async getLatestInclusion(transactionHashes) {
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
                return response.states;
            }
            else {
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
        if (totalRequired > 0 && totalBalance < totalRequired) {
            throw new businessError_1.BusinessError("Not enough combined balance in the addresses to satisfy the total required", { totalRequired, totalBalance });
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
    async prepareTransfers(seed, transfers, transferOptions) {
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
        if (totalValue) {
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
        let powTransactions;
        if (this._proofOfWork) {
            if (this._proofOfWork.performsSingle()) {
                powTransactions = await this.proofOfWorkIterate(hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(transactionsToApprove.trunkTransaction)), hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(transactionsToApprove.branchTransaction)), bundle.transactions, minWeightMagnitude);
            }
            else {
                const allTrytes = await this._proofOfWork.pow(hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(transactionsToApprove.trunkTransaction)), hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(transactionsToApprove.branchTransaction)), bundle.transactions.map(t => t.toTrytes()), minWeightMagnitude);
                powTransactions = allTrytes.map(returnTrytes => transaction_1.Transaction.fromTrytes(returnTrytes));
            }
        }
        else {
            const attachToTangleRequest = {
                trunkTransaction: transactionsToApprove.trunkTransaction,
                branchTransaction: transactionsToApprove.branchTransaction,
                minWeightMagnitude: minWeightMagnitude,
                trytes: bundle.transactions.map(t => t.toTrytes().toString())
            };
            const attachToTangleResponse = await this._apiClient.attachToTangle(attachToTangleRequest);
            powTransactions = attachToTangleResponse.trytes.map(returnTrytes => transaction_1.Transaction.fromTrytes(trytes_1.Trytes.fromString(returnTrytes)));
        }
        const newBundle = new bundle_1.Bundle();
        newBundle.transactions = powTransactions;
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
        const attachedTransactionsBundle = await this.attachToTangle(bundle, depth, minWeightMagnitude, reference);
        const storeTransactionsRequest = {
            trytes: attachedTransactionsBundle.transactions.map(t => t.toTrytes().toString())
        };
        await this._apiClient.storeTransactions(storeTransactionsRequest);
        const broadcastTransactionsRequest = {
            trytes: storeTransactionsRequest.trytes
        };
        await this._apiClient.broadcastTransactions(broadcastTransactionsRequest);
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
        const transferTrytes = await this.prepareTransfers(seed, transfers, transferOptions);
        return this.sendTransactions(transferTrytes, depth, minWeightMagnitude, reference);
    }
    /**
     * Find out if a transaction is promotable.
     * @param transactionTail The hash of the transaction to be promoted.
     * @returns Promise which resolves to true if the transaction is promotable rejects with an error.
     */
    async isPromotable(transactionTail) {
        if (!objectHelper_1.ObjectHelper.isType(transactionTail, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The transactionTail must be an object of type Hash");
        }
        const checkConsistencyRequest = {
            tails: [transactionTail.toTrytes().toString()]
        };
        const checkConsistencyResponse = await this._apiClient.checkConsistency(checkConsistencyRequest);
        return checkConsistencyResponse.state;
    }
    /**
     * Determines whether you should replay a transaction or make a new one (either with the same input, or a different one).
     * @param addresses Input address you want to have tested.
     * @returns Promise which resolves to true if the addresses are reattachable or rejects with an error.
     */
    async isReattachable(addresses) {
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
                const txHash = bundleHelper_1.BundleHelper.transactionHash(transaction);
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
                    return sendTransferResponse;
                }
            }
            else {
                throw new businessError_1.BusinessError("Transaction is not promotable");
            }
        }
        else {
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
        const bundle = await this.getBundle(transactionHash);
        bundle.transactions = bundle.transactions.reverse();
        return this.sendTransactions(bundle, depth, minWeightMagnitude);
    }
    /**
     * Wrapper which gets a bundle and then broadcasts it.
     * @param transactionHash The hash of the transaction to be re-broadcast.
     * @returns Promise which resolves or rejects with an error.
     */
    async rebroadcastBundle(transactionHash) {
        const bundle = await this.getBundle(transactionHash);
        const broadcastTransactionsRequest = {
            trytes: bundle.transactions.reverse().map(bt => bt.toTrytes().toString())
        };
        await this._apiClient.broadcastTransactions(broadcastTransactionsRequest);
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
        const transactions = await this.findTransactions(bundles, addresses, tags, approvees);
        if (transactions.length > 0) {
            return this.getTransactionsObjects(transactions);
        }
        else {
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
        if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The seed must be of type Hash");
        }
        let localStartIndex = startIndex;
        if (!numberHelper_1.NumberHelper.isInteger(localStartIndex)) {
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
    async getAccountData(seed, startIndex, endIndex, security) {
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
                tailTransactions.add(bundleHelper_1.BundleHelper.transactionHash(transaction).toTrytes().toString());
            }
            else {
                nonTailBundleHashes.add(transaction.bundle.toTrytes().toString());
            }
        });
        if (nonTailBundleHashes.size > 0) {
            const nonTailBundleTransactions = await this.findTransactionObjects(Array.from(nonTailBundleHashes).map(hash => hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(hash))));
            nonTailBundleTransactions.forEach((transaction) => {
                if (transaction.currentIndex.toNumber() === 0) {
                    tailTransactions.add(bundleHelper_1.BundleHelper.transactionHash(transaction).toTrytes().toString());
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
        const key = signing_1.Signing.key(seed, index, security);
        const digests = signing_1.Signing.digests(key);
        const addressTrits = signing_1.Signing.address(digests);
        let addressTrytesString = trits_1.Trits.fromArray(addressTrits).toTrytes().toString();
        if (includeChecksum) {
            addressTrytesString += signing_1.Signing.createChecksum(addressTrits, 9);
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
    async proofOfWorkIterate(trunkTransaction, branchTransaction, transactions, minWeightMagnitude) {
        const finalTransactions = [];
        let previousTransactionHash;
        for (let i = 0; i < transactions.length; i++) {
            // Start with last index transaction
            // Assign it the trunk / branch which the user has supplied
            // If there is a bundle, chain the bundle transactions via
            // trunkTransaction together
            transactions[i].attachmentTimestamp = tryteNumber_1.TryteNumber.fromNumber(this._timeService.msSinceEpoch());
            transactions[i].attachmentTimestampLowerBound = tryteNumber_1.TryteNumber.fromNumber(0);
            transactions[i].attachmentTimestampUpperBound = tryteNumber_1.TryteNumber.fromNumber(TransactionClient.MAX_TIMESTAMP_VALUE);
            // If this is the first transaction, to be processed
            // Make sure that it's the last in the bundle and then
            // assign it the supplied trunk and branch transactions
            if (objectHelper_1.ObjectHelper.isEmpty(previousTransactionHash)) {
                // Check if last transaction in the bundle
                if (transactions[i].lastIndex.toNumber() !== transactions[i].currentIndex.toNumber()) {
                    throw new businessError_1.BusinessError("Wrong bundle order. The bundle should be ordered in descending order from currentIndex");
                }
                transactions[i].trunkTransaction = trunkTransaction;
                transactions[i].branchTransaction = branchTransaction;
            }
            else {
                transactions[i].trunkTransaction = previousTransactionHash;
                transactions[i].branchTransaction = trunkTransaction;
            }
            const newTrytes = transactions[i].toTrytes();
            const returnedTrytes = await this._proofOfWork.pow(trunkTransaction, branchTransaction, [newTrytes], minWeightMagnitude);
            transactions[i].nonce = tag_1.Tag.fromTrytes(returnedTrytes[0].sub(transaction_1.Transaction.LENGTH - tag_1.Tag.LENGTH, tag_1.Tag.LENGTH));
            // Calculate the hash of the new transaction with nonce and use that as the previous hash for next entry
            const returnTransaction = transaction_1.Transaction.fromTrytes(returnedTrytes[0]);
            previousTransactionHash = bundleHelper_1.BundleHelper.transactionHash(returnTransaction);
            finalTransactions.push(returnTransaction);
        }
        // reverse the order so that it's ascending from currentIndex
        return Promise.resolve(finalTransactions.reverse());
    }
}
/* @internal */
TransactionClient.NULL_HASH_TRYTES = "9".repeat(243);
/* @internal */
TransactionClient.MAX_TIMESTAMP_VALUE = (Math.pow(3, 27) - 1) / 2;
/* @internal */
TransactionClient.MAX_INPUTS = 500;
exports.TransactionClient = TransactionClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb25DbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFXQSwwRUFBdUU7QUFDdkUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUd6RSwrRkFBNEY7QUFDNUYsMkVBQXdFO0FBRXhFLCtEQUE0RDtBQUM1RCwrRUFBNEU7QUFDNUUsNkRBQTBEO0FBQzFELHlEQUFzRDtBQUN0RCwyREFBd0Q7QUFFeEQsdURBQW9EO0FBQ3BELHVFQUFvRTtBQUNwRSxpRUFBOEQ7QUFDOUQsMkRBQXdEO0FBQ3hELHVFQUFvRTtBQUNwRSw2REFBMEQ7QUFDMUQsMERBQXVEO0FBQ3ZELDBEQUF1RDtBQUt2RCw2Q0FBMEM7QUFFMUM7O0dBRUc7QUFDSDtJQXNCSTs7Ozs7O09BTUc7SUFDSCxZQUFZLFNBQXFCLEVBQ3JCLFdBQTBCLEVBQzFCLGNBQTRCLElBQUkseUJBQVcsRUFBRSxFQUM3Qyx3QkFBZ0QsSUFBSSw2Q0FBcUIsRUFBRTtRQUNuRixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcscUJBQXFCLENBQUM7SUFDeEQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksS0FBSyxDQUFDLFVBQVU7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3pDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLHlCQUF5QjtRQUNsQyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxF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