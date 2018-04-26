import { Address } from "@iota-pico/data/dist/data/address";
import { AddressSecurity } from "@iota-pico/data/dist/data/addressSecurity";
import { Input } from "@iota-pico/data/dist/data/input";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
/**
 * Options used during prepare transfer process prepareTransfers and sendTransfer.
 */
export declare type TransferOptions = {
    /**
     * List of inputs used for funding the transfer.
     */
    inputs?: Input[];
    /**
     * Security level to be used for the private key / addresses.
     */
    security?: AddressSecurity;
    /**
     * If defined, this address will be used for sending the remainder value (of the inputs) to.
     */
    remainderAddress?: Address;
    /**
     * Hmac key to sign the bundle.
     */
    hmacKey?: Trytes;
};
