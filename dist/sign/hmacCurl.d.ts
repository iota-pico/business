import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
/**
 * Hashed Message Authentication Code using Curl.
 */
export declare class HmacCurl {
    /**
     * Create a new instance of the HmacCurl.
     * @param key The key to seed with.
     */
    constructor(key: Trytes);
    /**
     * Add bundle to the HMAC.
     */
    addHMAC(bundle: Bundle): void;
}
