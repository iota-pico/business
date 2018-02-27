import { SpongeFactory } from "@iota-pico/crypto/dist/factories/spongeFactory";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Trits } from "@iota-pico/data/dist/data/trits";

/**
 * Helper class for signing transactions.
 * Original https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */
export class TransactionSigning {
    public static key(seed: Hash, index: number, length: number): Int8Array {
        const seedTrits = Trits.fromTrytes(seed.toTrytes());
        const indexTrits = Trits.fromNumber(index);
        const subseed = Trits.add(seedTrits, indexTrits).toArray();
        const subseedLength = subseed.length;

        const kerl = SpongeFactory.instance().create("kerl");

        kerl.initialize();
        kerl.absorb(subseed, 0, subseedLength);
        kerl.squeeze(subseed, 0, subseedLength);

        kerl.reset();
        kerl.absorb(subseed, 0, subseedLength);

        const key = new Int8Array(27 * 243 * length);
        let offset = 0;
        const buffer = new Int8Array(subseedLength);
        let localLength = length;

        while (localLength-- > 0) {
            for (let i = 0; i < 27; i++) {
                kerl.squeeze(buffer, 0, subseedLength);
                for (let j = 0; j < 243; j++) {
                    key[offset++] = buffer[j];
                }
            }
        }
        return key;
    }

    public static digests(key: Int8Array): Int8Array {
        const keyLenDiv = Math.floor(key.length / 6561);

        const digests = new Int8Array(keyLenDiv * 243);
        let buffer: Int8Array;

        for (let i = 0; i < keyLenDiv; i++) {
            const iMul = i * 6561;
            const keyFragment = key.slice(iMul, iMul + 6561);

            for (let j = 0; j < 27; j++) {
                const jMul = j * 243;
                buffer = keyFragment.slice(jMul, jMul + 243);

                for (let k = 0; k < 26; k++) {
                    const kKerl = SpongeFactory.instance().create("kerl");
                    kKerl.initialize();
                    kKerl.absorb(buffer, 0, buffer.length);
                    kKerl.squeeze(buffer, 0, kKerl.getConstants().HASH_LENGTH);
                }

                for (let k = 0; k < 243; k++) {
                    keyFragment[jMul + k] = buffer[k];
                }
            }

            const kerl = SpongeFactory.instance().create("kerl");

            kerl.initialize();
            kerl.absorb(keyFragment, 0, keyFragment.length);
            kerl.squeeze(buffer, 0, kerl.getConstants().HASH_LENGTH);

            const iMul2 = i * 243;
            for (let j = 0; j < 243; j++) {
                digests[iMul2 + j] = buffer[j];
            }
        }
        return digests;
    }

    public static address(digests: Int8Array): Int8Array {
        const kerl = SpongeFactory.instance().create("kerl");

        kerl.initialize();
        kerl.absorb(digests, 0, digests.length);

        const addressTrits = new Int8Array(kerl.getConstants().HASH_LENGTH);
        kerl.squeeze(addressTrits, 0, addressTrits.length);

        return addressTrits;
    }

    public static createChecksum(trits: Int8Array, checksumLength: number): string {
        const kerl = SpongeFactory.instance().create("kerl");
        kerl.initialize();

        kerl.absorb(trits, 0, trits.length);

        const checksumTrits = new Int8Array(kerl.getConstants().HASH_LENGTH);
        kerl.squeeze(checksumTrits, 0, checksumTrits.length);

        return Trits.fromArray(checksumTrits).toTrytes().toString().substring(81 - checksumLength, 81);
    }

    public static signatureFragment(normalizedBundleFragment: Int8Array, keyFragment: Int8Array): Int8Array {
        const signatureFragment = keyFragment.slice();
        let hash: Int8Array;

        const kerl = SpongeFactory.instance().create("kerl");

        for (let i = 0; i < 27; i++) {
            hash = signatureFragment.slice(i * 243, (i + 1) * 243);

            for (let j = 0; j < 13 - normalizedBundleFragment[i]; j++) {
                kerl.initialize();
                kerl.reset();
                kerl.absorb(hash, 0, hash.length);
                kerl.squeeze(hash, 0, kerl.getConstants().HASH_LENGTH);
            }

            for (let j = 0; j < 243; j++) {
                signatureFragment[i * 243 + j] = hash[j];
            }
        }

        return signatureFragment;
    }
}
