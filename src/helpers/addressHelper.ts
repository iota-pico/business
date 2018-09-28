import { SpongeFactory } from "@iota-pico/crypto/dist/factories/spongeFactory";
import { Trits } from "@iota-pico/data/dist/data/trits";

/**
 * Helper class for address signing.
 * Original https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */
export class AddressHelper {
    /**
     * Create a checksum for the trits.
     * @param trits The trits to create the checksum for.
     * @param checksumLength The length of the checksum.
     * @returns the checksum as trytes.
     */
    public static createChecksum(trits: Int8Array, checksumLength: number): string {
        const kerl = SpongeFactory.instance().create("kerl");
        kerl.initialize();

        kerl.absorb(trits, 0, trits.length);

        const checksumTrits = new Int8Array(kerl.getConstant("HASH_LENGTH"));
        kerl.squeeze(checksumTrits, 0, checksumTrits.length);

        return Trits.fromArray(checksumTrits).toTrytes().toString().substring(81 - checksumLength, 81);
    }
}
