import { IApiClient } from "@iota-pico/api/dist/interfaces/IApiClient";
import { IGetBalancesRequest } from "@iota-pico/api/dist/models/IGetBalancesRequest";
import { ArrayHelper } from "@iota-pico/core/dist/helpers/arrayHelper";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { ITimeService } from "@iota-pico/core/dist/interfaces/ITimeService";
import { TimeService } from "@iota-pico/core/dist/services/timeService";
import { ISS } from "@iota-pico/crypto/dist/hash/iss";
import { Address } from "@iota-pico/data/dist/data/address";
import { AddressSecurity } from "@iota-pico/data/dist/data/addressSecurity";
import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { SignatureMessageFragment } from "@iota-pico/data/dist/data/signatureMessageFragment";
import { Tag } from "@iota-pico/data/dist/data/tag";
import { Transaction } from "@iota-pico/data/dist/data/transaction";
import { Transfer } from "@iota-pico/data/dist/data/transfer";
import { Trits } from "@iota-pico/data/dist/data/trits";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { BusinessError } from "../error/businessError";
import { BundleHelper } from "../helpers/bundleHelper";
import { MultiSigAddress } from "./multiSigAddress";

/**
 * Multiple signatures.
 * Converted https://github.com/iotaledger/iota.lib.js/blob/master/lib/multisig/multisig.js
 */
export class MultiSigClient {
    /* @internal */
    private readonly _apiClient: IApiClient;
    /* @internal */
    private readonly _timeService: ITimeService;

