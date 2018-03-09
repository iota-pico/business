import { Address } from "@iota-pico/data/dist/data/address";
import { AddressSecurity } from "@iota-pico/data/dist/data/addressSecurity";
import { Input } from "@iota-pico/data/dist/data/input";
import { Trytes } from "@iota-pico/data/dist/data/trytes";

/**
 * Options used during prepare transfer process prepareTransfers and sendTransfer.
 */
export type TransferOptions = {
    inputs?: Input[];
    security?: AddressSecurity;
    remainderAddress?: Address;
    hmacKey?: Trytes;
};
