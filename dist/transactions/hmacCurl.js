Object.defineProperty(exports, "__esModule", { value: true });
const tritsHasherFactory_1 = require("@iota-pico/crypto/dist/factories/tritsHasherFactory");
const signatureFragment_1 = require("@iota-pico/data/dist/data/signatureFragment");
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
        const curl = tritsHasherFactory_1.TritsHasherFactory.instance().create("curl", HmacCurl.HMAC_ROUNDS);
        const hashLength = curl.getConstants().HASH_LENGTH;
        const key = this._keyTrits;
        for (let i = 0; i < bundle.transactions.length; i++) {
            if (bundle.transactions[i].value.toNumber() > 0) {
                const bundleHashTrits = trits_1.Trits.fromTrytes(bundle.transactions[i].bundle.toTrytes()).toArray();
                const hmac = Array.from(new Int8Array(hashLength));
                curl.initialize();
                curl.absorb(key, 0, key.length);
                curl.absorb(bundleHashTrits, 0, bundleHashTrits.length);
                curl.squeeze(hmac, 0, hmac.length);
                const hmacTrytes = trits_1.Trits.fromArray(hmac).toTrytes().toString();
                const rest = bundle.transactions[i].signatureMessageFragment.toTrytes().toString().substring(81, 2187);
                bundle.transactions[i].signatureMessageFragment =
                    signatureFragment_1.SignatureFragment.create(trytes_1.Trytes.create(hmacTrytes + rest));
            }
        }
    }
}
/* @internal */
HmacCurl.HMAC_ROUNDS = 27;
exports.HmacCurl = HmacCurl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1hY0N1cmwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdHJhbnNhY3Rpb25zL2htYWNDdXJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0RkFBeUY7QUFFekYsbUZBQWdGO0FBQ2hGLDJEQUF3RDtBQUN4RCw2REFBMEQ7QUFFMUQ7OztHQUdHO0FBQ0g7SUFNSTs7O09BR0c7SUFDSCxZQUFZLEdBQVc7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRDs7T0FFRztJQUNJLE9BQU8sQ0FBQyxNQUFjO1FBQ3pCLE1BQU0sSUFBSSxHQUFHLHVDQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hGLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDbkQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbEQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsTUFBTSxlQUFlLEdBQUcsYUFBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUM3RixNQUFNLElBQUksR0FBYSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkMsTUFBTSxVQUFVLEdBQUcsYUFBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDL0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN2RyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtvQkFDM0MscUNBQWlCLENBQUMsTUFBTSxDQUFDLGVBQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkUsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDOztBQWxDRCxlQUFlO0FBQ1Msb0JBQVcsR0FBVyxFQUFFLENBQUM7QUFGckQsNEJBb0NDIn0=