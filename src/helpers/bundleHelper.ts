import { ArrayHelper } from "@iota-pico/core/dist/helpers/arrayHelper";
import { ITimeService } from "@iota-pico/core/dist/interfaces/ITimeService";
import { SpongeFactory } from "@iota-pico/crypto/dist/factories/spongeFactory";
import { Address } from "@iota-pico/data/dist/data/address";
import { AddressSecurity } from "@iota-pico/data/dist/data/addressSecurity";
import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Input } from "@iota-pico/data/dist/data/input";
import { SignatureMessageFragment } from "@iota-pico/data/dist/data/signatureMessageFragment";
import { Tag } from "@iota-pico/data/dist/data/tag";
import { Transaction } from "@iota-pico/data/dist/data/transaction";
import { Transfer } from "@iota-pico/data/dist/data/transfer";
import { Trits } from "@iota-pico/data/dist/data/trits";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { TryteNumber } from "../../../iota-pico-data/dist/data/tryteNumber";
import { TransferOptions } from "../interfaces/transferOptions";
import { HmacCurl } from "../sign/hmacCurl";
import { Signing } from "../sign/signing";

/**
 * Helper class for signing bundles.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */
export class BundleHelper {
    public static prepareBundle(timeService: ITimeService, transfers: Transfer[]): {
        bundle: Bundle; totalValue: number; signatureMessageFragments: SignatureMessageFragment[]; lastTag: Tag; } {
        const bundle = new Bundle();
        let lastTag: Tag;

        let totalValue: number = 0;
        const signatureMessageFragments: SignatureMessageFragment[] = [];

        //  Iterate over all transfers, get totalValue
        //  and prepare the Messages, message and tag
        for (let i = 0; i < transfers.length; i++) {
            let signatureMessageLength = 1;

            // If message longer than 2187 trytes, increase signatureMessageLength (add 2nd transaction)
            const messageString = transfers[i].message.toString();
            if (messageString.length > SignatureMessageFragment.LENGTH) {
                // Get total length, message / maxLength (2187 trytes)
                signatureMessageLength += Math.floor(messageString.length / SignatureMessageFragment.LENGTH);

                let msgCopy = messageString;

                // While there is still a message, copy it
                while (msgCopy) {
                    let fragment = msgCopy.slice(0, SignatureMessageFragment.LENGTH);
                    msgCopy = msgCopy.slice(SignatureMessageFragment.LENGTH, msgCopy.length);

                    // Pad remainder of fragment
                    for (let j = 0; fragment.length < SignatureMessageFragment.LENGTH; j++) {
                        fragment += "9";
                    }

                    signatureMessageFragments.push(SignatureMessageFragment.fromTrytes(Trytes.fromString(fragment)));
                }
            } else {
                // Else, get single fragment with 2187 of 9's trytes
                let fragment = "";

                if (messageString) {
                    fragment = messageString.slice(0, SignatureMessageFragment.LENGTH);
                }

                for (let j = 0; fragment.length < SignatureMessageFragment.LENGTH; j++) {
                    fragment += "9";
                }

                signatureMessageFragments.push(SignatureMessageFragment.fromTrytes(Trytes.fromString(fragment)));
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

    /* @internal */
    public static signInputs(seed: Hash,
                             bundle: Bundle,
                             transferOptions: TransferOptions,
                             signatureMessageFragments: SignatureMessageFragment[],
                             inputs: Input[],
                             addedHMAC: boolean): void {
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
                const key = Signing.key(seed, keyIndex, keySecurity);

                BundleHelper.signTransactions(bundle, i, 0, key, addressTrytes, keySecurity);
            }
        }

        if (addedHMAC) {
            const hmac = new HmacCurl(transferOptions.hmacKey);
            hmac.addHMAC(bundle);
        }
    }

    /* @internal */
    public static signTransactions(bundle: Bundle, index: number, firstUnsignedIndex: number, keyTrits: Int8Array, addressTrytes: string, security: AddressSecurity): void {
        const bundleHash = bundle.transactions[index].bundle;

        //  Get the normalized bundle hash
        const normalizedBundleHash = BundleHelper.normalizedHash(bundleHash);
        const normalizedBundleFragments: Int8Array[] = [];

        // Split hash into 3 fragments
        for (let l = 0; l < 3; l++) {
            normalizedBundleFragments[l] = normalizedBundleHash.slice(l * 27, (l + 1) * 27);
        }

        //  First 6561 trits for the firstFragment
        const firstFragment = keyTrits.slice(0, 6561);

        //  First bundle fragment uses the first 27 trytes
        const firstBundleFragment = normalizedBundleFragments[firstUnsignedIndex];

        //  Calculate the new signatureMessageFragment with the first bundle fragment
        const firstSignedFragment = BundleHelper.signatureMessageFragment(firstBundleFragment, firstFragment);

        //  Convert signature to trytes and assign the new signatureMessageFragment
        bundle.transactions[index].signatureMessageFragment = SignatureMessageFragment.fromTrytes(Trits.fromArray(firstSignedFragment).toTrytes());

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
                const nextSignedFragment = BundleHelper.signatureMessageFragment(nextBundleFragment, nextFragment);

                //  Convert signature to trytes and assign it again to this bundle entry
                bundle.transactions[index + j].signatureMessageFragment = SignatureMessageFragment.fromTrytes(Trits.fromArray(nextSignedFragment).toTrytes());
            }
        }
    }

    /* @internal */
    public static finalizeBundle(bundle: Bundle): void {
        if (bundle.transactions.length > 0) {
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

                const normalizedHash = this.normalizedHash(hash);
                if (normalizedHash.indexOf(13 /* = M */) !== -1) {
                    // Insecure bundle. Increment Tag and recompute bundle hash.
                    const increasedTag = Trits.add(Trits.fromTrytes(bundle.transactions[0].obsoleteTag.toTrytes()), Trits.fromNumberArray([1]));
                    bundle.transactions[0].obsoleteTag = Tag.fromTrytes(increasedTag.toTrytes());
                } else {
                    validBundle = true;
                }
            }
        }
    }

    /* @internal */
    public static normalizedHash(bundleHash: Hash): Int8Array {
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
    public static isValid(bundle: Bundle): boolean {
        let isValid = false;

        if (ArrayHelper.isTyped(bundle.transactions, Transaction)) {
            let totalSum = 0;

            const kerl = SpongeFactory.instance().create("kerl");
            kerl.initialize();

            // Prepare for signature validation
            const signaturesToValidate: { address: Address; signatureMessageFragments: SignatureMessageFragment[] }[] = [];

            isValid = true;
            for (let t = 0; t < bundle.transactions.length && isValid; t++) {
                const bundleTx = bundle.transactions[t];
                totalSum += bundleTx.value.toNumber();

                // currentIndex has to be equal to the index in the array
                if (bundleTx.currentIndex.toNumber() !== t) {
                    isValid = false;
                } else {
                    // Get the transaction trytes
                    const thisTxTrytes = bundleTx.toTrytes();

                    // Absorb bundle hash + value + timestamp + lastIndex + currentIndex trytes.
                    const thisTxTrits = Trits.fromTrytes(thisTxTrytes.sub(SignatureMessageFragment.LENGTH, 162)).toArray();
                    kerl.absorb(thisTxTrits, 0, thisTxTrits.length);

                    // Check if input transaction
                    if (bundleTx.value.toNumber() < 0) {
                        const newSignatureToValidate: { address: Address; signatureMessageFragments: SignatureMessageFragment[] } = {
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
            } else {
                // get the bundle hash from the bundle transactions
                const bundleFromTxs = new Int8Array(kerl.getConstants().HASH_LENGTH);
                kerl.squeeze(bundleFromTxs, 0, bundleFromTxs.length);

                const bundleFromTxsTrytes = Trits.fromArray(bundleFromTxs).toTrytes().toString();

                // Check if bundle hash is the same as returned by tx object
                const bundleHash = bundle.transactions[0].bundle;
                if (bundleFromTxsTrytes !== bundleHash.toTrytes().toString()) {
                    isValid = false;
                } else {
                    // Last tx in the bundle should have currentIndex === lastIndex
                    if (bundle.transactions[bundle.transactions.length - 1].currentIndex.toNumber() !==
                            bundle.transactions[bundle.transactions.length - 1].lastIndex.toNumber()) {
                        isValid = false;
                    } else {
                        // Validate the signatures
                        for (let i = 0; i < signaturesToValidate.length && isValid; i++) {
                            const isValidSignature = Signing.validateSignatures(signaturesToValidate[i].address,
                                                                                signaturesToValidate[i].signatureMessageFragments,
                                                                                bundleHash);

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
    public static validateSignatures(signedBundle: Bundle, inputAddress: Address): boolean {
        let bundleHash;
        const signatureFragments = [];
        const inputAddressTrytes = inputAddress.toTrytes().toString();

        for (let i = 0; i < signedBundle.transactions.length; i++) {
            if (signedBundle.transactions[i].address.toTrytes().toString() === inputAddressTrytes) {
                bundleHash = signedBundle.transactions[i].bundle;

                // if we reached remainder bundle
                if (signedBundle.transactions[i].signatureMessageFragment.toTrytes().toString() ===
                    SignatureMessageFragment.EMPTY.toTrytes().toString()) {
                    break;
                }

                signatureFragments.push(signedBundle.transactions[i].signatureMessageFragment);
            }
        }

        if (!bundleHash) {
            return false;
        }

        return Signing.validateSignatures(inputAddress, signatureFragments, bundleHash);
    }

    /* @internal */
    public static digest(normalizedBundleFragment: Int8Array, signatureMessageFragmentTrits: Int8Array): Int8Array {
        let buffer: Int8Array;

        const kerl = SpongeFactory.instance().create("kerl");
        kerl.initialize();

        for (let i = 0; i < 27; i++) {
            buffer = new Int8Array(signatureMessageFragmentTrits.slice(i * 243, (i + 1) * 243));

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

    /* @internal */
    public static signatureMessageFragment(normalizedBundleFragment: Int8Array, keyFragment: Int8Array): Int8Array {
        const signatureMessageFragment = keyFragment.slice();
        let hash: Int8Array;

        const kerl = SpongeFactory.instance().create("kerl");
        const hashLength = kerl.getConstants().HASH_LENGTH;

        for (let i = 0; i < 27; i++) {
            hash = signatureMessageFragment.slice(i * hashLength, (i + 1) * hashLength);

            for (let j = 0; j < 13 - normalizedBundleFragment[i]; j++) {
                kerl.initialize();
                kerl.reset();
                kerl.absorb(hash, 0, hashLength);
                kerl.squeeze(hash, 0, hashLength);
            }

            for (let j = 0; j < hashLength; j++) {
                signatureMessageFragment[i * hashLength + j] = hash[j];
            }
        }

        return signatureMessageFragment;
    }
}