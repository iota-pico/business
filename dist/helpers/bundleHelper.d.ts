import { ITimeService } from "@iota-pico/core/dist/interfaces/ITimeService";
import { Address } from "@iota-pico/data/dist/data/address";
import { AddressSecurity } from "@iota-pico/data/dist/data/addressSecurity";
import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Input } from "@iota-pico/data/dist/data/input";
import { SignatureMessageFragment } from "@iota-pico/data/dist/data/signatureMessageFragment";
import { Tag } from "@iota-pico/data/dist/data/tag";
import { Transfer } from "@iota-pico/data/dist/data/transfer";
import { TransferOptions } from "../types/transferOptions";
/**
 * Helper class for signing bundles.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */
export declare class BundleHelper {
    static readonly NUMBER_OF_FRAGMENT_CHUNKS: number;
    /**
     * Is the bundle valid.
     * @param bundle The bundle to check for validity.
     * @returns True if the bundle is valid.
     */
    static isValid(bundle: Bundle): boolean;
    /**
     * Validate signatures for each of the co-signers in the multi-signature to independently verify that a generated
     * transaction with the corresponding signatures of the co-signers is valid.
     * @param signedBundle The signed bundle to check the signatures.
     * @param inputAddress The address used to initiate the transfer.
     * @returns True is the signatures are valid.
     */
    static validateSignatures(signedBundle: Bundle, inputAddress: Address): boolean;
    /**
     * Prepare a bundle.
     * @param timeService To use for stamping the transactions.
     * @param transfers The transfers to add to the bundle.
     * @returns Bundle information.
     */
    static prepareBundle(timeService: ITimeService, transfers: Transfer[]): {
        bundle: Bundle;
        totalValue: number;
        signatureMessageFragments: SignatureMessageFragment[];
        lastTag: Tag;
    };
    /**
     * Sign the input of the bundle.
     * @param seed The seed to use for signing.
     * @param bundle The bundle to sign.
     * @param transferOptions Additional transfer options.
     * @param signatureMessageFragments The signature message fragemtns.
     * @param inputs The input for use.
     * @param addedHMAC Has an HMAC been added.
     */
    static signInputs(seed: Hash, bundle: Bundle, transferOptions: TransferOptions, signatureMessageFragments: SignatureMessageFragment[], inputs: Input[], addedHMAC: boolean): void;
    /**
     * Sign the trsnactions
     * @param bundle The bundle of transactions to sign.
     * @param index The index to start.
     * @param firstUnsignedIndex The first unsigned index.
     * @param keyTrits The key trits.
     * @param addressTrytes The address trytes.
     * @param security The security level.
     */
    static signTransactions(bundle: Bundle, index: number, firstUnsignedIndex: number, keyTrits: Int8Array, addressTrytes: string, security: AddressSecurity): void;
    /**
     * Finalize a bundle.
     * @param bundle The bundle to finalize.
     */
    static finalizeBundle(bundle: Bundle): void;
}
