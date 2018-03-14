import { CoreError } from "@iota-pico/core/dist/error/coreError";

/**
 * A business implementation of an error.
 */
export class BusinessError extends CoreError {
    /**
     * Create an instance of BusinessError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message: string, additional?: { [id: string]: any }, innerError?: Error) {
        super(message, additional, innerError);
        this.domain = "Business";
    }
}
