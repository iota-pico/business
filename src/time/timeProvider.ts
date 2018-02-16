import { ITimeProvider } from "../interfaces/ITimeProvider";

/**
 * Represents a class which can provide the time.
 */
export class TimeProvider implements ITimeProvider {
    /**
     * Returns the number of milliseconds since 1970/01/01.
     * @returns Number of milliseconds.
     */
    public msSinceEpoch(): number {
        return Date.now();
    }
}
