import { Hash } from "@iota-pico/data/dist/data/hash";
/**
 * Helper class for signing transactions.
 * Original https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */
export declare class TransactionSigning {
    static key(seed: Hash, index: number, length: number): number[];
    static digests(key: number[]): number[];
    static address(digests: number[]): number[];
    static createChecksum(trits: number[], checksumLength: number): string;
    static signatureFragment(normalizedBundleFragment: number[], keyFragment: number[]): number[];
}
