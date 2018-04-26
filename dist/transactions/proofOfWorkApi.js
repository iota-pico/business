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
     * @returns Promise.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmtBcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNhY3Rpb25zL3Byb29mT2ZXb3JrQXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSwwRUFBdUU7QUFDdkUsNEVBQXlFO0FBQ3pFLDRFQUF5RTtBQUN6RSwwRUFBdUU7QUFFdkUseURBQXNEO0FBQ3RELDZEQUEwRDtBQUMxRCwwREFBdUQ7QUFFdkQ7O0dBRUc7QUFDSDtJQUlJOzs7T0FHRztJQUNILFlBQVksU0FBcUI7UUFDN0IsSUFBSSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNqQyxNQUFNLElBQUksNkJBQWEsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxLQUFLLENBQUMsVUFBVTtRQUNuQixPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQXNCLEVBQUUsaUJBQXVCLEVBQUUsTUFBZ0IsRUFBRSxrQkFBMEI7UUFDMUcsSUFBSSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLFdBQUksQ0FBQyxFQUFFO1lBQzlDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7U0FDaEY7UUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsV0FBSSxDQUFDLEVBQUU7WUFDL0MsTUFBTSxJQUFJLHlCQUFXLENBQUMsc0RBQXNELENBQUMsQ0FBQztTQUNqRjtRQUNELElBQUksQ0FBQyx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsZUFBTSxDQUFDLEVBQUU7WUFDdEMsTUFBTSxJQUFJLHlCQUFXLENBQUMsNENBQTRDLENBQUMsQ0FBQztTQUN2RTtRQUNELElBQUksQ0FBQywyQkFBWSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLGtCQUFrQixJQUFJLENBQUMsRUFBRTtZQUN4RSxNQUFNLElBQUkseUJBQVcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsTUFBTSxxQkFBcUIsR0FBMkI7WUFDbEQsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO1lBQzdDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLFFBQVEsRUFBRTtZQUMvQyxrQkFBa0IsRUFBRSxrQkFBa0I7WUFDdEMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDeEMsQ0FBQztRQUVGLE1BQU0sc0JBQXNCLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTNGLElBQUksMkJBQVksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsSUFBSSx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNwRyxNQUFNLElBQUkseUJBQVcsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1NBQ2hGO2FBQU07WUFDSCxPQUFPLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxlQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7U0FDN0Y7SUFDTCxDQUFDO0NBQ0o7QUE3REQsd0NBNkRDIn0=