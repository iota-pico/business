Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("@iota-pico/core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const timeService_1 = require("@iota-pico/core/dist/services/timeService");
const address_1 = require("@iota-pico/data/dist/data/address");
const bundle_1 = require("@iota-pico/data/dist/data/bundle");
const hash_1 = require("@iota-pico/data/dist/data/hash");
const signatureMessageFragment_1 = require("@iota-pico/data/dist/data/signatureMessageFragment");
const tag_1 = require("@iota-pico/data/dist/data/tag");
const transaction_1 = require("@iota-pico/data/dist/data/transaction");
const transfer_1 = require("@iota-pico/data/dist/data/transfer");
const trits_1 = require("@iota-pico/data/dist/data/trits");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const businessError_1 = require("../error/businessError");
const bundleHelper_1 = require("../helpers/bundleHelper");
const signing_1 = require("../sign/signing");
const multiSigAddress_1 = require("./multiSigAddress");
/**
 * Multiple signatures.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/multisig/multisig.js
 */
class MultiSigClient {
    /**
     * Create a new instance of the MultiSigClient.
     * @param apiClient An API Client to communicate through.
     * @param timeService A class which can provide the time.
     */
    constructor(apiClient, timeService = new timeService_1.TimeService()) {
        this._apiClient = apiClient;
        this._timeService = timeService;
    }
    /**
     * Get the key value of a seed.
     * @param seed The seed to get the key for.
     * @param index The address index to use.
     * @param security The security level to use.
     * @returns The trytes for the key.
     */
    static getKey(seed, index, security) {
        if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The seed should be an object of type Hash");
        }
        if (!numberHelper_1.NumberHelper.isInteger(index) || index < 0) {
            throw new businessError_1.BusinessError("The index should be a number >= 0");
        }
        if (!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3) {
            throw new businessError_1.BusinessError("The security must be between 1 and 3", { security });
        }
        return trits_1.Trits.fromArray(signing_1.Signing.key(seed, index, security)).toTrytes();
    }
    /**
     * Get the digest value of a seed.
     * @param seed The seed to get the digest for.
     * @param index The address index to use.
     * @param security The security level to use.
     * @returns The trytes for the digest.
     */
    static getDigest(seed, index, security) {
        if (!objectHelper_1.ObjectHelper.isType(seed, hash_1.Hash)) {
            throw new businessError_1.BusinessError("The seed should be an object of type Hash");
        }
        if (!numberHelper_1.NumberHelper.isInteger(index) || index < 0) {
            throw new businessError_1.BusinessError("The index should be a number >= 0");
        }
        if (!numberHelper_1.NumberHelper.isInteger(security) || security < 1 || security > 3) {
            throw new businessError_1.BusinessError("The security must be between 1 and 3", { security });
        }
        const key = signing_1.Signing.key(seed, index, security);
        return trits_1.Trits.fromArray(signing_1.Signing.digests(key)).toTrytes();
    }
    /**
     * Validate address.
     * @param address The address to validate against the digests.
     * @param digests The digests to use to validate the address.
     * @returns True if the address matches the digests.
     */
    static validateAddress(address, digests) {
        if (!objectHelper_1.ObjectHelper.isType(address, address_1.Address)) {
            throw new businessError_1.BusinessError("The address should be an object of type Address");
        }
        if (!arrayHelper_1.ArrayHelper.isTyped(digests, trytes_1.Trytes)) {
            throw new businessError_1.BusinessError("The digests should be an array of type Trytes");
        }
        return address.toTrytes().toString() ===
            new multiSigAddress_1.MultiSigAddress().finalize(digests).toTrytes().toString();
    }
    /**
     * Adds the cosigner signatures to the corresponding bundle transactions.
     * @param bundle The bundle to sign.
     * @param address The address to match the transactions.
     * @param key The key to sign the transactions with.
     */
    static addSignature(bundle, address, key) {
        if (!objectHelper_1.ObjectHelper.isType(bundle, bundle_1.Bundle)) {
            throw new businessError_1.BusinessError("The bundle should be an object of type Bundle");
        }
        if (!arrayHelper_1.ArrayHelper.isTyped(bundle.transactions, transaction_1.Transaction)) {
            throw new businessError_1.BusinessError("The bundle.transactions should be an array of type Transaction");
        }
        if (!objectHelper_1.ObjectHelper.isType(address, address_1.Address)) {
            throw new businessError_1.BusinessError("The address should be an object of type Address");
        }
        if (!objectHelper_1.ObjectHelper.isType(key, trytes_1.Trytes)) {
            throw new businessError_1.BusinessError("The key should be an object of type Trytes");
        }
        const keyTrits = trits_1.Trits.fromTrytes(key).toArray();
        // Get the security used for the private key
        // 1 security level = 2187 trytes
        const security = keyTrits.length / 3 / 2187;
        // First get the total number of already signed transactions
        // use that for the bundle hash calculation as well as knowing
        // where to add the signature
        let numSignedTxs = 0;
        const addressTrytes = address.toTrytes().toString();
        for (let i = 0; i < bundle.transactions.length; i++) {
            if (bundle.transactions[i].address.toTrytes().toString() === addressTrytes) {
                if (bundle.transactions[i].signatureMessageFragment.toTrytes().toString() !== signatureMessageFragment_1.SignatureMessageFragment.EMPTY.toTrytes().toString()) {
                    // If transaction is already signed, increase counter
                    numSignedTxs++;
                }
                else {
                    bundleHelper_1.BundleHelper.signTransactions(bundle, i, numSignedTxs % 3, keyTrits, addressTrytes, security);
                    break;
                }
            }
        }
    }
    async prepareTransfer(address, securitySum, balance, transfers, remainderAddress) {
        if (!objectHelper_1.ObjectHelper.isType(address, address_1.Address)) {
            throw new businessError_1.BusinessError("The address should be an object of type Address");
        }
        if (!numberHelper_1.NumberHelper.isInteger(securitySum) || securitySum < 0) {
            throw new businessError_1.BusinessError("The securitySum should be a number >= 0");
        }
        if (!numberHelper_1.NumberHelper.isInteger(balance) || balance < 0) {
            throw new businessError_1.BusinessError("The balance should be a number >= 0");
        }
        if (!arrayHelper_1.ArrayHelper.isTyped(transfers, transfer_1.Transfer)) {
            throw new businessError_1.BusinessError("The transfers should be an array of type Transfer");
        }
        if (!objectHelper_1.ObjectHelper.isEmpty(remainderAddress) && !objectHelper_1.ObjectHelper.isType(remainderAddress, address_1.Address)) {
            throw new businessError_1.BusinessError("The remainderAddress should be an object of type Address");
        }
        const emptyTrytes = trytes_1.Trytes.fromString("");
        // If message or tag is not supplied, provide it
        transfers.forEach((transfer) => {
            transfer.message = transfer.message ? transfer.message : emptyTrytes;
            transfer.tag = transfer.tag || tag_1.Tag.EMPTY;
        });
        const prepared = bundleHelper_1.BundleHelper.prepareBundle(this._timeService, transfers);
        if (prepared.totalValue === 0) {
            throw new businessError_1.BusinessError("The total transfer value is 0, the transfer does not require a signature");
        }
        else {
            let totalBalance = balance;
            if (totalBalance === 0) {
                const request = {
                    addresses: [address.toTrytes().toString()],
                    threshold: 100
                };
                const response = await this._apiClient.getBalances(request);
                totalBalance = parseInt(response.balances[0], 10);
            }
            if (prepared.totalValue > totalBalance) {
                throw new businessError_1.BusinessError("Not enough balance to satisfy the value", { totalValue: prepared.totalValue, totalBalance });
            }
            const timestamp = Math.floor(this._timeService.msSinceEpoch() / 1000);
            // Add input as bundle entry
            // Only a single entry, signatures will be added later
            prepared.bundle.addTransactions(securitySum, address, -totalBalance, prepared.lastTag, timestamp);
            // If there is a remainder value
            // Add extra output to send remaining funds to
            if (totalBalance > prepared.totalValue) {
                if (objectHelper_1.ObjectHelper.isEmpty(remainderAddress)) {
                    throw new businessError_1.BusinessError("Transfer has remainder but no remainder address was provided");
                }
                prepared.bundle.addTransactions(1, remainderAddress, totalBalance - prepared.totalValue, prepared.lastTag, timestamp);
            }
            bundleHelper_1.BundleHelper.finalizeBundle(prepared.bundle);
            prepared.bundle.addSignatureMessageFragments(prepared.signatureMessageFragments);
        }
        return prepared.bundle;
    }
}
exports.MultiSigClient = MultiSigClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlTaWdDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbXVsdGlTaWcvbXVsdGlTaWdDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLDBFQUF1RTtBQUN2RSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBRXpFLDJFQUF3RTtBQUN4RSwrREFBNEQ7QUFFNUQsNkRBQTBEO0FBQzFELHlEQUFzRDtBQUN0RCxpR0FBOEY7QUFDOUYsdURBQW9EO0FBQ3BELHVFQUFvRTtBQUNwRSxpRUFBOEQ7QUFDOUQsMkRBQXdEO0FBQ3hELDZEQUEwRDtBQUMxRCwwREFBdUQ7QUFDdkQsMERBQXVEO0FBQ3ZELDZDQUEwQztBQUMxQyx1REFBb0Q7QUFFcEQ7OztHQUdHO0FBQ0g7SUFNSTs7OztPQUlHO0lBQ0gsWUFBWSxTQUFxQixFQUFFLGNBQTRCLElBQUkseUJBQVcsRUFBRTtRQUM1RSxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFVLEVBQUUsS0FBYSxFQUFFLFFBQXlCO1FBQ3JFLEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFdBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLElBQUksNkJBQWEsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sSUFBSSw2QkFBYSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxHQUFHLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRSxNQUFNLElBQUksNkJBQWEsQ0FBQyxzQ0FBc0MsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDbEYsQ0FBQztRQUVELE1BQU0sQ0FBQyxhQUFLLENBQUMsU0FBUyxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxRSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFVLEVBQUUsS0FBYSxFQUFFLFFBQXlCO1FBQ3hFLEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFdBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLElBQUksNkJBQWEsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sSUFBSSw2QkFBYSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxHQUFHLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRSxNQUFNLElBQUksNkJBQWEsQ0FBQyxzQ0FBc0MsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDbEYsQ0FBQztRQUVELE1BQU0sR0FBRyxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFL0MsTUFBTSxDQUFDLGFBQUssQ0FBQyxTQUFTLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQWdCLEVBQUUsT0FBaUI7UUFDN0QsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsaUJBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxNQUFNLElBQUksNkJBQWEsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBQy9FLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLHlCQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxlQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxJQUFJLDZCQUFhLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUM3RSxDQUFDO1FBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDcEIsSUFBSSxpQ0FBZSxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xGLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBYyxFQUFFLE9BQWdCLEVBQUUsR0FBVztRQUNwRSxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxlQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxJQUFJLDZCQUFhLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUM3RSxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLHlCQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsTUFBTSxJQUFJLDZCQUFhLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztRQUM5RixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsaUJBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxNQUFNLElBQUksNkJBQWEsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBQy9FLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxlQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsTUFBTSxJQUFJLDZCQUFhLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUMxRSxDQUFDO1FBRUQsTUFBTSxRQUFRLEdBQUcsYUFBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVqRCw0Q0FBNEM7UUFDNUMsaUNBQWlDO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUU1Qyw0REFBNEQ7UUFDNUQsOERBQThEO1FBQzlELDZCQUE2QjtRQUM3QixJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7UUFFckIsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXBELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUN6RSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLG1EQUF3QixDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2pJLHFEQUFxRDtvQkFDckQsWUFBWSxFQUFFLENBQUM7Z0JBQ25CLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osMkJBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLFlBQVksR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDOUYsS0FBSyxDQUFDO2dCQUNWLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFTSxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQWdCLEVBQUUsV0FBbUIsRUFBRSxPQUFlLEVBQUUsU0FBcUIsRUFBRSxnQkFBMEI7UUFDbEksRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsaUJBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxNQUFNLElBQUksNkJBQWEsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBQy9FLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELE1BQU0sSUFBSSw2QkFBYSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDdkUsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsTUFBTSxJQUFJLDZCQUFhLENBQUMscUNBQXFDLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsbUJBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxNQUFNLElBQUksNkJBQWEsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdGLE1BQU0sSUFBSSw2QkFBYSxDQUFDLDBEQUEwRCxDQUFDLENBQUM7UUFDeEYsQ0FBQztRQUVELE1BQU0sV0FBVyxHQUFHLGVBQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFMUMsZ0RBQWdEO1FBQ2hELFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUMzQixRQUFRLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUNyRSxRQUFRLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLElBQUksU0FBRyxDQUFDLEtBQUssQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sUUFBUSxHQUFHLDJCQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFMUUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sSUFBSSw2QkFBYSxDQUFDLDBFQUEwRSxDQUFDLENBQUM7UUFDeEcsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixNQUFNLE9BQU8sR0FBd0I7b0JBQ2pDLFNBQVMsRUFBRSxDQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBRTtvQkFDNUMsU0FBUyxFQUFFLEdBQUc7aUJBQ2pCLENBQUM7Z0JBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFNUQsWUFBWSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3RELENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLE1BQU0sSUFBSSw2QkFBYSxDQUFDLHlDQUF5QyxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztZQUMxSCxDQUFDO1lBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBRXRFLDRCQUE0QjtZQUM1QixzREFBc0Q7WUFDdEQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBRWxHLGdDQUFnQztZQUNoQyw4Q0FBOEM7WUFDOUMsRUFBRSxDQUFDLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxFQUFFLENBQUMsQ0FBQywyQkFBWSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekMsTUFBTSxJQUFJLDZCQUFhLENBQUMsOERBQThELENBQUMsQ0FBQztnQkFDNUYsQ0FBQztnQkFFRCxRQUFRLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxHQUFHLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUMxSCxDQUFDO1lBRUQsMkJBQVksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLFFBQVEsQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDckYsQ0FBQztRQUVELE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7Q0FFSjtBQXBNRCx3Q0FvTUMifQ==