    /**
     * Create a new instance of the MultiSigClient.
     * @param apiClient An API Client to communicate through.
     * @param timeService A class which can provide the time.
     */
    constructor(apiClient: IApiClient, timeService: ITimeService = new TimeService()) {
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
    public static getKey(seed: Hash, index: number, security: AddressSecurity): Trytes {
        if (!ObjectHelper.isType(seed, Hash)) {
            throw new BusinessError("The seed should be an object of type Hash");
        }
        if (!NumberHelper.isInteger(index) || index < 0) {
            throw new BusinessError("The index should be a number >= 0");
        }
        if (!NumberHelper.isInteger(security) || security < 1 || security > 3) {
            throw new BusinessError("The security must be between 1 and 3", { security });
        }

        return Trits.fromArray(ISS.key(seed, index, security)).toTrytes();
    }

    /**
     * Get the digest value of a seed.
     * @param seed The seed to get the digest for.
     * @param index The address index to use.
     * @param security The security level to use.
     * @returns The trytes for the digest.
     */
    public static getDigest(seed: Hash, index: number, security: AddressSecurity): Trytes {
        if (!ObjectHelper.isType(seed, Hash)) {
            throw new BusinessError("The seed should be an object of type Hash");
        }
        if (!NumberHelper.isInteger(index) || index < 0) {
            throw new BusinessError("The index should be a number >= 0");
        }
        if (!NumberHelper.isInteger(security) || security < 1 || security > 3) {
            throw new BusinessError("The security must be between 1 and 3", { security });
        }

        const key = ISS.key(seed, index, security);

        return Trits.fromArray(ISS.digests(key)).toTrytes();
    }

    /**
     * Validate the address against the digests.
     * @param address The address to validate against the digests.
     * @param digests The digests to use to validate the address.
     * @returns True if the address matches the digests.
     */
    public static validateAddress(address: Address, digests: Trytes[]): boolean {
        if (!ObjectHelper.isType(address, Address)) {
            throw new BusinessError("The address should be an object of type Address");
        }
        if (!ArrayHelper.isTyped(digests, Trytes)) {
            throw new BusinessError("The digests should be an array of type Trytes");
        }

        return address.toTrytes().toString() ===
                        new MultiSigAddress().finalize(digests).toTrytes().toString();
    }

    /**
     * Adds the cosigner signatures to the corresponding bundle transactions.
     * @param bundle The bundle to sign.
     * @param address The address to match the transactions.
     * @param key The key to sign the transactions with.
     */
    public static addSignature(bundle: Bundle, address: Address, key: Trytes): void {
        if (!ObjectHelper.isType(bundle, Bundle)) {
            throw new BusinessError("The bundle should be an object of type Bundle");
        }

        if (!ArrayHelper.isTyped(bundle.transactions, Transaction)) {
            throw new BusinessError("The bundle.transactions should be an array of type Transaction");
        }

        if (!ObjectHelper.isType(address, Address)) {
            throw new BusinessError("The address should be an object of type Address");
        }

        if (!ObjectHelper.isType(key, Trytes)) {
            throw new BusinessError("The key should be an object of type Trytes");
        }

        const keyTrits = Trits.fromTrytes(key).toArray();

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
                if (bundle.transactions[i].signatureMessageFragment.toTrytes().toString() !== SignatureMessageFragment.EMPTY.toTrytes().toString()) {
                    // If transaction is already signed, increase counter
                    numSignedTxs++;
                } else {
                    BundleHelper.signTransactions(bundle, i, numSignedTxs % 3, keyTrits, addressTrytes, security);
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
    public async prepareTransfer(address: Address, securitySum: number, balance: number, transfers: Transfer[], remainderAddress?: Address): Promise<Bundle> {
        if (!ObjectHelper.isType(address, Address)) {
            throw new BusinessError("The address should be an object of type Address");
        }
        if (!NumberHelper.isInteger(securitySum) || securitySum < 0) {
            throw new BusinessError("The securitySum should be a number >= 0");
        }
        if (!NumberHelper.isInteger(balance) || balance < 0) {
            throw new BusinessError("The balance should be a number >= 0");
        }
        if (!ArrayHelper.isTyped(transfers, Transfer)) {
            throw new BusinessError("The transfers should be an array of type Transfer");
        }
        if (!ObjectHelper.isEmpty(remainderAddress) && !ObjectHelper.isType(remainderAddress, Address)) {
            throw new BusinessError("The remainderAddress should be an object of type Address");
        }

        const emptyTrytes = Trytes.fromString("");

        // If message or tag is not supplied, provide it
        transfers.forEach((transfer) => {
            transfer.message = transfer.message ? transfer.message : emptyTrytes;
            transfer.tag = transfer.tag || Tag.EMPTY;
        });

        const prepared = BundleHelper.prepareBundle(this._timeService, transfers);

        if (prepared.totalValue === 0) {
            throw new BusinessError("The total transfer value is 0, the transfer does not require a signature");
        } else {
            let totalBalance = balance;
            if (totalBalance === 0) {
                const request: IGetBalancesRequest = {
                    addresses: [ address.toTrytes().toString() ],
                    threshold: 100
                };

                const response = await this._apiClient.getBalances(request);

                totalBalance = parseInt(response.balances[0], 10);
            }

            if (prepared.totalValue > totalBalance) {
                throw new BusinessError("Not enough balance to satisfy the value", { totalValue: prepared.totalValue, totalBalance });
            }

            const timestamp = Math.floor(this._timeService.msSinceEpoch() / 1000);

            // Add input as bundle entry
            // Only a single entry, signatures will be added later
            prepared.bundle.addTransactions(securitySum, address, -totalBalance, prepared.lastTag, timestamp);

            // If there is a remainder value
            // Add extra output to send remaining funds to
            if (totalBalance > prepared.totalValue) {
                if (ObjectHelper.isEmpty(remainderAddress)) {
                    throw new BusinessError("Transfer has remainder but no remainder address was provided");
                }

                prepared.bundle.addTransactions(1, remainderAddress, totalBalance - prepared.totalValue, prepared.lastTag, timestamp);
            }

            BundleHelper.finalizeBundle(prepared.bundle);
            prepared.bundle.addSignatureMessageFragments(prepared.signatureMessageFragments);
        }

        return prepared.bundle;
    }

}
