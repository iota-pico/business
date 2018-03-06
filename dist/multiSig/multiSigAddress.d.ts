import { Address } from "@iota-pico/data/dist/data/address";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
/**
 * Address using multiple signatures.
 */
export declare class MultiSigAddress {
    /**
     * Create a new instance of the MultiSigAddress.
     */
    constructor();
    /**
     * Absorb key digests.
     * @param digests The digests hashes to absorb.
     */
    absorb(digests: Trytes[]): void;
    /**
     * Finalizes and returns the multisig address in trytes.
     * @param digests The final digests hashes to absorb.
     * @returns The multi signature address.
     */
    finalize(digests?: Trytes[]): Address;
}
