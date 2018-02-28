/**
 * Tests for HmacCurl.
 */
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import * as chai from "chai";
import { HmacCurl } from "../../src/transactions/hmacCurl";

describe("HmacCurl", () => {
    it("can be created", () => {
        const obj = new HmacCurl(Trytes.fromString("AAA"));
        chai.should().exist(obj);
    });
});
