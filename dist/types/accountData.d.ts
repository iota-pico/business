import { Address } from "@iota-pico/data/dist/data/address";
import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { Input } from "@iota-pico/data/dist/data/input";
/**
 * Account data information returned from getAccountData.
 */
export declare type AccountData = {
    latestAddress: Address;
    addresses: Address[];
    transfers: Bundle[];
    inputs: Input[];
    balance: number;
};
