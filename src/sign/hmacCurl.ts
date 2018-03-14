import { SpongeFactory } from "@iota-pico/crypto/dist/factories/spongeFactory";
import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { SignatureMessageFragment } from "@iota-pico/data/dist/data/signatureMessageFragment";
import { Trits } from "@iota-pico/data/dist/data/trits";
import { Trytes } from "@iota-pico/data/dist/data/trytes";

/**
 * Hashed Message Authentication Code using Curl.
 */
export class HmacCurl {
    /* @internal */
    private static readonly HMAC_ROUNDS: number = 27;
    /* @internal */
    private readonly _keyTrits: Int8Array;

    /**
     * Create a new instance of the HmacCurl.
     * @param key The key to seed with.
     */
    constructor(key: Trytes) {
        this._keyTrits = Trits.fromTrytes(key).toArray();
    }

    /**
     * Add bundle to the HMAC.
     */
    public addHMAC(bundle: Bundle): void {
        const curl = SpongeFactory.instance().create("curl", HmacCurl.HMAC_ROUNDS);
        const hashLength = curl.getConstant("HASH_LENGTH");
        const key = this._keyTrits;
        for (let i = 0; i < bundle.transactions.length; i++) {
            if (bundle.transactions[i].value.toNumber() > 0) {
                const bundleHashTrits = Trits.fromTrytes(bundle.transactions[i].bundle.toTrytes()).toArray();
                const hmac = new Int8Array(hashLength);
                curl.initialize();
                curl.absorb(key, 0, key.length);
                curl.absorb(bundleHashTrits, 0, bundleHashTrits.length);
                curl.squeeze(hmac, 0, hmac.length);
                const hmacTrytes = Trits.fromArray(hmac).toTrytes().toString();
                const rest = bundle.transactions[i].signatureMessageFragment.toTrytes().toString().substring(81, SignatureMessageFragment.LENGTH);
                bundle.transactions[i].signatureMessageFragment =
                    SignatureMessageFragment.fromTrytes(Trytes.fromString(hmacTrytes + rest));
            }
        }
    }
}
