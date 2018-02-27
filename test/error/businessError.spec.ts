/**
 * Tests for BusinessError.
 */
import * as chai from "chai";
import { BusinessError } from "../../src/error/businessError";

describe("BusinessError", () => {
    it("can be created", () => {
        const obj = new BusinessError("message");
        chai.should().exist(obj);
    });
});
