import { IApiClient } from "@iota-pico/api/dist/interfaces/IApiClient";
import { IAttachToTangleRequest } from "@iota-pico/api/dist/models/IAttachToTangleRequest";
import { ArrayHelper } from "@iota-pico/core/dist/helpers/arrayHelper";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { CryptoError } from "@iota-pico/crypto/dist/error/cryptoError";
import { IProofOfWork } from "@iota-pico/crypto/dist/interfaces/IProofOfWork";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { BusinessError } from "../error/businessError";

/**
 * ProofOfWork implementation using API.
 */
export class ProofOfWorkApi implements IProofOfWork {
    /* @internal */
    private readonly _apiClient: IApiClient;

    /**
     * Create an instance of ProofOfWork.
     * @param apiClient The API client to send the request through.
     */
    constructor(apiClient: IApiClient) {
        if (ObjectHelper.isEmpty(apiClient)) {
            throw new BusinessError("The apiClient must not be empty");
        }
        this._apiClient = apiClient;
    }

    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    public async initialize(): Promise<void> {
        return Promise.resolve();
    }

    /**
     * Perform a proof of work on the data.
     * @param trunkTransaction The trunkTransaction to use for the pow.
     * @param branchTransaction The branchTransaction to use for the pow.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    public async pow(trunkTransaction: Hash, branchTransaction: Hash, trytes: Trytes[], minWeightMagnitude: number): Promise<Trytes[]> {
        if (!ObjectHelper.isType(trunkTransaction, Hash)) {
            throw new CryptoError("The trunkTransaction must be an object of type Hash");
        }
        if (!ObjectHelper.isType(branchTransaction, Hash)) {
            throw new CryptoError("The branchTransaction must be an object of type Hash");
        }
        if (!ArrayHelper.isTyped(trytes, Trytes)) {
            throw new CryptoError("The trytes must be an array of type Trytes");
        }
        if (!NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new CryptoError("The minWeightMagnitude must be > 0");
        }

        const attachToTangleRequest: IAttachToTangleRequest = {
            trunkTransaction: trunkTransaction.toString(),
            branchTransaction: branchTransaction.toString(),
            minWeightMagnitude: minWeightMagnitude,
            trytes: trytes.map(t => t.toString())
        };

        const attachToTangleResponse = await this._apiClient.attachToTangle(attachToTangleRequest);

        if (ObjectHelper.isEmpty(attachToTangleResponse) || ArrayHelper.isEmpty(attachToTangleResponse.trytes)) {
            throw new CryptoError("The attachToTangleRequest did not return any trytes");
        } else {
            return attachToTangleResponse.trytes.map(returnTrytes => Trytes.fromString(returnTrytes));
        }
    }
}
