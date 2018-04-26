/**
 * Options used during promote process in promoteTransaction.
 */
export type PromoteOptions = {
    /**
     * Delay between promotion transfers.
     */
    delay?: number;
    /**
     * Flag or method to terminate promotion.
     */
    interrupt?: boolean | (() => boolean);
};
