import { ITimeService } from "@iota-pico/core/dist/interfaces/ITimeService";
import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { SignatureMessageFragment } from "@iota-pico/data/dist/data/signatureMessageFragment";
import { Tag } from "@iota-pico/data/dist/data/tag";
import { Transfer } from "@iota-pico/data/dist/data/transfer";
import { Trytes } from "@iota-pico/data/dist/data/trytes";

/**
 * Helper class for bundles.
 */
export class BundleHelper {
    public static prepareBundle(timeService: ITimeService, transfers: Transfer[]): {
        bundle: Bundle; totalValue: number; signatureMessageFragments: SignatureMessageFragment[]; lastTag: Tag; } {
        const bundle = new Bundle();
        let lastTag: Tag;

        let totalValue: number = 0;
        const signatureMessageFragments: SignatureMessageFragment[] = [];

        //  Iterate over all transfers, get totalValue
        //  and prepare the Messages, message and tag
        for (let i = 0; i < transfers.length; i++) {
            let signatureMessageLength = 1;

            // If message longer than 2187 trytes, increase signatureMessageLength (add 2nd transaction)
            const messageString = transfers[i].message.toString();
            if (messageString.length > SignatureMessageFragment.LENGTH) {
                // Get total length, message / maxLength (2187 trytes)
                signatureMessageLength += Math.floor(messageString.length / SignatureMessageFragment.LENGTH);

                let msgCopy = messageString;

                // While there is still a message, copy it
                while (msgCopy) {
                    let fragment = msgCopy.slice(0, SignatureMessageFragment.LENGTH);
                    msgCopy = msgCopy.slice(SignatureMessageFragment.LENGTH, msgCopy.length);

                    // Pad remainder of fragment
                    for (let j = 0; fragment.length < SignatureMessageFragment.LENGTH; j++) {
                        fragment += "9";
                    }

                    signatureMessageFragments.push(SignatureMessageFragment.fromTrytes(Trytes.fromString(fragment)));
                }
            } else {
                // Else, get single fragment with 2187 of 9's trytes
                let fragment = "";

                if (messageString) {
                    fragment = messageString.slice(0, SignatureMessageFragment.LENGTH);
                }

                for (let j = 0; fragment.length < SignatureMessageFragment.LENGTH; j++) {
                    fragment += "9";
                }

                signatureMessageFragments.push(SignatureMessageFragment.fromTrytes(Trytes.fromString(fragment)));
            }

            // get current timestamp in seconds
            const timestamp = Math.floor(timeService.msSinceEpoch() / 1000);

            lastTag = transfers[i].tag;

            // Add first entries to the bundle
            bundle.addTransactions(signatureMessageLength, transfers[i].address, transfers[i].value, transfers[i].tag, timestamp);

            // Sum up total value
            totalValue += transfers[i].value;
        }

        return { bundle, totalValue, lastTag, signatureMessageFragments };

    }
}
