/**
 * Tests for AddressHelper.
 */
import * as chai from "chai";
import { AddressHelper } from "../../src/helpers/addressHelper";

describe("AddressHelper", () => {
    it("can be created", () => {
        const obj = new AddressHelper();
        chai.should().exist(obj);
    });
});
