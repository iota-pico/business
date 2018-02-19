Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const tritsHasherFactory_1 = require("@iota-pico/crypto/dist/factories/tritsHasherFactory");
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
const tryteNumber_1 = require("../../../iota-pico-data/dist/data/tryteNumber");
const timeProvider_1 = require("../time/timeProvider");
const hmacCurl_1 = require("./hmacCurl");
const transactionSigning_1 = require("./transactionSigning");
/**
 * Default implementation of the ITransactionClient.
 */
class TransactionClient {
    /**
     * Create a new instance of the TransactionClient.
     * @param apiClient An API Client to communicate through.
     * @param timeProvider A class which can provide the time.
     */
    constructor(apiClient, timeProvider = new timeProvider_1.TimeProvider()) {
        this._apiClient = apiClient;
        this._timeProvider = timeProvider;
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
     * individual elements. The input fields can either be bundles, addresses, tags or approvees.
     * Using multiple of these input fields returns the intersection of the values.
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
    async getTransactionsDetails(transactionHashes) {
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
        if (localStartIndex === undefined || localStartIndex === null) {
            localStartIndex = 0;
        }
        if (endIndex !== undefined && endIndex !== null && (localStartIndex > endIndex || endIndex > (localStartIndex + 500))) {
            throw new coreError_1.CoreError("The startIndex and endIndex range is not value", { localStartIndex, endIndex });
        }
        let addresses;
        if (endIndex) {
            addresses = await this.getAddressesByIndex(seed, localStartIndex, endIndex - localStartIndex, false, security);
        }
        else {
            addresses = await this.getAddressesToUnused(seed, localStartIndex, false, security);
        }
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
     * @param inputs List of inputs used for funding the transfer.
     * @param remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to.
     * @param security Security level to be used for the private key / addresses.
     * @param hmacKey Hmac key to sign the bundle.
     * @returns Promise which resolves to the array of Trytes for the transfer or rejects with error.
     */
    async prepareTransfers(seed, transfers, inputs, remainderAddress, security, hmacKey) {
        if (seed === undefined || seed === null) {
            throw new coreError_1.CoreError("The seed cannot be undefined or null");
        }
        if (transfers === undefined || transfers === null || transfers.length === 0) {
            throw new coreError_1.CoreError("The transfers cannot be undefined, null or zero length");
        }
        if (!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3) {
            throw new coreError_1.CoreError("The security must be between 1 and 3", { security });
        }
        const emptyTrytes = trytes_1.Trytes.create("");
        const nullHashTrytes = "9".repeat(243);
        const addHMAC = hmacKey !== undefined && hmacKey !== null;
        let addedHMAC = false;
        // If message or tag is not supplied, provide it
        transfers.forEach(transfer => {
            transfer.message = transfer.message ? transfer.message : emptyTrytes;
            transfer.tag = transfer.tag || tag_1.Tag.EMPTY;
            if (addHMAC && transfer.value > 0) {
                transfer.message = trytes_1.Trytes.create(nullHashTrytes + transfer.message.toString());
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
            const timestamp = Math.floor(this._timeProvider.msSinceEpoch() / 1000);
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
            if (inputs) {
                const request = {
                    addresses: inputs.map(input => input.address.toTrytes().toString()),
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
                        inputs[i].balance = thisBalance;
                        confirmedInputs.push(inputs[i]);
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
                return this.addRemainder(seed, remainderAddress, security, bundle, confirmedInputs, signatureFragments, totalValue, lastTag, addedHMAC, hmacKey);
            }
            else {
                // No inputs supplied so we need to get some
                const inputsResponse = await this.getInputs(seed, undefined, undefined, security, totalValue);
                return this.addRemainder(seed, remainderAddress, security, bundle, inputsResponse.inputs, signatureFragments, totalValue, lastTag, addedHMAC, hmacKey);
            }
        }
        else {
            // If no input required, don't sign and simply finalize the bundle
            this.finalizeBundle(bundle);
            bundle.addSignatureFragments(signatureFragments);
            const bundleTrytes = [];
            bundle.transactions.forEach((tx) => {
                bundleTrytes.push(tx.toTrytes());
            });
            return bundleTrytes.reverse();
        }
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
    async addRemainder(seed, remainderAddress, security, bundle, inputs, signatureFragments, totalValue, tag, addedHMAC, hmacKey) {
        let totalTransferValue = totalValue;
        for (let i = 0; i < inputs.length; i++) {
            const thisBalance = inputs[i].balance;
            const toSubtract = 0 - thisBalance;
            const timestamp = Math.floor(this._timeProvider.msSinceEpoch() / 1000);
            // Add input as bundle entry
            bundle.addTransactions(inputs[i].security, inputs[i].address, toSubtract, tag, timestamp);
            // If there is a remainder value
            // Add extra output to send remaining funds to
            if (thisBalance >= totalTransferValue) {
                const remainder = thisBalance - totalTransferValue;
                // If user has provided remainder address
                // Use it to send remaining funds to
                if (remainder > 0 && remainderAddress) {
                    // Remainder bundle entry
                    bundle.addTransactions(1, remainderAddress, remainder, tag, timestamp);
                    // Final function for signing inputs
                    return this.signInputsAndReturn(seed, bundle, signatureFragments, inputs, security, addedHMAC, hmacKey);
                }
                else if (remainder > 0) {
                    let startIndex = 0;
                    for (let k = 0; k < inputs.length; k++) {
                        startIndex = Math.max(inputs[k].keyIndex, startIndex);
                    }
                    startIndex++;
                    const addresses = await this.getAddressesToUnused(seed, startIndex, false, security);
                    const ts = Math.floor(this._timeProvider.msSinceEpoch() / 1000);
                    // Remainder bundle entry
                    bundle.addTransactions(1, addresses[addresses.length - 1], remainder, tag, ts);
                    // Final function for signing inputs
                    return this.signInputsAndReturn(seed, bundle, signatureFragments, inputs, security, addedHMAC, hmacKey);
                }
                else {
                    // If there is no remainder, do not add transaction to bundle
                    // simply sign and return
                    return this.signInputsAndReturn(seed, bundle, signatureFragments, inputs, security, addedHMAC, hmacKey);
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
    signInputsAndReturn(seed, bundle, signatureFragments, inputs, security, addedHMAC, hmacKey) {
        this.finalizeBundle(bundle);
        bundle.addSignatureFragments(signatureFragments);
        //  SIGNING OF INPUTS
        //
        //  Here we do the actual signing of the inputs
        //  Iterate over all bundle transactions, find the inputs
        //  Get the corresponding private key and calculate the signatureFragment
        for (let i = 0; i < bundle.transactions.length; i++) {
            if (bundle.transactions[i].value.toNumber() < 0) {
                const thisAddress = bundle.transactions[i].address;
                // Get the corresponding keyIndex and security of the address
                let keyIndex;
                let keySecurity;
                for (let k = 0; k < inputs.length; k++) {
                    if (inputs[k].address === thisAddress) {
                        keyIndex = inputs[k].keyIndex;
                        keySecurity = inputs[k].security ? inputs[k].security : security;
                        break;
                    }
                }
                const bundleHash = bundle.transactions[i].bundle;
                // Get corresponding private key of address
                const key = transactionSigning_1.TransactionSigning.key(seed, keyIndex, keySecurity);
                //  Get the normalized bundle hash
                const normalizedBundleHash = this.normalizedBundle(bundleHash);
                const normalizedBundleFragments = [];
                // Split hash into 3 fragments
                for (let l = 0; l < 3; l++) {
                    normalizedBundleFragments[l] = normalizedBundleHash.slice(l * 27, (l + 1) * 27);
                }
                //  First 6561 trits for the firstFragment
                const firstFragment = key.slice(0, 6561);
                //  First bundle fragment uses the first 27 trytes
                const firstBundleFragment = normalizedBundleFragments[0];
                //  Calculate the new signatureFragment with the first bundle fragment
                const firstSignedFragment = transactionSigning_1.TransactionSigning.signatureFragment(firstBundleFragment, firstFragment);
                //  Convert signature to trytes and assign the new signatureFragment
                bundle.transactions[i].signatureMessageFragment = signatureFragment_1.SignatureFragment.create(trits_1.Trits.fromArray(firstSignedFragment).toTrytes());
                // if user chooses higher than 27-tryte security
                // for each security level, add an additional signature
                for (let j = 1; j < keySecurity; j++) {
                    //  Because the signature is > 2187 trytes, we need to
                    //  find the subsequent transaction to add the remainder of the signature
                    //  Same address as well as value = 0 (as we already spent the input)
                    if (bundle.transactions[i + j].address === thisAddress && bundle.transactions[i + j].value.toNumber() === 0) {
                        // Use the next 6561 trits
                        const nextFragment = key.slice(6561 * j, (j + 1) * 6561);
                        const nextBundleFragment = normalizedBundleFragments[j];
                        //  Calculate the new signature
                        const nextSignedFragment = transactionSigning_1.TransactionSigning.signatureFragment(nextBundleFragment, nextFragment);
                        //  Convert signature to trytes and assign it again to this bundle entry
                        bundle.transactions[i + j].signatureMessageFragment = signatureFragment_1.SignatureFragment.create(trits_1.Trits.fromArray(nextSignedFragment).toTrytes());
                    }
                }
            }
        }
        if (addedHMAC) {
            const hmac = new hmacCurl_1.HmacCurl(hmacKey);
            hmac.addHMAC(bundle);
        }
        const bundleTrytes = [];
        // Convert all bundle entries into trytes
        bundle.transactions.forEach((tx) => {
            bundleTrytes.push(tx.toTrytes());
        });
        return bundleTrytes.reverse();
    }
    /* @internal */
    finalizeBundle(bundle) {
        let validBundle = false;
        while (!validBundle) {
            const kerl = tritsHasherFactory_1.TritsHasherFactory.instance().create("kerl");
            kerl.initialize();
            for (let i = 0; i < bundle.transactions.length; i++) {
                bundle.transactions[i].currentIndex = tryteNumber_1.TryteNumber.fromNumber(i);
                bundle.transactions[i].lastIndex = tryteNumber_1.TryteNumber.fromNumber(bundle.transactions.length - 1);
                const bundleEssence = trits_1.Trits.fromTrytes(trytes_1.Trytes.create(bundle.transactions[i].address.toTrytes().toString()
                    + bundle.transactions[i].value.toTrytes().toString() + transaction_1.Transaction.CHECK_VALUE
                    + bundle.transactions[i].obsoleteTag.toTrytes().toString()
                    + bundle.transactions[i].timestamp.toTrytes().toString()
                    + bundle.transactions[i].currentIndex.toTrytes().toString()
                    + bundle.transactions[i].lastIndex.toTrytes().toString())).toArray();
                kerl.absorb(bundleEssence, 0, bundleEssence.length);
            }
            const hashTrits = [];
            kerl.squeeze(hashTrits, 0, kerl.getConstants().HASH_LENGTH);
            const hash = hash_1.Hash.create(trits_1.Trits.fromArray(hashTrits).toTrytes());
            for (let i = 0; i < bundle.transactions.length; i++) {
                bundle.transactions[i].bundle = hash;
            }
            const normalizedHash = this.normalizedBundle(hash);
            if (normalizedHash.indexOf(13 /* = M */) !== -1) {
                // Insecure bundle. Increment Tag and recompute bundle hash.
                const increasedTag = trits_1.Trits.add(trits_1.Trits.fromTrytes(bundle.transactions[0].obsoleteTag.toTrytes()), trits_1.Trits.fromArray([1]));
                bundle.transactions[0].obsoleteTag = tag_1.Tag.create(increasedTag.toTrytes());
            }
            else {
                validBundle = true;
            }
        }
    }
    /* @internal */
    normalizedBundle(bundleHash) {
        const normalizedBundle = [];
        const hashString = bundleHash.toTrytes().toString();
        for (let i = 0; i < 3; i++) {
            let sum = 0;
            for (let j = 0; j < 27; j++) {
                const hashChar = hashString.charAt(i * 27 + j);
                const val = trits_1.Trits.fromTrytes(trytes_1.Trytes.create(hashChar)).toNumber();
                normalizedBundle[i * 27 + j] = val;
                sum += val;
            }
            if (sum >= 0) {
                while (sum-- > 0) {
                    for (let j = 0; j < 27; j++) {
                        if (normalizedBundle[i * 27 + j] > -13) {
                            normalizedBundle[i * 27 + j]--;
                            break;
                        }
                    }
                }
            }
            else {
                while (sum++ < 0) {
                    for (let j = 0; j < 27; j++) {
                        if (normalizedBundle[i * 27 + j] < 13) {
                            normalizedBundle[i * 27 + j]++;
                            break;
                        }
                    }
                }
            }
        }
        return normalizedBundle;
    }
}
exports.TransactionClient = TransactionClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb25DbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9uQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQSxvRUFBaUU7QUFDakUsNEVBQXlFO0FBQ3pFLDRGQUF5RjtBQUN6RiwrREFBNEQ7QUFDNUQsK0VBQTRFO0FBQzVFLDZEQUEwRDtBQUMxRCx5REFBc0Q7QUFDdEQsMkRBQXdEO0FBQ3hELG1GQUFnRjtBQUNoRix1REFBb0Q7QUFDcEQsdUVBQW9FO0FBRXBFLDJEQUF3RDtBQUN4RCw2REFBMEQ7QUFDMUQsK0VBQTRFO0FBRzVFLHVEQUFvRDtBQUNwRCx5Q0FBc0M7QUFDdEMsNkRBQTBEO0FBRTFEOztHQUVHO0FBQ0g7SUFPSTs7OztPQUlHO0lBQ0gsWUFBWSxTQUFxQixFQUFFLGVBQThCLElBQUksMkJBQVksRUFBRTtRQUMvRSxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztJQUN0QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLHlCQUF5QjtRQUNsQyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakQsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQUksQ0FBQyxNQUFNLENBQUMsZUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ks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