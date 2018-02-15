import { TritsHasherFactory } from "@iota-pico/crypto/dist/factories/tritsHasherFactory";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Trits } from "@iota-pico/data/dist/data/trits";
import { Trytes } from "@iota-pico/data/dist/data/trytes";

/**
 * Helper class for signing transactions.
 */
export class TransactionSigning {
    public static generateKey(seed: Hash, index: number, length: number): number[] {
        const seedTrits = Trits.fromTrytes(seed.toTrytes());
        const indexTrits = Trits.fromNumber(index);
        const subseed = Trits.add(seedTrits, indexTrits);
        const subseedLength = subseed.length();

        const kerl = TritsHasherFactory.instance().create("kerl");

        kerl.initialize();
        kerl.absorb(subseed, 0, subseedLength);
        kerl.squeeze(subseed, 0, subseedLength);

        kerl.reset();
        kerl.absorb(subseed, 0, subseedLength);

        const key = [];
        let offset = 0;
        const buffer = Trits.empty();
        let localLength = length;

        while (localLength-- > 0) {
            for (let i = 0; i < 27; i++) {
                kerl.squeeze(buffer, 0, subseedLength);
                const bufferTrits = buffer.toArray();
                for (let j = 0; j < 243; j++) {
                    key[offset++] = bufferTrits[j];
                }
            }
        }
        return key;
    }

    public static digests(key: number[]): Trits {
        const digests: number[] = [];
        let buffer: Trits;

        for (let i = 0; i < Math.floor(key.length / 6561); i++) {
            const keyFragment = key.slice(i * 6561, (i + 1) * 6561);

            for (let j = 0; j < 27; j++) {
                buffer = Trits.fromArray(keyFragment.slice(j * 243, (j + 1) * 243));

                for (let k = 0; k < 26; k++) {

                    const kKerl = TritsHasherFactory.instance().create("kerl");
                    kKerl.initialize();
                    kKerl.absorb(buffer, 0, buffer.length());
                    kKerl.squeeze(buffer, 0, kKerl.getConstants().HASH_LENGTH);
                }

                const bufferData = buffer.toArray();
                for (let k = 0; k < 243; k++) {
                    keyFragment[j * 243 + k] = bufferData[k];
                }
            }

            const kerl = TritsHasherFactory.instance().create("kerl");
            const keyFragmentTrits = Trits.fromArray(keyFragment);

            kerl.initialize();
            kerl.absorb(keyFragmentTrits, 0, keyFragment.length);
            kerl.squeeze(buffer, 0, kerl.getConstants().HASH_LENGTH);

            const bufferArray = buffer.toArray();
            for (let j = 0; j < 243; j++) {
                digests[i * 243 + j] = bufferArray[j];
            }
        }
        return Trits.fromArray(digests);
    }

    public static address(digests: Trits): Trits {
        const kerl = TritsHasherFactory.instance().create("kerl");

        const addressTrits = Trits.empty();

        kerl.initialize();
        kerl.absorb(digests, 0, digests.length());
        kerl.squeeze(addressTrits, 0, kerl.getConstants().HASH_LENGTH);

        return addressTrits;
    }

    public static addChecksum(inputValue: Trytes, checksumLength: number): Trytes {
        const kerl = TritsHasherFactory.instance().create("kerl");
        kerl.initialize();

        const trits = Trits.fromTrytes(inputValue);
        const checksumTrits = Trits.empty();

        kerl.absorb(trits, 0, trits.length());
        kerl.squeeze(checksumTrits, 0, kerl.getConstants().HASH_LENGTH);

        const checksum = checksumTrits.toTrytes().toString().substring(81 - checksumLength, 81);

        return Trytes.create(inputValue.toString() + checksum);
    }
}
