import { Address } from "@iota-pico/data/dist/data/address";
import { AddressSecurity } from "@iota-pico/data/dist/data/addressSecurity";
import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Input } from "@iota-pico/data/dist/data/input";
import { Tag } from "@iota-pico/data/dist/data/tag";
import { Transaction } from "@iota-pico/data/dist/data/transaction";
import { Transfer } from "@iota-pico/data/dist/data/transfer";
import { AccountData } from "./accountData";
import { PromoteOptions } from "./promoteOptions";
import { TransferOptions } from "./transferOptions";

/**
 * Represents a client for performing transactions using the api if required.
 * @interface
 */
export interface ITransactionClient {
    /**
     * Initialize the client.
     */
    initialize(): Promise<void>;

    /**
     * Returns the list of transaction in progress.
     * @returns Promise which resolves to a list of hashes or rejects with error.
     */
    getTransactionsInProgress(): Promise<Hash[]>;

    /**
     * Find the transactions which match the specified input and return. All input values are lists,
     * for which a list of return values (transaction hashes), in the same order, is returned for all
     * individual elements. Using multiple of these input fields returns the intersection of the values.
     * @param bundles Bundles to lookup transaction hashes for.
     * @param addresses Addresses to lookup transaction hashes for.
     * @param tags Tags to lookup transaction hashes for.
     * @param approvees Approvees to lookup transaction hashes for.
     * @returns Promise which resolves with a list of hashes or rejects with error.
     */
    findTransactions(bundles?: Hash[], addresses?: Address[], tags?: Tag[], approvees?: Hash[]): Promise<Hash[]>;

    /**
     * Get the transaction details of specific transactions.
     * @returns Promise which resolves to the list of transactions or rejects with error.
     */
    getTransactionsObjects(transactionHashes: Hash[]): Promise<Transaction[]>;

    /**
     * Get the inclusion states of a list of transaction hashes.
     * @returns Promise which resolves to the list of inclusion states or rejects with error.
     */
    getLatestInclusion(transactionHashes: Hash[]): Promise<boolean[]>;

    /**
     * Generates addresses with index-based or using apis.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param endIndex The end index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to the list of addresses or rejects with error.
     */
    getNewAddress(seed: Hash, startIndex?: number, endIndex?: number, includeChecksum?: boolean, security?: AddressSecurity): Promise<Address[]>;

    /**
     * Generates addresses index-based.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param endIndex The end index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to the list of addresses or rejects with error.
     */
    getAddressesByIndex(seed: Hash, startIndex: number, endIndex: number, includeChecksum: boolean, security: AddressSecurity): Promise<Address[]>;

    /**
     * Generates address which havent been used using apis.
     * @param seed The seed to generate the addresses from.
     * @param startIndex The start index to generate addresses.
     * @param includeChecksum Includes the checksum on addresses.
     * @param security The security level at which to create the addresses.
     * @returns Promise which resolves to an addresses list, the first unused address is the last in the list or rejects with error.
     */
    getAddressesToUnused(seed: Hash, startIndex: number, includeChecksum: boolean, security: AddressSecurity): Promise<Address[]>;

    /**
     * Get the input data for a range of addresses.
     * @param seed The seed to get the input data for.
     * @param startIndex The start index to get the addresses.
     * @param endIndex The end index to get the addresses.
     * @param security The security level used to create the addresses.
     * @param totalRequired The threshold at which total balance to stop gathering addresses.
     * @returns Promise which resolves to the inputs for each address or rejects with error.
     */
    getInputs(seed: Hash, startIndex: number, endIndex: number, security: AddressSecurity, totalRequired: number): Promise<{ inputs: Input[]; totalBalance: number }>;

    /**
     * Prepares transfer by generating bundle, finding and signing inputs.
     * @param seed The seed to prepare the transfer for.
     * @param transfers The transfers to prepare.
     * @param transferOptions Additional options for the transfer.
     *      @property inputs List of inputs used for funding the transfer.
     *      @property security Security level to be used for the private key / addresses.
     *      @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to.
     *      @property hmacKey Hmac key to sign the bundle.
     * @returns Promise which resolves to the array of Transactions for the transfer or rejects with error.
     */
    prepareTransfers(seed: Hash, transfers: Transfer[], transferOptions?: TransferOptions): Promise<Transaction[]>;

    /**
     * Attach the transactions to the tangle by doing proof of work.
     * @param transactions The transactions to attach.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    attachToTangle(transactions: Transaction[], depth: number, minWeightMagnitude: number, reference?: Hash): Promise<Transaction[]>;

    /**
     * Wrapper function that does attachToTangle and then stores and broadcasts the transactions.
     * @param transactions The transactions to send.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    sendTransactions(transactions: Transaction[], depth: number, minWeightMagnitude: number, reference?: Hash): Promise<Transaction[]>;

    /**
     * Wrapper function that does prepareTransfers and then sendTransactions.
     * @param seed The seed to send the transfer for.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param transfers The transfers to send.
     * @param transferOptions Additional options for the transfer.
     *      @property inputs List of inputs used for funding the transfer.
     *      @property security Security level to be used for the private key / addresses.
     *      @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to.
     *      @property hmacKey Hmac key to sign the bundle.
     * @param reference The reference to send with the transactions.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    sendTransfer(seed: Hash, depth: number, minWeightMagnitude: number, transfers: Transfer[], transferOptions?: TransferOptions, reference?: Hash): Promise<Transaction[]>;

    /**
     * Find out if a transaction is promotable.
     * @param transactionTail The hash of the transaction to be promoted.
     * @returns Promise which resolves to true if the transaction is promotable rejects with an error.
     */
    isPromotable(transactionTail: Hash): Promise<boolean>;

