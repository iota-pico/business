/**
 * Tests for MultiSigAddress.
 */
import { AddressSecurity } from "@iota-pico/data/dist/data/addressSecurity";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import * as chai from "chai";
import { MultiSigAddress } from "../../src/multiSig/multiSigAddress";
import { MultiSigClient } from "../../src/multiSig/multiSigClient";

describe("MultiSigAddress", () => {
    it("can be created", () => {
        const obj = new MultiSigAddress();
        chai.should().exist(obj);
    });

    describe("absorb", () => {
        it("can fail with no digests", () => {
            const obj = new MultiSigAddress();
            chai.expect(() => obj.absorb(undefined)).to.throw("The digests");
        });

        it("can succeed", () => {
            const obj = new MultiSigAddress();
            const seed = Hash.fromTrytes(Trytes.fromString("A".repeat(81)));
            const digest = MultiSigClient.getDigest(seed, 0, AddressSecurity.high);
            obj.absorb([digest]);
        });
    });

    describe("finalize", () => {
        it("can completed with no digests", () => {
            const obj = new MultiSigAddress();
            const seed = Hash.fromTrytes(Trytes.fromString("A".repeat(81)));
            const digest = MultiSigClient.getDigest(seed, 0, AddressSecurity.high);
            obj.absorb([digest]);
            const ret = obj.finalize();
            chai.expect(ret.toTrytes().toString()).to.be.equal("REUJ9MRUHEGDYDPRQEUQHGFBLACFNNIAOHJA9IQGP9BOTJQZMSIIPJOBFFOOPKIBDNIAEXEHBPMITKIDZ");
        });

        it("can complete with final digests", () => {
            const obj = new MultiSigAddress();
            const seed = Hash.fromTrytes(Trytes.fromString("A".repeat(81)));
            const digest = MultiSigClient.getDigest(seed, 0, AddressSecurity.high);
            obj.absorb([digest]);

            const seed2 = Hash.fromTrytes(Trytes.fromString("B".repeat(81)));
            const digest2 = MultiSigClient.getDigest(seed2, 0, AddressSecurity.high);
            const ret = obj.finalize([digest2]);
            chai.expect(ret.toTrytes().toString()).to.be.equal("XBGGCCJSLRWP9SBJSUDCYIA9DEYWFUCRAEVGQFQJACRYVPYPSVAYJHWHDSISULVTCCMXWBMMMPYHHFHEY");
        });
    });
});
