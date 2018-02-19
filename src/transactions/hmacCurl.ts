import { TritsHasherFactory } from "@iota-pico/crypto/dist/factories/tritsHasherFactory";
import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { SignatureFragment } from "@iota-pico/data/dist/data/signatureFragment";
import { Trits } from "@iota-pico/data/dist/data/trits";
import { Trytes } from "@iota-pico/data/dist/data/trytes";

/**
 * Hashed Message Authentication Code using Curl.
 * @interface
 */
export class HmacCurl {
    /* @internal */
    private static readonly HMAC_ROUNDS: number = 27;
    /* @internal */
    private readonly _keyTrits: number[];

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
        const curl = TritsHasherFactory.instance().create("curl", HmacCurl.HMAC_ROUNDS);
        const hashLength = curl.getConstants().HASH_LENGTH;
        const key = this._keyTrits;
        for (let i = 0; i < bundle.transactions.length; i++) {
            if (bundle.transactions[i].value.toNumber() > 0) {
                const bundleHashTrits = Trits.fromTrytes(bundle.transactions[i].bundle.toTrytes()).toArray();
                const hmac: number[] = Array.from(new Int8Array(hashLength));
                curl.initialize();
                curl.absorb(key, 0, key.length);
                curl.absorb(bundleHashTrits, 0, bundleHashTrits.length);
                curl.squeeze(hmac, 0, hmac.length);
                const hmacTrytes = Trits.fromArray(hmac).toTrytes().toString();
                const rest = bundle.transactions[i].signatureMessageFragment.toTrytes().toString().substring(81, 2187);
                bundle.transactions[i].signatureMessageFragment =
                    SignatureFragment.create(Trytes.create(hmacTrytes + rest));
            }
        }
    }
}
