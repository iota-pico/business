"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const address_1 = require("@iota-pico/data/dist/data/address");
const hash_1 = require("@iota-pico/data/dist/data/hash");
const transaction_1 = require("@iota-pico/data/dist/data/transaction");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const addressSecurity_1 = require("../interfaces/addressSecurity");
const transactionSigning_1 = require("./transactionSigning");
/**
 * Default implementation of the ITransactionClient.
 * @interface
 */
class TransactionClient {
    /**
     * Create a new instance of the TransactionClient.
     * @param apiClient An API Client to communicate through.
     */
    constructor(apiClient) {
        this._apiClient = apiClient;
    }
    /**
     * Returns the list of transaction in progress.
     * @returns Promise which resolves to a list of hashes or rejects with error.
     */
    async getTransactionsInProgress() {
        return this._apiClient.getTips()
            .then((response) => {
            if (response && response.hashes) {
                return response.hashes.map(hash => hash_1.Hash.create(trytes_1.Trytes.create(hash)));
            }
            else {
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
    async findTransactions(bundles, addresses, tags, approvees) {
        const hasBundle = bundles !== undefined && bundles !== null && bundles.length > 0;
        const hasAddresses = addresses !== undefined && addresses !== null && addresses.length > 0;
        const hasTags = tags !== undefined && tags !== null && tags.length > 0;
        const hasApprovees = approvees !== undefined && approvees !== null && approvees.length > 0;
        if (!hasBundle && !hasAddresses && !hasTags && !hasApprovees) {
            throw new coreError_1.CoreError("Your must provide bundles, addresses, tags or approvees");
        }
        const request = {
            bundles: hasBundle ? bundles.map(bundle => bundle.toTrytes().toString()) : undefined,
            addresses: hasAddresses ? addresses.map(address => address.toTrytes().toString()) : undefined,
            tags: hasTags ? tags.map(tag => tag.toTrytes().toString()) : undefined,
            approvees: hasApprovees ? approvees.map(approvee => approvee.toTrytes().toString()) : undefined
        };
        return this._apiClient.findTransactions(request)
            .then((response) => {
            if (response && response.hashes) {
                return response.hashes.map(hash => hash_1.Hash.create(trytes_1.Trytes.create(hash)));
            }
            else {
                return [];
            }
        });
    }
    /**
     * Get the transaction details of specific transactions.
     * @returns Promise which resolves to the list of transactions or rejects with error.
     */
    async getTransactionsDetails(transactionHashes) {
        if (transactionHashes === undefined || transactionHashes === null || transactionHashes.length === 0) {
            throw new coreError_1.CoreError("Your must provide the hashes of the transactions you want to retrieve");
        }
        const request = {
            hashes: transactionHashes.map(hash => hash.toTrytes().toString())
        };
        return this._apiClient.getTrytes(request)
            .then((response) => {
            if (response && response.trytes) {
                return response.trytes.map(trytes => transaction_1.Transaction.fromTrytes(trytes_1.Trytes.create(trytes)));
            }
            else {
                return [];
            }
        });
    }
    /**
     * Get the inclusion states of a list of transaction hashes.
     * @returns Promise which resolves to the list of inclusion states or rejects with error.
     */
    async getLatestInclusion(transactionHashes) {
        if (transactionHashes === undefined || transactionHashes === null || transactionHashes.length === 0) {
            throw new coreError_1.CoreError("Your must provide the hashes of the transactions you want to get the inclusion states for");
        }
        return this._apiClient.getNodeInfo()
            .then((nodeInfo) => {
            if (nodeInfo && nodeInfo.latestSolidSubtangleMilestone !== undefined) {
                const request = {
                    transactions: transactionHashes.map(hash => hash.toTrytes().toString()),
                    tips: [nodeInfo.latestSolidSubtangleMilestone]
                };
                return this._apiClient.getInclusionStates(request)
                    .then((response) => response.states || []);
            }
            else {
                throw new coreError_1.CoreError("The node could not provide the latestSolidSubtangleMilestone");
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
    async getNewAddress(seed, keyIndex, includeChecksum, createCount, security, returnAll) {
        if (seed === undefined || seed === null) {
            throw new coreError_1.CoreError("The seed cannot be undefined or null");
        }
        if (!numberHelper_1.NumberHelper.isInteger(keyIndex) || keyIndex < 0) {
            throw new coreError_1.CoreError("The keyIndex must be a number greater than or equal to zero", { keyIndex });
        }
        let localKeyIndex = keyIndex || 0;
        const localIncludeChecksum = includeChecksum || false;
        const localCreateCount = createCount || 0;
        const localSecurity = security || addressSecurity_1.AddressSecurity.medium;
        const addresses = [];
        if (localCreateCount > 0) {
            // If total number of addresses to generate is supplied, simply generate
            // and return the list of all addresses
            for (let i = 0; i < localCreateCount; i++) {
                addresses.push(this.generateAddress(seed, localKeyIndex++, localSecurity, localIncludeChecksum));
            }
        }
        else {
            // Continue calling wasAddressSpentFrom & findTransactions to see if address was already used
        }
        return Promise.resolve(addresses);
    }
    generateAddress(seed, index, security, includeChecksum) {
        const key = transactionSigning_1.TransactionSigning.generateKey(seed, index, security);
        const digests = transactionSigning_1.TransactionSigning.digests(key);
        const addressTrits = transactionSigning_1.TransactionSigning.address(digests);
        let address = addressTrits.toTrytes();
        if (includeChecksum) {
            address = transactionSigning_1.TransactionSigning.addChecksum(address, 9);
        }
        return address_1.Address.create(address);
    }
}
exports.TransactionClient = TransactionClient;
