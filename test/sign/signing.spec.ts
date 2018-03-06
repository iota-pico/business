/**
 * Tests for Signing.
 */
import * as chai from "chai";
import { Signing } from "../../src/sign/signing";

describe("Signing", () => {
    it("can be created", () => {
        const obj = new Signing();
        chai.should().exist(obj);
    });
});
