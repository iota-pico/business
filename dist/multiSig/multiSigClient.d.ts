import { IApiClient } from "@iota-pico/api/dist/interfaces/IApiClient";
import { ITimeService } from "@iota-pico/core/dist/interfaces/ITimeService";
import { Address } from "@iota-pico/data/dist/data/address";
import { AddressSecurity } from "@iota-pico/data/dist/data/addressSecurity";
import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Transfer } from "@iota-pico/data/dist/data/transfer";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
/**
 * Multiple signatures.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/multisig/multisig.js
 */
export declare class MultiSigClient {
    /**
     * Create a new instance of the MultiSigClient.
     * @param apiClient An API Client to communicate through.
     * @param timeService A class which can provide the time.
     */
    constructor(apiClient: IApiClient, timeService?: ITimeService);
    /**
     * Get the key value of a seed.
     * @param seed The seed to get the key for.
     * @param index The address index to use.
     * @param security The security level to use.
     * @returns The trytes for the key.
     */
    static getKey(seed: Hash, index: number, security: AddressSecurity): Trytes;
    /**
     * Get the digest value of a seed.
     * @param seed The seed to get the digest for.
     * @param index The address index to use.
     * @param security The security level to use.
     * @returns The trytes for the digest.
     */
    static getDigest(seed: Hash, index: number, security: AddressSecurity): Trytes;
    /**
     * Validate address.
     * @param address The address to validate against the digests.
     * @param digests The digests to use to validate the address.
     * @returns True if the address matches the digests.
     */
    static validateAddress(address: Address, digests: Trytes[]): boolean;
    /**
     * Adds the cosigner signatures to the corresponding bundle transactions.
     * @param bundle The bundle to sign.
     * @param address The address to match the transactions.
     * @param key The key to sign the transactions with.
     */
    static addSignature(bundle: Bundle, address: Address, key: Trytes): void;
    prepareTransfer(address: Address, securitySum: number, balance: number, transfers: Transfer[], remainderAddress?: Address): Promise<Bundle>;
}
