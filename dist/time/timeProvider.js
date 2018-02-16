"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a class which can provide the time.
 */
class TimeProvider {
    /**
     * Returns the number of milliseconds since 1970/01/01.
     * @returns Number of milliseconds.
     */
    msSinceEpoch() {
        return Date.now();
    }
}
exports.TimeProvider = TimeProvider;
