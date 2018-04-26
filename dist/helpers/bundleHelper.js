Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("@iota-pico/core/dist/helpers/arrayHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const spongeFactory_1 = require("@iota-pico/crypto/dist/factories/spongeFactory");
const iss_1 = require("@iota-pico/crypto/dist/hash/iss");
const address_1 = require("@iota-pico/data/dist/data/address");
const bundle_1 = require("@iota-pico/data/dist/data/bundle");
const hash_1 = require("@iota-pico/data/dist/data/hash");
const signatureMessageFragment_1 = require("@iota-pico/data/dist/data/signatureMessageFragment");
const tag_1 = require("@iota-pico/data/dist/data/tag");
const transaction_1 = require("@iota-pico/data/dist/data/transaction");
const trits_1 = require("@iota-pico/data/dist/data/trits");
const tryteNumber_1 = require("@iota-pico/data/dist/data/tryteNumber");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const hmacCurl_1 = require("../sign/hmacCurl");
/**
 * Helper class for signing bundles.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */
class BundleHelper {
    /**
     * Is the bundle valid.
     * @param bundle The bundle to check for validity.
     * @returns True if the bundle is valid.
     */
    static isValid(bundle) {
        let isValid = false;
        if (objectHelper_1.ObjectHelper.isType(bundle, bundle_1.Bundle) && arrayHelper_1.ArrayHelper.isTyped(bundle.transactions, transaction_1.Transaction)) {
            let totalSum = 0;
            const kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
            kerl.initialize();
            // Prepare for signature validation
            const signaturesToValidate = [];
            isValid = true;
            for (let t = 0; t < bundle.transactions.length && isValid; t++) {
                const bundleTx = bundle.transactions[t];
                totalSum += bundleTx.value.toNumber();
                // currentIndex has to be equal to the index in the array
                if (bundleTx.currentIndex.toNumber() !== t) {
                    isValid = false;
                }
                else {
                    // Get the transaction trytes
                    const thisTxTrytes = bundleTx.toTrytes();
                    // Absorb bundle hash + value + timestamp + lastIndex + currentIndex trytes.
                    const thisTxTrits = trits_1.Trits.fromTrytes(thisTxTrytes.sub(signatureMessageFragment_1.SignatureMessageFragment.LENGTH, 162)).toArray();
                    kerl.absorb(thisTxTrits, 0, thisTxTrits.length);
                    // Check if input transaction
                    if (bundleTx.value.toNumber() < 0) {
                        const newSignatureToValidate = {
                            address: bundleTx.address,
                            signatureMessageFragments: [bundleTx.signatureMessageFragment]
                        };
                        // Find the subsequent txs with the remaining signature fragment
                        for (let i = t; i < bundle.transactions.length - 1; i++) {
                            const newBundleTx = bundle.transactions[i + 1];
                            // Check if new tx is part of the signature fragment
                            if (newBundleTx.address.toTrytes().toString() === bundleTx.address.toTrytes().toString()
                                && newBundleTx.value.toNumber() === 0) {
                                newSignatureToValidate.signatureMessageFragments.push(newBundleTx.signatureMessageFragment);
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
                const bundleFromTxs = new Int8Array(kerl.getConstant("HASH_LENGTH"));
                kerl.squeeze(bundleFromTxs, 0, bundleFromTxs.length);
                const bundleFromTxsTrytes = trits_1.Trits.fromArray(bundleFromTxs).toTrytes().toString();
                // Check if bundle hash is the same as returned by tx object
                const bundleHash = bundle.transactions[0].bundle;
                if (bundleFromTxsTrytes !== bundleHash.toTrytes().toString()) {
                    isValid = false;
                }
                else {
                    // Last tx in the bundle should have currentIndex === lastIndex
                    if (bundle.transactions[bundle.transactions.length - 1].currentIndex.toNumber() !==
                        bundle.transactions[bundle.transactions.length - 1].lastIndex.toNumber()) {
                        isValid = false;
                    }
                    else {
                        // Validate the signatures
                        for (let i = 0; i < signaturesToValidate.length && isValid; i++) {
                            const isValidSignature = iss_1.ISS.validateSignatures(signaturesToValidate[i].address, signaturesToValidate[i].signatureMessageFragments, bundleHash);
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
    /**
     * Validate signatures for each of the co-signers in the multi-signature to independently verify that a generated
     * transaction with the corresponding signatures of the co-signers is valid.
     * @param signedBundle The signed bundle to check the signatures.
     * @param inputAddress The address used to initiate the transfer.
     * @returns True is the signatures are valid.
     */
    static validateSignatures(signedBundle, inputAddress) {
        let isValid = false;
        if (objectHelper_1.ObjectHelper.isType(signedBundle, bundle_1.Bundle) &&
            arrayHelper_1.ArrayHelper.isTyped(signedBundle.transactions, transaction_1.Transaction) &&
            objectHelper_1.ObjectHelper.isType(inputAddress, address_1.Address)) {
            let bundleHash;
            const signatureFragments = [];
            const inputAddressTrytes = inputAddress.toTrytes().toString();
            for (let i = 0; i < signedBundle.transactions.length; i++) {
                if (signedBundle.transactions[i].address.toTrytes().toString() === inputAddressTrytes) {
                    bundleHash = signedBundle.transactions[i].bundle;
                    // if we reached remainder bundle
                    if (signedBundle.transactions[i].signatureMessageFragment.toTrytes().toString() ===
                        signatureMessageFragment_1.SignatureMessageFragment.EMPTY.toTrytes().toString()) {
                        break;
                    }
                    signatureFragments.push(signedBundle.transactions[i].signatureMessageFragment);
                }
            }
            if (bundleHash) {
                isValid = iss_1.ISS.validateSignatures(inputAddress, signatureFragments, bundleHash);
            }
        }
        return isValid;
    }
    /**
     * Prepare a bundle.
     * @param timeService To use for stamping the transactions.
     * @param transfers The transfers to add to the bundle.
     * @returns Bundle information.
     */
    static prepareBundle(timeService, transfers) {
        const bundle = new bundle_1.Bundle();
        let lastTag;
        let totalValue = 0;
        const signatureMessageFragments = [];
        //  Iterate over all transfers, get totalValue
        //  and prepare the Messages, message and tag
        for (let i = 0; i < transfers.length; i++) {
            let signatureMessageLength = 1;
            // If message longer than 2187 trytes, increase signatureMessageLength (add 2nd transaction)
            const messageString = transfers[i].message.toString();
            if (messageString.length > signatureMessageFragment_1.SignatureMessageFragment.LENGTH) {
                // Get total length, message / maxLength (2187 trytes)
                signatureMessageLength += Math.floor(messageString.length / signatureMessageFragment_1.SignatureMessageFragment.LENGTH);
                let msgCopy = messageString;
                // While there is still a message, copy it
                while (msgCopy) {
                    let fragment = msgCopy.slice(0, signatureMessageFragment_1.SignatureMessageFragment.LENGTH);
                    msgCopy = msgCopy.slice(signatureMessageFragment_1.SignatureMessageFragment.LENGTH, msgCopy.length);
                    // Pad remainder of fragment
                    for (let j = 0; fragment.length < signatureMessageFragment_1.SignatureMessageFragment.LENGTH; j++) {
                        fragment += "9";
                    }
                    signatureMessageFragments.push(signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString(fragment)));
                }
            }
            else {
                // Else, get single fragment with 2187 of 9's trytes
                let fragment = "";
                if (messageString) {
                    fragment = messageString.slice(0, signatureMessageFragment_1.SignatureMessageFragment.LENGTH);
                }
                for (let j = 0; fragment.length < signatureMessageFragment_1.SignatureMessageFragment.LENGTH; j++) {
                    fragment += "9";
                }
                signatureMessageFragments.push(signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString(fragment)));
            }
            // get current timestamp in seconds
            const timestamp = Math.floor(timeService.msSinceEpoch() / 1000);
            lastTag = transfers[i].tag;
            // Add first entries to the bundle
            bundle.addTransactions(signatureMessageLength, transfers[i].address, transfers[i].value, transfers[i].tag, timestamp);
            // Sum up total value
            totalValue += transfers[i].value;
        }
        return { bundle, totalValue, lastTag, signatureMessageFragments };
    }
    /**
     * Sign the input of the bundle.
     * @param seed The seed to use for signing.
     * @param bundle The bundle to sign.
     * @param transferOptions Additional transfer options.
     * @param signatureMessageFragments The signature message fragemtns.
     * @param inputs The input for use.
     * @param addedHMAC Has an HMAC been added.
     */
    static signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, addedHMAC) {
        BundleHelper.finalizeBundle(bundle);
        bundle.addSignatureMessageFragments(signatureMessageFragments);
        //  Here we do the actual signing of the inputs
        //  Iterate over all bundle transactions, find the inputs
        //  Get the corresponding private key and calculate the signatureMessageFragment
        for (let i = 0; i < bundle.transactions.length; i++) {
            if (bundle.transactions[i].value.toNumber() < 0) {
                const addressTrytes = bundle.transactions[i].address.toTrytes().toString();
                // Get the corresponding keyIndex and security of the address
                let keyIndex;
                let keySecurity;
                for (let k = 0; k < inputs.length; k++) {
                    if (inputs[k].address.toTrytes().toString() === addressTrytes) {
                        keyIndex = inputs[k].keyIndex;
                        keySecurity = inputs[k].security ? inputs[k].security : transferOptions.security;
                        break;
                    }
                }
                // Get corresponding private key of address
                const key = iss_1.ISS.key(seed, keyIndex, keySecurity);
                BundleHelper.signTransactions(bundle, i, 0, key, addressTrytes, keySecurity);
            }
        }
        if (addedHMAC) {
            const hmac = new hmacCurl_1.HmacCurl(transferOptions.hmacKey);
            hmac.addHMAC(bundle);
        }
    }
    /**
     * Sign the trsnactions
     * @param bundle The bundle of transactions to sign.
     * @param index The index to start.
     * @param firstUnsignedIndex The first unsigned index.
     * @param keyTrits The key trits.
     * @param addressTrytes The address trytes.
     * @param security The security level.
     */
    static signTransactions(bundle, index, firstUnsignedIndex, keyTrits, addressTrytes, security) {
        const bundleHash = bundle.transactions[index].bundle;
        //  Get the normalized bundle hash
        const normalizedBundleHash = iss_1.ISS.normalizedBundle(bundleHash);
        const normalizedBundleFragments = [];
        // Split hash into 3 fragments
        for (let l = 0; l < 3; l++) {
            normalizedBundleFragments[l] = normalizedBundleHash.slice(l * 27, (l + 1) * 27);
        }
        //  First 6561 trits for the firstFragment
        const firstFragment = keyTrits.slice(0, 6561);
        //  First bundle fragment uses the first 27 trytes
        const firstBundleFragment = normalizedBundleFragments[firstUnsignedIndex];
        //  Calculate the new signatureMessageFragment with the first bundle fragment
        const firstSignedFragment = iss_1.ISS.signatureMessageFragment(firstBundleFragment, firstFragment);
        //  Convert signature to trytes and assign the new signatureMessageFragment
        bundle.transactions[index].signatureMessageFragment = signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trits_1.Trits.fromArray(firstSignedFragment).toTrytes());
        // if user chooses higher than 27-tryte security
        // for each security level, add an additional signature
        for (let j = 1; j < security; j++) {
            //  Because the signature is > 2187 trytes, we need to
            //  find the subsequent transaction to add the remainder of the signature
            //  Same address as well as value = 0 (as we already spent the input)
            if (bundle.transactions[index + j].address.toTrytes().toString() === addressTrytes
                && bundle.transactions[index + j].value.toNumber() === 0) {
                // Use the next 6561 trits
                const nextFragment = keyTrits.slice(6561 * j, (j + 1) * 6561);
                const nextBundleFragment = normalizedBundleFragments[j];
                //  Calculate the new signature
                const nextSignedFragment = iss_1.ISS.signatureMessageFragment(nextBundleFragment, nextFragment);
                //  Convert signature to trytes and assign it again to this bundle entry
                bundle.transactions[index + j].signatureMessageFragment = signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trits_1.Trits.fromArray(nextSignedFragment).toTrytes());
            }
        }
    }
    /**
     * Finalize a bundle.
     * @param bundle The bundle to finalize.
     */
    static finalizeBundle(bundle) {
        if (bundle.transactions.length > 0) {
            let validBundle = false;
            while (!validBundle) {
                const kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
                kerl.initialize();
                for (let i = 0; i < bundle.transactions.length; i++) {
                    bundle.transactions[i].currentIndex = tryteNumber_1.TryteNumber.fromNumber(i);
                    bundle.transactions[i].lastIndex = tryteNumber_1.TryteNumber.fromNumber(bundle.transactions.length - 1);
                    // tslint:disable:restrict-plus-operands false positive
                    const bundleEssence = trits_1.Trits.fromTrytes(trytes_1.Trytes.fromString(bundle.transactions[i].address.toTrytes().toString()
                        + bundle.transactions[i].value.toTrytes().toString()
                        + transaction_1.Transaction.CHECK_VALUE
                        + bundle.transactions[i].obsoleteTag.toTrytes().toString()
                        + bundle.transactions[i].timestamp.toTrytes().toString()
                        + bundle.transactions[i].currentIndex.toTrytes().toString()
                        + bundle.transactions[i].lastIndex.toTrytes().toString())).toArray();
                    kerl.absorb(bundleEssence, 0, bundleEssence.length);
                }
                const hashTrits = new Int8Array(kerl.getConstant("HASH_LENGTH"));
                kerl.squeeze(hashTrits, 0, hashTrits.length);
                const hash = hash_1.Hash.fromTrytes(trits_1.Trits.fromArray(hashTrits).toTrytes());
                for (let i = 0; i < bundle.transactions.length; i++) {
                    bundle.transactions[i].bundle = hash;
                }
                const normalizedHash = iss_1.ISS.normalizedBundle(hash);
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
    }
}
BundleHelper.NUMBER_OF_FRAGMENT_CHUNKS = 27;
exports.BundleHelper = BundleHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlSGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hlbHBlcnMvYnVuZGxlSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwRUFBdUU7QUFDdkUsNEVBQXlFO0FBRXpFLGtGQUErRTtBQUMvRSx5REFBc0Q7QUFDdEQsK0RBQTREO0FBRTVELDZEQUEwRDtBQUMxRCx5REFBc0Q7QUFFdEQsaUdBQThGO0FBQzlGLHVEQUFvRDtBQUNwRCx1RUFBb0U7QUFFcEUsMkRBQXdEO0FBQ3hELHVFQUFvRTtBQUNwRSw2REFBMEQ7QUFDMUQsK0NBQTRDO0FBRzVDOzs7R0FHRztBQUNIO0lBR0k7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBYztRQUNoQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFcEIsSUFBSSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsZUFBTSxDQUFDLElBQUkseUJBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSx5QkFBVyxDQUFDLEVBQUU7WUFDOUYsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBRWpCLE1BQU0sSUFBSSxHQUFHLDZCQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUVsQixtQ0FBbUM7WUFDbkMsTUFBTSxvQkFBb0IsR0FBa0YsRUFBRSxDQUFDO1lBRS9HLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1RCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxRQUFRLElBQUksUUFBUSxD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