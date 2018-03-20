Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("@iota-pico/core/dist/helpers/arrayHelper");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const cryptoError_1 = require("@iota-pico/crypto/dist/error/cryptoError");
const hash_1 = require("@iota-pico/data/dist/data/hash");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const businessError_1 = require("../error/businessError");
/**
 * ProofOfWork implementation using API.
 */
class ProofOfWorkApi {
    /**
     * Create an instance of ProofOfWork.
     * @param apiClient The API client to send the request through.
     */
    constructor(apiClient) {
        if (objectHelper_1.ObjectHelper.isEmpty(apiClient)) {
            throw new businessError_1.BusinessError("The apiClient must not be empty");
        }
        this._apiClient = apiClient;
    }
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    async initialize() {
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
    async pow(trunkTransaction, branchTransaction, trytes, minWeightMagnitude) {
        if (!objectHelper_1.ObjectHelper.isType(trunkTransaction, hash_1.Hash)) {
            throw new cryptoError_1.CryptoError("The trunkTransaction must be an object of type Hash");
        }
        if (!objectHelper_1.ObjectHelper.isType(branchTransaction, hash_1.Hash)) {
            throw new cryptoError_1.CryptoError("The branchTransaction must be an object of type Hash");
        }
        if (!arrayHelper_1.ArrayHelper.isTyped(trytes, trytes_1.Trytes)) {
            throw new cryptoError_1.CryptoError("The trytes must be an array of type Trytes");
        }
        if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");
        }
        const attachToTangleRequest = {
            trunkTransaction: trunkTransaction.toString(),
            branchTransaction: branchTransaction.toString(),
            minWeightMagnitude: minWeightMagnitude,
            trytes: trytes.map(t => t.toString())
        };
        const attachToTangleResponse = await this._apiClient.attachToTangle(attachToTangleRequest);
        if (objectHelper_1.ObjectHelper.isEmpty(attachToTangleResponse) || arrayHelper_1.ArrayHelper.isEmpty(attachToTangleResponse.trytes)) {
            throw new cryptoError_1.CryptoError("The attachToTangleRequest did not return any trytes");
        }
        else {
            return attachToTangleResponse.trytes.map(returnTrytes => trytes_1.Trytes.fromString(returnTrytes));
        }
    }
}
exports.ProofOfWorkApi = ProofOfWorkApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmtBcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNhY3Rpb25zL3Byb29mT2ZXb3JrQXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSwwRUFBdUU7QUFDdkUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSwwRUFBdUU7QUFFdkUseURBQXNEO0FBQ3RELDZEQUEwRDtBQUMxRCwwREFBdUQ7QUFFdkQ7O0dBRUc7QUFDSDtJQUlJOzs7T0FHRztJQUNILFlBQVksU0FBcUI7UUFDN0IsRUFBRSxDQUFDLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sSUFBSSw2QkFBYSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsVUFBVTtRQUNuQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksS0FBSyxDQUFDLEdBQUcsQ0FBQyxnQkFBc0IsRUFBRSxpQkFBdUIsRUFBRSxNQUFnQixFQUFFLGtCQUEwQjtRQUMxRyxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLFdBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNLElBQUkseUJBQVcsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLFdBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxNQUFNLElBQUkseUJBQVcsQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1FBQ2xGLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLHlCQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxlQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxJQUFJLHlCQUFXLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLGtCQUFrQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekUsTUFBTSxJQUFJLHlCQUFXLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBRUQsTUFBTSxxQkFBcUIsR0FBMkI7WUFDbEQsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO1lBQzdDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLFFBQVEsRUFBRTtZQUMvQyxrQkFBa0IsRUFBRSxrQkFBa0I7WUFDdEMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDeEMsQ0FBQztRQUVGLE1BQU0sc0JBQXNCLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTNGLEVBQUUsQ0FBQyxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLElBQUkseUJBQVcsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JHLE1BQU0sSUFBSSx5QkFBVyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7UUFDakYsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxlQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDOUYsQ0FBQztJQUNMLENBQUM7Q0FDSjtBQTVERCx3Q0E0REMifQ==