"use strict";
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
        const nullHashTrytes = "9".repeat(244);
        const addHMAC = false;
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
