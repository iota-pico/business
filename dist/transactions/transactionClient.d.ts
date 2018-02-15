import { IApiClient } from "@iota-pico/api/dist/interfaces/IApiClient";
import { Address } from "@iota-pico/data/dist/data/address";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Tag } from "@iota-pico/data/dist/data/tag";
import { Transaction } from "@iota-pico/data/dist/data/transaction";
import { AddressSecurity } from "../interfaces/addressSecurity";
import { ITransactionClient } from "../interfaces/ITransactionClient";
/**
 * Default implementation of the ITransactionClient.
 * @interface
 */
export declare class TransactionClient implements ITransactionClient {
    /**
     * Create a new instance of the TransactionClient.
     * @param apiClient An API Client to communicate through.
     */
    constructor(apiClient: IApiClient);
    /**
     * Returns the list of transaction in progress.
     * @returns Promise which resolves to a list of hashes or rejects with error.
     */
    getTransactionsInProgress(): Promise<Hash[]>;
    /**
     * Find the transactions which match the specified input and return. All input values are lists,
     * for which a list of return values (transaction hashes), in the same order, is returned for all
     * individual elements. The input fields can either be bundles, addresses, tags or approvees.
     * Using multiple of these input fields returns the intersection of the values.
     * @returns Promise which resolves with a list of hashes or rejects with error.
     */
    findTransactions(bundles?: Hash[], addresses?: Address[], tags?: Tag[], approvees?: Hash[]): Promise<Hash[]>;
    /**
     * Get the transaction details of specific transactions.
     * @returns Promise which resolves to the list of transactions or rejects with error.
     */
    getTransactionsDetails(transactionHashes: Hash[]): Promise<Transaction[]>;
    /**
     * Get the inclusion states of a list of transaction hashes.
     * @returns Promise which resolves to the list of inclusion states or rejects with error.
     */
    getLatestInclusion(transactionHashes: Hash[]): Promise<boolean[]>;
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
    getNewAddress(seed: Hash, keyIndex: number, includeChecksum: boolean, createCount: number, security: AddressSecurity, returnAll: boolean): Promise<Address[]>;
    private generateAddress(seed, index, security, includeChecksum);
}
