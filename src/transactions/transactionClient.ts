import { IApiClient } from "@iota-pico/api/dist/interfaces/IApiClient";
import { IFindTransactionsRequest } from "@iota-pico/api/dist/models/IFindTransactionsRequest";
import { IGetInclusionStatesRequest } from "@iota-pico/api/dist/models/IGetInclusionStatesRequest";
import { IGetTrytesRequest } from "@iota-pico/api/dist/models/IGetTrytesRequest";
import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { Address } from "@iota-pico/data/dist/data/address";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Tag } from "@iota-pico/data/dist/data/tag";
import { Transaction } from "@iota-pico/data/dist/data/transaction";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { AddressSecurity } from "../interfaces/addressSecurity";
import { ITransactionClient } from "../interfaces/ITransactionClient";
import { TransactionSigning } from "./transactionSigning";

/**
 * Default implementation of the ITransactionClient.
 * @interface
 */
export class TransactionClient implements ITransactionClient {
    /* @internal */
    private readonly _apiClient: IApiClient;

    /**
     * Create a new instance of the TransactionClient.
     * @param apiClient An API Client to communicate through.
     */
    constructor(apiClient: IApiClient) {
        this._apiClient = apiClient;
    }

    /**
     * Returns the list of transaction in progress.
     * @returns Promise which resolves to a list of hashes or rejects with error.
     */
    public async getTransactionsInProgress(): Promise<Hash[]> {
        return this._apiClient.getTips()
            .then((response) => {
                if (response && response.hashes) {
                    return response.hashes.map(hash => Hash.create(Trytes.create(hash)));
                } else {
                    return [];
                }
            });
    }

    /**
     * Find the transactions which match the specified input and return. All input values are lists,
     * for which a list of return values (transaction hashes), in the same order, is returned for all
     * individual elements. The input fields can either be bundles, addresses, tags or approvees.
     * Using multiple of these input fields returns the intersection of the values.
     * @returns Promise which resolves with a list of hashes or rejects with error.
     */
    public async findTransactions(bundles?: Hash[], addresses?: Address[], tags?: Tag[], approvees?: Hash[]): Promise<Hash[]> {
        const hasBundle = bundles !== undefined && bundles !== null && bundles.length > 0;
        const hasAddresses = addresses !== undefined && addresses !== null && addresses.length > 0;
        const hasTags = tags !== undefined && tags !== null && tags.length > 0;
        const hasApprovees = approvees !== undefined && approvees !== null && approvees.length > 0;

        if (!hasBundle && !hasAddresses && !hasTags && !hasApprovees) {
            throw new CoreError("Your must provide bundles, addresses, tags or approvees");
        }

        const request: IFindTransactionsRequest = {
            bundles: hasBundle ? bundles.map(bundle => bundle.toTrytes().toString()) : undefined,
            addresses: hasAddresses ? addresses.map(address => address.toTrytes().toString()) : undefined,
            tags: hasTags ? tags.map(tag => tag.toTrytes().toString()) : undefined,
            approvees: hasApprovees ? approvees.map(approvee => approvee.toTrytes().toString()) : undefined
        };

        return this._apiClient.findTransactions(request)
            .then((response) => {
                if (response && response.hashes) {
                    return response.hashes.map(hash => Hash.create(Trytes.create(hash)));
                } else {
                    return [];
                }
            });
    }

    /**
     * Get the transaction details of specific transactions.
     * @returns Promise which resolves to the list of transactions or rejects with error.
     */
    public async getTransactionsDetails(transactionHashes: Hash[]): Promise<Transaction[]> {
        if (transactionHashes === undefined || transactionHashes === null || transactionHashes.length === 0) {
            throw new CoreError("Your must provide the hashes of the transactions you want to retrieve");
        }

        const request: IGetTrytesRequest = {
            hashes: transactionHashes.map(hash => hash.toTrytes().toString())
        };

        return this._apiClient.getTrytes(request)
            .then((response) => {
                if (response && response.trytes) {
                    return response.trytes.map(trytes => Transaction.fromTrytes(Trytes.create(trytes)));
                } else {
                    return [];
                }
            });
    }

    /**
     * Get the inclusion states of a list of transaction hashes.
     * @returns Promise which resolves to the list of inclusion states or rejects with error.
     */
    public async getLatestInclusion(transactionHashes: Hash[]): Promise<boolean[]> {
        if (transactionHashes === undefined || transactionHashes === null || transactionHashes.length === 0) {
            throw new CoreError("Your must provide the hashes of the transactions you want to get the inclusion states for");
        }

        return this._apiClient.getNodeInfo()
            .then((nodeInfo) => {
                if (nodeInfo && nodeInfo.latestSolidSubtangleMilestone !== undefined) {
                    const request: IGetInclusionStatesRequest = {
                        transactions: transactionHashes.map(hash => hash.toTrytes().toString()),
                        tips: [nodeInfo.latestSolidSubtangleMilestone]
                    };
                    return this._apiClient.getInclusionStates(request)
                        .then((response) =>
                            response.states || []);
                } else {
                    throw new CoreError("The node could not provide the latestSolidSubtangleMilestone");
                }
            });
    }

    /**
     * Generates a new address either deterministically or index-based.
     * @param seed The seed to generate the addresses from.
     * @param keyIndex If the index is provided, the generation of the address is not deterministic.
     * @param includeChecksum Includes the checksum on addresses.
     * @param createCount The number of addresses to create.
     * @param security The security level at which to create the addresses.
     * @param returnAll Returns all addresses which were deterministically generated
     * @returns Promise which resolves to the list of inclusion states or rejects with error.
     */
    public async getNewAddress(seed: Hash, keyIndex: number, includeChecksum: boolean, createCount: number, security: AddressSecurity, returnAll: boolean): Promise<Address[]> {
        if (seed === undefined || seed === null) {
            throw new CoreError("The seed cannot be undefined or null");
        }
        if (!NumberHelper.isInteger(keyIndex) || keyIndex < 0) {
            throw new CoreError("The keyIndex must be a number greater than or equal to zero", { keyIndex });
        }

        let localKeyIndex = keyIndex || 0;
        const localIncludeChecksum = includeChecksum || false;
        const localCreateCount = createCount || 0;
        const localSecurity = security || AddressSecurity.medium;

        const addresses: Address[] = [];

        if (localCreateCount > 0) {
            // If total number of addresses to generate is supplied, simply generate
            // and return the list of all addresses
            for (let i = 0; i < localCreateCount; i++) {
                addresses.push(this.generateAddress(seed, localKeyIndex++, localSecurity, localIncludeChecksum));
            }
        } else {
            // Continue calling wasAddressSpentFrom & findTransactions to see if address was already used
        }

        return Promise.resolve(addresses);
    }

    private generateAddress(seed: Hash, index: number, security: AddressSecurity, includeChecksum: boolean): Address {
        const key = TransactionSigning.generateKey(seed, index, security);
        const digests = TransactionSigning.digests(key);
        const addressTrits = TransactionSigning.address(digests);
        let address = addressTrits.toTrytes();

        if (includeChecksum) {
            address = TransactionSigning.addChecksum(address, 9);
        }

        return Address.create(address);
    }
}
