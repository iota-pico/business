Object.defineProperty(exports, "__esModule", { value: true });
const backgroundTaskService_1 = require("@iota-pico/core/dist//services/backgroundTaskService");
const timeService_1 = require("@iota-pico/core/dist//services/timeService");
const arrayHelper_1 = require("@iota-pico/core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const address_1 = require("@iota-pico/data/dist/data/address");
const addressSecurity_1 = require("@iota-pico/data/dist/data/addressSecurity");
const bundle_1 = require("@iota-pico/data/dist/data/bundle");
const hash_1 = require("@iota-pico/data/dist/data/hash");
const input_1 = require("@iota-pico/data/dist/data/input");
const signatureFragment_1 = require("@iota-pico/data/dist/data/signatureFragment");
const tag_1 = require("@iota-pico/data/dist/data/tag");
const transaction_1 = require("@iota-pico/data/dist/data/transaction");
const transfer_1 = require("@iota-pico/data/dist/data/transfer");
const trits_1 = require("@iota-pico/data/dist/data/trits");
const tryteNumber_1 = require("@iota-pico/data/dist/data/tryteNumber");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const businessError_1 = require("../error/businessError");
const bundleSigning_1 = require("./bundleSigning");
const transactionSigning_1 = require("./transactionSigning");
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
            if (messageString.length > signatureFragment_1.SignatureFragment.LENGTH) {
                // Get total length, message / maxLength (2187 trytes)
                signatureMessageLength += Math.floor(messageString.length / signatureFragment_1.SignatureFragment.LENGTH);
                let msgCopy = messageString;
                // While there is still a message, copy it
                while (msgCopy) {
                    let fragment = msgCopy.slice(0, signatureFragment_1.SignatureFragment.LENGTH);
                    msgCopy = msgCopy.slice(signatureFragment_1.SignatureFragment.LENGTH, msgCopy.length);
                    // Pad remainder of fragment
                    for (let j = 0; fragment.length < signatureFragment_1.SignatureFragment.LENGTH; j++) {
                        fragment += "9";
                    }
                    signatureFragments.push(signatureFragment_1.SignatureFragment.fromTrytes(trytes_1.Trytes.fromString(fragment)));
                }
            }
            else {
                // Else, get single fragment with 2187 of 9's trytes
                let fragment = "";
                if (messageString) {
                    fragment = messageString.slice(0, signatureFragment_1.SignatureFragment.LENGTH);
                }
                for (let j = 0; fragment.length < signatureFragment_1.SignatureFragment.LENGTH; j++) {
                    fragment += "9";
                }
                signatureFragments.push(signatureFragment_1.SignatureFragment.fromTrytes(trytes_1.Trytes.fromString(fragment)));
            }
            // get current timestamp in seconds
            const timestamp = Math.floor(this._timeService.msSinceEpoch() / 1000);
            lastTag = transfers[i].tag;
            // Add first entries to the bundle
            bundle.addTransactions(signatureMessageLength, transfers[i].address, transfers[i].value, transfers[i].tag, timestamp);
            // Sum up total value
            totalValue += transfers[i].value;
        }
        let preparedTransactions;
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
                preparedTransactions = await this.addRemainder(seed, bundle, localTransferOptions, confirmedInputs, signatureFragments, totalValue, lastTag, addedHMAC);
            }
            else {
                // No inputs supplied so we need to get some
                const inputsResponse = await this.getInputs(seed, 0, undefined, localTransferOptions.security, totalValue);
                preparedTransactions = await this.addRemainder(seed, bundle, localTransferOptions, inputsResponse.inputs, signatureFragments, totalValue, lastTag, addedHMAC);
            }
        }
        else {
            // If no input required, don't sign and simply finalize the bundle
            bundleSigning_1.BundleSigning.finalizeBundle(bundle);
            bundle.addSignatureFragments(signatureFragments);
            preparedTransactions = bundle.transactions.reverse();
        }
        return preparedTransactions;
    }
    /**
     * Attach the transactions to the tangle by doing proof of work.
     * @param transactions The transactions to attach.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    async attachToTangle(transactions, depth, minWeightMagnitude, reference) {
        if (!arrayHelper_1.ArrayHelper.isTyped(transactions, transaction_1.Transaction)) {
            throw new businessError_1.BusinessError("The transactions must be an array of type Transaction");
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
        let powTrytes;
        if (this._proofOfWork) {
            powTrytes = await this.localProofOfWork(hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(transactionsToApprove.trunkTransaction)), hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(transactionsToApprove.branchTransaction)), minWeightMagnitude, transactions);
        }
        else {
            const attachToTangleRequest = {
                trunkTransaction: transactionsToApprove.trunkTransaction,
                branchTransaction: transactionsToApprove.branchTransaction,
                minWeightMagnitude: minWeightMagnitude,
                trytes: transactions.map(t => t.toTrytes().toString())
            };
            const attachToTangleResponse = await this._apiClient.attachToTangle(attachToTangleRequest);
            powTrytes = attachToTangleResponse.trytes.map(returnTrytes => transaction_1.Transaction.fromTrytes(trytes_1.Trytes.fromString(returnTrytes)));
        }
        return powTrytes;
    }
    /**
     * Wrapper function that does attachToTangle and then stores and broadcasts the transactions.
     * @param transactions The transactions to send.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    async sendTransactions(transactions, depth, minWeightMagnitude, reference) {
        const attachedTransactions = await this.attachToTangle(transactions, depth, minWeightMagnitude, reference);
        const storeTransactionsRequest = {
            trytes: attachedTransactions.map(t => t.toTrytes().toString())
        };
        await this._apiClient.storeTransactions(storeTransactionsRequest);
        const broadcastTransactionsRequest = {
            trytes: storeTransactionsRequest.trytes
        };
        await this._apiClient.broadcastTransactions(broadcastTransactionsRequest);
        return attachedTransactions;
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
                const txHash = bundleSigning_1.BundleSigning.transactionHash(transaction);
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
        const isValid = bundleSigning_1.BundleSigning.isValid(transactions);
        if (!isValid) {
            throw new businessError_1.BusinessError("Invalid bundle provided");
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
        return this.sendTransactions(bundle.transactions.reverse(), depth, minWeightMagnitude);
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
                tailTransactions.add(bundleSigning_1.BundleSigning.transactionHash(transaction).toTrytes().toString());
            }
            else {
                nonTailBundleHashes.add(transaction.bundle.toTrytes().toString());
            }
        });
        if (nonTailBundleHashes.size > 0) {
            const nonTailBundleTransactions = await this.findTransactionObjects(Array.from(nonTailBundleHashes).map(hash => hash_1.Hash.fromTrytes(trytes_1.Trytes.fromString(hash))));
            nonTailBundleTransactions.forEach((transaction) => {
                if (transaction.currentIndex.toNumber() === 0) {
                    tailTransactions.add(bundleSigning_1.BundleSigning.transactionHash(transaction).toTrytes().toString());
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
        const key = transactionSigning_1.TransactionSigning.key(seed, index, security);
        const digests = transactionSigning_1.TransactionSigning.digests(key);
        const addressTrits = transactionSigning_1.TransactionSigning.address(digests);
        let addressTrytesString = trits_1.Trits.fromArray(addressTrits).toTrytes().toString();
        if (includeChecksum) {
            addressTrytesString += transactionSigning_1.TransactionSigning.createChecksum(addressTrits, 9);
        }
        return address_1.Address.fromTrytes(trytes_1.Trytes.fromString(addressTrytesString));
    }
    /* @internal */
    async addRemainder(seed, bundle, transferOptions, inputs, signatureFragments, totalValue, tag, addedHMAC) {
        let finalTransactions;
        let totalTransferValue = totalValue;
        for (let i = 0; i < inputs.length && finalTransactions === undefined; i++) {
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
                    finalTransactions = bundleSigning_1.BundleSigning.signInputsAndReturn(seed, bundle, transferOptions, signatureFragments, inputs, addedHMAC);
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
                    finalTransactions = bundleSigning_1.BundleSigning.signInputsAndReturn(seed, bundle, transferOptions, signatureFragments, inputs, addedHMAC);
                }
                else {
                    // If there is no remainder, do not add transaction to bundle
                    // simply sign and return
                    finalTransactions = bundleSigning_1.BundleSigning.signInputsAndReturn(seed, bundle, transferOptions, signatureFragments, inputs, addedHMAC);
                }
            }
            else {
                // If multiple inputs provided, subtract the totalTransferValue by
                // the inputs balance
                totalTransferValue -= inputs[i].balance;
            }
        }
        return finalTransactions;
    }
    async localProofOfWork(trunkTransaction, branchTransaction, minWeightMagnitude, transactions) {
        let previousTransactionHash;
        const finalTransactions = [];
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
            const returnedTrytes = await this._proofOfWork.pow(newTrytes, minWeightMagnitude);
            transactions[i].nonce = tag_1.Tag.fromTrytes(returnedTrytes.sub(transaction_1.Transaction.LENGTH - tag_1.Tag.LENGTH, tag_1.Tag.LENGTH));
            // Calculate the hash of the new transaction with nonce and use that as the previous hash for next entry
            const returnTransaction = transaction_1.Transaction.fromTrytes(returnedTrytes);
            previousTransactionHash = bundleSigning_1.BundleSigning.transactionHash(returnTransaction);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb25DbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFZQSxnR0FBNkY7QUFDN0YsNEVBQXlFO0FBQ3pFLDBFQUF1RTtBQUN2RSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBR3pFLCtEQUE0RDtBQUM1RCwrRUFBNEU7QUFDNUUsNkRBQTBEO0FBQzFELHlEQUFzRDtBQUN0RCwyREFBd0Q7QUFDeEQsbUZBQWdGO0FBQ2hGLHVEQUFvRDtBQUNwRCx1RUFBb0U7QUFDcEUsaUVBQThEO0FBQzlELDJEQUF3RDtBQUN4RCx1RUFBb0U7QUFDcEUsNkRBQTBEO0FBQzFELDBEQUF1RDtBQUt2RCxtREFBZ0Q7QUFDaEQsNkRBQTBEO0FBRTFEOztHQUVHO0FBQ0g7SUFzQkk7Ozs7OztPQU1HO0lBQ0gsWUFBWSxTQUFxQixFQUNyQixXQUEwQixFQUMxQixjQUE0QixJQUFJLHlCQUFXLEVBQUUsRUFDN0Msd0JBQWdELElBQUksNkNBQXFCLEVBQUU7UUFDbkYsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHFCQUFxQixDQUFDO0lBQ3hELENBQUM7SUFFRDs7T0FFRztJQUNJLEtBQUssQ0FBQyxVQUFVO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN6QyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLEtBQUssQ0FBQyx5QkFBeUI7UUFDbEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFB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