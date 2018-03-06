import { ITimeService } from "@iota-pico/core/dist/interfaces/ITimeService";
import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { SignatureMessageFragment } from "@iota-pico/data/dist/data/signatureMessageFragment";
import { Tag } from "@iota-pico/data/dist/data/tag";
import { Transfer } from "@iota-pico/data/dist/data/transfer";
/**
 * Helper class for signing bundles.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 */
export declare class BundleHelper {
    static prepareBundle(timeService: ITimeService, transfers: Transfer[]): {
        bundle: Bundle;
        totalValue: number;
        signatureMessageFragments: SignatureMessageFragment[];
        lastTag: Tag;
    };
}
