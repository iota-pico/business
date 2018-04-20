Object.defineProperty(exports, "__esModule", { value: true });
const spongeFactory_1 = require("@iota-pico/crypto/dist/factories/spongeFactory");
const trits_1 = require("@iota-pico/data/dist/data/trits");
/**
 * Helper class for address signing.
 * Original https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js
 * @internal
 */
class AddressHelper {
    /**
     * Create a checksum for the trits.
     * @param trits The trits to create the checksum for.
     * @param checksumLength The length of the checksum.
     * @returns the checksum as trytes.
     */
    static createChecksum(trits, checksumLength) {
        const kerl = spongeFactory_1.SpongeFactory.instance().create("kerl");
        kerl.initialize();
        kerl.absorb(trits, 0, trits.length);
        const checksumTrits = new Int8Array(kerl.getConstant("HASH_LENGTH"));
        kerl.squeeze(checksumTrits, 0, checksumTrits.length);
        return trits_1.Trits.fromArray(checksumTrits).toTrytes().toString().substring(81 - checksumLength, 81);
    }
}
exports.AddressHelper = AddressHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzc0hlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL2FkZHJlc3NIZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGtGQUErRTtBQUMvRSwyREFBd0Q7QUFFeEQ7Ozs7R0FJRztBQUNIO0lBQ0k7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQWdCLEVBQUUsY0FBc0I7UUFDakUsTUFBTSxJQUFJLEdBQUcsNkJBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEMsTUFBTSxhQUFhLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckQsT0FBTyxhQUFLLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ25HLENBQUM7Q0FDSjtBQWxCRCxzQ0FrQkMifQ==