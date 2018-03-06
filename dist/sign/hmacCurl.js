Object.defineProperty(exports, "__esModule", { value: true });
const spongeFactory_1 = require("@iota-pico/crypto/dist/factories/spongeFactory");
const signatureMessageFragment_1 = require("@iota-pico/data/dist/data/signatureMessageFragment");
const trits_1 = require("@iota-pico/data/dist/data/trits");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
/**
 * Hashed Message Authentication Code using Curl.
 * @interface
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
     */
    addHMAC(bundle) {
        const curl = spongeFactory_1.SpongeFactory.instance().create("curl", HmacCurl.HMAC_ROUNDS);
        const hashLength = curl.getConstants().HASH_LENGTH;
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
                bundle.transactions[i].signatureMessageFragment =
                    signatureMessageFragment_1.SignatureMessageFragment.fromTrytes(trytes_1.Trytes.fromString(hmacTrytes + rest));
            }
        }
    }
}
/* @internal */
HmacCurl.HMAC_ROUNDS = 27;
exports.HmacCurl = HmacCurl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1hY0N1cmwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2lnbi9obWFjQ3VybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsa0ZBQStFO0FBRS9FLGlHQUE4RjtBQUM5RiwyREFBd0Q7QUFDeEQsNkRBQTBEO0FBRTFEOzs7R0FHRztBQUNIO0lBTUk7OztPQUdHO0lBQ0gsWUFBWSxHQUFXO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxPQUFPLENBQUMsTUFBYztRQUN6QixNQUFNLElBQUksR0FBRyw2QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDbkQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbEQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsTUFBTSxlQUFlLEdBQUcsYUFBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM3RixNQUFNLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUUsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLFVBQVUsR0FBRyxhQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMvRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsbURBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xJLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO29CQUMzQyxtREFBd0IsQ0FBQyxVQUFVLENBQUMsZUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsRixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7O0FBbENELGVBQWU7QUFDUyxvQkFBVyxHQUFXLEVBQUUsQ0FBQztBQUZyRCw0QkFvQ0MifQ==