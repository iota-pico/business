Object.defineProperty(exports, "__esModule", { value: true });
const tritsHasherFactory_1 = require("@iota-pico/crypto/dist/factories/tritsHasherFactory");
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
            const hmac = new hmacCurl_1.HmacCurl(transferOptions.hmacKey);
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
    static finalizeBundle(bundle) {
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
    static normalizedBundle(bundleHash) {
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
    /* @internal */
    static isValid(transactions) {
        let isValid = false;
        if (transactions !== undefined && transactions !== null && transactions.length > 0) {
            let totalSum = 0;
            const kerl = tritsHasherFactory_1.TritsHasherFactory.instance().create("kerl");
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
                    const thisTxTrits = trits_1.Trits.fromTrytes(thisTxTrytes.sub(2187, 162)).toArray();
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
                const bundleFromTxs = [];
                kerl.squeeze(bundleFromTxs, 0, kerl.getConstants().HASH_LENGTH);
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
        const digests = [];
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
        let buffer = [];
        const kerl = tritsHasherFactory_1.TritsHasherFactory.instance().create("kerl");
        kerl.initialize();
        for (let i = 0; i < 27; i++) {
            buffer = signatureFragmentTrits.slice(i * 243, (i + 1) * 243);
            for (let j = normalizedBundleFragment[i] + 13; j-- > 0;) {
                const jKerl = tritsHasherFactory_1.TritsHasherFactory.instance().create("kerl");
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
        const addressTrits = [];
        const kerl = tritsHasherFactory_1.TritsHasherFactory.instance().create("kerl");
        kerl.initialize();
        kerl.absorb(digests, 0, digests.length);
        kerl.squeeze(addressTrits, 0, kerl.getConstants().HASH_LENGTH);
        return addressTrits;
    }
    /* @internal */
    static transactionHash(transaction) {
        const hashTrits = [];
        const curl = tritsHasherFactory_1.TritsHasherFactory.instance().create("curl");
        const transactionTrits = trits_1.Trits.fromTrytes(transaction.toTrytes()).toArray();
        curl.initialize();
        curl.absorb(transactionTrits, 0, transactionTrits.length);
        curl.squeeze(hashTrits, 0, curl.getConstants().HASH_LENGTH);
        return hash_1.Hash.create(trits_1.Trits.fromArray(hashTrits).toTrytes());
    }
}
exports.BundleSigning = BundleSigning;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlU2lnbmluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90cmFuc2FjdGlvbnMvYnVuZGxlU2lnbmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNEZBQXlGO0FBR3pGLHlEQUFzRDtBQUV0RCxtRkFBZ0Y7QUFDaEYsdURBQW9EO0FBQ3BELHVFQUFvRTtBQUNwRSwyREFBd0Q7QUFDeEQsNkRBQTBEO0FBQzFELCtFQUE0RTtBQUU1RSx5Q0FBc0M7QUFDdEMsNkRBQTBEO0FBRTFEOztHQUVHO0FBQ0g7SUFDSSxlQUFlO0lBQ1IsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQVUsRUFBRSxNQUFjLEVBQUUsZUFBZ0MsRUFBRSxrQkFBdUMsRUFBRSxNQUFlLEVBQUUsU0FBa0I7UUFDeEssYUFBYSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUVqRCxxQkFBcUI7UUFDckIsRUFBRTtRQUNGLCtDQUErQztRQUMvQyx5REFBeUQ7UUFDekQseUVBQXlFO1FBQ3pFLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztnQkFFbkQsNkRBQTZEO2dCQUM3RCxJQUFJLFFBQVEsQ0FBQztnQkFDYixJQUFJLFdBQVcsQ0FBQztnQkFDaEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFF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