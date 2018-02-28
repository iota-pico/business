/**
 * Tests for BundleSigning.
 */
import * as chai from "chai";
import { BundleSigning } from "../../src/transactions/bundleSigning";

describe("BundleSigning", () => {
    it("can be created", () => {
        const obj = new BundleSigning();
        chai.should().exist(obj);
    });
});
