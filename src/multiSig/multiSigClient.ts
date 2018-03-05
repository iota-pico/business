import { IApiClient } from "@iota-pico/api/dist/interfaces/IApiClient";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { AddressSecurity } from "@iota-pico/data/dist/data/addressSecurity";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Trits } from "@iota-pico/data/dist/data/trits";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { BusinessError } from "../error/businessError";
import { TransactionSigning } from "../transactions/transactionSigning";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { MultiSigAddress } from "./multiSigAddress";
import { ArrayHelper } from "@iota-pico/core/dist/helpers/arrayHelper";
import { Address } from "@iota-pico/data/dist/data/address";
import { Transfer } from "@iota-pico/data/dist/data/transfer";
import { Tag } from "@iota-pico/data/dist/data/tag";
import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { BundleHelper } from "../transactions/bundleHelper";
import { ITimeService } from "@iota-pico/core/dist/interfaces/ITimeService";
import { TimeService } from "@iota-pico/core/dist/services/timeService";
import { IGetBalancesRequest } from "@iota-pico/api/dist/models/IGetBalancesRequest";
import { SignatureMessageFragment } from "@iota-pico/data/dist/data/signatureMessageFragment";
import { BundleSigning } from "..";

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
        if (!NumberHelper.isInteger(index) && index >= 0) {
            throw new BusinessError("The index should be a number >= 0");
        }
        if (!NumberHelper.isInteger(security) || security < 1 || security > 3) {
            throw new BusinessError("The security must be between 1 and 3", { security });
        }

        return Trits.fromArray(TransactionSigning.key(seed, index, security)).toTrytes();
    }

    /**
     * Get the digest value of a seed.
     * @param seed The seed to get the digest for.
     * @param index The address index to use.
     * @param security The security level to use.
     * @returns The hash for the digest.
     */
    public static getDigest(seed: Hash, index: number, security: AddressSecurity): Hash {
        if (!ObjectHelper.isType(seed, Hash)) {
            throw new BusinessError("The seed should be an object of type Hash");
        }
        if (!NumberHelper.isInteger(index) && index >= 0) {
            throw new BusinessError("The index should be a number >= 0");
        }
        if (!NumberHelper.isInteger(security) || security < 1 || security > 3) {
            throw new BusinessError("The security must be between 1 and 3", { security });
        }

        const key = TransactionSigning.key(seed, index, security);

        return Hash.fromTrytes(Trits.fromArray(TransactionSigning.digests(key)).toTrytes());
    }

    /**
     * Validate address.
     * @param address The address to validate against the digests.
     * @param digests The digests to use to validate the address.
     * @returns True if the address matches the digests.
     */
    public static validateAddress(address: Address, digests: Hash[]): boolean {
        if (!ObjectHelper.isType(address, Address)) {
            throw new BusinessError("The address should be an object of type Address");
        }
        if (!ArrayHelper.isTyped(digests, Hash)) {
            throw new BusinessError("The digests should be an array of type Hash");
        }

        return address.toTrytes().toString() ===
                        new MultiSigAddress().finalize(digests).toTrytes().toString();
    }

    public async prepareTransfer(address: Address, securitySum: number, balance: number, transfers: Transfer[], remainderAddress?: Address): Promise<Transaction[]> {
        if (!ObjectHelper.isType(address, Address)) {
            throw new BusinessError("The address should be an object of type Address");
        }
        if (!NumberHelper.isInteger(securitySum) && securitySum >= 0) {
            throw new BusinessError("The securitySum should be a number >= 0");
        }
        if (!NumberHelper.isInteger(balance) && balance >= 0) {
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
            throw new BusinessError("Invalid value transfer: the transfer does not require a signature.");
        } else {
            let finalBalance = balance;
            if (finalBalance === 0) {
                const request: IGetBalancesRequest = {
                    addresses: [ address.toTrytes().toString() ],
                    threshold: 100
                };

                const response = await this._apiClient.getBalances(request);

                finalBalance = parseInt(response.balances[0], 10);
            }

            this.createBundle(address, securitySum, prepared.totalValue, finalBalance, prepared.bundle, prepared.signatureMessageFragments, prepared.lastTag, remainderAddress);
        }

        return prepared.bundle.transactions;
    }

    private createBundle(address: Address, securitySum: number, totalValue: number, totalBalance: number,
                         bundle: Bundle, signatureMessageFragments: SignatureMessageFragment[], lastTag: Tag, remainderAddress: Address): void {
        if (totalValue > totalBalance) {
            throw new BusinessError("Not enough balance to satisfy the value", { totalValue, totalBalance });
        }
        if (totalBalance > 0) {
            const toSubtract = -totalBalance;
            const timestamp = Math.floor(this._timeService.msSinceEpoch() / 1000);

            // Add input as bundle entry
            // Only a single entry, signatures will be added later
            bundle.addTransactions(securitySum, address, toSubtract, lastTag, timestamp);
        }

        // If there is a remainder value
        // Add extra output to send remaining funds to
        if (totalBalance > totalValue) {
            const remainder = totalBalance - totalValue;

            // Remainder bundle entry if necessary
            if (ObjectHelper.isEmpty(remainderAddress)) {
                throw new BusinessError("Transfer has remainder but there is remainder address defined");
            }

            const timestamp = Math.floor(this._timeService.msSinceEpoch() / 1000);
            bundle.addTransactions(1, remainderAddress, remainder, lastTag, timestamp);
        }

        BundleSigning.finalizeBundle(bundle);
        bundle.addSignatureMessageFragments(signatureMessageFragments);
    }

    public addSignature() : void {
        
    }
}
