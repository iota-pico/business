import { ArrayHelper } from "@iota-pico/core/dist/helpers/arrayHelper";
import { SpongeFactory } from "@iota-pico/crypto/dist/factories/spongeFactory";
import { Address } from "@iota-pico/data/dist/data/address";
import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Input } from "@iota-pico/data/dist/data/input";
import { SignatureFragment } from "@iota-pico/data/dist/data/signatureFragment";
import { Tag } from "@iota-pico/data/dist/data/tag";
import { Transaction } from "@iota-pico/data/dist/data/transaction";
import { Trits } from "@iota-pico/data/dist/data/trits";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { TryteNumber } from "../../../iota-pico-data/dist/data/tryteNumber";
import { TransferOptions } from "../interfaces/transferOptions";
import { HmacCurl } from "./hmacCurl";
import { TransactionSigning } from "./transactionSigning";

/**
 * Helper class for signing bundles.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */
export class BundleSigning {
    /* @internal */
    public static signInputsAndReturn(seed: Hash, bundle: Bundle, transferOptions: TransferOptions, signatureFragments: SignatureFragment[], inputs: Input[], addedHMAC: boolean): Transaction[] {
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
                const key = TransactionSigning.key(seed, keyIndex, keySecurity);

                //  Get the normalized bundle hash
                const normalizedBundleHash = BundleSigning.normalizedBundle(bundleHash);
                const normalizedBundleFragments: Int8Array[] = [];

                // Split hash into 3 fragments
                for (let l = 0; l < 3; l++) {
                    normalizedBundleFragments[l] = normalizedBundleHash.slice(l * 27, (l + 1) * 27);
                }

                //  First 6561 trits for the firstFragment
                const firstFragment = key.slice(0, 6561);

                //  First bundle fragment uses the first 27 trytes
                const firstBundleFragment = normalizedBundleFragments[0];

                //  Calculate the new signatureFragment with the first bundle fragment
                const firstSignedFragment = TransactionSigning.signatureFragment(firstBundleFragment, firstFragment);

                //  Convert signature to trytes and assign the new signatureFragment
                bundle.transactions[i].signatureMessageFragment = SignatureFragment.fromTrytes(Trits.fromArray(firstSignedFragment).toTrytes());

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
                        const nextSignedFragment = TransactionSigning.signatureFragment(nextBundleFragment, nextFragment);

                        //  Convert signature to trytes and assign it again to this bundle entry
                        bundle.transactions[i + j].signatureMessageFragment = SignatureFragment.fromTrytes(Trits.fromArray(nextSignedFragment).toTrytes());
                    }
                }
            }
        }

        if (addedHMAC) {
            const hmac = new HmacCurl(transferOptions.hmacKey);
            hmac.addHMAC(bundle);
        }

        return bundle.transactions.reverse();
    }

    /* @internal */
    public static finalizeBundle(bundle: Bundle): void {
        let validBundle = false;

        while (!validBundle) {

            const kerl = SpongeFactory.instance().create("kerl");
            kerl.initialize();

            for (let i = 0; i < bundle.transactions.length; i++) {
                bundle.transactions[i].currentIndex = TryteNumber.fromNumber(i);
                bundle.transactions[i].lastIndex = TryteNumber.fromNumber(bundle.transactions.length - 1);

                const bundleEssence = Trits.fromTrytes(Trytes.fromString(
                    bundle.transactions[i].address.toTrytes().toString()
                    + bundle.transactions[i].value.toTrytes().toString() + Transaction.CHECK_VALUE
                    + bundle.transactions[i].obsoleteTag.toTrytes().toString()
                    + bundle.transactions[i].timestamp.toTrytes().toString()
                    + bundle.transactions[i].currentIndex.toTrytes().toString()
                    + bundle.transactions[i].lastIndex.toTrytes().toString()
                )).toArray();
                kerl.absorb(bundleEssence, 0, bundleEssence.length);
            }

            const hashTrits = new Int8Array(kerl.getConstants().HASH_LENGTH);
            kerl.squeeze(hashTrits, 0, hashTrits.length);

            const hash = Hash.fromTrytes(Trits.fromArray(hashTrits).toTrytes());
            for (let i = 0; i < bundle.transactions.length; i++) {
                bundle.transactions[i].bundle = hash;
            }

            const normalizedHash = this.normalizedBundle(hash);
            if (normalizedHash.indexOf(13 /* = M */) !== -1) {
                // Insecure bundle. Increment Tag and recompute bundle hash.
                const increasedTag = Trits.add(Trits.fromTrytes(bundle.transactions[0].obsoleteTag.toTrytes()), Trits.fromNumberArray([1]));
                bundle.transactions[0].obsoleteTag = Tag.fromTrytes(increasedTag.toTrytes());
            } else {
                validBundle = true;
            }
        }
    }

    /* @internal */
    public static normalizedBundle(bundleHash: Hash): Int8Array {
        const normalizedBundle = new Int8Array(4 * 27);
        const hashString = bundleHash.toTrytes().toString();

        for (let i = 0; i < 3; i++) {
            let sum = 0;
            for (let j = 0; j < 27; j++) {
                const hashChar = hashString.charAt(i * 27 + j);
                const val = Trits.fromTrytes(Trytes.fromString(hashChar)).toNumber();
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
            } else {
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
    public static isValid(transactions: Transaction[]): boolean {
        let isValid = false;

        if (ArrayHelper.isTyped(transactions, Transaction)) {
            let totalSum = 0;

            const kerl = SpongeFactory.instance().create("kerl");
            kerl.initialize();

            // Prepare for signature validation
            const signaturesToValidate: { address: Address; signatureFragments: SignatureFragment[] }[] = [];

            isValid = true;
            for (let t = 0; t < transactions.length && isValid; t++) {
                const bundleTx = transactions[t];
                totalSum += bundleTx.value.toNumber();

                // currentIndex has to be equal to the index in the array
                if (bundleTx.currentIndex.toNumber() !== t) {
                    isValid = false;
                } else {
                    // Get the transaction trytes
                    const thisTxTrytes = bundleTx.toTrytes();

                    // Absorb bundle hash + value + timestamp + lastIndex + currentIndex trytes.
                    const thisTxTrits = Trits.fromTrytes(thisTxTrytes.sub(SignatureFragment.LENGTH, 162)).toArray();
                    kerl.absorb(thisTxTrits, 0, thisTxTrits.length);

                    // Check if input transaction
                    if (bundleTx.value.toNumber() < 0) {
                        const newSignatureToValidate: { address: Address; signatureFragments: SignatureFragment[] } = {
                            address: bundleTx.address,
                            signatureFragments: [ bundleTx.signatureMessageFragment ]
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
            } else {
                // get the bundle hash from the bundle transactions
                const bundleFromTxs = new Int8Array(kerl.getConstants().HASH_LENGTH);
                kerl.squeeze(bundleFromTxs, 0, bundleFromTxs.length);

                const bundleFromTxsTrytes = Trits.fromArray(bundleFromTxs).toTrytes().toString();

                // Check if bundle hash is the same as returned by tx object
                const bundleHash = transactions[0].bundle;
                if (bundleFromTxsTrytes !== bundleHash.toTrytes().toString()) {
                    isValid = false;
                } else {
                    // Last tx in the bundle should have currentIndex === lastIndex
                    if (transactions[transactions.length - 1].currentIndex.toNumber() !== transactions[transactions.length - 1].lastIndex.toNumber()) {
                        isValid = false;
                    } else {
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
    public static validateSignatures(expectedAddress: Address, signatureFragments: SignatureFragment[], bundleHash: Hash): boolean {
        const normalizedBundleFragments = [];
        const normalizedBundleHash = BundleSigning.normalizedBundle(bundleHash);

        // Split hash into 3 fragments
        for (let f = 0; f < 3; f++) {
            normalizedBundleFragments[f] = normalizedBundleHash.slice(f * 27, (f + 1) * 27);
        }

        // Get digests
        const digests = new Int8Array(signatureFragments.length * 243);

        for (let i = 0; i < signatureFragments.length; i++) {
            const digestBuffer = BundleSigning.digest(normalizedBundleFragments[i % 3], Trits.fromTrytes(signatureFragments[i].toTrytes()).toArray());

            for (let j = 0; j < 243; j++) {
                digests[i * 243 + j] = digestBuffer[j];
            }
        }

        return expectedAddress.toTrytes().toString() === Trits.fromArray(BundleSigning.address(digests)).toTrytes().toString();
    }

    /* @internal */
    public static digest(normalizedBundleFragment: Int8Array, signatureFragmentTrits: Int8Array): Int8Array {
        let buffer: Int8Array;

        const kerl = SpongeFactory.instance().create("kerl");
        kerl.initialize();

        for (let i = 0; i < 27; i++) {
            buffer = new Int8Array(signatureFragmentTrits.slice(i * 243, (i + 1) * 243));

            for (let j = normalizedBundleFragment[i] + 13; j-- > 0;) {
                const jKerl = SpongeFactory.instance().create("kerl");

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
    public static address(digests: Int8Array): Int8Array {
        const kerl = SpongeFactory.instance().create("kerl");

        kerl.initialize();
        kerl.absorb(digests, 0, digests.length);

        const addressTrits = new Int8Array(kerl.getConstants().HASH_LENGTH);
        kerl.squeeze(addressTrits, 0, addressTrits.length);

        return addressTrits;
    }

    /* @internal */
    public static transactionHash(transaction: Transaction): Hash {
        const curl = SpongeFactory.instance().create("curl");
        const transactionTrits = Trits.fromTrytes(transaction.toTrytes()).toArray();

        curl.initialize();
        curl.absorb(transactionTrits, 0, transactionTrits.length);
        const hashTrits = new Int8Array(curl.getConstants().HASH_LENGTH);
        curl.squeeze(hashTrits, 0, hashTrits.length);

        return Hash.fromTrytes(Trits.fromArray(hashTrits).toTrytes());
    }
}
