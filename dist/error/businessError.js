Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
/**
 * A business implementation of an error.
 */
class BusinessError extends coreError_1.CoreError {
    /**
     * Create an instance of BusinessError.
     * @param message The message for the error.
     * @param additional Additional details about the error.
     * @param innerError Add information from inner error if there was one.
     */
    constructor(message, additional, innerError) {
        super(message, additional, innerError);
        this.domain = "Business";
    }
}
exports.BusinessError = BusinessError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3NFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lcnJvci9idXNpbmVzc0Vycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvRUFBaUU7QUFFakU7O0dBRUc7QUFDSCxNQUFhLGFBQWMsU0FBUSxxQkFBUztJQUN4Qzs7Ozs7T0FLRztJQUNILFlBQVksT0FBZSxFQUFFLFVBQWtDLEVBQUUsVUFBa0I7UUFDL0UsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBWEQsc0NBV0MifQ==