    /**
     * Determines whether you should replay a transaction or make a new one (either with the same input, or a different one).
     * @param addresses Input address you want to have tested.
     * @returns Promise which resolves to true if the addresses are reattachable or rejects with an error.
     */
    isReattachable(addresses: Address[]): Promise<boolean[]>;

    /**
     * Promotes a transaction by adding spam on top of it, as long as it is promotable.
     * Will promote by adding transfers on top of the current one with delay interval.
     * Use promoteOptions.interrupt to terminate the promotion.
     * If promoteOptions.delay is set to 0 only one promotion transfer will be sent.
     * @param transactionTail The hash of the transaction to be promoted.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @param transfers The transfers to send.
     * @param promoteOptions Additional options for the promote.
     *      @property delay Delay between promotion transfers
     *      @property interrupt Flag or method to terminate promotion.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    promoteTransaction(transactionTail: Hash, depth: number, minWeightMagnitude: number, transfers: Transfer[], promoteOptions?: PromoteOptions): Promise<Transaction[]>;

    /**
     * Gets the associated bundle transactions of a single transaction.
     * Does validation of signatures, total sum as well as bundle order.
     * @param transactionHash Hash of a trunk or a tail transaction of a bundle.
     * @returns Promise which resolves to the bundle transactions or rejects with an error.
     */
    getBundle(transactionHash: Hash): Promise<Bundle>;

    /**
     * Traverse the Bundle by going down the trunkTransactions until
     * the bundle hash of the transaction is no longer the same.
     * @param trunkTransaction Hash of a trunk or a tail transaction of a bundle.
     * @param bundleHash The bundle hash to match.
     * @returns Promise which resolves to the bundle transactions or rejects with an error.
     */
    traverseBundle(trunkTransaction: Hash, bundleHash?: Hash): Promise<Transaction[]>;

    /**
     * Wrapper which gets a bundle and then replays a transfer by doing Proof of Work again.
     * @param transactionHash The hash of the transaction to be promoted.
     * @param depth Value that determines how far to go for tip selection.
     * @param minWeightMagnitude The minimum weight magnitude for the proof of work.
     * @returns Promise which resolves to the list of transactions created or rejects with an error.
     */
    reattachBundle(transactionHash: Hash, depth: number, minWeightMagnitude: number): Promise<Transaction[]>;

    /**
     * Wrapper which gets a bundle and then broadcasts it.
     * @param transactionHash The hash of the transaction to be re-broadcast.
     * @returns Promise which resolves or rejects with an error.
     */
    rebroadcastBundle(transactionHash: Hash): Promise<void>;

    /**
     * Get transaction objects by fist performing a findTransactions call.
     * @param addresses The addresses to get the transaction objects for.
     * @param bundles Bundles to lookup transactions for.
     * @param addresses Addresses to lookup transactions for.
     * @param tags Tags to lookup transactions for.
     * @param approvees Approvees to lookup transactions for.
     * @returns Promise which resolves to the list of transactions or rejects with an error.
     */
    findTransactionObjects(bundles?: Hash[], addresses?: Address[], tags?: Tag[], approvees?: Hash[]): Promise<Transaction[]>;

    /**
     * The transfers which are associated with a seed. The transfers are determined by either calculating
     * deterministically which addresses were already used, or by providing a list of indexes to get the
     * addresses and the associated transfers from. The transfers are sorted by their timestamp.
     * @param seed The seed to get the transfers for
     * @param startIndex The start index to get the transfers for.
     * @param endIndex The end index to get the transfers for.
     * @param security The security level for the transfers.
     * @param inclusionStates Do you want inclusion states in the bundles.
     * @returns Promise which resolves to the requested bundles or rejects with an error.
     */
    getTransfers(seed: Hash, startIndex?: number, endIndex?: number, security?: AddressSecurity, inclusionStates?: boolean): Promise<Bundle[]>;

    /**
     * Similar to getTransfers, just that it returns additional account data.
     * @param seed The seed to get the transfers for
     * @param startIndex The start index to get the transfers for.
     * @param endIndex The end index to get the transfers for.
     * @param security The security level for the transfers.
     * @returns Promise which resolves to the account data or rejects with an error.
     */
    getAccountData(seed: Hash, startIndex?: number, endIndex?: number, security?: AddressSecurity): Promise<AccountData>;
}
