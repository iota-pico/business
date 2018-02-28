/**
 * Tests for TransactionSigning.
 */
import * as chai from "chai";
import { TransactionSigning } from "../../src/transactions/transactionSigning";

describe("TransactionSigning", () => {
    it("can be created", () => {
        const obj = new TransactionSigning();
        chai.should().exist(obj);
    });
});
