/**
 * Options used during promote process in promoteTransaction.
 */
export type PromoteOptions = {
    delay?: number;
    interrupt?: boolean | (() => boolean);
};
