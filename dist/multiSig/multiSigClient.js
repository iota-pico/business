Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("@iota-pico/core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const timeService_1 = require("@iota-pico/core/dist/services/timeService");
const iss_1 = require("@iota-pico/crypto/dist/hash/iss");
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
        return trits_1.Trits.fromArray(iss_1.ISS.key(seed, index, security)).toTrytes();
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
        const key = iss_1.ISS.key(seed, index, security);
        return trits_1.Trits.fromArray(iss_1.ISS.digests(key)).toTrytes();
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
    /**
     * Initiates the creation of a new transfer by generating an empty bundle with the correct number
     * of bundle entries to be later used for the signing process.
     * @param address Address which has sufficient balance and is controlled by the co-signers.
     * @param securitySum the sum of the security levels from all cosigners chosen during the private key generation (getKey / getDigest)
     * @param balance The balance available for the transfer, if 0 will call getBalances to lookup available.
     * @param transfers The transfers to perform.
     * @param remainderAddress If there is a remainder after the transfer then send the amount to this address.
     * @returns Bundle of the prepared transfer.
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlTaWdDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbXVsdGlTaWcvbXVsdGlTaWdDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLDBFQUF1RTtBQUN2RSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBRXpFLDJFQUF3RTtBQUN4RSx5REFBc0Q7QUFDdEQsK0RBQTREO0FBRTVELDZEQUEwRDtBQUMxRCx5REFBc0Q7QUFDdEQsaUdBQThGO0FBQzlGLHVEQUFvRDtBQUNwRCx1RUFBb0U7QUFDcEUsaUVBQThEO0FBQzlELDJEQUF3RDtBQUN4RCw2REFBMEQ7QUFDMUQsMERBQXVEO0FBQ3ZELDBEQUF1RDtBQUN2RCx1REFBb0Q7QUFFcEQ7OztHQUdHO0FBQ0g7SUFNSTs7OztPQUlHO0lBQ0gsWUFBWSxTQUFxQixFQUFFLGNBQTRCLElBQUkseUJBQVcsRUFBRTtRQUM1RSxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFVLEVBQUUsS0FBYSxFQUFFLFFBQXlCO1FBQ3JFLElBQUksQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsV0FBSSxDQUFDLEVBQUU7WUFDbEMsTUFBTSxJQUFJLDZCQUFhLENBQUMsMkNBQTJDLENBQUMsQ0FBQztTQUN4RTtRQUNELElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQzdDLE1BQU0sSUFBSSw2QkFBYSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxHQUFHLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lB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