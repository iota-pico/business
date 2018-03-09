/**
 * Tests for BundleHelper.
 */
import { Address } from "@iota-pico/data/dist/data/address";
import { AddressSecurity } from "@iota-pico/data/dist/data/addressSecurity";
import { Bundle } from "@iota-pico/data/dist/data/bundle";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Input } from "@iota-pico/data/dist/data/input";
import { SignatureMessageFragment } from "@iota-pico/data/dist/data/signatureMessageFragment";
import { Tag } from "@iota-pico/data/dist/data/tag";
import { Transaction } from "@iota-pico/data/dist/data/transaction";
import { TryteNumber } from "@iota-pico/data/dist/data/tryteNumber";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import * as chai from "chai";
import { BundleHelper } from "../../src/helpers/bundleHelper";
import { TransferOptions } from "../../src/interfaces/transferOptions";

describe("BundleHelper", () => {
    it("can be created", () => {
        const obj = new BundleHelper();
        chai.should().exist(obj);
    });

    describe("signInputs", () => {
        it("can be created with no transactions", () => {
            const seed = Hash.fromTrytes(Trytes.fromString("ISHKSEIVNKYFLYAUKVDRAWEUIZJIAAVICHFCIAEEUPSIJJXTLOLVJBZWEISNBVQLQJCSHCAUAFMATP9KN"));

            const bundle = new Bundle();

            const transferOptions = <TransferOptions>{};

            const signatureMessageFragments: SignatureMessageFragment[] = [];

            const inputs: Input[] = [ ];

            BundleHelper.signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, false);
            chai.expect(bundle.transactions.length).to.be.equal(0);
        });

        it("can be created", () => {
            const seed = Hash.fromTrytes(Trytes.fromString("ISHKSEIVNKYFLYAUKVDRAWEUIZJIAAVICHFCIAEEUPSIJJXTLOLVJBZWEISNBVQLQJCSHCAUAFMATP9KN"));

            const bundle = new Bundle();

            const addr = Address.fromTrytes(Trytes.fromString("A".repeat(81)));
            bundle.addTransactions(2, addr, 10, Tag.fromTrytes(Trytes.fromString("9".repeat(27))), 1000);
            bundle.transactions[0].value = TryteNumber.fromNumber(-100, 11);
            bundle.transactions[0].currentIndex = TryteNumber.fromNumber(0);
            bundle.transactions[0].lastIndex = TryteNumber.fromNumber(0);

            const transferOptions = <TransferOptions>{};

            const signatureMessageFragments: SignatureMessageFragment[] = [];

            const inputs = [
                Input.fromParams(addr,
                                 AddressSecurity.medium,
                                 0,
                                 100)
            ];

            BundleHelper.signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, false);
            chai.expect(bundle.transactions.length).to.be.equal(2);
        });

        it("can be created with override security", () => {
            const seed = Hash.fromTrytes(Trytes.fromString("ISHKSEIVNKYFLYAUKVDRAWEUIZJIAAVICHFCIAEEUPSIJJXTLOLVJBZWEISNBVQLQJCSHCAUAFMATP9KN"));

            const bundle = new Bundle();

            const addr = Address.fromTrytes(Trytes.fromString("A".repeat(81)));
            bundle.addTransactions(2, addr, 10, Tag.fromTrytes(Trytes.fromString("9".repeat(27))), 1000);
            bundle.transactions[0].value = TryteNumber.fromNumber(-100, 11);
            bundle.transactions[0].currentIndex = TryteNumber.fromNumber(0);
            bundle.transactions[0].lastIndex = TryteNumber.fromNumber(0);
            bundle.transactions[0].bundle = Hash.EMPTY;

            bundle.addSignatureMessageFragments([]);

            const transferOptions = <TransferOptions>{};
            transferOptions.security = AddressSecurity.medium;

            const signatureMessageFragments: SignatureMessageFragment[] = [];

            const inputs = [
                Input.fromParams(addr,
                                 AddressSecurity.medium,
                                 0,
                                 100)
            ];

            inputs[0].security = undefined;

            BundleHelper.signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, false);
            chai.expect(bundle.transactions.length).to.be.equal(2);
        });

        it("can be created with addtional value transactions", () => {
            const seed = Hash.fromTrytes(Trytes.fromString("ISHKSEIVNKYFLYAUKVDRAWEUIZJIAAVICHFCIAEEUPSIJJXTLOLVJBZWEISNBVQLQJCSHCAUAFMATP9KN"));

            const bundle = new Bundle();

            const addr = Address.fromTrytes(Trytes.fromString("A".repeat(81)));
            bundle.addTransactions(2, addr, 10, Tag.fromTrytes(Trytes.fromString("9".repeat(27))), 1000);
            bundle.transactions[0].value = TryteNumber.fromNumber(-100, 11);
            bundle.transactions[0].currentIndex = TryteNumber.fromNumber(0);
            bundle.transactions[0].lastIndex = TryteNumber.fromNumber(0);
            bundle.transactions[0].bundle = Hash.EMPTY;
            bundle.transactions[1].value = TryteNumber.fromNumber(10, 11);
            bundle.transactions[1].currentIndex = TryteNumber.fromNumber(0);
            bundle.transactions[1].lastIndex = TryteNumber.fromNumber(0);
            bundle.transactions[1].bundle = Hash.EMPTY;

            bundle.addSignatureMessageFragments([]);

            const transferOptions = <TransferOptions>{};

            const signatureMessageFragments: SignatureMessageFragment[] = [];

            const inputs = [
                Input.fromParams(addr,
                                 AddressSecurity.medium,
                                 0,
                                 100)
            ];

            BundleHelper.signInputs(seed, bundle, transferOptions, signatureMessageFragments, inputs, false);
            chai.expect(bundle.transactions.length).to.be.equal(2);
        });
    });

    describe("isValid", () => {
        it("can not be valid with no bundle", () => {
            const ret = BundleHelper.isValid(undefined);
            chai.expect(ret).to.be.equal(false);
        });

        it("can not be valid with no transactions", () => {
            const bundle: Bundle = new Bundle();
            bundle.transactions = [];
            const ret = BundleHelper.isValid(bundle);
            chai.expect(ret).to.be.equal(false);
        });

        it("can not be valid with invalid indexes", () => {
            const transactions: Transaction[] = [
                Transaction.fromParams(SignatureMessageFragment.fromTrytes(Trytes.fromString("A".repeat(2187))),
                                       Address.fromTrytes(Trytes.fromString("B".repeat(81))),
                                       10,
                                       Tag.fromTrytes(Trytes.fromString("C".repeat(27))),
                                       20,
                                       30,
                                       40,
                                       Hash.fromTrytes(Trytes.fromString("D".repeat(81))),
                                       Hash.fromTrytes(Trytes.fromString("E".repeat(81))),
                                       Hash.fromTrytes(Trytes.fromString("F".repeat(81))),
                                       Tag.fromTrytes(Trytes.fromString("G".repeat(27))),
                                       50,
                                       60,
                                       70,
                                       Tag.fromTrytes(Trytes.fromString("H".repeat(27))))
             ];

            const bundle: Bundle = new Bundle();
            bundle.transactions = transactions;
            const ret = BundleHelper.isValid(bundle);
            chai.expect(ret).to.be.equal(false);
        });

        it("can not be valid with non zero total", () => {
            const transactions: Transaction[] = [
                Transaction.fromParams(SignatureMessageFragment.fromTrytes(Trytes.fromString("A".repeat(2187))),
                                       Address.fromTrytes(Trytes.fromString("B".repeat(81))),
                                       10,
                                       Tag.fromTrytes(Trytes.fromString("C".repeat(27))),
                                       20,
                                       0,
                                       40,
                                       Hash.fromTrytes(Trytes.fromString("D".repeat(81))),
                                       Hash.fromTrytes(Trytes.fromString("E".repeat(81))),
                                       Hash.fromTrytes(Trytes.fromString("F".repeat(81))),
                                       Tag.fromTrytes(Trytes.fromString("G".repeat(27))),
                                       50,
                                       60,
                                       70,
                                       Tag.fromTrytes(Trytes.fromString("H".repeat(27))))
             ];

            const bundle: Bundle = new Bundle();
            bundle.transactions = transactions;
            const ret = BundleHelper.isValid(bundle);
            chai.expect(ret).to.be.equal(false);
        });

        it("can not be valid with last index not equal to total", () => {
            const transactions: Transaction[] = [
                Transaction.fromParams(SignatureMessageFragment.fromTrytes(Trytes.fromString("A".repeat(2187))),
                                       Address.fromTrytes(Trytes.fromString("B".repeat(81))),
                                       0,
                                       Tag.fromTrytes(Trytes.fromString("C".repeat(27))),
                                       20,
                                       0,
                                       1,
                                       Hash.fromTrytes(Trytes.fromString("LWAMIQEFSRKAYACFSLCKWVYROQHIVLBPZCNIAYSKCBWVQQADGNIWFAZR99TLKNKBWDO9SOTENIYXEPDQZ")),
                                       Hash.fromTrytes(Trytes.fromString("E".repeat(81))),
                                       Hash.fromTrytes(Trytes.fromString("F".repeat(81))),
                                       Tag.fromTrytes(Trytes.fromString("G".repeat(27))),
                                       50,
                                       60,
                                       70,
                                       Tag.fromTrytes(Trytes.fromString("H".repeat(27))))
             ];

            const bundle: Bundle = new Bundle();
            bundle.transactions = transactions;
            const ret = BundleHelper.isValid(bundle);
            chai.expect(ret).to.be.equal(false);
        });

        it("can not be valid with invalid bundle hash", () => {
            const transactions: Transaction[] = [
                Transaction.fromParams(SignatureMessageFragment.fromTrytes(Trytes.fromString("A".repeat(2187))),
                                       Address.fromTrytes(Trytes.fromString("B".repeat(81))),
                                       0,
                                       Tag.fromTrytes(Trytes.fromString("C".repeat(27))),
                                       20,
                                       0,
                                       1,
                                       Hash.fromTrytes(Trytes.fromString("D".repeat(81))),
                                       Hash.fromTrytes(Trytes.fromString("E".repeat(81))),
                                       Hash.fromTrytes(Trytes.fromString("F".repeat(81))),
                                       Tag.fromTrytes(Trytes.fromString("G".repeat(27))),
                                       50,
                                       60,
                                       70,
                                       Tag.fromTrytes(Trytes.fromString("H".repeat(27))))
             ];

            const bundle: Bundle = new Bundle();
            bundle.transactions = transactions;
            const ret = BundleHelper.isValid(bundle);
            chai.expect(ret).to.be.equal(false);
        });

        it("can not be valid with invalid signatures", () => {
            const transactions: Transaction[] = [
                Transaction.fromParams(SignatureMessageFragment.fromTrytes(Trytes.fromString("A".repeat(2187))),
                                       Address.fromTrytes(Trytes.fromString("B".repeat(81))),
                                       -10,
                                       Tag.fromTrytes(Trytes.fromString("C".repeat(27))),
                                       20,
                                       0,
                                       1,
                                       Hash.fromTrytes(Trytes.fromString("OSJXHAJOVDOWMOFRAHH9IBGUJ9NUTTBJTXNQYCEONIYVFUYCMSKWERZWUDYFRLN9VRQVY9CIURFEUKEIW")),
                                       Hash.fromTrytes(Trytes.fromString("E".repeat(81))),
                                       Hash.fromTrytes(Trytes.fromString("F".repeat(81))),
                                       Tag.fromTrytes(Trytes.fromString("G".repeat(27))),
                                       50,
                                       60,
                                       70,
                                       Tag.fromTrytes(Trytes.fromString("H".repeat(27)))),
                Transaction.fromParams(SignatureMessageFragment.fromTrytes(Trytes.fromString("A".repeat(2187))),
                                       Address.fromTrytes(Trytes.fromString("B".repeat(81))),
                                       10,
                                       Tag.fromTrytes(Trytes.fromString("C".repeat(27))),
                                       20,
                                       1,
                                       1,
                                       Hash.fromTrytes(Trytes.fromString("OSJXHAJOVDOWMOFRAHH9IBGUJ9NUTTBJTXNQYCEONIYVFUYCMSKWERZWUDYFRLN9VRQVY9CIURFEUKEIW")),
                                       Hash.fromTrytes(Trytes.fromString("E".repeat(81))),
                                       Hash.fromTrytes(Trytes.fromString("F".repeat(81))),
                                       Tag.fromTrytes(Trytes.fromString("G".repeat(27))),
                                       50,
                                       60,
                                       70,
                                       Tag.fromTrytes(Trytes.fromString("H".repeat(27))))
             ];

            const bundle: Bundle = new Bundle();
            bundle.transactions = transactions;
            const ret = BundleHelper.isValid(bundle);
            chai.expect(ret).to.be.equal(false);
        });
    });

    describe("validSignatures", () => {
        it("can not be valid with no bundle", () => {
            const ret = BundleHelper.validateSignatures(undefined, undefined);
            chai.expect(ret).to.be.equal(false);
        });
    });
});
