import { Address } from "@iota-pico/data/dist/data/address";
import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { Input } from "@iota-pico/data/dist/data/input";

/**
 * Account data information.
 */
export type AccountData = {
    latestAddress: Address;
    addresses: Address[];
    transfers: Bundle[];
    inputs: Input[];
    balance: number;
};
