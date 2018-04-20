Object.defineProperty(exports, "__esModule", { value: true });
const arrayHelper_1 = require("@iota-pico/core/dist/helpers/arrayHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const spongeFactory_1 = require("@iota-pico/crypto/dist/factories/spongeFactory");
const address_1 = require("@iota-pico/data/dist/data/address");
const trits_1 = require("@iota-pico/data/dist/data/trits");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const businessError_1 = require("../error/businessError");
/**
 * Address using multiple signatures.
 */
class MultiSigAddress {
    /**
     * Create a new instance of the MultiSigAddress.
     */
    constructor() {
        this._kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
        this._hashLength = this._kerl.getConstant("HASH_LENGTH");
        this._kerl.initialize();
    }
    /**
     * Absorb key digests.
     * @param digests The digests hashes to absorb.
     */
    absorb(digests) {
        if (!arrayHelper_1.ArrayHelper.isTyped(digests, trytes_1.Trytes)) {
            throw new businessError_1.BusinessError("The digests should be an array of type Trytes");
        }
        for (let i = 0; i < digests.length; i++) {
            const digestTrits = trits_1.Trits.fromTrytes(digests[i]).toArray();
            this._kerl.absorb(digestTrits, 0, digestTrits.length);
        }
    }
    /**
     * Finalizes and returns the multisig address in trytes.
     * @param digests The final digests hashes to absorb.
     * @returns The multi signature address.
     */
    finalize(digests) {
        if (!objectHelper_1.ObjectHelper.isEmpty(digests)) {
            this.absorb(digests);
        }
        const addressTrits = new Int8Array(this._hashLength);
        this._kerl.squeeze(addressTrits, 0, addressTrits.length);
        return address_1.Address.fromTrytes(trits_1.Trits.fromArray(addressTrits).toTrytes());
    }
}
exports.MultiSigAddress = MultiSigAddress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlTaWdBZGRyZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL211bHRpU2lnL211bHRpU2lnQWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEVBQXVFO0FBQ3ZFLDRFQUF5RTtBQUN6RSxrRkFBK0U7QUFFL0UsK0RBQTREO0FBQzVELDJEQUF3RDtBQUN4RCw2REFBMEQ7QUFDMUQsMERBQXVEO0FBRXZEOztHQUVHO0FBQ0g7SUFPSTs7T0FFRztJQUNIO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyw2QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxPQUFpQjtRQUMzQixJQUFJLENBQUMseUJBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLGVBQU0sQ0FBQyxFQUFFO1lBQ3ZDLE1BQU0sSUFBSSw2QkFBYSxDQUFDLCtDQUErQyxDQUFDLENBQUM7U0FDNUU7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxNQUFNLFdBQVcsR0FBRyxhQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRTNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pEO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxRQUFRLENBQUMsT0FBa0I7UUFDOUIsSUFBSSxDQUFDLDJCQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEI7UUFFRCxNQUFNLFlBQVksR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekQsT0FBTyxpQkFBTyxDQUFDLFVBQVUsQ0FBQyxhQUFLLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQztDQUNKO0FBOUNELDBDQThDQyJ9