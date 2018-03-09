/**
 * Options used during promote process in promoteTransaction.
 */
export declare type PromoteOptions = {
    delay?: number;
    interrupt?: boolean | (() => boolean);
};
