import { Hash } from "@iota-pico/data/dist/data/hash";
import { Trits } from "@iota-pico/data/dist/data/trits";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
/**
 * Helper class for signing transactions.
 */
export declare class TransactionSigning {
    static generateKey(seed: Hash, index: number, length: number): number[];
    static digests(key: number[]): Trits;
    static address(digests: Trits): Trits;
    static addChecksum(inputValue: Trytes, checksumLength: number): Trytes;
}
