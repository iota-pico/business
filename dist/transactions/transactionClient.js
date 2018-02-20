Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const address_1 = require("@iota-pico/data/dist/data/address");
const addressSecurity_1 = require("@iota-pico/data/dist/data/addressSecurity");
const bundle_1 = require("@iota-pico/data/dist/data/bundle");
const hash_1 = require("@iota-pico/data/dist/data/hash");
const input_1 = require("@iota-pico/data/dist/data/input");
const signatureFragment_1 = require("@iota-pico/data/dist/data/signatureFragment");
const tag_1 = require("@iota-pico/data/dist/data/tag");
const transaction_1 = require("@iota-pico/data/dist/data/transaction");
const trits_1 = require("@iota-pico/data/dist/data/trits");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const backgroundTaskService_1 = require("../services/backgroundTaskService");
const timeService_1 = require("../services/timeService");
const bundleSigning_1 = require("./bundleSigning");
const transactionSigning_1 = require("./transactionSigning");
/**
 * Default implementation of the ITransactionClient.
 */
class TransactionClient {
    /**
     * Create a new instance of the TransactionClient.
     * @param apiClient An API Client to communicate through.
     * @param timeService A class which can provide the time.
     * @param backgroundTaskService A class which can provide background tasks.
     */
    constructor(apiClient, timeService = new timeService_1.TimeService(), backgroundTaskService = new backgroundTaskService_1.BackgroundTaskService()) {
        this._apiClient = apiClient;
        this._timeService = timeService;
        this._backgroundTaskService = backgroundTaskService;
    }
    /**
     * Returns the list of transaction in progress.
     * @returns Promise which resolves to a list of hashes or rejects with error.
     */
    async getTransactionsInProgress() {
        const response = await this._apiClient.getTips();
        if (response && response.hashes) {
            return response.hashes.map(hash => hash_1.Hash.create(trytes_1.Trytes.create(hash)));
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
        if (!hasBundle && !hasAddresses && !hasTags && !hasApprovees) {
            throw new coreError_1.CoreError("Your must provide bundles, addresses, tags or approvees");
        }
        const request = {
            bundles: hasBundle ? bundles.map(bundle => bundle.toTrytes().toString()) : undefined,
            addresses: hasAddresses ? addresses.map(address => address.toTrytes().toString()) : undefined,
            tags: hasTags ? tags.map(tag => tag.toTrytes().toString()) : undefined,
            approvees: hasApprovees ? approvees.map(approvee => approvee.toTrytes().toString()) : undefined
        };
        const response = await this._apiClient.findTransactions(request);
        if (response && response.hashes) {
            return response.hashes.map(hash => hash_1.Hash.create(trytes_1.Trytes.create(hash)));
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
        if (transactionHashes === undefined || transactionHashes === null || transactionHashes.length === 0) {
            throw new coreError_1.CoreError("Your must provide the hashes of the transactions you want to retrieve");
        }
        const request = {
            hashes: transactionHashes.map(hash => hash.toTrytes().toString())
        };
        const response = await this._apiClient.getTrytes(request);
        if (response && response.trytes) {
            return response.trytes.map(trytes => transaction_1.Transaction.fromTrytes(trytes_1.Trytes.create(trytes)));
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
        if (transactionHashes === undefined || transactionHashes === null || transactionHashes.length === 0) {
            throw new coreError_1.CoreError("Your must provide the hashes of the transactions you want to get the inclusion states for");
        }
        const nodeInfo = await this._apiClient.getNodeInfo();
        if (nodeInfo && nodeInfo.latestSolidSubtangleMilestone !== undefined) {
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
            throw new coreError_1.CoreError("The node could not provide the latestSolidSubtangleMilestone");
        }
    }
    /**
     * Generates addresses with index-based or using apis.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param endIndex The end index to generate address.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to the list of addresses or rejects with error.
     */
    async getNewAddress(seed, startIndex, endIndex, includeChecksum, security) {
        let localStartIndex = startIndex;
        if (!numberHelper_1.NumberHelper.isInteger(localStartIndex)) {
            localStartIndex = 0;
        }
        const hasEndIndex = numberHelper_1.NumberHelper.isInteger(endIndex);
        if (hasEndIndex && (localStartIndex >= endIndex || endIndex > (localStartIndex + 500))) {
            throw new coreError_1.CoreError("The startIndex and endIndex range is not valid", { localStartIndex, endIndex });
        }
        let addresses;
        if (hasEndIndex) {
            addresses = await this.getAddressesByIndex(seed, startIndex, endIndex - startIndex, includeChecksum, security);
        }
        else {
            addresses = await this.getAddressesToUnused(seed, startIndex, includeChecksum, security);
        }
        return addresses;
    }
    /**
     * Generates new addresses index-based.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param createCount The number of addresses to create.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to the list of addresses or rejects with error.
     */
    async getAddressesByIndex(seed, startIndex, createCount, includeChecksum, security) {
        if (seed === undefined || seed === null) {
            throw new coreError_1.CoreError("The seed cannot be undefined or null");
        }
        if (!numberHelper_1.NumberHelper.isInteger(startIndex) || startIndex < 0) {
            throw new coreError_1.CoreError("The startIndex must be a number greater than or equal to zero", { startIndex });
        }
        if (!numberHelper_1.NumberHelper.isInteger(createCount) || createCount < 1) {
            throw new coreError_1.CoreError("The create count must be at least 1", { createCount });
        }
        if (!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3) {
            throw new coreError_1.CoreError("The security must be between 1 and 3", { security });
        }
        let localStartIndex = startIndex;
        const addresses = [];
        for (let i = 0; i < createCount; i++) {
            addresses.push(this.generateAddress(seed, localStartIndex++, security || addressSecurity_1.AddressSecurity.medium, includeChecksum));
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
        if (seed === undefined || seed === null) {
            throw new coreError_1.CoreError("The seed cannot be undefined or null");
        }
        if (!numberHelper_1.NumberHelper.isInteger(startIndex) || startIndex < 0) {
            throw new coreError_1.CoreError("The startIndex must be a number greater than or equal to zero", { startIndex });
        }
        if (!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3) {
            throw new coreError_1.CoreError("The security must be between 1 and 3", { security });
        }
        let localStartIndex = startIndex;
        let isUsed;
        const addresses = [];
        do {
            const address = this.generateAddress(seed, localStartIndex++, security || addressSecurity_1.AddressSecurity.medium, includeChecksum);
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
        let localStartIndex = startIndex;
        if (!numberHelper_1.NumberHelper.isInteger(localStartIndex)) {
            localStartIndex = 0;
        }
        const addresses = await this.getNewAddress(seed, startIndex, endIndex, false, security);
        let localTotalRequired = totalRequired;
        if (totalRequired === undefined || totalRequired === null || totalRequired < 0) {
            localTotalRequired = 0;
        }
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
                    inputs.push(input_1.Input.fromParams(addresses[i], security, localStartIndex + i, balance));
                    totalBalance += balance;
                    if (localTotalRequired > 0 && totalBalance >= localTotalRequired) {
                        break;
                    }
                }
            }
        }
        if (localTotalRequired > 0 && totalBalance < localTotalRequired) {
            throw new coreError_1.CoreError("Not enough combined balance in the addresses to satisfy the transfer total", { totalRequired: localTotalRequired, totalBalance });
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
        if (seed === undefined || seed === null) {
            throw new coreError_1.CoreError("The seed cannot be undefined or null");
        }
        if (transfers === undefined || transfers === null || transfers.length === 0) {
            throw new coreError_1.CoreError("The transfers cannot be undefined, null or zero length");
        }
        const localTransferOptions = transferOptions || {};
        localTransferOptions.security = localTransferOptions.security || addressSecurity_1.AddressSecurity.medium;
        const emptyTrytes = trytes_1.Trytes.create("");
        const addHMAC = localTransferOptions.hmacKey !== undefined && localTransferOptions.hmacKey !== null;
        let addedHMAC = false;
        // If message or tag is not supplied, provide it
        transfers.forEach(transfer => {
            transfer.message = transfer.message ? transfer.message : emptyTrytes;
            transfer.tag = transfer.tag || tag_1.Tag.EMPTY;
            if (addHMAC && transfer.value > 0) {
                transfer.message = trytes_1.Trytes.create(TransactionClient.NULL_HASH_TRYTES + transfer.message.toString());
                addedHMAC = true;
            }
        });
        // Create a new bundle
        const bundle = new bundle_1.Bundle();
        let lastTag;
        let totalValue = 0;
        const signatureFragments = [];
        //  Iterate over all transfers, get totalValue
        //  and prepare the signatureFragments, message and tag
        for (let i = 0; i < transfers.length; i++) {
            let signatureMessageLength = 1;
            // If message longer than 2187 trytes, increase signatureMessageLength (add 2nd transaction)
            const messageString = transfers[i].message.toString();
            if (messageString.length > 2187) {
                // Get total length, message / maxLength (2187 trytes)
                signatureMessageLength += Math.floor(messageString.length / 2187);
                let msgCopy = messageString;
                // While there is still a message, copy it
                while (msgCopy) {
                    let fragment = msgCopy.slice(0, 2187);
                    msgCopy = msgCopy.slice(2187, msgCopy.length);
                    // Pad remainder of fragment
                    for (let j = 0; fragment.length < 2187; j++) {
                        fragment += "9";
                    }
                    signatureFragments.push(signatureFragment_1.SignatureFragment.create(trytes_1.Trytes.create(fragment)));
                }
            }
            else {
                // Else, get single fragment with 2187 of 9's trytes
                let fragment = "";
                if (messageString) {
                    fragment = messageString.slice(0, 2187);
                }
                for (let j = 0; fragment.length < 2187; j++) {
                    fragment += "9";
                }
                signatureFragments.push(signatureFragment_1.SignatureFragment.create(trytes_1.Trytes.create(fragment)));
            }
            // get current timestamp in seconds
            const timestamp = Math.floor(this._timeService.msSinceEpoch() / 1000);
            lastTag = transfers[i].tag;
            // Add first entries to the bundle
            bundle.addTransactions(signatureMessageLength, transfers[i].address, transfers[i].value, transfers[i].tag, timestamp);
            // Sum up total value
            totalValue += transfers[i].value;
        }
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
                    const thisBalance = parseInt(balances.balances[i], 10);
                    // If input has balance, add it to confirmedInputs
                    if (thisBalance > 0) {
                        totalBalance += thisBalance;
                        localTransferOptions.inputs[i].balance = thisBalance;
                        confirmedInputs.push(localTransferOptions.inputs[i]);
                        // if we've already reached the intended input value, break out of loop
                        if (totalBalance >= totalValue) {
                            break;
                        }
                    }
                }
                // Return not enough balance error
                if (totalValue > totalBalance) {
                    throw new coreError_1.CoreError("Not enough balance in the input addresses to satisfy the total for the transfer");
                }
                return this.addRemainder(seed, bundle, localTransferOptions, confirmedInputs, signatureFragments, totalValue, lastTag, addedHMAC);
            }
            else {
                // No inputs supplied so we need to get some
                const inputsResponse = await this.getInputs(seed, undefined, undefined, localTransferOptions.security, totalValue);
                return this.addRemainder(seed, bundle, localTransferOptions, inputsResponse.inputs, signatureFragments, totalValue, lastTag, addedHMAC);
            }
        }
        else {
            // If no input required, don't sign and simply finalize the bundle
            bundleSigning_1.BundleSigning.finalizeBundle(bundle);
            bundle.addSignatureFragments(signatureFragments);
            const bundleTrytes = [];
            bundle.transactions.forEach((tx) => {
                bundleTrytes.push(tx.toTrytes());
            });
            return bundleTrytes.reverse();
        }
    }
    /**
     * Wrapper function that does attachToTangle and finally, it broadcasts and stores the transactions.
     * @param trytes The trytes to send.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param reference The reference to send with the trytes.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    async sendTrytes(trytes, depth, minWeightMagnitude, reference) {
        if (trytes === undefined || trytes === null) {
            throw new coreError_1.CoreError("The trytes cannot be undefined or null");
        }
        if (!numberHelper_1.NumberHelper.isInteger(depth) || depth <= 0) {
            throw new coreError_1.CoreError("The depth must be a number greater than zero", { depth });
        }
        if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new coreError_1.CoreError("The minWeightMagnitude must be a number greater than zero", { minWeightMagnitude });
        }
        const transactionsToApproveRequest = {
            depth,
            reference: reference ? reference.toTrytes().toString() : undefined
        };
        const transactionsToApprove = await this._apiClient.getTransactionsToApprove(transactionsToApproveRequest);
        const attachToTangleRequest = {
            trunkTransaction: transactionsToApprove.trunkTransaction,
            branchTransaction: transactionsToApprove.branchTransaction,
            minWeightMagnitude: minWeightMagnitude,
            trytes: trytes.map(t => t.toString())
        };
        const attachToTangleResponse = await this._apiClient.attachToTangle(attachToTangleRequest);
        const storeTransactionsRequest = {
            trytes: attachToTangleResponse.trytes
        };
        await this._apiClient.storeTransactions(storeTransactionsRequest);
        const broadcastTransactionsRequest = {
            trytes: attachToTangleResponse.trytes
        };
        await this._apiClient.broadcastTransactions(broadcastTransactionsRequest);
        return attachToTangleResponse.trytes.map(attachTrytes => transaction_1.Transaction.fromTrytes(trytes_1.Trytes.create(attachTrytes)));
    }
    /**
     * Wrapper function that basically does prepareTransfers, as well as attachToTangle and finally, it broadcasts and stores the transactions locally.
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
    async sendTransfer(seed, depth, minWeightMagnitude, transfers, transferOptions, reference) {
        if (seed === undefined || seed === null) {
            throw new coreError_1.CoreError("The seed cannot be undefined or null");
        }
        if (!numberHelper_1.NumberHelper.isInteger(depth) || depth <= 0) {
            throw new coreError_1.CoreError("The depth must be a number greater than zero", { depth });
        }
        if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new coreError_1.CoreError("The minWeightMagnitude must be a number greater than zero", { minWeightMagnitude });
        }
        if (transfers === undefined || transfers === null || transfers.length === 0) {
            throw new coreError_1.CoreError("The transfers cannot be undefined, null or zero length");
        }
        const transferTrytes = await this.prepareTransfers(seed, transfers, transferOptions);
        return this.sendTrytes(transferTrytes, depth, minWeightMagnitude, reference);
    }
    /**
     * Find out if a transaction is promotable.
     * @param transactionTail The hash of the transaction to be promoted.
     * @returns Promise which resolves to true if the transaction is promotable rejects with an error.
     */
    async isPromotable(transactionTail) {
        if (transactionTail === undefined || transactionTail === null) {
            throw new coreError_1.CoreError("The transactionTail cannot be undefined or null");
        }
        const checkConsistencyRequest = {
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
    async promoteTransaction(transactionTail, depth, minWeightMagnitude, transfers, promoteOptions) {
        if (transactionTail === undefined || transactionTail === null) {
            throw new coreError_1.CoreError("The transactionTail cannot be undefined or null");
        }
        if (!numberHelper_1.NumberHelper.isInteger(depth) || depth <= 0) {
            throw new coreError_1.CoreError("The depth must be a number greater than zero", { depth });
        }
        if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new coreError_1.CoreError("The minWeightMagnitude must be a number greater than zero", { minWeightMagnitude });
        }
        if (transfers === undefined || transfers === null || transfers.length === 0) {
            throw new coreError_1.CoreError("The transfers cannot be undefined, null or zero length");
        }
        const localPromoteOptions = promoteOptions || {};
        const isPromotable = await this.isPromotable(transactionTail);
        if (isPromotable) {
            if (localPromoteOptions.interrupt === false || (typeof localPromoteOptions.interrupt === "function" && localPromoteOptions.interrupt() === false)) {
                const sendTransferResponse = await this.sendTransfer(hash_1.Hash.create(transfers[0].address.toTrytes()), depth, minWeightMagnitude, transfers, undefined, transactionTail);
                if (localPromoteOptions.delay !== undefined) {
                    return this._backgroundTaskService.create(async () => this.promoteTransaction(transactionTail, depth, minWeightMagnitude, transfers, promoteOptions), localPromoteOptions.delay);
                }
                else {
                    return sendTransferResponse;
                }
            }
            else {
                return undefined;
            }
        }
        else {
            throw new coreError_1.CoreError("Transaction is not promotable");
        }
    }
    /**
     * Gets the associated bundle transactions of a single transaction.
     * Does validation of signatures, total sum as well as bundle order.
     * @param trunkTransaction Hash of a trunk or a tail transaction of a bundle.
     * @returns Promise which resolves to the bundle transactions or rejects with an error.
     */
    async getBundle(trunkTransaction) {
        if (trunkTransaction === undefined || trunkTransaction === null) {
            throw new coreError_1.CoreError("The trunkTransaction cannot be undefined or null");
        }
        const transactions = await this.traverseBundle(trunkTransaction, undefined);
        const isValid = bundleSigning_1.BundleSigning.isValid(transactions);
        if (!isValid) {
            throw new coreError_1.CoreError("Invalid Bundle provided");
        }
        const bundle = new bundle_1.Bundle();
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
    async traverseBundle(trunkTransaction, bundleHash) {
        if (trunkTransaction === undefined || trunkTransaction === null) {
            throw new coreError_1.CoreError("The trunkTransaction cannot be undefined or null");
        }
        const getTrytesRequest = {
            hashes: [trunkTransaction.toTrytes().toString()]
        };
        const getTrytesResponse = await this._apiClient.getTrytes(getTrytesRequest);
        const trytes = getTrytesResponse.trytes !== undefined && getTrytesResponse.trytes !== null && getTrytesResponse.trytes.length > 0 ? getTrytesResponse.trytes[0] : undefined;
        if (trytes === undefined) {
            throw new coreError_1.CoreError("Bundle transactions not visible");
        }
        else {
            const transactionObject = transaction_1.Transaction.fromTrytes(trytes_1.Trytes.create(trytes));
            let bundleTransactions = [];
            // If first transaction to search is not a tail, return error
            if ((bundleHash === undefined || bundleHash === null) && transactionObject.currentIndex.toNumber() !== 0) {
                throw new coreError_1.CoreError("Invalid tail transaction supplied");
            }
            // If no bundle hash, define it
            const localBundleHash = bundleHash === undefined || bundleHash === null ? transactionObject.bundle : bundleHash;
            // If same bundle hash continue
            if (localBundleHash.toTrytes().toString() === transactionObject.bundle.toTrytes().toString()) {
                // Add transaction object to bundle
                bundleTransactions.push(transactionObject);
                // If more than one element then continue
                if (transactionObject.lastIndex.toNumber() !== 0 || transactionObject.currentIndex.toNumber() !== 0) {
                    const newBundleTransactions = await this.traverseBundle(transactionObject.trunkTransaction, localBundleHash);
                    bundleTransactions = bundleTransactions.concat(newBundleTransactions);
                }
            }
            return bundleTransactions;
        }
    }
    /**
     * Replays a transfer by doing Proof of Work again.
     * @param transactionTail The hash of the transaction to be promoted.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    async replayBundle(transactionTail, depth, minWeightMagnitude) {
        if (transactionTail === undefined || transactionTail === null) {
            throw new coreError_1.CoreError("The transactionTail cannot be undefined or null");
        }
        if (!numberHelper_1.NumberHelper.isInteger(depth) || depth <= 0) {
            throw new coreError_1.CoreError("The depth must be a number greater than zero", { depth });
        }
        if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new coreError_1.CoreError("The minWeightMagnitude must be a number greater than zero", { minWeightMagnitude });
        }
        const bundle = await this.getBundle(transactionTail);
        const bundleTrytes = [];
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
    async broadcastBundle(transactionTail) {
        if (transactionTail === undefined || transactionTail === null) {
            throw new coreError_1.CoreError("The transactionTail cannot be undefined or null");
        }
        const bundle = await this.getBundle(transactionTail);
        const bundleTrytes = [];
        bundle.transactions.forEach((transaction) => {
            bundleTrytes.push(transaction.toTrytes());
        });
        const broadcastTransactionsRequest = {
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
    async findTransactionObjects(bundles, addresses, tags, approvees) {
        const transactions = await this.findTransactions(bundles, addresses, tags, approvees);
        return this.getTransactionsObjects(transactions);
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
        if (seed === undefined || seed === null) {
            throw new coreError_1.CoreError("The seed cannot be undefined or null");
        }
        let localStartIndex = startIndex;
        if (!numberHelper_1.NumberHelper.isInteger(localStartIndex)) {
            localStartIndex = 0;
        }
        const addresses = await this.getNewAddress(seed, startIndex, endIndex, false, security);
        return this.bundlesFromAddresses(addresses, true);
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
        if (seed === undefined || seed === null) {
            throw new coreError_1.CoreError("The seed cannot be undefined or null");
        }
        let localStartIndex = startIndex;
        if (!numberHelper_1.NumberHelper.isInteger(localStartIndex)) {
            localStartIndex = 0;
        }
        const addresses = await this.getNewAddress(seed, startIndex, endIndex, false, security);
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
                accountData.inputs.push(input_1.Input.fromParams(accountData.addresses[i], security, localStartIndex + i, balance));
                accountData.balance += balance;
            }
        }
        return accountData;
    }
    /* @internal */
    async bundlesFromAddresses(addresses, inclusionStates) {
        if (addresses === undefined || addresses === null || addresses.length === 0) {
            throw new coreError_1.CoreError("The addresses cannot be undefined, null or zero length");
        }
        const transactionObjects = await this.findTransactionObjects(undefined, addresses, undefined, undefined);
        // set of tail transactions
        const tailTransactions = new Set();
        const nonTailBundleHashes = new Set();
        transactionObjects.forEach((transaction) => {
            // Sort tail and nonTails
            if (transaction.currentIndex.toNumber() === 0) {
                tailTransactions.add(bundleSigning_1.BundleSigning.transactionHash(transaction));
            }
            else {
                nonTailBundleHashes.add(transaction.bundle);
            }
        });
        const nonTailBundleTransactions = await this.findTransactionObjects(Array.from(nonTailBundleHashes));
        nonTailBundleTransactions.forEach((transaction) => {
            if (transaction.currentIndex.toNumber() === 0) {
                tailTransactions.add(bundleSigning_1.BundleSigning.transactionHash(transaction));
            }
        });
        const finalBundles = [];
        const tailTxArray = Array.from(tailTransactions);
        // If inclusionStates, get the confirmation status
        // of the tail transactions, and thus the bundles
        let tailTxStates;
        if (inclusionStates) {
            tailTxStates = await this.getLatestInclusion(tailTxArray);
        }
        // Map each tail transaction to the getBundle function
        // format the returned bundles and add inclusion states if necessary
        for (let i = 0; i < tailTxArray.length; i++) {
            const bundle = await this.getBundle(tailTxArray[i]);
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
        const key = transactionSigning_1.TransactionSigning.key(seed, index, security);
        const digests = transactionSigning_1.TransactionSigning.digests(key);
        const addressTrits = transactionSigning_1.TransactionSigning.address(digests);
        let addressTrytesString = trits_1.Trits.fromArray(addressTrits).toTrytes().toString();
        if (includeChecksum) {
            addressTrytesString += transactionSigning_1.TransactionSigning.createChecksum(addressTrits, 9);
        }
        return address_1.Address.create(trytes_1.Trytes.create(addressTrytesString));
    }
    /* @internal */
    async addRemainder(seed, bundle, transferOptions, inputs, signatureFragments, totalValue, tag, addedHMAC) {
        let totalTransferValue = totalValue;
        for (let i = 0; i < inputs.length; i++) {
            const thisBalance = inputs[i].balance;
            const toSubtract = 0 - thisBalance;
            const timestamp = Math.floor(this._timeService.msSinceEpoch() / 1000);
            // Add input as bundle entry
            bundle.addTransactions(inputs[i].security, inputs[i].address, toSubtract, tag, timestamp);
            // If there is a remainder value
            // Add extra output to send remaining funds to
            if (thisBalance >= totalTransferValue) {
                const remainder = thisBalance - totalTransferValue;
                // If user has provided remainder address
                // Use it to send remaining funds to
                if (remainder > 0 && transferOptions.remainderAddress !== undefined && transferOptions !== null) {
                    // Remainder bundle entry
                    bundle.addTransactions(1, transferOptions.remainderAddress, remainder, tag, timestamp);
                    // Final function for signing inputs
                    return bundleSigning_1.BundleSigning.signInputsAndReturn(seed, bundle, transferOptions, signatureFragments, inputs, addedHMAC);
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
                    return bundleSigning_1.BundleSigning.signInputsAndReturn(seed, bundle, transferOptions, signatureFragments, inputs, addedHMAC);
                }
                else {
                    // If there is no remainder, do not add transaction to bundle
                    // simply sign and return
                    return bundleSigning_1.BundleSigning.signInputsAndReturn(seed, bundle, transferOptions, signatureFragments, inputs, addedHMAC);
                }
            }
            else {
                // If multiple inputs provided, subtract the totalTransferValue by
                // the inputs balance
                totalTransferValue -= thisBalance;
            }
        }
        return undefined;
    }
}
/* @internal */
TransactionClient.NULL_HASH_TRYTES = "9".repeat(243);
exports.TransactionClient = TransactionClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb25DbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFXQSxvRUFBaUU7QUFDakUsNEVBQXlFO0FBQ3pFLCtEQUE0RDtBQUM1RCwrRUFBNEU7QUFDNUUsNkRBQTBEO0FBQzFELHlEQUFzRDtBQUN0RCwyREFBd0Q7QUFDeEQsbUZBQWdGO0FBQ2hGLHVEQUFvRDtBQUNwRCx1RUFBb0U7QUFFcEUsMkRBQXdEO0FBQ3hELDZEQUEwRDtBQU8xRCw2RUFBMEU7QUFDMUUseURBQXNEO0FBQ3RELG1EQUFnRDtBQUNoRCw2REFBMEQ7QUFFMUQ7O0dBRUc7QUFDSDtJQWFJOzs7OztPQUtHO0lBQ0gsWUFBWSxTQUFxQixFQUNyQixjQUE0QixJQUFJLHlCQUFXLEVBQUUsRUFDN0Msd0JBQWdELElBQUksNkNBQXFCLEVBQUU7UUFDbkYsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHFCQUFxQixDQUFDO0lBQ3hELENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMseUJBQXlCO1FBQ2xDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqRCxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBSSxDQUFDLE1BQU0sQ0FBQyxlQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixN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