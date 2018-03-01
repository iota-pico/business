Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("@iota-pico/core/dist/helpers/arrayHelper");
const spongeFactory_1 = require("@iota-pico/crypto/dist/factories/spongeFactory");
const hash_1 = require("@iota-pico/data/dist/data/hash");
const signatureFragment_1 = require("@iota-pico/data/dist/data/signatureFragment");
const tag_1 = require("@iota-pico/data/dist/data/tag");
const transaction_1 = require("@iota-pico/data/dist/data/transaction");
const trits_1 = require("@iota-pico/data/dist/data/trits");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const tryteNumber_1 = require("../../../iota-pico-data/dist/data/tryteNumber");
const hmacCurl_1 = require("./hmacCurl");
const transactionSigning_1 = require("./transactionSigning");
/**
 * Helper class for signing bundles.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */
class BundleSigning {
    /* @internal */
    static signInputsAndReturn(seed, bundle, transferOptions, signatureFragments, inputs, addedHMAC) {
        BundleSigning.finalizeBundle(bundle);
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
                        keySecurity = inputs[k].security ? inputs[k].security : transferOptions.security;
                        break;
                    }
                }
                const bundleHash = bundle.transactions[i].bundle;
                // Get corresponding private key of address
                const key = transactionSigning_1.TransactionSigning.key(seed, keyIndex, keySecurity);
                //  Get the normalized bundle hash
                const normalizedBundleHash = BundleSigning.normalizedBundle(bundleHash);
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
                bundle.transactions[i].signatureMessageFragment = signatureFragment_1.SignatureFragment.fromTrytes(trits_1.Trits.fromArray(firstSignedFragment).toTrytes());
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
                        bundle.transactions[i + j].signatureMessageFragment = signatureFragment_1.SignatureFragment.fromTrytes(trits_1.Trits.fromArray(nextSignedFragment).toTrytes());
                    }
                }
            }
        }
        if (addedHMAC) {
            const hmac = new hmacCurl_1.HmacCurl(transferOptions.hmacKey);
            hmac.addHMAC(bundle);
        }
        return bundle.transactions.reverse();
    }
    /* @internal */
    static finalizeBundle(bundle) {
        let validBundle = false;
        while (!validBundle) {
            const kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
            kerl.initialize();
            for (let i = 0; i < bundle.transactions.length; i++) {
                bundle.transactions[i].currentIndex = tryteNumber_1.TryteNumber.fromNumber(i);
                bundle.transactions[i].lastIndex = tryteNumber_1.TryteNumber.fromNumber(bundle.transactions.length - 1);
                const bundleEssence = trits_1.Trits.fromTrytes(trytes_1.Trytes.fromString(bundle.transactions[i].address.toTrytes().toString()
                    + bundle.transactions[i].value.toTrytes().toString() + transaction_1.Transaction.CHECK_VALUE
                    + bundle.transactions[i].obsoleteTag.toTrytes().toString()
                    + bundle.transactions[i].timestamp.toTrytes().toString()
                    + bundle.transactions[i].currentIndex.toTrytes().toString()
                    + bundle.transactions[i].lastIndex.toTrytes().toString())).toArray();
                kerl.absorb(bundleEssence, 0, bundleEssence.length);
            }
            const hashTrits = new Int8Array(kerl.getConstants().HASH_LENGTH);
            kerl.squeeze(hashTrits, 0, hashTrits.length);
            const hash = hash_1.Hash.fromTrytes(trits_1.Trits.fromArray(hashTrits).toTrytes());
            for (let i = 0; i < bundle.transactions.length; i++) {
                bundle.transactions[i].bundle = hash;
            }
            const normalizedHash = this.normalizedBundle(hash);
            if (normalizedHash.indexOf(13 /* = M */) !== -1) {
                // Insecure bundle. Increment Tag and recompute bundle hash.
                const increasedTag = trits_1.Trits.add(trits_1.Trits.fromTrytes(bundle.transactions[0].obsoleteTag.toTrytes()), trits_1.Trits.fromNumberArray([1]));
                bundle.transactions[0].obsoleteTag = tag_1.Tag.fromTrytes(increasedTag.toTrytes());
            }
            else {
                validBundle = true;
            }
        }
    }
    /* @internal */
    static normalizedBundle(bundleHash) {
        const normalizedBundle = new Int8Array(4 * 27);
        const hashString = bundleHash.toTrytes().toString();
        for (let i = 0; i < 3; i++) {
            let sum = 0;
            for (let j = 0; j < 27; j++) {
                const hashChar = hashString.charAt(i * 27 + j);
                const val = trits_1.Trits.fromTrytes(trytes_1.Trytes.fromString(hashChar)).toNumber();
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
    /* @internal */
    static isValid(transactions) {
        let isValid = false;
        if (arrayHelper_1.ArrayHelper.isTyped(transactions, transaction_1.Transaction)) {
            let totalSum = 0;
            const kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
            kerl.initialize();
            // Prepare for signature validation
            const signaturesToValidate = [];
            isValid = true;
            for (let t = 0; t < transactions.length && isValid; t++) {
                const bundleTx = transactions[t];
                totalSum += bundleTx.value.toNumber();
                // currentIndex has to be equal to the index in the array
                if (bundleTx.currentIndex.toNumber() !== t) {
                    isValid = false;
                }
                else {
                    // Get the transaction trytes
                    const thisTxTrytes = bundleTx.toTrytes();
                    // Absorb bundle hash + value + timestamp + lastIndex + currentIndex trytes.
                    const thisTxTrits = trits_1.Trits.fromTrytes(thisTxTrytes.sub(signatureFragment_1.SignatureFragment.LENGTH, 162)).toArray();
                    kerl.absorb(thisTxTrits, 0, thisTxTrits.length);
                    // Check if input transaction
                    if (bundleTx.value.toNumber() < 0) {
                        const newSignatureToValidate = {
                            address: bundleTx.address,
                            signatureFragments: [bundleTx.signatureMessageFragment]
                        };
                        // Find the subsequent txs with the remaining signature fragment
                        for (let i = t; i < transactions.length - 1; i++) {
                            const newBundleTx = transactions[i + 1];
                            // Check if new tx is part of the signature fragment
                            if (newBundleTx.address.toTrytes().toString() === bundleTx.address.toTrytes().toString()
                                && newBundleTx.value.toNumber() === 0) {
                                newSignatureToValidate.signatureFragments.push(newBundleTx.signatureMessageFragment);
                            }
                        }
                        signaturesToValidate.push(newSignatureToValidate);
                    }
                }
            }
            // Check for total sum, if not equal 0 return error
            if (totalSum !== 0) {
                isValid = false;
            }
            else {
                // get the bundle hash from the bundle transactions
                const bundleFromTxs = new Int8Array(kerl.getConstants().HASH_LENGTH);
                kerl.squeeze(bundleFromTxs, 0, bundleFromTxs.length);
                const bundleFromTxsTrytes = trits_1.Trits.fromArray(bundleFromTxs).toTrytes().toString();
                // Check if bundle hash is the same as returned by tx object
                const bundleHash = transactions[0].bundle;
                if (bundleFromTxsTrytes !== bundleHash.toTrytes().toString()) {
                    isValid = false;
                }
                else {
                    // Last tx in the bundle should have currentIndex === lastIndex
                    if (transactions[transactions.length - 1].currentIndex.toNumber() !== transactions[transactions.length - 1].lastIndex.toNumber()) {
                        isValid = false;
                    }
                    else {
                        // Validate the signatures
                        for (let i = 0; i < signaturesToValidate.length && isValid; i++) {
                            const isValidSignature = BundleSigning.validateSignatures(signaturesToValidate[i].address, signaturesToValidate[i].signatureFragments, bundleHash);
                            if (!isValidSignature) {
                                isValid = false;
                            }
                        }
                    }
                }
            }
        }
        return isValid;
    }
    /* @internal */
    static validateSignatures(expectedAddress, signatureFragments, bundleHash) {
        const normalizedBundleFragments = [];
        const normalizedBundleHash = BundleSigning.normalizedBundle(bundleHash);
        // Split hash into 3 fragments
        for (let f = 0; f < 3; f++) {
            normalizedBundleFragments[f] = normalizedBundleHash.slice(f * 27, (f + 1) * 27);
        }
        // Get digests
        const digests = new Int8Array(signatureFragments.length * 243);
        for (let i = 0; i < signatureFragments.length; i++) {
            const digestBuffer = BundleSigning.digest(normalizedBundleFragments[i % 3], trits_1.Trits.fromTrytes(signatureFragments[i].toTrytes()).toArray());
            for (let j = 0; j < 243; j++) {
                digests[i * 243 + j] = digestBuffer[j];
            }
        }
        return expectedAddress.toTrytes().toString() === trits_1.Trits.fromArray(BundleSigning.address(digests)).toTrytes().toString();
    }
    /* @internal */
    static digest(normalizedBundleFragment, signatureFragmentTrits) {
        let buffer;
        const kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
        kerl.initialize();
        for (let i = 0; i < 27; i++) {
            buffer = new Int8Array(signatureFragmentTrits.slice(i * 243, (i + 1) * 243));
            for (let j = normalizedBundleFragment[i] + 13; j-- > 0;) {
                const jKerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
                jKerl.initialize();
                jKerl.absorb(buffer, 0, buffer.length);
                jKerl.squeeze(buffer, 0, jKerl.getConstants().HASH_LENGTH);
            }
            kerl.absorb(buffer, 0, buffer.length);
        }
        kerl.squeeze(buffer, 0, kerl.getConstants().HASH_LENGTH);
        return buffer;
    }
    /* @internal */
    static address(digests) {
        const kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
        kerl.initialize();
        kerl.absorb(digests, 0, digests.length);
        const addressTrits = new Int8Array(kerl.getConstants().HASH_LENGTH);
        kerl.squeeze(addressTrits, 0, addressTrits.length);
        return addressTrits;
    }
    /* @internal */
    static transactionHash(transaction) {
        const curl = spongeFactory_1.SpongeFactory.instance().create("curl");
        const transactionTrits = trits_1.Trits.fromTrytes(transaction.toTrytes()).toArray();
        curl.initialize();
        curl.absorb(transactionTrits, 0, transactionTrits.length);
        const hashTrits = new Int8Array(curl.getConstants().HASH_LENGTH);
        curl.squeeze(hashTrits, 0, hashTrits.length);
        return hash_1.Hash.fromTrytes(trits_1.Trits.fromArray(hashTrits).toTrytes());
    }
}
exports.BundleSigning = BundleSigning;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlU2lnbmluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2FjdGlvbnMvYnVuZGxlU2lnbmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEVBQXVFO0FBQ3ZFLGtGQUErRTtBQUcvRSx5REFBc0Q7QUFFdEQsbUZBQWdGO0FBQ2hGLHVEQUFvRDtBQUNwRCx1RUFBb0U7QUFDcEUsMkRBQXdEO0FBQ3hELDZEQUEwRDtBQUMxRCwrRUFBNEU7QUFFNUUseUNBQXNDO0FBQ3RDLDZEQUEwRDtBQUUxRDs7O0dBR0c7QUFDSDtJQUNJLGVBQWU7SUFDUixNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBVSxFQUFFLE1BQWMsRUFBRSxlQUFnQyxFQUFFLGtCQUF1QyxFQUFFLE1BQWUsRUFBRSxTQUFrQjtRQUN4SyxhQUFhLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRWpELHFCQUFxQjtRQUNyQixFQUFFO1FBQ0YsK0NBQStDO1FBQy9DLHlEQUF5RDtRQUN6RCx5RUFBeUU7UUFDekUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2xELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2dCQUVuRCw2REFBNkQ7Z0JBQzdELElBQUksUUFBUSxDQUFDO2dCQUNiLElBQUksV0FBVyxDQUFDO2dCQUNoQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMs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