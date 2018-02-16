"use strict";
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
                const hmac = [];
                curl.initialize();
                curl.absorb(key, 0, hashLength);
                curl.absorb(bundleHashTrits, 0, hashLength);
                curl.squeeze(hmac, 0, hashLength);
                const hmacTrytes = trits_1.Trits.fromArray(hmac).toTrytes().toString();
                bundle.transactions[i].signatureMessageFragment =
                    signatureFragment_1.SignatureFragment.create(trytes_1.Trytes.create(hmacTrytes + bundle.transactions[i].signatureMessageFragment.toString().substring(81, 2187)));
            }
        }
    }
}
/* @internal */
HmacCurl.HMAC_ROUNDS = 27;
exports.HmacCurl = HmacCurl;
