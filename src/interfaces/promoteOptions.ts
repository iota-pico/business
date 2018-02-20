/**
 * Options used during promote process.
 */
export type PromoteOptions = {
    delay?: number;
    interrupt?: boolean | (() => boolean);
};
