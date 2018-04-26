Object.defineProperty(exports, "__esModule", { value: true });
const spongeFactory_1 = require("@iota-pico/crypto/dist/factories/spongeFactory");
const signatureMessageFragment_1 = require("@iota-pico/data/dist/data/signatureMessageFragment");
const trits_1 = require("@iota-pico/data/dist/data/trits");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
/**
 * Hashed Message Authentication Code using Curl.
 */
class HmacCurl {
    /**
     * Create a new instance of the HmacCurl.
     * @param key The key to seed with.
     */
    constructor(key) {
        this._keyTrits = trits_1.Trits.fromTrytes(key).toArray();
    }
    /**
     * Add bundle to the HMAC.
     * @param bundle The bundle to add the HMAC to.
     */
    addHMAC(bundle) {
        const curl = spongeFactory_1.SpongeFactory.instance().create("curl", HmacCurl.HMAC_ROUNDS);
        const hashLength = curl.getConstant("HASH_LENGTH");
        const key = this._keyTrits;
        for (let i = 0; i < bundle.transactions.length; i++) {
            if (bundle.transactions[i].value.toNumber() > 0) {
                const bundleHashTrits = trits_1.Trits.fromTrytes(bundle.transactions[i].bundle.toTrytes()).toArray();
                const hmac = new Int8Array(hashLength);
                curl.initialize();
                curl.absorb(key, 0, key.length);
                curl.absorb(bundleHashTrits, 0, bundleHashTrits.length);
                curl.squeeze(hmac, 0, hmac.length);
                const hmacTrytes = trits_1.Trits.fromArray(hmac).toTrytes().toString();
                const rest = bundle.transactions[i].signatureMessageFragment.toTrytes().toString().substring(81, signatureMessageFragment_1.SignatureMessageFragment.LENGTH);
                // tslint:disable:restrict-plus-operands false positive
                bundle.transactions[i].signatureMessageFragment =
                    signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString(hmacTrytes + rest));
            }
        }
    }
}
/* @internal */
HmacCurl.HMAC_ROUNDS = 27;
exports.HmacCurl = HmacCurl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1hY0N1cmwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2lnbi9obWFjQ3VybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0ZBQStFO0FBRS9FLGlHQUE4RjtBQUM5RiwyREFBd0Q7QUFDeEQsNkRBQTBEO0FBRTFEOztHQUVHO0FBQ0g7SUFNSTs7O09BR0c7SUFDSCxZQUFZLEdBQVc7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRDs7O09BR0c7SUFDSSxPQUFPLENBQUMsTUFBYztRQUN6QixNQUFNLElBQUksR0FBRyw2QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakQsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUU7Z0JBQzdDLE1BQU0sZUFBZSxHQUFHLGFBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDN0YsTUFBTSxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkMsTUFBTSxVQUFVLEdBQUcsYUFBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDL0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLG1EQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsSSx1REFBdUQ7Z0JBQ3ZELE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO29CQUMzQyxtREFBd0IsQ0FBQyxVQUFVLENBQUMsZUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNqRjtTQUNKO0lBQ0wsQ0FBQzs7QUFwQ0QsZUFBZTtBQUNTLG9CQUFXLEdBQVcsRUFBRSxDQUFDO0FBRnJELDRCQXNDQyJ9