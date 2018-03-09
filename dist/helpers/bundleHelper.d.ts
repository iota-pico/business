import { ITimeService } from "@iota-pico/core/dist/interfaces/ITimeService";
import { Address } from "@iota-pico/data/dist/data/address";
import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { SignatureMessageFragment } from "@iota-pico/data/dist/data/signatureMessageFragment";
import { Tag } from "@iota-pico/data/dist/data/tag";
import { Transfer } from "@iota-pico/data/dist/data/transfer";
/**
 * Helper class for signing bundles.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */
export declare class BundleHelper {
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
    static prepareBundle(timeService: ITimeService, transfers: Transfer[]): {
        bundle: Bundle;
        totalValue: number;
        signatureMessageFragments: SignatureMessageFragment[];
        lastTag: Tag;
    };
}
