/**
 * Represents a class which can provide the time.
 * @interface
 */
export interface ITimeProvider {
    /**
     * Returns the number of milliseconds since 1970/01/01.
     * @returns Number of milliseconds.
     */
    msSinceEpoch(): number;
}
