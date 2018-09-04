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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlTaWdBZGRyZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL211bHRpU2lnL211bHRpU2lnQWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEVBQXVFO0FBQ3ZFLDRFQUF5RTtBQUN6RSxrRkFBK0U7QUFFL0UsK0RBQTREO0FBQzVELDJEQUF3RDtBQUN4RCw2REFBMEQ7QUFDMUQsMERBQXVEO0FBRXZEOztHQUVHO0FBQ0gsTUFBYSxlQUFlO0lBT3hCOztPQUVHO0lBQ0g7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLDZCQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLE9BQWlCO1FBQzNCLElBQUksQ0FBQyx5QkFBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsZUFBTSxDQUFDLEVBQUU7WUFDdkMsTUFBTSxJQUFJLDZCQUFhLENBQUMsK0NBQStDLENBQUMsQ0FBQztTQUM1RTtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLE1BQU0sV0FBVyxHQUFHLGFBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekQ7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFFBQVEsQ0FBQyxPQUFrQjtRQUM5QixJQUFJLENBQUMsMkJBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QjtRQUVELE1BQU0sWUFBWSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV6RCxPQUFPLGlCQUFPLENBQUMsVUFBVSxDQUFDLGFBQUssQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDO0NBQ0o7QUE5Q0QsMENBOENDIn0=