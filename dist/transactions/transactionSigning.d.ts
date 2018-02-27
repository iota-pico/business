import { Hash } from "@iota-pico/data/dist/data/hash";
/**
 * Helper class for signing transactions.
 * Original https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */
export declare class TransactionSigning {
    static key(seed: Hash, index: number, length: number): Int8Array;
    static digests(key: Int8Array): Int8Array;
    static address(digests: Int8Array): Int8Array;
    static createChecksum(trits: Int8Array, checksumLength: number): string;
    static signatureFragment(normalizedBundleFragment: Int8Array, keyFragment: Int8Array): Int8Array;
}
