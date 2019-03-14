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
     * Validate the address against the digests.
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
        return prepared.bundle;
    }
}
exports.MultiSigClient = MultiSigClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlTaWdDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbXVsdGlTaWcvbXVsdGlTaWdDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLDBFQUF1RTtBQUN2RSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBRXpFLDJFQUF3RTtBQUN4RSx5REFBc0Q7QUFDdEQsK0RBQTREO0FBRTVELDZEQUEwRDtBQUMxRCx5REFBc0Q7QUFDdEQsaUdBQThGO0FBQzlGLHVEQUFvRDtBQUNwRCx1RUFBb0U7QUFDcEUsaUVBQThEO0FBQzlELDJEQUF3RDtBQUN4RCw2REFBMEQ7QUFDMUQsMERBQXVEO0FBQ3ZELDBEQUF1RDtBQUN2RCx1REFBb0Q7QUFFcEQ7OztHQUdHO0FBQ0gsTUFBYSxjQUFjO0lBTXZCOzs7O09BSUc7SUFDSCxZQUFZLFNBQXFCLEVBQUUsY0FBNEIsSUFBSSx5QkFBVyxFQUFFO1FBQzVFLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQVUsRUFBRSxLQUFhLEVBQUUsUUFBeUI7UUFDckUsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxXQUFJLENBQUMsRUFBRTtZQUNsQyxNQUFNLElBQUksNkJBQWEsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsSUFBSSxDQUFDLDJCQUFZLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDN0MsTUFBTSxJQUFJLDZCQUFhLENBQUMsbUNBQW1DLENBQUMsQ0FBQztTQUNoRTtRQUNELElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLFFBQVEsR0FBRyxD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