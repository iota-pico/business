/**
 * Tests for TransactionClient.
 */
import { IApiClient } from "@iota-pico/api/dist/interfaces/IApiClient";
import { IProofOfWork } from "@iota-pico/crypto/dist/interfaces/IProofOfWork";
import { Address } from "@iota-pico/data/dist/data/address";
import { AddressSecurity } from "@iota-pico/data/dist/data/addressSecurity";
import { Hash } from "@iota-pico/data/dist/data/hash";
import { Input } from "@iota-pico/data/dist/data/input";
import { Tag } from "@iota-pico/data/dist/data/tag";
import { Transfer } from "@iota-pico/data/dist/data/transfer";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import * as chai from "chai";
import * as sinon from "sinon";
import { ITimeService } from "../../src/interfaces/ITimeService";
import { TransactionClient } from "../../src/transactions/transactionClient";
import { TryteNumber } from "@iota-pico/data/dist/data/tryteNumber";

describe("TransactionClient", () => {
    let apiClientStub: IApiClient;

    beforeEach(() => {
        apiClientStub = <IApiClient>{};
    });

    // it("can be created", () => {
    //     const obj = new TransactionClient(apiClientStub);
    //     chai.should().exist(obj);
    // });

    // describe("initialize", () => {
    //     it("can be called with no proof of work initialization", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         await obj.initialize();
    //         chai.should().exist(obj);
    //     });

    //     it("can be called with proof of work initialization", async () => {
    //         const proofOfWorkStub = <IProofOfWork>{};
    //         proofOfWorkStub.initialize = sinon.stub().resolves();
    //         const obj = new TransactionClient(apiClientStub, proofOfWorkStub);
    //         await obj.initialize();
    //         chai.should().exist(obj);
    //     });
    // });

    // describe("getTransactionsInProgress", () => {
    //     it("can be called and have no response", async () => {
    //         apiClientStub.getTips = sinon.stub().resolves(undefined);
    //         const obj = new TransactionClient(apiClientStub);
    //         const response = await obj.getTransactionsInProgress();
    //         chai.expect(response).be.deep.equal([]);
    //     });

    //     it("can be called and return some hashes", async () => {
    //         apiClientStub.getTips = sinon.stub().resolves({ hashes: ["A".repeat(81), "B".repeat(81)] });
    //         const obj = new TransactionClient(apiClientStub);
    //         const response = await obj.getTransactionsInProgress();
    //         chai.expect(response[0].toTrytes().toString()).be.equal("A".repeat(81));
    //         chai.expect(response[1].toTrytes().toString()).be.equal("B".repeat(81));
    //     });
    // });

    // describe("findTransactions", () => {
    //     it("can fail with no parameters", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.findTransactions();
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("must provide bundles");
    //         }
    //     });

    //     it("can fail with invalid bundle parameters", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.findTransactions(<any>[1]);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The bundle");
    //         }
    //     });

    //     it("can fail with invalid addresses parameters", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.findTransactions(undefined, <any>[1]);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The addresses");
    //         }
    //     });

    //     it("can fail with invalid tags parameters", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.findTransactions(undefined, undefined, <any>[1]);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The tags");
    //         }
    //     });

    //     it("can fail with invalid approvees parameters", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.findTransactions(undefined, undefined, undefined, <any>[1]);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The approvees");
    //         }
    //     });

    //     it("can be called with no response", async () => {
    //         apiClientStub.findTransactions = sinon.stub().resolves(undefined);
    //         const obj = new TransactionClient(apiClientStub);
    //         const response = await obj.findTransactions(undefined, [Address.fromTrytes(Trytes.fromString("XFAELMMFKBKNGAYLKNFOLHMOTAM9IVOLABDLNKNWUIFK9QJXEJKGAUHMEPMYPGLPFBWZAXJMFZYCWMQEA"))]);
    //         chai.expect(response).be.deep.equal([]);
    //     });

    //     it("can be called with bundles and return some hashes", async () => {
    //         apiClientStub.findTransactions = sinon.stub().resolves({
    //             hashes: [
    //                 "TSQWPHOJGWJOACGHSWKXLOVSLPUZWTWGMOPKUWDNXGUERKK9PPFKBGFUKWMDGZBZZTLXHRTPIYEU99999",
    //                 "PPAYHUKKHOAPUNCMRXWLZKY9WOVUJ9BNETKVMYZKA9UIVYJSEOVVNPZSYBFVRZGHEKPMQSHEEVPLA9999"
    //             ]
    //         });
    //         const obj = new TransactionClient(apiClientStub);
    //         const response = await obj.findTransactions([Hash.fromTrytes(Trytes.fromString("XGEGFFINFHKFCTT9TCSFVNWYZRWMGMVJKKXQBTGSTFUKDVJ9SGSIWZJIZTNO9DWNGQGHVJBKOR9GBKKWW"))]);
    //         chai.expect(response[0].toTrytes().toString()).be.equal("TSQWPHOJGWJOACGHSWKXLOVSLPUZWTWGMOPKUWDNXGUERKK9PPFKBGFUKWMDGZBZZTLXHRTPIYEU99999");
    //         chai.expect(response[1].toTrytes().toString()).be.equal("PPAYHUKKHOAPUNCMRXWLZKY9WOVUJ9BNETKVMYZKA9UIVYJSEOVVNPZSYBFVRZGHEKPMQSHEEVPLA9999");
    //     });

    //     it("can be called with addresses return some hashes", async () => {
    //         apiClientStub.findTransactions = sinon.stub().resolves({
    //             hashes: [
    //                 "DOOSQLTIPGWQBV9BYNRROYDYWXJAKZCKJBEQNISEB9QLHHBNQQGWZLAQHVZGTQVSOCJRBGUVAEXV99999",
    //                 "VRLBDGXDZXIVSOUWAGZULWKVLEQRYBRKAMQGXNPLBUDOLBP9IBPDZAAGTKQOUOLREUKTBIJXHFG9A9999"
    //             ]
    //         });
    //         const obj = new TransactionClient(apiClientStub);
    //         const response = await obj.findTransactions(undefined, [Address.fromTrytes(Trytes.fromString("XFAELMMFKBKNGAYLKNFOLHMOTAM9IVOLABDLNKNWUIFK9QJXEJKGAUHMEPMYPGLPFBWZAXJMFZYCWMQEA"))]);
    //         chai.expect(response[0].toTrytes().toString()).be.equal("DOOSQLTIPGWQBV9BYNRROYDYWXJAKZCKJBEQNISEB9QLHHBNQQGWZLAQHVZGTQVSOCJRBGUVAEXV99999");
    //         chai.expect(response[1].toTrytes().toString()).be.equal("VRLBDGXDZXIVSOUWAGZULWKVLEQRYBRKAMQGXNPLBUDOLBP9IBPDZAAGTKQOUOLREUKTBIJXHFG9A9999");
    //     });

    //     it("can be called with tags and return some some hashes", async () => {
    //         apiClientStub.findTransactions = sinon.stub().resolves({
    //             hashes: [
    //                 "TSQWPHOJGWJOACGHSWKXLOVSLPUZWTWGMOPKUWDNXGUERKK9PPFKBGFUKWMDGZBZZTLXHRTPIYEU99999",
    //                 "EMOFBQIMQ9TTAMRTBRZBF9KZWY9ZCHIKAJZBPDJJAJIZVHVW9AXEXBDRWNMXXSOHIZLB9WRQSQCZ99999"
    //             ]
    //         });
    //         const obj = new TransactionClient(apiClientStub);
    //         const response = await obj.findTransactions(undefined, undefined, [Tag.fromTrytes(Trytes.fromString("AGIFTFORU"))]);
    //         chai.expect(response[0].toTrytes().toString()).be.equal("TSQWPHOJGWJOACGHSWKXLOVSLPUZWTWGMOPKUWDNXGUERKK9PPFKBGFUKWMDGZBZZTLXHRTPIYEU99999");
    //         chai.expect(response[1].toTrytes().toString()).be.equal("EMOFBQIMQ9TTAMRTBRZBF9KZWY9ZCHIKAJZBPDJJAJIZVHVW9AXEXBDRWNMXXSOHIZLB9WRQSQCZ99999");
    //     });
    //     it("can be called with approvees and return some hashes", async () => {
    //         apiClientStub.findTransactions = sinon.stub().resolves({
    //             hashes: [
    //                 "TSQWPHOJGWJOACGHSWKXLOVSLPUZWTWGMOPKUWDNXGUERKK9PPFKBGFUKWMDGZBZZTLXHRTPIYEU99999",
    //                 "NCVGRHO9XHDXYBKJNNEDUMNDKOBQHRDNTBJWFFWMPUP9VZUDQTVTJ9MI9AQAFZKJOGAY9TG9JNBTA9999"
    //             ]
    //         });
    //         const obj = new TransactionClient(apiClientStub);
    //         const response = await obj.findTransactions(undefined, undefined, undefined, [
    //             Hash.fromTrytes(Trytes.fromString("TLBZDQPRDNQMMGSJTLSECGZP9B9BWYSFOWZGCPPZYHDRAITCUHOGEIBKLTUJTBNFKUCGNONBMUXA99999"))]);
    //         chai.expect(response[0].toTrytes().toString()).be.equal("TSQWPHOJGWJOACGHSWKXLOVSLPUZWTWGMOPKUWDNXGUERKK9PPFKBGFUKWMDGZBZZTLXHRTPIYEU99999");
    //         chai.expect(response[1].toTrytes().toString()).be.equal("NCVGRHO9XHDXYBKJNNEDUMNDKOBQHRDNTBJWFFWMPUP9VZUDQTVTJ9MI9AQAFZKJOGAY9TG9JNBTA9999");
    //     });
    // });

    // describe("getTransactionsObjects", () => {
    //     it("can fail with no parameters", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getTransactionsObjects(undefined);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The transactionHashes");
    //         }
    //     });

    //     it("can fail with invalid parameters", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getTransactionsObjects(<any>[1]);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The transactionHashes");
    //         }
    //     });

    //     it("can be called with transaction hashes and return no transaction objects", async () => {
    //         apiClientStub.getTrytes = sinon.stub().resolves(undefined);
    //         const obj = new TransactionClient(apiClientStub);
    //         const response = await obj.getTransactionsObjects([
    //             Hash.fromTrytes(Trytes.fromString("V9MSZLPEDELSILGWDWXIZVK9SMYQ9FRFIUCQ9TTHQXEPCXTTAJCRKDCAXNFDDLIOIULKBVRJM9NMZ9999"))]);

    //         chai.expect(response.length).to.be.equal(0);
    //     });

    //     it("can be called with transaction hashes and return some transaction objects", async () => {
    //         apiClientStub.getTrytes = sinon.stub().resolves({
    //             trytes: [
    //                 // tslint:disable-next-line:max-line-length
    //                 "999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999MGCBEIBTRCXOVCEZKHAGGGA9KMFCEPARA9KDB9MVYMDBPTJF9PCCLKXDUEMDXQFXQOVGDS9MVUUYUUHDZHSLGEFUOWBA9999999999999999999999999999999999999999999VADJUYD99C99999999C99999999BOJHRBIIKYBFJF9FFRXJBOUSOZH9EEYAJHEXQOFUVUTCHAEUEQOABERXPW9EWEBSFJRXXS9KEILBDYYRDMSDQVDADPRYMDT9YGTXWCQLHRCJMBRETLLAUTJSREBUJCWVEOOIMPPQCQEHBYSQVMACJFEJWLWFZA9999LFZLSXFKKMLFVUUZUCPPJGJGCMVMBBSLQWVAJJPGHGXCIPRLWHA9UEPHLFFIWVHDKDDEBDVPDYZZZ9999999999999999999999999999999EAKTTFCJE999999999L99999999OPIESBFYFUHSYQQDJYOBUSZLKCU"
    //             ]
    //         });
    //         const obj = new TransactionClient(apiClientStub);
    //         const response = await obj.getTransactionsObjects([
    //             Hash.fromTrytes(Trytes.fromString("V9MSZLPEDELSILGWDWXIZVK9SMYQ9FRFIUCQ9TTHQXEPCXTTAJCRKDCAXNFDDLIOIULKBVRJM9NMZ9999"))]);

    //         chai.expect(response.length).to.be.equal(1);
    //         // tslint:disable-next-line:max-line-length
    //         chai.expect(response[0].signatureMessageFragment.toTrytes().toString()).to.be.equal("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[0].address.toTrytes().toString()).to.be.equal("MGCBEIBTRCXOVCEZKHAGGGA9KMFCEPARA9KDB9MVYMDBPTJF9PCCLKXDUEMDXQFXQOVGDS9MVUUYUUHDZ");
    //         chai.expect(response[0].value.toNumber()).to.be.equal(219884849054297);
    //         chai.expect(response[0].obsoleteTag.toTrytes().toString()).to.be.equal("999999999999999999999999999");
    //         chai.expect(response[0].timestamp.toNumber()).to.be.equal(1517995264);
    //         chai.expect(response[0].currentIndex.toNumber()).to.be.equal(3);
    //         chai.expect(response[0].lastIndex.toNumber()).to.be.equal(3);
    //         chai.expect(response[0].bundle.toTrytes().toString()).to.be.equal("BOJHRBIIKYBFJF9FFRXJBOUSOZH9EEYAJHEXQOFUVUTCHAEUEQOABERXPW9EWEBSFJRXXS9KEILBDYYRD");
    //         chai.expect(response[0].trunkTransaction.toTrytes().toString()).to.be.equal("MSDQVDADPRYMDT9YGTXWCQLHRCJMBRETLLAUTJSREBUJCWVEOOIMPPQCQEHBYSQVMACJFEJWLWFZA9999");
    //         chai.expect(response[0].branchTransaction.toTrytes().toString()).to.be.equal("LFZLSXFKKMLFVUUZUCPPJGJGCMVMBBSLQWVAJJPGHGXCIPRLWHA9UEPHLFFIWVHDKDDEBDVPDYZZZ9999");
    //         chai.expect(response[0].tag.toTrytes().toString()).to.be.equal("999999999999999999999999999");
    //         chai.expect(response[0].attachmentTimestamp.toNumber()).to.be.equal(1517995719527);
    //         chai.expect(response[0].attachmentTimestampLowerBound.toNumber()).to.be.equal(0);
    //         chai.expect(response[0].attachmentTimestampUpperBound.toNumber()).to.be.equal(12);
    //         chai.expect(response[0].nonce.toTrytes().toString()).to.be.equal("OPIESBFYFUHSYQQDJYOBUSZLKCU");
    //     });
    // });

    // describe("getLatestInclusion", () => {
    //     it("can fail with no parameters", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getLatestInclusion(undefined);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The transactionHashes");
    //         }
    //     });

    //     it("can fail with invalid parameters", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getLatestInclusion(<any>[1]);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The transactionHashes");
    //         }
    //     });

    //     it("can fail if node has no latestSolidSubtangleMilestone", async () => {
    //         apiClientStub.getNodeInfo = sinon.stub().resolves({ latestSolidSubtangleMilestone: "123" });
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getLatestInclusion([
    //                 Hash.fromTrytes(Trytes.fromString("V9MSZLPEDELSILGWDWXIZVK9SMYQ9FRFIUCQ9TTHQXEPCXTTAJCRKDCAXNFDDLIOIULKBVRJM9NMZ9999")),
    //                 Hash.fromTrytes(Trytes.fromString("JMECUJIFAQKYCPMPRATVEFLAKHLHBRFHSJXUKQSZNZCEXVG9EANYIGHBVUTXLBNRCHXLCPT9MPKCA9999")),
    //                 Hash.fromTrytes(Trytes.fromString("THENWGPTAPZIIDWHQJ9GREHOVPXNTFWTSTEUGMBPHCHVPGPCEOLGHKZWH9FKACAUIMXJIAFVN9TJZ9999"))
    //             ]);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("latestSolidSubtangleMilestone");
    //         }
    //     });

    //     it("can be called with transaction hashes and return no transaction objects", async () => {
    //         apiClientStub.getNodeInfo = sinon.stub().resolves({ latestSolidSubtangleMilestone: 123 });
    //         apiClientStub.getInclusionStates = sinon.stub().resolves(undefined);
    //         const obj = new TransactionClient(apiClientStub);
    //         const response = await obj.getLatestInclusion([
    //             Hash.fromTrytes(Trytes.fromString("V9MSZLPEDELSILGWDWXIZVK9SMYQ9FRFIUCQ9TTHQXEPCXTTAJCRKDCAXNFDDLIOIULKBVRJM9NMZ9999")),
    //             Hash.fromTrytes(Trytes.fromString("JMECUJIFAQKYCPMPRATVEFLAKHLHBRFHSJXUKQSZNZCEXVG9EANYIGHBVUTXLBNRCHXLCPT9MPKCA9999")),
    //             Hash.fromTrytes(Trytes.fromString("THENWGPTAPZIIDWHQJ9GREHOVPXNTFWTSTEUGMBPHCHVPGPCEOLGHKZWH9FKACAUIMXJIAFVN9TJZ9999"))
    //         ]);

    //         chai.expect(response.length).to.be.equal(0);
    //     });

    //     it("can be called with transaction hashes and return some inclusion states", async () => {
    //         apiClientStub.getNodeInfo = sinon.stub().resolves({ latestSolidSubtangleMilestone: 123 });
    //         apiClientStub.getInclusionStates = sinon.stub().resolves({ states: [false, true, false] });
    //         const obj = new TransactionClient(apiClientStub);
    //         const response = await obj.getLatestInclusion([
    //             Hash.fromTrytes(Trytes.fromString("V9MSZLPEDELSILGWDWXIZVK9SMYQ9FRFIUCQ9TTHQXEPCXTTAJCRKDCAXNFDDLIOIULKBVRJM9NMZ9999")),
    //             Hash.fromTrytes(Trytes.fromString("JMECUJIFAQKYCPMPRATVEFLAKHLHBRFHSJXUKQSZNZCEXVG9EANYIGHBVUTXLBNRCHXLCPT9MPKCA9999")),
    //             Hash.fromTrytes(Trytes.fromString("THENWGPTAPZIIDWHQJ9GREHOVPXNTFWTSTEUGMBPHCHVPGPCEOLGHKZWH9FKACAUIMXJIAFVN9TJZ9999"))
    //         ]);

    //         chai.expect(response.length).to.be.equal(3);
    //         chai.expect(response[0]).to.be.equal(false);
    //         chai.expect(response[1]).to.be.equal(true);
    //         chai.expect(response[2]).to.be.equal(false);
    //     });
    // });

    // describe("getNewAddress", () => {
    //     it("can fail with invalid seed", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getNewAddress(<any>"ABC");
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The seed");
    //         }
    //     });

    //     it("can fail with non integer startIndex", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getNewAddress(Hash.fromTrytes(Trytes.fromString("A".repeat(81))), <any>true);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("must be an integer");
    //         }
    //     });

    //     it("can fail with invalid startIndex", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getNewAddress(Hash.fromTrytes(Trytes.fromString("A".repeat(81))), -1);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain(">= 0");
    //         }
    //     });

    //     it("can fail with invalid endIndex <= 0", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getNewAddress(Hash.fromTrytes(Trytes.fromString("A".repeat(81))), 1, 0);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("> 0");
    //         }
    //     });

    //     it("can fail with invalid total > 500", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getNewAddress(Hash.fromTrytes(Trytes.fromString("A".repeat(81))), 1, 501);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("<= 500");
    //         }
    //     });

    //     it("can succeed getting indexed address", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         const response = await obj.getNewAddress(Hash.fromTrytes(Trytes.fromString("JCGUED9XQWAHWHJUIYIEYSJVGNQLJSGRSUQCEBJD9NQLZIZQGVDILVNNEFWLSCIPEBZTYBJYXWMJOEEZW")), 0, 2);
    //         chai.expect(response[0].toTrytes().toString()).to.be.equal("FKACNBUBBPKFVGUEVDRQWCJELYQPZWTQETATRCLGMOSLAJHKPQDKESFBTMQIQBBH9DUCHGEIDJCSHKFFC");
    //         chai.expect(response[1].toTrytes().toString()).to.be.equal("QFSPUNJAYKVCOAAKCDZLWFMWOSLUZEHCPPHWSM9BODLELNLGB9LDCVLDAOUEXAVGNWPPVXVODAAOJFFRX");
    //     });

    //     it("can succeed getting non indexed address", async () => {
    //         apiClientStub.wereAddressesSpentFrom = sinon.stub().resolves({ states: [false] });
    //         apiClientStub.findTransactions = sinon.stub().resolves({ hashes: [] });
    //         const obj = new TransactionClient(apiClientStub);
    //         const response = await obj.getNewAddress(Hash.fromTrytes(Trytes.fromString("JCGUED9XQWAHWHJUIYIEYSJVGNQLJSGRSUQCEBJD9NQLZIZQGVDILVNNEFWLSCIPEBZTYBJYXWMJOEEZW")), 1);
    //         chai.expect(response[0].toTrytes().toString()).to.be.equal("QFSPUNJAYKVCOAAKCDZLWFMWOSLUZEHCPPHWSM9BODLELNLGB9LDCVLDAOUEXAVGNWPPVXVODAAOJFFRX");
    //     });
    // });

    // describe("getAddressesByIndex", () => {
    //     it("can fail with invalid seed", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getAddressesByIndex(<any>"ABC", undefined, undefined, undefined, undefined);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The seed");
    //         }
    //     });

    //     it("can fail with invalid startIndex", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getAddressesByIndex(Hash.fromTrytes(Trytes.fromString("A".repeat(81))), -1, undefined, undefined, undefined);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The startIndex");
    //         }
    //     });

    //     it("can fail with invalid endIndex <= 0", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getAddressesByIndex(Hash.fromTrytes(Trytes.fromString("A".repeat(81))), 1, 0, false, undefined);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The endIndex");
    //         }
    //     });

    //     it("can fail with invalid total > 500", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getAddressesByIndex(Hash.fromTrytes(Trytes.fromString("A".repeat(81))), 1, 501, false, undefined);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("<= 500");
    //         }
    //     });

    //     it("can fail with invalid security", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getAddressesByIndex(Hash.fromTrytes(Trytes.fromString("A".repeat(81))), 0, 1, false, <any>0);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The security");
    //         }
    //     });

    //     it("can generate index-based 1 addresses with checksum", async () => {
    //         const obj = new TransactionClient(apiClientStub);

    //         const seed = Hash.fromTrytes(Trytes.fromString("JCGUED9XQWAHWHJUIYIEYSJVGNQLJSGRSUQCEBJD9NQLZIZQGVDILVNNEFWLSCIPEBZTYBJYXWMJOEEZW"));

    //         const response = await obj.getAddressesByIndex(seed, 1, 2, true, AddressSecurity.low);

    //         chai.expect(response[0].toTrytesWithChecksum().toString()).to.be.equal("WUQMPPKFDR9IIGRLDBETVTMGTLYLPTKICWKMNZNBYPQDNQ9YTTOPYUBUYFQEALBRTEPRUFHWOVY9NCW9DE9WXEIJWC");
    //         chai.expect(response[1].toTrytesWithChecksum().toString()).to.be.equal("SAYJVKKLL9YKEEUSQFKCPUUEXADXWTQYFSCJOXDPLVGUXCTHKRRVUUSMGYOAPKT9YXCHRJWDTTPZGE9BXVLRXSAJZX");
    //     });

    //     it("can generate index-based 1 addresses no checksum", async () => {
    //         const obj = new TransactionClient(apiClientStub);

    //         const seed = Hash.fromTrytes(Trytes.fromString("JCGUED9XQWAHWHJUIYIEYSJVGNQLJSGRSUQCEBJD9NQLZIZQGVDILVNNEFWLSCIPEBZTYBJYXWMJOEEZW"));

    //         const response = await obj.getAddressesByIndex(seed, 1, 2, false, AddressSecurity.low);

    //         chai.expect(response[0].toTrytes().toString()).to.be.equal("WUQMPPKFDR9IIGRLDBETVTMGTLYLPTKICWKMNZNBYPQDNQ9YTTOPYUBUYFQEALBRTEPRUFHWOVY9NCW9D");
    //         chai.expect(response[1].toTrytes().toString()).to.be.equal("SAYJVKKLL9YKEEUSQFKCPUUEXADXWTQYFSCJOXDPLVGUXCTHKRRVUUSMGYOAPKT9YXCHRJWDTTPZGE9BX");
    //     });

    //     it("can generate index-based 5 addresses with checksum", async () => {
    //         const obj = new TransactionClient(apiClientStub);

    //         const seed = Hash.fromTrytes(Trytes.fromString("JCGUED9XQWAHWHJUIYIEYSJVGNQLJSGRSUQCEBJD9NQLZIZQGVDILVNNEFWLSCIPEBZTYBJYXWMJOEEZW"));

    //         const response = await obj.getAddressesByIndex(seed, 5, 7, true, AddressSecurity.low);

    //         chai.expect(response[0].toTrytesWithChecksum().toString()).to.be.equal("GNHOKBJGTHASHZCGOVFRSDTLVZHMREKHZESIOEJMYI9P9INKUZXKLW9P9KFHSUDBPVDIWILOHLLDRXVSDXCAMKD9HZ");
    //         chai.expect(response[1].toTrytesWithChecksum().toString()).to.be.equal("LFVKRMYLAEDJBGQU9APVPZIFKVZUEMGLTDYBDTEUHRNCDNODNCOLAB9VXSZTHMXPVBD9DSVHUPPUWCNS9IVP9OKKHD");
    //     });

    //     it("can generate index-based 10 addresses with checksum security medium", async () => {
    //         const obj = new TransactionClient(apiClientStub);

    //         const seed = Hash.fromTrytes(Trytes.fromString("JCGUED9XQWAHWHJUIYIEYSJVGNQLJSGRSUQCEBJD9NQLZIZQGVDILVNNEFWLSCIPEBZTYBJYXWMJOEEZW"));

    //         const response = await obj.getAddressesByIndex(seed, 10, 12, true, AddressSecurity.medium);

    //         chai.expect(response[0].toTrytesWithChecksum().toString()).to.be.equal("NDZNIIRCKGY9X9KLJFYRXNDUYVMTAXEMWHNHUQ9C9X9RICXIRRIYRWYXXDQAGYCDVC9GSASO9FGIWKN9XKIUDXZZXZ");
    //         chai.expect(response[1].toTrytesWithChecksum().toString()).to.be.equal("LENQNXNREDKHEJBKSOJABZIVZQFGTBRVAMMDVPI9FZF9QWXWQK9FMRIBKPIUOXPGMMYGGZIMEWHHUBCZWSNODDUTAY");
    //     });

    //     it("can generate index-based 15 addresses with checksum security high", async () => {
    //         const obj = new TransactionClient(apiClientStub);

    //         const seed = Hash.fromTrytes(Trytes.fromString("JCGUED9XQWAHWHJUIYIEYSJVGNQLJSGRSUQCEBJD9NQLZIZQGVDILVNNEFWLSCIPEBZTYBJYXWMJOEEZW"));

    //         const response = await obj.getAddressesByIndex(seed, 15, 17, true, AddressSecurity.high);

    //         chai.expect(response[0].toTrytesWithChecksum().toString()).to.be.equal("LCNP9HTWETYMYCCEVUTKYDCGGWCAVUZYTYCCLBRIGCQNMBWVUIQKKVJOKZWOKUTMMKTMWPZEPJHMKDVMWIVTRDEWXY");
    //         chai.expect(response[1].toTrytesWithChecksum().toString()).to.be.equal("YXVZ9LBTIXBAVBQBBCEXIJOGIZVBKKQSIFQIA9RMKL9JDVWOVWANEMDZGZBJLWIAZHQATFNAFPFKUXZLBXZMSORZMW");
    //     });
    // });

    // describe("getAddressesToUnused", () => {
    //     it("can fail with invalid seed", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getAddressesToUnused(<any>"ABC", undefined, undefined, undefined);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The seed");
    //         }
    //     });

    //     it("can fail with invalid startIndex", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getAddressesToUnused(Hash.fromTrytes(Trytes.fromString("A".repeat(81))), -1, undefined, undefined);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The startIndex");
    //         }
    //     });

    //     it("can fail with invalid security", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getAddressesToUnused(Hash.fromTrytes(Trytes.fromString("A".repeat(81))), 0, false, <any>0);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The security");
    //         }
    //     });

    //     it("can generate unused address where not spent from and no transactions response", async () => {
    //         const obj = new TransactionClient(apiClientStub);

    //         apiClientStub.wereAddressesSpentFrom = sinon.stub().resolves(undefined);
    //         apiClientStub.findTransactions = sinon.stub().resolves({ hashes: [] });

    //         const seed = Hash.fromTrytes(Trytes.fromString("JCGUED9XQWAHWHJUIYIEYSJVGNQLJSGRSUQCEBJD9NQLZIZQGVDILVNNEFWLSCIPEBZTYBJYXWMJOEEZW"));

    //         const response = await obj.getAddressesToUnused(seed, 0, true, AddressSecurity.low);

    //         chai.expect(response[0].toTrytesWithChecksum().toString()).to.be.equal("UHUASCSYJQOCABTJAJKVFPIUDTXYPMSJTKICSGJOVKAEDBGJBUXHNTKKMNRHQRKVGPPFKQLP9VNXJOTRBKMJGYCQBD");
    //     });

    //     it("can generate unused address where not spent from and no transactions", async () => {
    //         const obj = new TransactionClient(apiClientStub);

    //         apiClientStub.wereAddressesSpentFrom = sinon.stub().resolves({ states: [false] });
    //         apiClientStub.findTransactions = sinon.stub().resolves({ hashes: [] });

    //         const seed = Hash.fromTrytes(Trytes.fromString("JCGUED9XQWAHWHJUIYIEYSJVGNQLJSGRSUQCEBJD9NQLZIZQGVDILVNNEFWLSCIPEBZTYBJYXWMJOEEZW"));

    //         const response = await obj.getAddressesToUnused(seed, 0, true, AddressSecurity.low);

    //         chai.expect(response[0].toTrytesWithChecksum().toString()).to.be.equal("UHUASCSYJQOCABTJAJKVFPIUDTXYPMSJTKICSGJOVKAEDBGJBUXHNTKKMNRHQRKVGPPFKQLP9VNXJOTRBKMJGYCQBD");
    //     });

    //     it("can generate unused address where spent from and no transactions", async () => {
    //         const obj = new TransactionClient(apiClientStub);

    //         apiClientStub.wereAddressesSpentFrom = sinon.stub()
    //             .onFirstCall().resolves({ states: [true] })
    //             .onSecondCall().resolves({ states: [false] });
    //         apiClientStub.findTransactions = sinon.stub().resolves({ hashes: [] });

    //         const seed = Hash.fromTrytes(Trytes.fromString("JCGUED9XQWAHWHJUIYIEYSJVGNQLJSGRSUQCEBJD9NQLZIZQGVDILVNNEFWLSCIPEBZTYBJYXWMJOEEZW"));

    //         const response = await obj.getAddressesToUnused(seed, 0, true, AddressSecurity.low);

    //         chai.expect(response[1].toTrytesWithChecksum().toString()).to.be.equal("WUQMPPKFDR9IIGRLDBETVTMGTLYLPTKICWKMNZNBYPQDNQ9YTTOPYUBUYFQEALBRTEPRUFHWOVY9NCW9DE9WXEIJWC");
    //     });

    //     it("can generate unused address where not spent from but has transactions", async () => {
    //         const obj = new TransactionClient(apiClientStub);

    //         apiClientStub.wereAddressesSpentFrom = sinon.stub().resolves({ states: [false] });
    //         apiClientStub.findTransactions = sinon.stub()
    //             .onFirstCall().resolves({ hashes: ["AAA"] })
    //             .onSecondCall().resolves({ hashes: [] });

    //         const seed = Hash.fromTrytes(Trytes.fromString("JCGUED9XQWAHWHJUIYIEYSJVGNQLJSGRSUQCEBJD9NQLZIZQGVDILVNNEFWLSCIPEBZTYBJYXWMJOEEZW"));

    //         const response = await obj.getAddressesToUnused(seed, 0, true, AddressSecurity.low);

    //         chai.expect(response[1].toTrytesWithChecksum().toString()).to.be.equal("WUQMPPKFDR9IIGRLDBETVTMGTLYLPTKICWKMNZNBYPQDNQ9YTTOPYUBUYFQEALBRTEPRUFHWOVY9NCW9DE9WXEIJWC");
    //     });
    // });

    // describe("getInputs", () => {
    //     it("can fail with invalid seed", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getInputs(<any>"ABC", undefined, undefined, undefined, undefined);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The seed");
    //         }
    //     });

    //     it("can fail with invalid startIndex", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getInputs(Hash.fromTrytes(Trytes.fromString("A".repeat(81))), -1, undefined, undefined, undefined);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The startIndex");
    //         }
    //     });

    //     it("can fail with invalid security", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getInputs(Hash.fromTrytes(Trytes.fromString("A".repeat(81))), 0, 1, <any>0, undefined);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The security");
    //         }
    //     });

    //     it("can fail with invalid totalRequired", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getInputs(Hash.fromTrytes(Trytes.fromString("A".repeat(81))), 0, 1, AddressSecurity.low, -1);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The totalRequired");
    //         }
    //     });

    //     it("can fail when getBalance has no response", async () => {
    //         apiClientStub.getBalances = sinon.stub().resolves(undefined);
    //         const obj = new TransactionClient(apiClientStub);

    //         try {
    //             await obj.getInputs(Hash.fromTrytes(Trytes.fromString("A".repeat(81))), 0, 1, AddressSecurity.low, 100);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("Not enough combined");
    //         }
    //     });

    //     it("can succeed when totalRequired = 0", async () => {
    //         apiClientStub.getBalances = sinon.stub().resolves({ balances: [ "43" ] });
    //         const obj = new TransactionClient(apiClientStub);

    //         const seed = Hash.fromTrytes(Trytes.fromString("JCGUED9XQWAHWHJUIYIEYSJVGNQLJSGRSUQCEBJD9NQLZIZQGVDILVNNEFWLSCIPEBZTYBJYXWMJOEEZW"));

    //         const response = await obj.getInputs(seed, 0, 2, AddressSecurity.low, 0);

    //         chai.expect(response.totalBalance).to.be.equal(43);
    //         chai.expect(response.inputs.length).to.be.equal(1);
    //         chai.expect(response.inputs[0].address.toTrytes().toString()).to.be.equal("UHUASCSYJQOCABTJAJKVFPIUDTXYPMSJTKICSGJOVKAEDBGJBUXHNTKKMNRHQRKVGPPFKQLP9VNXJOTRB");
    //         chai.expect(response.inputs[0].balance).to.be.equal(43);
    //         chai.expect(response.inputs[0].keyIndex).to.be.equal(0);
    //         chai.expect(response.inputs[0].security).to.be.equal(1);
    //     });

    //     it("can succeed when requiring mulitple addresses", async () => {
    //         apiClientStub.getBalances = sinon.stub().resolves({ balances: [ "1", "5", "50" ] });
    //         const obj = new TransactionClient(apiClientStub);

    //         const seed = Hash.fromTrytes(Trytes.fromString("JCGUED9XQWAHWHJUIYIEYSJVGNQLJSGRSUQCEBJD9NQLZIZQGVDILVNNEFWLSCIPEBZTYBJYXWMJOEEZW"));

    //         const response = await obj.getInputs(seed, 10, 15, AddressSecurity.low, 40);

    //         chai.expect(response.totalBalance).to.be.equal(56);
    //         chai.expect(response.inputs.length).to.be.equal(3);
    //         chai.expect(response.inputs[0].address.toTrytes().toString()).to.be.equal("JBKWWNAWNNNRRMTC9OHFS99EDJNJKSCUDSALPNGYZXUCUNLLWOQBASUKPRTJBOXYEGGTWWVHNOZXTH9PB");
    //         chai.expect(response.inputs[0].balance).to.be.equal(1);
    //         chai.expect(response.inputs[0].keyIndex).to.be.equal(10);
    //         chai.expect(response.inputs[0].security).to.be.equal(1);

    //         chai.expect(response.inputs[1].address.toTrytes().toString()).to.be.equal("QMDFMN9YAICLTYPZXJPMFP9ZT9FOCOSHOLAALAXOSSRLV9IVBTDMMWCWBAUXDABSOOZATA99KF9IXCYQW");
    //         chai.expect(response.inputs[1].balance).to.be.equal(5);
    //         chai.expect(response.inputs[1].keyIndex).to.be.equal(11);
    //         chai.expect(response.inputs[1].security).to.be.equal(1);

    //         chai.expect(response.inputs[2].address.toTrytes().toString()).to.be.equal("SHLALKJRGUQYNCKWVJJQKHLCROTSYRFOXSJAJKFKYAPEGNWKTMAVJ99NOFLHVFIAPZ9BSRIPGFCBZKWED");
    //         chai.expect(response.inputs[2].balance).to.be.equal(50);
    //         chai.expect(response.inputs[2].keyIndex).to.be.equal(12);
    //         chai.expect(response.inputs[2].security).to.be.equal(1);
    //     });
    // });

    // describe("prepareTransfers", () => {
    //     it("can fail with invalid seed", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.prepareTransfers(<any>"ABC", undefined, undefined);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The seed");
    //         }
    //     });

    //     it("can fail with invalid transfers", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             const seed = Hash.fromTrytes(Trytes.fromString("ISHKSEIVNKYFLYAUKVDRAWEUIZJIAAVICHFCIAEEUPSIJJXTLOLVJBZWEISNBVQLQJCSHCAUAFMATP9KN"));
    //             await obj.prepareTransfers(seed, []);
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The transfers");
    //         }
    //     });

    //     it("can prepare transfers with no options", async () => {
    //         const timeServiceStub = <ITimeService>{};
    //         timeServiceStub.msSinceEpoch = sinon.stub().returns(1518782585);

    //         const obj = new TransactionClient(apiClientStub, undefined, timeServiceStub);

    //         apiClientStub.getBalances = sinon.stub().resolves({ balances: ["43"] });
    //         apiClientStub.wereAddressesSpentFrom = sinon.stub().resolves({ states: [false] });
    //         apiClientStub.findTransactions = sinon.stub().resolves({ hashes: [] });

    //         const seed = Hash.fromTrytes(Trytes.fromString("ISHKSEIVNKYFLYAUKVDRAWEUIZJIAAVICHFCIAEEUPSIJJXTLOLVJBZWEISNBVQLQJCSHCAUAFMATP9KN"));

    //         const transfers = [
    //             Transfer.fromParams(
    //                 Address.fromTrytes(Trytes.fromString("YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGBKUUNDKVMX")),
    //                 5,
    //                 Trytes.fromString("BLAHBLAHBLAHBLAH"),
    //                 Tag.fromTrytes(Trytes.fromString("THISISATAG"))
    //             )
    //         ];

    //         const response = await obj.prepareTransfers(seed, transfers);

    //         // tslint:disable:max-line-length
    //         chai.expect(response[0].toString()).to.be.equal("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999PSTBGFZXBMTWL9JMOCPTJWO9GUDMJYMUJZ9IHLANBIEXVOWD9THLDYKE9JDIGKMPKGPOTOXPCNSDZKVGXKA9999999999999999999999999THISISATAG99999999999999999EJDWC9999C99999999C99999999XBJWKALTWCWWKDEDBBWHZXLQKRZVZJLFLFLQZJRBBSXDOEPX9QSFWLVCDODGRIAYL9FRCSKRQJHUDHPIC999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[1].toString()).to.be.equal("YGGXHATQITGJFXTYXTSZGUNIFJYQQMSBUMCUPUMIVZNKQGPKPPHUW9VUTQRU9PEJFXVVZYHUMAOQKS9KBMUTHGZVBDN9ZXDSXDKRPFWTTQSEXCZJVKOOITJVVMGTNINPIYVJWAFYAYTMWN9VIAWVHMABAUQFMFTXQWTSUBS99ILK9EDCVIFJXBSUWCHUQTMQLHFWCSYRKPPTCDKGKXG9AIH9HVIAPOFOVFGZPDQGPA9AWVYGPIWGHDMAAUDAQPSEXQAANRWLYSKVWGNWMWQUVMGFVCXNYPTXLFCB9MEQUOHACNUOZVKSWMDIC9VJKGCMNLZ9XJS9VAUXFLJUMDMPGLOIPANXIHNVUFZESIJNVBEVGBYGWYLNX9GMQXHCIMBWIFWUZVHWMP9TPBMCFK9VCIHPXDPJSVHOWF9FZKETGHUAIRJQZMJIDLHKZTGLTRQXSUXEEXEKVMPZLATCCMNDYPDQBWUDFTXFRRBS9AEGTIKFZAFQKGVKLLANESPDXUUMEUM9IMPQVUUKGJYMFDVUEFFUXHTJE9TPIBXOFHHMTGJRBSUX9LBPFXXJ9SSXPQJJUCAFZNXSLMWWPJVLLRNBGOQ9HVNAECPGLCFGMWQP9ZECEW9UECDOYEIWEUVWFL9FYYOAKFMDDYTOTEASTMZA9FYLB9HPZWVFSHYOOWTQ9LKZSDTPCRGRHOYAFBNSWISXFVNYHOEDZGSRPQTTMZBDWUVCWXUSJOTRGZRCZGYWJCDTYMFHGWYBQXNDMIEQ9HNSWV9RBFGUNRKCUNDRAAVVBJQWUGFWAUNGJP9TODLGZDXTHRIJBJOTGQMGPOZKK9KDYLRYHIXWOCFOIWOUUDPOJPFFDNQVCSMAXPNLPUEDOZKEHZMTRLHEAOJRSSDUVVKCDGWHZYKVKTZXYKJUAEDVNGENJWX9XRTYTZUWSXT9ZIRYKHDWIARPSDPTZLQOLWJ9YHIKHMYGBMTWZJUJJQPOXZJQTVQGUHSIXVUAISNVAFUTLYAS9ISMMYD9LLTJTJNYGZSTFUYJKNQDVSWKIMCFFYSFXKEV9GYYAQHBCTEMBKH9BMGJICLAIGWICSTAWC9EDIRLKNRX9CUTPHRF9JLOTW9YTGVQBIKZBCXMHDMSREHQTZTOALYKXTXTTILGBRGMHC99GZHHCRIT9KGUJYJLSSUMRFSOXLCTRAFUPEJSDWSOHYJQBPVAOZBLAVGCOBDVGNKPJKLAWMHWS9AVKWMXDEZCYPMNFXQPHTXNAYUNXF9MTGSAXYWMQFBFAXXIVISHEEVVBHPDLLGCRNEWTMTC9CUWKXDXBEULDPJPZUESC9BZVPILKVFZVFUNWODKPKYJ9BR9RSRDQPNGMIKFRALTLFNJETRYROCTBVCFXLNDPVETVJHJTQYES9IPDQCJLMCQXPXLEIKTIAVERSXMYGGHTCPJBVTTIUWIAWKCLIFKCEIEGVTPSZYETSCQLVTLIJHDNXVDTTLLMLZFJ9CAKEFIKSYESOZ9TJEHTJLTPHQV9TAFDXSSHRZCYKPOZ9VXKZBJXWZWWWHKLOUP9CEOZXDVRPHMLFJQOUIOJSBZMRNGMMPRVFUKWXBQBAVVFRAIWMNWVMUKYSVA9IBPHOCCMOBDYSTYZSFTZTTYOWCTJMVYUAFE9JWKEPCBNTOMIJYVYKLYHVFLVJBVGLRJIGMBSK9HVGNCUNHMQMOEGAWZZRORGTOAZA9NNKXISDDQEELSLVQ9XHYFDLSNLKWGLTKDJJEVAXBCDKQJLJQVIEUMDTGMNMCZBI9FNDCEHDJJWQDWKFGMUEMUTDQPUHLLEQXQRQAWXRHDDPYHXBTYCUEHEVJSVXGWPGIXPJWBYWJOVKDXSNF9WQKHKA9X9CHOTSWNWIAAYQUTXVTMEPDJHX9ZMURDOQCC9RNYQKQYMUSJLWPHQNPXYWUGLBTAHFBVGHVSJSTBXQVBN9UC9MGHEKD9WLRKHZZZZJRNNTLFUCGZWSOMYUHQHUDIKUSQBCFYKTDNU9WNKKWD9XVSWGYASRYISLCU9HXKODOLSQZYUA9AMJRUZCFYKDHKQJWNWPWPNLYDUNOKWHTJDCYASUTFJWOPZNUYEBAN9YWWCVNNEZE9ZW9RCGPDFAKXRRCNBTMOQDARIVZRMLNJ9OXCGWRHYSGIIVZQRAKLVQEPHJWFCD9BAIOZGGEHKWPEEFXZOGYGGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICD999999999999999999999999999THISISATAG99999999999999999EJDWC9999B99999999C99999999XBJWKALTWCWWKDEDBBWHZXLQKRZVZJLFLFLQZJRBBSXDOEPX9QSFWLVCDODGRIAYL9FRCSKRQJHUDHPIC999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[2].toString()).to.be.equal("NJTUZNAHHFRIUGQVMZQUJOHXITWTOAITPDFFKXKSNBOCJBBWZKXIXZUVQIIXNKFFPWYTPIXXHWIVHVSPZOBXRQCSKWOJPYFTBWZCFALTXWDNJZOFNTHBLUOAKIQJRODDJYMEKTKGBCUQZAMLQ9CQEFKFJYSHILDBTAVWSWATHRJDZMZRBKMSOYQGNRWOQRMU9FI9ZCJZUTUICBZFHUIIMAGNHK9TLCVXCYEKJZAYTUBGBRWOOZZLLTQAAERF9VTESVQKHQPSRQXUXLYMOTAXOUB9VWPHLQRJZXHTZDUGORJXYXGFZWVTFZMDJNTNG9EZIMRXSEXOFCABWOZN9RKVYF9KCKV9WIGL9ZSWYWOPJOLUKZUNJBMAKPMPBGGYZYLEFPXEBOUYBCTUQUZXOOIYXKBKIAKVRKLJZMRVMWJXJNPAOCJYISAJVZKVQDTFOJHUJDJGDBJNXTDERIVTNHUCULTPJAY9WNWKSSEYD9EFRUTTRDIIBDCQMWVZYSPRRRZGKANSJOIQNKPHQLAYW9BGUNRGUXKYVKIWDOMUBHBNWCEVNVRPTZMKXPXARKHUHBHNGOPEMDDJDWHHSAXJVWZJUQC9JVWHUOFQXVVLKUGBYMVECOQYWVIQTVLMVSZAIITHJFOIUSBBPKVFTHQFYGOMMDLHJVCFXNUKRHQOQWAONCPGPXIZUICISJRNTMTJW9FWJWWRMFCGCQSPLWHDURRKZEEG9SGYOMIWLIJ9NOQD9WFHWAJV9SK9YIQLQVTWITKXARWDMEBXLHDLW9TNMCA9ZKTTVYWNNQ9ZIVRHLVSEVCTLZFQGLAX9DFJXPDT9DPBWYGODIRVPQMZYGNCUJDTFQOZNHSESILGVTYQU9BWEQDVQTXIACJYIZACTGXWXFKNWUUJJCQWLSBDVHWT9DLYMXLHGPJDXRSEM9WFPNPZZBZPXXUKRBEVNXQYOS9NGJKDZSEXWQOUUILFDPBQIPRLMVISKZBRWCTMXSDOYHXYNJA9WMMMVQDWEPJVLDHXOGHBMWBAFFFVERYDKUHDPHFEVPPXWSHY9ZAVCXWUKKGNMHS9SKDDDPFAMALSILASFB9CLHZBRD9LBFFTTQTDSTCLKNKIUKRQQMOIVLEZHUBSNEXU9NAZLOYV9WUXM9YYZSJXUGAWGSBNDDSPIXHBRCZX9FXSWQDVPGAKLHWAWKUUMLLSQFNCHHIRCSPMPFSQETVWQUHFVOY9BPGYOUMU9A9KFZVPCNGHXKLQUFJAFGJPUXAIJZENLM9OONPBYNJVQQ99YUIZCDOKPB9JLLFE9EFGC9WHC9BXXONEZMBMXDDLOKNBTSMIAGXIRLRRSJBGCCKRSNUHKJXO9SY9JIXWW9WPXFRLMVFVJITQEAOBXRAIOCXTSODXFRYUZIVMNDZOPOXMTDPWZEDPXUMOSEYLZZZK9LTVAHAIYLPLVAPMVHEV9PSUVQOUTQ9LKWHBYWMPLKGQELSBCWSWQLVITY9HB9Q9AUCULQSB9EFTVZNRPRTRZFQTBVNLAYBUEITRPRJDKSTI9TRBVZEADHLYJEOCZPCTGPJFJUJ9VJMZTZJ9LSLZUZKLRPIYPLSWAQPSF99EJAYWKZL9BZEDDJSZRGK9EKSKCWXMTLIWKUI9HXYWOTICQEJMLVUAITJPTEABKN9UUOWUIXOVKCDSBMM9JZ9UXESZFW9OHL9XZHUDOKMAYYXMQMPPWHEKOYFJXOEKFTFED9L9ORNFYNOXYLWSWHHLXFLARFIAJNYNQYHONAOXGFTZSFMTRR9NKLLRVEBAEP99QUBEKCILEAKXHZSWRYYSGNTSQTWFQVHF9LWABOKPDTGTSRHYNWWGJCIPMFCBLETMSBVOGQXTO9TZMIAHHGFWEUMW9WJADFWDLIDEELTIGOO999ARKDQQQURJVISYEOJQKPFSZTIDUOTHOWXVUSXWOGQDJHGPDQXSQZGKHWXXCYLUJYRTRVAWYBTYKURUXSR9CFKSFTTRYITBZLGFPYNEWMAFTBIRKHIPRTMFRPTDZCPGDBLVUOOGHTPDQXXQQHLTSMKYMIWVSNIOI9FLCQTWBIHNCLNVFYYDJXZMDA9TRBFKVKVGOLYPYZBSQBLRGSZNYR9TQSWMJPGPUHNZIUVJXPWHUGLJBLJTPSXABBUBJEFMFMNANKYXVCRVJBBHJXPOUCZCDTJREIFKDJMBGGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICDKY9999999999999999999999999THISISATAG99999999999999999EJDWC9999A99999999C99999999XBJWKALTWCWWKDEDBBWHZXLQKRZVZJLFLFLQZJRBBSXDOEPX9QSFWLVCDODGRIAYL9FRCSKRQJHUDHPIC999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[3].toString()).to.be.equal("BLAHBLAHBLAHBLAH99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGBE99999999999999999999999999BNJSISATAG99999999999999999EJDWC9999999999999C99999999XBJWKALTWCWWKDEDBBWHZXLQKRZVZJLFLFLQZJRBBSXDOEPX9QSFWLVCDODGRIAYL9FRCSKRQJHUDHPIC999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //     });

    //     it("can prepare transfers with zero balance", async () => {
    //         const timeServiceStub = <ITimeService>{};
    //         timeServiceStub.msSinceEpoch = sinon.stub().returns(1518782585);

    //         const obj = new TransactionClient(apiClientStub, undefined, timeServiceStub);

    //         apiClientStub.getBalances = sinon.stub().resolves({ balances: ["0"] });
    //         apiClientStub.wereAddressesSpentFrom = sinon.stub().resolves({ states: [false] });
    //         apiClientStub.findTransactions = sinon.stub().resolves({ hashes: [] });

    //         const seed = Hash.fromTrytes(Trytes.fromString("ISHKSEIVNKYFLYAUKVDRAWEUIZJIAAVICHFCIAEEUPSIJJXTLOLVJBZWEISNBVQLQJCSHCAUAFMATP9KN"));

    //         const transfers = [
    //             Transfer.fromParams(
    //                 Address.fromTrytes(Trytes.fromString("YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGBKUUNDKVMX")),
    //                 5,
    //                 Trytes.fromString("BLAHBLAHBLAHBLAH"),
    //                 Tag.fromTrytes(Trytes.fromString("THISISATAG"))
    //             )
    //         ];

    //         const inputs = [
    //             Input.fromParams(Address.fromTrytes(Trytes.fromString("GGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICD")),
    //                              AddressSecurity.medium,
    //                              0,
    //                              0)
    //         ];

    //         try {
    //             await obj.prepareTransfers(seed, transfers, { inputs});
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("Not enough balance");
    //         }
    //     });

    //     it("can prepare transfers with no message or tags", async () => {
    //         const timeServiceStub = <ITimeService>{};
    //         timeServiceStub.msSinceEpoch = sinon.stub().returns(1518782585);

    //         const obj = new TransactionClient(apiClientStub, undefined, timeServiceStub);

    //         apiClientStub.getBalances = sinon.stub().resolves({ balances: ["43"] });
    //         apiClientStub.wereAddressesSpentFrom = sinon.stub().resolves({ states: [false] });
    //         apiClientStub.findTransactions = sinon.stub().resolves({ hashes: [] });

    //         const seed = Hash.fromTrytes(Trytes.fromString("ISHKSEIVNKYFLYAUKVDRAWEUIZJIAAVICHFCIAEEUPSIJJXTLOLVJBZWEISNBVQLQJCSHCAUAFMATP9KN"));

    //         const transfers = [
    //             Transfer.fromParams(
    //                 Address.fromTrytes(Trytes.fromString("YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGBKUUNDKVMX")),
    //                 5,
    //                 undefined,
    //                 undefined
    //             )
    //         ];

    //         const response = await obj.prepareTransfers(seed, transfers);

    //         // tslint:disable:max-line-length
    //         chai.expect(response[0].toString()).to.be.equal("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999PSTBGFZXBMTWL9JMOCPTJWO9GUDMJYMUJZ9IHLANBIEXVOWD9THLDYKE9JDIGKMPKGPOTOXPCNSDZKVGXKA9999999999999999999999999999999999999999999999999999EJDWC9999C99999999C99999999MFTGRDELIRHRCHTYIHGOEOCISPIFKIQXCOZDR9AHQZCPIITI9GYTKFNFESNFYLZSYBPKHOXXKJVTDJKQD999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[1].toString()).to.be.equal("YGGXHATQITGJFXTYXTSZGUNIFJYQQMSBUMCUPUMIVZNKQGPKPPHUW9VUTQRU9PEJFXVVZYHUMAOQKS9KBKDOTGXNTJUURXCEFQIDDAIBYQIODUHKXQTWLXFJDKYXDVSHTIWHNFPTAFVQEAXBARMT9C9VPDEUONA9FWLHEYCNKCUBQVGJAHMAALFR9TAHU9OSEYEZ9RRKCXHILYQOPQZBXQISXTH9MWMYG9XE9ZOLTIUXWDDCTNCOTRKJGMGWUTMGUC9ZLPGBAPOXSAFCQPPBGZE9RAHAHIPSSCTIKQWBMCCNLNZREDIJWYCKXNXVZQCKJEWWDANMZIABNM9RD9PPKPKBGOQBLJEHBTSKYHOFNTCWWREQNGYWSVDBZTZHDWZINVOXNBNRSR9MYZNOKJZPACZPUMOACYDVQMHCYRPIIKDVEJUJXPMRXEISE9MSXMTZBLEFFMZYNJQGRA9VKHGSNMJEPZMBMFLFXZQCXAZWRJCCLVVPJIPUUPXIUACJCCQJETQIVLPPTJLWATXMRXZAXS9ESKLJKAJRJJVEJPBNWGQFWRIFAFDIEPXBXFIITGMLMV9ZYDAZPZ9PHXMYPFDYJOJWUMMLYPJBRVIZVEIOVDYG9UZCLGAMCDVBUKYMZNMZGRUQMYWWFDTOREUCJIVLHFXUIDHXNHDDRBTHIHWLXGQY9GLCZMGAEPRYIUBQXJHMOZDPQDGYSTSR9OWEXQOQLXDKA9XCBGOERGA9OUUTWKHNTSDSLHLSNFNVJHUIXCYJPFVWLOEAYGGGXFVGCZEFSPABCDGYTXHKORBVCDPXECMKM9VPEJYIHHBIFLFVYW99ODZTWXFQUUOIHTXEYKBKCCLCGAVPY9MJNWPUYWLLRPILYMRJM9KDTOCBDLCQPAMVMHREZLKAERFIIOHLMLCQTAAGPNTTQBOZLDQZXUQJQDGZBL9DGJVXGBCDTBPBGBL9QT9FXVRCSCHZREYRLKNHT9EVSEGBFMTTIDZH9YVNSYMJQLH9ELQISAMDHYMW99NWOHPNEDHPTRL9TRMBLDQTYFHWGGNQZVVVAXNENJEYBJBMLWUNCLJHJQBCWWOTSZZQRDMKDZLMHSMYZAWGCYAKIQTULBJUTWTPECEHNHZMDURJHZPRGEMXVXSGBARSBZATGWMNYVHGVSJCFGTIYOFNKOKAVA9RALAKNVIPXQFZKOIAXFCRZTWOUZYP9VDZBEDZFGANU9LMETCZLFCZAFDP9QRUVGDQCVUYFIYEXR9SZZUXPTJRIZAKAXDMXCNAICIQGEWXDCFL9P99WIFZS9LUWRDDXWQVGVSZGMKF9OMHWNVQJNIESMNLHURHKKXILHBAKXY9TVLPLVGRRAB9EHECHKNQSZYFSJHRDWKUFSDQDAPMFYRRDPIPML9QFGPRE9VPXKGXIOOXGNISCZWFOMGXSE9YWGBCHD9WU9PLPIQRPKVWOTSPVDQMPWYVKDVCMGV9KZBPCMTOLIR9HXMFYDYQNWTUXTVUCDFFZRACXITCPWVHTYNFIMTTXTW9VEWTDICFLU9X9SLNLPCERJZHRVQCHLNVRHQZBTNO9QLLNNGRBHDEHNAXCYAJBKDBOGEBUIDJITKHBJROLRPHUPLFHDYCWNCGADTMFVBFKRHKMQPQAHZVARCUQ9XZIS9YWDBHTVRBSBEGRHPODPLKWYMIBURTFKKMNCLJNTBQIHWDCRORGTOAZA9NNKXISDDQEELSLVQ9XHYFDLSNLKWGLTKDJJEVAXBCDKQJLJQVIEUMDTGMNMCZBI9FNDCEHD9YKXJCMKSSYKXZCN9PXYEEUKACXRUVGDLDVZKMKDNDDTCT9TYCYJWMPKJQVROPTCYHLVL9CCMYZLPCWHAYAUHAOH9MJXPBJYYAIUARGHUBVQLICUYRHWPXBONGRRKWYUAPPUO9JFJDPBBWCTINPSTDUUPQUWJZBAHZECJ9YFMQIBLGIWHU9LYL9SZKIFXNEOZ9FNJ9HNDJ9JGWBUIDIWULPOO9GJHMJGJNETGLTTQ9AXMUIRFAD9QXZPYIFQMQQLLUUHAU9MADJVDSYREXFXBBAIJBMYIBTAKDDVLBOXRGRIKQHVZXR9FPDWUDRQGSARRGIZPSXZHKFJMWVHGAJPHLYMWSGD9ST9I9ZSKWVBZXTFQPVHLPYRZHAINNGTXBJ9YUXNPE9URNMBDWXQOKKMDGGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICD999999999999999999999999999999999999999999999999999999EJDWC9999B99999999C99999999MFTGRDELIRHRCHTYIHGOEOCISPIFKIQXCOZDR9AHQZCPIITI9GYTKFNFESNFYLZSYBPKHOXXKJVTDJKQD999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[2].toString()).to.be.equal("NJTUZNAHHFRIUGQVMZQUJOHXITWTOAITPDFFKXKSNBOCJBBWZKXIXZUVQIIXNKFFPWYTPIXXHWIVHVSPZNQHAGWUFBRW9QNYQSMRCECTIXDHQBDSLIDYTHRGAJEID9AANMSYVJHRIKJRUEHIDLZWE9QQAPQJWLXYJYTLY9VTBGBVOTDBYGMMRASYDPRTHXEVELJUHYKMLWSFPQGEQEEEFFCEWZBELZQFMYCCERLFYYL9JWRSOTAUKUFVMUHVNGKH9XWYBEZWYPPOYIYVSLI9NPBRWLIOHEPORETXJPNRVDVWGVDKUURRHF9UYSLVZGAHUQYW9RLBGTUJKVKLV9PQYDPFLNZYREVYWMQIWXONHIKYBRLXJLQXJDJUMW9ROW9RASAUJKNDZ9SATYIFHOGBZQWETFOUCOMT9RQJCWVBMYZLUDNCOSSJKWDLRDPEJCVXXGYZYSVBNATHYUUSYBOVQMGUGBZFHGHGXQBNLW9XSXENXYPSLQAGNFGKISBT99XQIRNBYLYAODHIQVVTMVHEK9NWYNMHBJNPD9MV9KGYCJAIAFOD9XRSHVDLKBSXBPGVY9NTCGDPO9HRPUD9GXQPMKH9RJDGMXWOUIPAGZKADZLDITNQX9ECFXZFZQVMAKTQSC9RZYTWHSAOPUMFK9XRW9VFGPJAHQCXDFB9MBDMZCEWIQGMYRKAZQWMEPOTJXBPXHAADKLMDTZHNFEQOLEFIDPCDITBPGSTOGKJRZKNRVVFQFGHUFYNBCXNTZEJJBNGUVOPKJZTDLVSKYGRLOLRTQRCCUIKE9VULXTLVYXKXDEPWZZCKDAWZWUNYLQWY99YKQTUHPOXMMLAIQAXVUPQUZTZSWCXFNRECZXXQNHQMPNXRBPSFLWY9I9HBTZRLC9AR9K9YBERPUINETTBHVWNXLD9SW9LIDCKAHHKXKGPVUFVDMKOXSQPMCK9EOZVAUKP9X9WMFXETIP9UKSA9ATZRRJX9EKPB9AFSZAWKVMTUSHKHUBTYZHIUBRJUSCVHFODQXMTWVJUIOUVASGUGGAGISOVIBTIBKAULMSKHUIRYICIXDCPRZBWNBYVQUHTQEHTEHIZDCHCQNZXCAEKMBHZEJFWCMHLKYYUNSGOHCTHNILC9XWRKLYILKKETQNEXOFEQFMDOZLYYHWK9YISDSVNZSQODIDLHCEHEEYMYYGWAYXNLPUWUFBOGTSNDTKWPOCAXKJ9WFPAEALEDCBAPMHLSYXAOXPROPXDYNMEZQGASRVUR9Q9YZAKFSEMVHFVEBCXENHVOAKE9XFCYGLYNVHFSKXXIBRJCU9ZGWISYXGOQG9UXZPQXKYRHPRSS9LZTLYQJGNXELC9AOPWSBLJNSJXKPQFNUMFZFZXDJU9XKNTBQELSDMWFD9HEEIIMXRT9NQOGVEOJAQSVV9HZJMMDRUTYLCPIAR9JUXTQCSS9SMVMBKVLSMOKYKWRYLLHRQNOVXFNRMP9AMFJWYDMM9KZWSTSZWO9ISAJTGLTBORBKRYHLLQUELUYQXTOWXSDNGRDBVXDECNMXMZZLQ9TPGNCXLXOFTSFZ9PRQWMRGRULAOCEHWWVUJOQFGVOIWKCNCVZFQT9CQQBPOPTWKMAVHCGOLDFIIGLKXTHTUQGFHXLPCLJBUCDRJQ9NXKYYNHQFJFSKMOVTMJEXDXQYUEMJFAIMYPLJCBCWBKXHGVMBSIWVJOISDBWYNMHMU9QUALCSDKULXDSOCXPUMJCAZQEMQWXBCQZBAHMJCROH9MTUADZNXRAJEDXXJI9UEGYWWVABHXOHOAQKGQLAGCYWAU9JOVNYBTQCFTDGOLKXBAZVSUCCFFYYGQ9VJOASEHJEZPGUEGQAVVOMMQRJBCNRPO9QUDNPPAZVNGUINIPTSS9QRCMW9HWVLVVEVROYWCQECXERQSI9BMWL9NRCGYTTLBH9JVRXH9HDGAWZTLJMI9KT9QQIZSVUHMMGKPRJZ9DDQNZGLAAU9QCFSCJYVPRXDUSQNPKLETGSOKYZZJREDYAVBKIRLLDFLMIFRDCCNXZSQURAFOCBTFVVDVQQEKSBIY9SRYYSBTKRACQ9HIHYYWXRZGSEULUXUPL9ODRNDJFFNQCCJFZOQBYOEXQJHNKDVKSQBAQSOOWVAYZPEKSB9AAMGGCWZYWRP9EM9EC9TDE9KUYTUALZQDIEUBOYYHMBWGGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICDKY9999999999999999999999999999999999999999999999999999EJDWC9999A99999999C99999999MFTGRDELIRHRCHTYIHGOEOCISPIFKIQXCOZDR9AHQZCPIITI9GYTKFNFESNFYLZSYBPKHOXXKJVTDJKQD999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[3].toString()).to.be.equal("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGBE99999999999999999999999999BB9999999999999999999999999EJDWC9999999999999C99999999MFTGRDELIRHRCHTYIHGOEOCISPIFKIQXCOZDR9AHQZCPIITI9GYTKFNFESNFYLZSYBPKHOXXKJVTDJKQD999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
    //     });

    //     it("can prepare transfers with multiple balances required", async () => {
    //         const timeServiceStub = <ITimeService>{};
    //         timeServiceStub.msSinceEpoch = sinon.stub().returns(1518782585);

    //         const obj = new TransactionClient(apiClientStub, undefined, timeServiceStub);

    //         apiClientStub.getBalances = sinon.stub().resolves({ balances: ["1", "43"] });
    //         apiClientStub.wereAddressesSpentFrom = sinon.stub().resolves({ states: [false] });
    //         apiClientStub.findTransactions = sinon.stub().resolves({ hashes: [] });

    //         const seed = Hash.fromTrytes(Trytes.fromString("ISHKSEIVNKYFLYAUKVDRAWEUIZJIAAVICHFCIAEEUPSIJJXTLOLVJBZWEISNBVQLQJCSHCAUAFMATP9KN"));

    //         const transfers = [
    //             Transfer.fromParams(
    //                 Address.fromTrytes(Trytes.fromString("YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGBKUUNDKVMX")),
    //                 5,
    //                 undefined,
    //                 undefined
    //             )
    //         ];

    //         const inputs = [
    //             Input.fromParams(Address.fromTrytes(Trytes.fromString("GGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICD")),
    //                              AddressSecurity.medium,
    //                              0,
    //                              1),
    //             Input.fromParams(Address.fromTrytes(Trytes.fromString("GGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICE")),
    //                              AddressSecurity.medium,
    //                              0,
    //                              43)
    //         ];

    //         const response = await obj.prepareTransfers(seed, transfers, { inputs });

    //         // tslint:disable:max-line-length
    //         chai.expect(response[0].toString()).to.be.equal("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999PSTBGFZXBMTWL9JMOCPTJWO9GUDMJYMUJZ9IHLANBIEXVOWD9THLDYKE9JDIGKMPKGPOTOXPCNSDZKVGXLA9999999999999999999999999999999999999999999999999999EJDWC9999E99999999E99999999UWVUVFP9HEBSDKKPXYBZLGREJFVZUXDYZVLSEVETSHBRKLKVBKLBP9HAALUZPRULZCGAKDZOEQYRICVBY999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[1].toString()).to.be.equal("YGGXHATQITGJFXTYXTSZGUNIFJYQQMSBUMCUPUMIVZNKQGPKPPHUW9VUTQRU9PEJFXVVZYHUMAOQKS9KBDZI9TLAACPW9ES9VBMXMDO9SJYKIGEDSJLWAKEDLO9GIH9ENWSIUUCQOLRHHPYKFHODIZNPPFWPDCO9KYXEGMLTXFQWFPSXIYJXLVUIPFSCCGCKXSORYILHVVABLZXAQDTHCKDEMWCVWN9HYMZDQACUHECXAAGRBOWOEV9XCCDNVIYVMGYUVLMLCPEE9X9MYBODXBZDGQCOZKFI9EOBQUGA9KECJEQDGULRRELAKQBMADWKQRQBCEHKYN9NEDNXBRQST9UUX9WJJDQFECGODVYSXATNSVMUCZHYRVEZAD9EICQQEDFGYIETXYMMPIDBNBGEBUKLECMLPXXWABGG9KAQUVPHBLPTLHBTGPHMRNVJWKMIMST9GTSKOJBCV9HJNHMEECKEHAKESLXMCHNBGWSGHYTHXGXKLE9PUR9LTUSXIJ9JGJRWMWUHSQHD9PMMZXMHLGIRKYR9LKPNGWYDJZPATEFLJWXOQJZBYQAJ9SSXPQJJUCAFZNXSLMWWPJVLLRNBGOQ9HVNAECPGLCFGMWQP9ZECEW9UECDOYEIWEUVWFL9FYYOAKFMDPDMAECJKERSVEWEXTORGFQVYMIPPMJQBTLKNYLSUH9LIRLYUVM9BVENPBEZMYBUIVIHVYCKYTXMEQYV9WPFZFFTAWCWFLMABGOTKN9INNAQJIQYMBTSZTZNYQYWLDZMTTRMDIDVKZZQALISHQULIAFURWYXHMJRIXBTNOFFJHUQTAWLQTZHVIKUBZBBE9KGTZPUCSYAGRU9GBSNSZNHJQHTMPIPPDKCTILVQ9RBMOPKVEJKLYNYUYWWXWUCEKBRFOWMFH9YXQOGKTLLPTQQFHITRXWRFJWPNIQTQGCZVHXBEJ9VUVREYWZVOBUELVPGTFWRBDQLLBMCERYEMQUBGRHVWOAHFP9IHNLTCUVZLZUPIXILB9DUIPPJYINDNJCRTGRTXFVLVSTIUOZLLNCZE9OWMTRHLQYPKBFOEQPH9AFM9EAEOTCGTZBQZNWMRJZPOMZWKRQJDENEFJEUQHAUMQWVXWGSXFDXYXHVTVY9HKSQJBJALNJ9MGIWBAODJSHOAMM9JU9NPPWLI9WVWCKNFSCNADKJLUHOADXHIKOAEJFIYXQDERXYTQYYUPZNSTPSAOGPIDRZOZXVJZHPROJBJMLRSOENHCGP9GOIXXXHUHJAGQAHMHJWCEXZXIWIZP9NCUYTJDZRDXDLCCNQHJM9QWDATIMXDRNTWEDEGZDOZFIZKTRPDGQGP9JNTPTHXOWOCHOZIVWKJFXPNDVYYPVXJJUFK9ATDBPXKPJ9VGTTCSGNFPZKWUB9FDOXEUPEANC9GFQOY9ZVONCGS9WRGOYYTNRHDICOKDRSUIDZMZOAKHCBNFUARWZEHICJHTDJIIEOVVWDOJIXGEPHZQQWEMBXMOOXYQDQYKUJBHQ9KKKDYIKTCLXLKUOXKGXQHFLWXATSTXKL9PSGIUI9KZPGIWHOH9CTPAEZJWLNUNBSVJNHBVVYLPX9EQQIQOAMWPNMSBJCWQDXWJDDBORRDUGFOXLJUNYZR9TOFTGVMAPPMJTYVYVSOSIJUOR9HYTTLZPJXCKBJROAODHOLGYFNNVWKBYHDGQAIX9QFBRFUDSDWDFMBYSKZZPUWKIMQVU9DPBRFIALLPRCNQUZJQX9MXWEHSTSVVZRDWZALLTOAXEBXQH9IQJCWDAEA9NGZKJXNXCOV9YMQUXISMNOBKUXBEMFHDHTFMUODBZVEPREXEJCVVHTGUJDQP9GRQBYVPXAVVRICRVZIFCFWIELTKDTUPHGNOOKSHNNYZLJBPVXZVTNUNRRJFTMPEDKWSIMXFMSDMVJRSTOSWYVIVZKAJBTOKDLBUFXJQCAAWCGHTTXFMACWABLZ9HQNFZZBOHXMNJMKHDYBQJC9PRTVGLAASG9ACBNVMXIWWJKFUXETKTGMAWYRSHAKWVWGDTXKKANRRYFNAWTD9GN9CQM9QLVYUGTLQNLNYKAYDASBQNGFCLYKPBQWPEKDJBQXJ9MQYWUNLWQFJMNIYZFIEZASANRBKCLHQASIZ9JINUKGYUTPSFSCWL9SACEXZACSSRBXS99FLDREE9YVLKGALRCGGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICE999999999999999999999999999999999999999999999999999999EJDWC9999D99999999E99999999UWVUVFP9HEBSDKKPXYBZLGREJFVZUXDYZVLSEVETSHBRKLKVBKLBP9HAALUZPRULZCGAKDZOEQYRICVBY999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[2].toString()).to.be.equal("NJTUZNAHHFRIUGQVMZQUJOHXITWTOAITPDFFKXKSNBOCJBBWZKXIXZUVQIIXNKFFPWYTPIXXHWIVHVSPZMVPAGDSVFNQQCPPSDOCAGREVIVHWMILXUNBSJSRUUDIAI9ISEGLEFMELIYMZSFFPYXGVTGSEGGHOTUX9ZHXDEUCWQNOQO9RCVRRQ9ZIRNWPVPJSOGCSFQFUNYBDZIKF9AUIJNHZEGAECEYMSGPTQBK9XPTMKEE9VIWJE9OVQCOCPFALNASWOVTISGUCEKNRKNQRZDTHJWKSYDVQ9ZMFEATCAIBFGCYWPQMEMDYKAUVOOWO9KWQXIJFZOISELSDZTEHUBDCXRPQJTNKTV9JDFH9HSTHNWAL9TFVKODXJULPUOAHVZCACZIJZPPFAAHSAGLUYDTYW9VLYFOIKSYFIXWLLJKWHIJHQJTNWAJABKQZYZWGMCABFQUTQVWPRDONAYFQPPFCDZQYRZSZMS9ULX9JUAQDDYVPPEUVXCPVOXIUMAWFKAJVFSABUN9DIE9JHDDKSMKZRYPNUTZPHTFYSENDSPWZQCIVTWVZHOFXPPAYNELOBBLSXPLGDESDWN99ME9MBXMJPFXYUNXOBWTGTMSJUSHQQSO9HV9MRDYRDKFFVH9FWU9IY9OJW9AMYX9XDGZ9PDPPKXCTKQKBUSQFKJODNUGJMPMFN9BRALV9QRMGQDNOCYYS9BPNXVCOJLCDJKYJTVHMQCXKDINXT9OMCLIKQCSCFXTXSFRSYMEKCNSQPRPUWQYLUWNMBZQLHNHRIT9LGCNJBESXDTXFXYGOGDYGUJABTQAYVQGPATUDFYJQXMYHHVB9QC9FRVFELJZGPHAZDNVDHAYGWY9UJ9QDCI9ZEGBUHAKNIKWOUKZCSRIW9WCKUCYEZFKOXXVSUALDPVTASMWNKHSZRNZGOEOULMQVUPWIWIEXQEONRSUWP9PGDCAYMXABYWIUTKWQCGOJRVP9FYQGJYSAHWDCCENWJWKCRNXLQHTTUNVFZDEDOCYKNTOCRHULRDQPFQOIDPSCCDRNIVUNEVGDZXYZULWHRZGXTJK9ZGDGLQUYBVBPVQQQIIAGZYMJEUFK9BXGTMHSUUOVVZLTHTQXRSZFEGRROXYVLQYFEXWKK9LA9XHC9VMKSTBSSU9LHWBIRTZUUBCNGUMYSUUGQLLOEHSRXPESVKKHZEBFWIVMKVHINPYJTMHZPBRXFPHNIXX9KD9NBFSUXQRIAALDCVXJYHCPZNVJLYIFRIODBXPJYDWZZGNKTARGY9TKVS9SGHQVMOLELVDYCEKWYQUBSX9DBRKR9HHPXWQZJBLLJXIIZ9CFXBJJZBIKIGOCBFJYHXPHOXMHFD9TQ9SZGYL9KVMULZHSDADEWTEUFWRSWUBMUQZLVXQXACPRMIPIPUSTHVOJOYGOZASGYJZGDCFYBPMP99O99CIQ9YXXYDVIRSZIWADYTP9CRBLWJZFOHWVEL9KNPJEVEJMNMPHJTHVCOGAKII99SJHLDQQUTSLPEXHD9FTPPVTBZFMZOWICOAPXFKFEWKKMMMFAGTOUWCKKD9RXESVYUDJHCONWOWZGWJMGJKVS9GYTORBDXNGFJSWXBXQYJNGNOFVUTSIR9EEYMKRBFCMIZFGIXDWHECOOYVKRJTBJPYRZXWDGTKEDQJW9VZBJDXU9W9ZIOPSO9FOOWTKJXRSGVDTFMDQFNJRJKBNUYDEQVLYXL9WCNWJHWSFTVT9PUTELIGMEBTXHI9JXJNBDHWTRJXVLQQJBBYDWNXQOQNWGTAWQDXWJFFYSMUFNNPSGBVFTUTXEKEVHGRHAGQDXTOVLOSRNMSZGAOCDJLUBKLO9LOVRNMCKAGPQWTYZSLUZYFPSKFPIEUAVNHUA9RWXLNJZWEVXGGWCPORCTYJUS9IVWDO9QPHRIYYWHWFUKYGCQVCSVSXMROUMBDXIXPP9YQXJJ9KBQIARODE9HCXNSPDHHDESF9LEOJXSBOQMFAUMAURBJTTZXRVTUBONABFYUHSODRCJCABQKWDBMEJAIQPHOBOQMKECWKERWZKNYNATXMHGVFNWLGFOEDOAOYLDMKQDDVKUSEXVCXLWDZSPEHEPWQZRAJXIOA9ADTYQRAYPLW9CGQRXNXGUDBGNILBIILZHFSISUJBPH9ELSZKFROSY9QUDLTFBANJ9CNUIEUXEJXM9GGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICEKY9999999999999999999999999999999999999999999999999999EJDWC9999C99999999E99999999UWVUVFP9HEBSDKKPXYBZLGREJFVZUXDYZVLSEVETSHBRKLKVBKLBP9HAALUZPRULZCGAKDZOEQYRICVBY999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[3].toString()).to.be.equal("YGGXHATQITGJFXTYXTSZGUNIFJYQQMSBUMCUPUMIVZNKQGPKPPHUW9VUTQRU9PEJFXVVZYHUMAOQKS9KBDZI9TLAACPW9ES9VBMXMDO9SJYKIGEDSJLWAKEDLO9GIH9ENWSIUUCQOLRHHPYKFHODIZNPPFWPDCO9KYXEGMLTXFQWFPSXIYJXLVUIPFSCCGCKXSORYILHVVABLZXAQDTHCKDEMWCVWN9HYMZDQACUHECXAAGRBOWOEV9XCCDNVIYVMGYUVLMLCPEE9X9MYBODXBZDGQCOZKFI9EOBQUGA9KECJEQDGULRRELAKQBMADWKQRQBCEHKYN9NEDNXBRQST9UUX9WJJDQFECGODVYSXATNSVMUCZHYRVEZAD9EICQQEDFGYIETXYMMPIDBNBGEBUKLECMLPXXWABGG9KAQUVPHBLPTLHBTGPHMRNVJWKMIMST9GTSKOJBCV9HJNHMEECKEHAKESLXMCHNBGWSGHYTHXGXKLE9PUR9LTUSXIJ9JGJRWMWUHSQHD9PMMZXMHLGIRKYR9LKPNGWYDJZPATEFLJWXOQJZBYQAJ9SSXPQJJUCAFZNXSLMWWPJVLLRNBGOQ9HVNAECPGLCFGMWQP9ZECEW9UECDOYEIWEUVWFL9FYYOAKFMDPDMAECJKERSVEWEXTORGFQVYMIPPMJQBTLKNYLSUH9LIRLYUVM9BVENPBEZMYBUIVIHVYCKYTXMEQYV9WPFZFFTAWCWFLMABGOTKN9INNAQJIQYMBTSZTZNYQYWLDZMTTRMDIDVKZZQALISHQULIAFURWYXHMJRIXBTNOFFJHUQTAWLQTZHVIKUBZBBE9KGTZPUCSYAGRU9GBSNSZNHJQHTMPIPPDKCTILVQ9RBMOPKVEJKLYNYUYWWXWUCEKBRFOWMFH9YXQOGKTLLPTQQFHITRXWRFJWPNIQTQGCZVHXBEJ9VUVREYWZVOBUELVPGTFWRBDQLLBMCERYEMQUBGRHVWOAHFP9IHNLTCUVZLZUPIXILB9DUIPPJYINDNJCRTGRTXFVLVSTIUOZLLNCZE9OWMTRHLQYPKBFOEQPH9AFM9EAEOTCGTZBQZNWMRJZPOMZWKRQJDENEFJEUQHAUMQWVXWGSXFDXYXHVTVY9HKSQJBJALNJ9MGIWBAODJSHOAMM9JU9NPPWLI9WVWCKNFSCNADKJLUHOADXHIKOAEJFIYXQDERXYTQYYUPZNSTPSAOGPIDRZOZXVJZHPROJBJMLRSOENHCGP9GOIXXXHUHJAGQAHMHJWCEXZXIWIZP9NCUYTJDZRDXDLCCNQHJM9QWDATIMXDRNTWEDEGZDOZFIZKTRPDGQGP9JNTPTHXOWOCHOZIVWKJFXPNDVYYPVXJJUFK9ATDBPXKPJ9VGTTCSGNFPZKWUB9FDOXEUPEANC9GFQOY9ZVONCGS9WRGOYYTNRHDICOKDRSUIDZMZOAKHCBNFUARWZEHICJHTDJIIEOVVWDOJIXGEPHZQQWEMBXMOOXYQDQYKUJBHQ9KKKDYIKTCLXLKUOXKGXQHFLWXATSTXKL9PSGIUI9KZPGIWHOH9CTPAEZJWLNUNBSVJNHBVVYLPX9EQQIQOAMWPNMSBJCWQDXWJDDBORRDUGFOXLJUNYZR9TOFTGVMAPPMJTYVYVSOSIJUOR9HYTTLZPJXCKBJROAODHOLGYFNNVWKBYHDGQAIX9QFBRFUDSDWDFMBYSKZZPUWKIMQVU9DPBRFIALLPRCNQUZJQX9MXWEHSTSVVZRDWZALLTOAXEBXQH9IQJCWDAEA9NGZKJXNXCOV9YMQUXISMNOBKUXBEMFHDHTFMUODBZVEPREXEJCVVHTGUJDQP9GRQBYVPXAVVRICRVZIFCFWIELTKDTUPHGNOOKSHNNYZLJBPVXZVTNUNRRJFTMPEDKWSIMXFMSDMVJRSTOSWYVIVZKAJBTOKDLBUFXJQCAAWCGHTTXFMACWABLZ9HQNFZZBOHXMNJMKHDYBQJC9PRTVGLAASG9ACBNVMXIWWJKFUXETKTGMAWYRSHAKWVWGDTXKKANRRYFNAWTD9GN9CQM9QLVYUGTLQNLNYKAYDASBQNGFCLYKPBQWPEKDJBQXJ9MQYWUNLWQFJMNIYZFIEZASANRBKCLHQASIZ9JINUKGYUTPSFSCWL9SACEXZACSSRBXS99FLDREE9YVLKGALRCGGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICD999999999999999999999999999999999999999999999999999999EJDWC9999B99999999E99999999UWVUVFP9HEBSDKKPXYBZLGREJFVZUXDYZVLSEVETSHBRKLKVBKLBP9HAALUZPRULZCGAKDZOEQYRICVBY999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[4].toString()).to.be.equal("NJTUZNAHHFRIUGQVMZQUJOHXITWTOAITPDFFKXKSNBOCJBBWZKXIXZUVQIIXNKFFPWYTPIXXHWIVHVSPZMVPAGDSVFNQQCPPSDOCAGREVIVHWMILXUNBSJSRUUDIAI9ISEGLEFMELIYMZSFFPYXGVTGSEGGHOTUX9ZHXDEUCWQNOQO9RCVRRQ9ZIRNWPVPJSOGCSFQFUNYBDZIKF9AUIJNHZEGAECEYMSGPTQBK9XPTMKEE9VIWJE9OVQCOCPFALNASWOVTISGUCEKNRKNQRZDTHJWKSYDVQ9ZMFEATCAIBFGCYWPQMEMDYKAUVOOWO9KWQXIJFZOISELSDZTEHUBDCXRPQJTNKTV9JDFH9HSTHNWAL9TFVKODXJULPUOAHVZCACZIJZPPFAAHSAGLUYDTYW9VLYFOIKSYFIXWLLJKWHIJHQJTNWAJABKQZYZWGMCABFQUTQVWPRDONAYFQPPFCDZQYRZSZMS9ULX9JUAQDDYVPPEUVXCPVOXIUMAWFKAJVFSABUN9DIE9JHDDKSMKZRYPNUTZPHTFYSENDSPWZQCIVTWVZHOFXPPAYNELOBBLSXPLGDESDWN99ME9MBXMJPFXYUNXOBWTGTMSJUSHQQSO9HV9MRDYRDKFFVH9FWU9IY9OJW9AMYX9XDGZ9PDPPKXCTKQKBUSQFKJODNUGJMPMFN9BRALV9QRMGQDNOCYYS9BPNXVCOJLCDJKYJTVHMQCXKDINXT9OMCLIKQCSCFXTXSFRSYMEKCNSQPRPUWQYLUWNMBZQLHNHRIT9LGCNJBESXDTXFXYGOGDYGUJABTQAYVQGPATUDFYJQXMYHHVB9QC9FRVFELJZGPHAZDNVDHAYGWY9UJ9QDCI9ZEGBUHAKNIKWOUKZCSRIW9WCKUCYEZFKOXXVSUALDPVTASMWNKHSZRNZGOEOULMQVUPWIWIEXQEONRSUWP9PGDCAYMXABYWIUTKWQCGOJRVP9FYQGJYSAHWDCCENWJWKCRNXLQHTTUNVFZDEDOCYKNTOCRHULRDQPFQOIDPSCCDRNIVUNEVGDZXYZULWHRZGXTJK9ZGDGLQUYBVBPVQQQIIAGZYMJEUFK9BXGTMHSUUOVVZLTHTQXRSZFEGRROXYVLQYFEXWKK9LA9XHC9VMKSTBSSU9LHWBIRTZUUBCNGUMYSUUGQLLOEHSRXPESVKKHZEBFWIVMKVHINPYJTMHZPBRXFPHNIXX9KD9NBFSUXQRIAALDCVXJYHCPZNVJLYIFRIODBXPJYDWZZGNKTARGY9TKVS9SGHQVMOLELVDYCEKWYQUBSX9DBRKR9HHPXWQZJBLLJXIIZ9CFXBJJZBIKIGOCBFJYHXPHOXMHFD9TQ9SZGYL9KVMULZHSDADEWTEUFWRSWUBMUQZLVXQXACPRMIPIPUSTHVOJOYGOZASGYJZGDCFYBPMP99O99CIQ9YXXYDVIRSZIWADYTP9CRBLWJZFOHWVEL9KNPJEVEJMNMPHJTHVCOGAKII99SJHLDQQUTSLPEXHD9FTPPVTBZFMZOWICOAPXFKFEWKKMMMFAGTOUWCKKD9RXESVYUDJHCONWOWZGWJMGJKVS9GYTORBDXNGFJSWXBXQYJNGNOFVUTSIR9EEYMKRBFCMIZFGIXDWHECOOYVKRJTBJPYRZXWDGTKEDQJW9VZBJDXU9W9ZIOPSO9FOOWTKJXRSGVDTFMDQFNJRJKBNUYDEQVLYXL9WCNWJHWSFTVT9PUTELIGMEBTXHI9JXJNBDHWTRJXVLQQJBBYDWNXQOQNWGTAWQDXWJFFYSMUFNNPSGBVFTUTXEKEVHGRHAGQDXTOVLOSRNMSZGAOCDJLUBKLO9LOVRNMCKAGPQWTYZSLUZYFPSKFPIEUAVNHUA9RWXLNJZWEVXGGWCPORCTYJUS9IVWDO9QPHRIYYWHWFUKYGCQVCSVSXMROUMBDXIXPP9YQXJJ9KBQIARODE9HCXNSPDHHDESF9LEOJXSBOQMFAUMAURBJTTZXRVTUBONABFYUHSODRCJCABQKWDBMEJAIQPHOBOQMKECWKERWZKNYNATXMHGVFNWLGFOEDOAOYLDMKQDDVKUSEXVCXLWDZSPEHEPWQZRAJXIOA9ADTYQRAYPLW9CGQRXNXGUDBGNILBIILZHFSISUJBPH9ELSZKFROSY9QUDLTFBANJ9CNUIEUXEJXM9GGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICDZ99999999999999999999999999999999999999999999999999999EJDWC9999A99999999E99999999UWVUVFP9HEBSDKKPXYBZLGREJFVZUXDYZVLSEVETSHBRKLKVBKLBP9HAALUZPRULZCGAKDZOEQYRICVBY999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[5].toString()).to.be.equal("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGBE99999999999999999999999999NA9999999999999999999999999EJDWC9999999999999E99999999UWVUVFP9HEBSDKKPXYBZLGREJFVZUXDYZVLSEVETSHBRKLKVBKLBP9HAALUZPRULZCGAKDZOEQYRICVBY999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
    //     });

    //     it("can prepare transfers with long message", async () => {
    //         const timeServiceStub = <ITimeService>{};
    //         timeServiceStub.msSinceEpoch = sinon.stub().returns(1518782585);

    //         const obj = new TransactionClient(apiClientStub, undefined, timeServiceStub);

    //         apiClientStub.getBalances = sinon.stub().resolves({ balances: ["43"] });
    //         apiClientStub.wereAddressesSpentFrom = sinon.stub().resolves({ states: [false] });
    //         apiClientStub.findTransactions = sinon.stub().resolves({ hashes: [] });

    //         const seed = Hash.fromTrytes(Trytes.fromString("ISHKSEIVNKYFLYAUKVDRAWEUIZJIAAVICHFCIAEEUPSIJJXTLOLVJBZWEISNBVQLQJCSHCAUAFMATP9KN"));

    //         const transfers = [
    //             Transfer.fromParams(
    //                 Address.fromTrytes(Trytes.fromString("YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGBKUUNDKVMX")),
    //                 5,
    //                 Trytes.fromString("A".repeat(5000)),
    //                 Tag.fromTrytes(Trytes.fromString("THISISATAG"))
    //             )
    //         ];

    //         const response = await obj.prepareTransfers(seed, transfers);

    //         // tslint:disable:max-line-length
    //         chai.expect(response[0].toString()).to.be.equal("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999PSTBGFZXBMTWL9JMOCPTJWO9GUDMJYMUJZ9IHLANBIEXVOWD9THLDYKE9JDIGKMPKGPOTOXPCNSDZKVGXKA9999999999999999999999999THISISATAG99999999999999999EJDWC9999E99999999E99999999DPINYID9YHTSOYULKLAJSYVBRZZBZRTKJTSWFHRHINLSRKKUUCUFP9FLHXI9QGPNQLERSPLGBWQKUKEXX999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[1].toString()).to.be.equal("SVLMSBYOKWSWUXHEWYQCBPLNNJIOTKBPLTWOJJJRSUCRAKKNAGUQNXXQPMDFDKZ9NCLVXTWEMLIL9F999IPEXGJWRIIRFFDNGYEANKMXXKILVSLSNOOWMEBISVIEW9UXGQ9T9UJNMA9LTGISLWYMCCUBXAFAXUSN99EJKGPHHXBVCLMOZTX9BUKDQVZASISPBLWCNHXHTIMYA9MTKCWDEKRMDOGOSQLWSHIUUZHZKXBUQZICOBDHKMPWYEQBPQZZJHVZFGGYSMZFXOXSWKXQVYETGIJJAAWBERC9OLKT9J9DTCMDRAAPSBREHIUU9YWKXQAWFDEZTXBXFDVURZJGULGJ9AOPVBPYNTMQHMFLDLYJFVNQE9GAMFLVCORYEHAKPKGNNEJXHYESNBYDBFENYSHFWQDTBXPYFYSTAYNCLJSGWOTMFLVLYDRZU9RUTFIXQCO9HFHLVQFPL9OTKZ9MEMDHSYIITCBSJUTVECSTTJBJZN9MOFFXGPEWJFCHDGSTXCTOEELDTTMCYCIYDGOOOUODYMWKCCUXYPBNCYBTCGYMOZZERVBIECXILU9PAXINFXWFYYALAROZVAIGUNCZHYFZVMPTPOWIIWMGDNVQRLDPMROITDYHEFTAGUNMPHEXSJWYKVMZFQU9NOBVKOZEZRENCWAFHMTKLXHFVPYBKWNBLPHGLDRNKXVYDM9WXGQBB9MPA9CJFNVSFQNYB9QW9TRAZIKFCAAEDDMAGKDQWWDAWBLXTRRFR9JKWCMJ9MEFAULEHKFGQZCRYWBQSMMSANFVRAZOCYTOGSOSVMOGJZQJIBVFJSBADFOYYQDBSRZNDELTUOQULHUDVVDRSULBV9GIMUHPUAETCBOZZAZCDADXM9QUEZTCLTCBDSXUVVKCDGWHZYKVKTZXYKJUAEDVNGENJWX9XRTYTZUWSXT9ZIRYKHDWIARPSDPTZLQOLWJ9YHIKHMYGBMTWREYRLKNHT9EVSEGBFMTTIDZH9YVNSYMJQLH9ELQISAMDHYMW99NWOHPNEDHPTRL9TRMBLDQTYFHWGGNQZLAOLAICJWQKMNXTMQZVRPRBKHPQESY9LNEFIXYWYSRTVFUFHRNLYOP9LWIYXSRAKYDDXVLKTQUYMHVSOXENEQETZTCYULDAGXZQUHZMJSGGNOVBCLICAAEFF9RGCH9IZFLOIHSPM9DCVKYVUQWULHMUCSJMIRJELRCVZFRWAQZNVHZHCTWABBQDWXSPSMKIKKDAUWMVDHJQDJLFJVXITCVCCHP9SRBERCOMFFBAGPJNDPECJSKAQBDEKQSWSJZHGNRTWRGATEYRTIXCWDCGF9BKN9BTNANPDWESUBRISQAZQJURZIRJUHFDOTSGJYTLQTXBCCBGAEQHOLNBEBCZPWQXEY9KVITUINKOINNWYHWKVFKKQLCQERUSKESGAWLELHNJMGW9OQNPJLETNLAHYZVFQVJVSFGVAEHUXMRUKULVBXBJXRTZACDQZKTLB9TZPDCFLLBSHXGKJXCTCTGOGFUKXINQWMNKVGLTYHCXATSTXKL9PSGIUI9KZPGIWHOH9CTPAEZJWLNUNBSVJNHBVVYLPX9EQQIQOAMWPNMSBJCWQDXWJDDBORRDO9TYXNIBTHMFTPKJHW9XCUZVKFITI9UW9LBJ9UXE9FGIUBHHTFUQQBVRBWIKMVITRNSTCDBRRJYZ9KSTCOULLMFXUYEEJFGSMVFS9XVLPDCRPTML9EAGIXFALNAKCKRSSIDLF9M9AKCEIDCJEXSOOBYSVWRMAZVCEBRLMPVH9Y9UQMQHSZXGUJZVVGSBEXWOGBZKQAZDJVF9G9JNKPJYGMMRTWOEQHYPQGUODCDVYJKRIHH9KLXWTOTYKSSUBVXUIMPLDJXYAYQITTZDHOVNTSIKPFLPAOVZZEPMLLZUHUYXECXDQZQXHPNAZCNDXCYHMODYN9UC9MGHEKD9WLRKHZZZZJRNNTLFUCGZWSOMYUHQHUDIKUSQBCFYKTDNU9WNKKWD9XVSWGYASRYISLCU9WYRSHAKWVWGDTXKKANRRYFNAWTD9GN9CQM9QLVYUGTLQNLNYKAYDASBQNGFCLYKPBQWPEKDJBQXJ9MQYWUNLWQFJMNIYZFIEZASANRBKCLHQASIZ9JINUKGYUTPSFSCWL9SACEXZACSSRBXS99FLDREE9YVLKGALRCGGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICD999999999999999999999999999THISISATAG99999999999999999EJDWC9999D99999999E99999999DPINYID9YHTSOYULKLAJSYVBRZZBZRTKJTSWFHRHINLSRKKUUCUFP9FLHXI9QGPNQLERSPLGBWQKUKEXX999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[2].toString()).to.be.equal("UCWXXFV9NHFODEUTBHXRMMCMYKYQHETNBWJBJ9QVAAZHBIIYLKDBXRRSOEEP9MHHDDWZZBHEFPUPXEWHCYVYKRQWEMHTKXWUYCKWTVGWFK9TAWFBDOCYJKYPPSSGIXU9STYPFJCTGBTTMZBEAXFACFNYOGGKDHMMVWVKREMESDZNPHOZKEIKHTDVCVWKWGRCVEHKJNMONOFFNF9VUUMLPDJYDZLHMVSLMLHAEUJGQXXUVIGVUIWNYM9K9MQD9QERVSSHCEOQCSNEQJNATRWGOCEBDSFPMKRUTVTFLHYEARDDPWRXIJXLCOBHJIEH9GAPIOT9DODVATMROKNNDQOZSL9DGORLRXQNWYJWBVOGOWHUJ9BNDXKHNUDYHTPQLXOHKZYSVVMYWPDDYSUBZSO9CFMSLOBFKLMGAEMOHNJT9AFIDK9QAKGWHOPCQUPDTSCZHNTXEPGYTEGHAXLVV9NLCRWDFEZFYJQQUZGWZBALIC9LNTADFUJHGJBNLLFY9XDLSWOCOFNBBDLRLXWIRGVOAXWUTIYSCMZACGKZNYYGZCOPENZVMGYEFXDPPAYNELOBBLSXPLGDESDWN99ME9MBXMJPFXYUNXOBWTGTMSJUSHQQSO9HV9MRDYRDKFFVH9FWU9IY9OJWYZWUPO9PAXWOHGJDXKPHRQUPSVQPLPHKJAVFTVJP9CGHEIBWLZALGGETINJEFRVEUKCOYSDWTARFJSMAWITBJ9ILUGQUZ9ZSJNWVACPVTPIXXDOLIPWQAKASVNTTKK9JYVJAWOLNHTKAGYRCDOIPQEICWSCPZNYWRDFWCVQEPJGVGCNWWANKKNYAOGCVP9NSLQMBSM9HREIDJZSNBSKFZAFPOEVLGEFAFMSIWPGZHUQIJVCZHGY9WCKUCYEZFKOXXVSUALDPVTASMWNKHSZRNZGOEOULMQVUPWIWIEXQEONRSUWP9PGDCAYMXABYWIUTKWQCGYINFYRQICOVCJYJMUMXELMNDTDKQIQPPDNKWKZO9ZKELRVGHGHRMDLHZGKMYMXTMHIAOJOSXVIYFFHNXWLRHNNJGTVEBXNPDZOVWGUAUTHZWNJAUTHSLSLPZOGOUQIFVIUBS9AQPEDMZLZIXUX9WYRSFPBEPZKHL9LRFMLWOZEEZOWGAHTSRYIQJSVIKOWLTQBIEOX9FJKHFAJVENBWWBAYGNDL9NYOPMCTCDUYUUXHLXCMVVCWQTTCIBUNETBRUNSUM9FAGS9PQIBGG9IAWSSPXUXTPKEJEJPVLMLCXPEPLRELBF9HECQIAARSKVODEXAYRCC9SI9FQDVTFPXEJR9NPNPEC9YKEOALC9JMJRCFWKHLJ9RSRBGSZBUBLYDFPLWK9XIAXKZLNXX9FONQDBQYWUKVCMIJPBLQOJFUDVXDFYBZPJXDIRHSCXLGDKSGYSK9JNNVZIIZUQMZZXHJPZHLI9DV9BZDLGTAA9ZVYIFKEVWGVOZTPMFILNDRQVTAPHMRTDIJLKTWPJGURIPOSSKYTFVTAHNHBOBCPR9O9XUCRHQBOCFREOW9DFRAFSPTPSXVWW9YYNOPNAUYADYYSYWAXFZWTHVGQPFSXPWXHPURROGCKSKNUQEBCPQVHOVUXKYF9SYASRAHYKZRJZVNQBTRWOJLGOVZCAYZQSJIDDIYQWNVMYKVFFLDPJEBERNFXU9XHQCUOGHUOQQYQFCH9MOCDCRJTEYIOPCOPFCTFOXQQKUSMFHKXZL9AKUMOJIKFVXBWBNJOCZSFHYPHNOLEIYKFEEEUBSLG9WIYFSTMWEZYTBTTOKMQVLJXUAXCRTZLRQTEQDEDYSMPFNTQNAKOGOO9FIQSPDYCZMSXNUZPFOXRDCJBL9FEGGP9TXJMCHYGYPJOBGFOYEXJJIQDYGTQVXI9SSGIJLZKVISPWSZWLRJADOPWTGIOYIUA9JFJTMSYTITPPLDXMKWCVPNUWVZEKKZVFTCRXZQAMDGBZEOVTQYZUKXNGUDOEWYJXWPVDIBEIHKIBTSHQL9R9WZVMOBJFNZ9FHDABVUQUZQIDA9WP9LLLNSZWBEYKJDVXWIVB9NYIPDMLRIHXHGVYEBEKTDMI9LTTPXYXFJCWOEIMZJAMAVJDNYR9TQSWMJPGPUHNZIUVJXPWHUGLJBLJTPSXABBUBJEFMFMNANKYXVCRVJBBHJXPOUCZCDTJREIFKDJMBGGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICDKY9999999999999999999999999THISISATAG99999999999999999EJDWC9999C99999999E99999999DPINYID9YHTSOYULKLAJSYVBRZZBZRTKJTSWFHRHINLSRKKUUCUFP9FLHXI9QGPNQLERSPLGBWQKUKEXX999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[3].toString()).to.be.equal("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGB999999999999999999999999999THISISATAG99999999999999999EJDWC9999B99999999E99999999DPINYID9YHTSOYULKLAJSYVBRZZBZRTKJTSWFHRHINLSRKKUUCUFP9FLHXI9QGPNQLERSPLGBWQKUKEXX999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[4].toString()).to.be.equal("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGB999999999999999999999999999THISISATAG99999999999999999EJDWC9999A99999999E99999999DPINYID9YHTSOYULKLAJSYVBRZZBZRTKJTSWFHRHINLSRKKUUCUFP9FLHXI9QGPNQLERSPLGBWQKUKEXX999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[5].toString()).to.be.equal("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGBE99999999999999999999999999MJISISATAG99999999999999999EJDWC9999999999999E99999999DPINYID9YHTSOYULKLAJSYVBRZZBZRTKJTSWFHRHINLSRKKUUCUFP9FLHXI9QGPNQLERSPLGBWQKUKEXX999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //     });

    //     it("can prepare transfers", async () => {
    //         const timeServiceStub = <ITimeService>{};
    //         timeServiceStub.msSinceEpoch = sinon.stub().returns(1518782585);

    //         const obj = new TransactionClient(apiClientStub, undefined, timeServiceStub);

    //         apiClientStub.getBalances = sinon.stub().resolves({ balances: ["43"] });
    //         apiClientStub.wereAddressesSpentFrom = sinon.stub().resolves({ states: [false] });
    //         apiClientStub.findTransactions = sinon.stub().resolves({ hashes: [] });

    //         const seed = Hash.fromTrytes(Trytes.fromString("ISHKSEIVNKYFLYAUKVDRAWEUIZJIAAVICHFCIAEEUPSIJJXTLOLVJBZWEISNBVQLQJCSHCAUAFMATP9KN"));

    //         const inputs = [
    //             Input.fromParams(Address.fromTrytes(Trytes.fromString("GGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICD")),
    //                              AddressSecurity.medium,
    //                              0,
    //                              43)
    //         ];

    //         const transfers = [
    //             Transfer.fromParams(
    //                 Address.fromTrytes(Trytes.fromString("YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGBKUUNDKVMX")),
    //                 5,
    //                 Trytes.fromString("BLAHBLAHBLAHBLAH"),
    //                 Tag.fromTrytes(Trytes.fromString("THISISATAG"))
    //             )
    //         ];

    //         const response = await obj.prepareTransfers(seed, transfers, { inputs });

    //         // tslint:disable:max-line-length
    //         chai.expect(response[0].toString()).to.be.equal("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999PSTBGFZXBMTWL9JMOCPTJWO9GUDMJYMUJZ9IHLANBIEXVOWD9THLDYKE9JDIGKMPKGPOTOXPCNSDZKVGXKA9999999999999999999999999THISISATAG99999999999999999EJDWC9999C99999999C99999999XBJWKALTWCWWKDEDBBWHZXLQKRZVZJLFLFLQZJRBBSXDOEPX9QSFWLVCDODGRIAYL9FRCSKRQJHUDHPIC999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[1].toString()).to.be.equal("YGGXHATQITGJFXTYXTSZGUNIFJYQQMSBUMCUPUMIVZNKQGPKPPHUW9VUTQRU9PEJFXVVZYHUMAOQKS9KBMUTHGZVBDN9ZXDSXDKRPFWTTQSEXCZJVKOOITJVVMGTNINPIYVJWAFYAYTMWN9VIAWVHMABAUQFMFTXQWTSUBS99ILK9EDCVIFJXBSUWCHUQTMQLHFWCSYRKPPTCDKGKXG9AIH9HVIAPOFOVFGZPDQGPA9AWVYGPIWGHDMAAUDAQPSEXQAANRWLYSKVWGNWMWQUVMGFVCXNYPTXLFCB9MEQUOHACNUOZVKSWMDIC9VJKGCMNLZ9XJS9VAUXFLJUMDMPGLOIPANXIHNVUFZESIJNVBEVGBYGWYLNX9GMQXHCIMBWIFWUZVHWMP9TPBMCFK9VCIHPXDPJSVHOWF9FZKETGHUAIRJQZMJIDLHKZTGLTRQXSUXEEXEKVMPZLATCCMNDYPDQBWUDFTXFRRBS9AEGTIKFZAFQKGVKLLANESPDXUUMEUM9IMPQVUUKGJYMFDVUEFFUXHTJE9TPIBXOFHHMTGJRBSUX9LBPFXXJ9SSXPQJJUCAFZNXSLMWWPJVLLRNBGOQ9HVNAECPGLCFGMWQP9ZECEW9UECDOYEIWEUVWFL9FYYOAKFMDDYTOTEASTMZA9FYLB9HPZWVFSHYOOWTQ9LKZSDTPCRGRHOYAFBNSWISXFVNYHOEDZGSRPQTTMZBDWUVCWXUSJOTRGZRCZGYWJCDTYMFHGWYBQXNDMIEQ9HNSWV9RBFGUNRKCUNDRAAVVBJQWUGFWAUNGJP9TODLGZDXTHRIJBJOTGQMGPOZKK9KDYLRYHIXWOCFOIWOUUDPOJPFFDNQVCSMAXPNLPUEDOZKEHZMTRLHEAOJRSSDUVVKCDGWHZYKVKTZXYKJUAEDVNGENJWX9XRTYTZUWSXT9ZIRYKHDWIARPSDPTZLQOLWJ9YHIKHMYGBMTWZJUJJQPOXZJQTVQGUHSIXVUAISNVAFUTLYAS9ISMMYD9LLTJTJNYGZSTFUYJKNQDVSWKIMCFFYSFXKEV9GYYAQHBCTEMBKH9BMGJICLAIGWICSTAWC9EDIRLKNRX9CUTPHRF9JLOTW9YTGVQBIKZBCXMHDMSREHQTZTOALYKXTXTTILGBRGMHC99GZHHCRIT9KGUJYJLSSUMRFSOXLCTRAFUPEJSDWSOHYJQBPVAOZBLAVGCOBDVGNKPJKLAWMHWS9AVKWMXDEZCYPMNFXQPHTXNAYUNXF9MTGSAXYWMQFBFAXXIVISHEEVVBHPDLLGCRNEWTMTC9CUWKXDXBEULDPJPZUESC9BZVPILKVFZVFUNWODKPKYJ9BR9RSRDQPNGMIKFRALTLFNJETRYROCTBVCFXLNDPVETVJHJTQYES9IPDQCJLMCQXPXLEIKTIAVERSXMYGGHTCPJBVTTIUWIAWKCLIFKCEIEGVTPSZYETSCQLVTLIJHDNXVDTTLLMLZFJ9CAKEFIKSYESOZ9TJEHTJLTPHQV9TAFDXSSHRZCYKPOZ9VXKZBJXWZWWWHKLOUP9CEOZXDVRPHMLFJQOUIOJSBZMRNGMMPRVFUKWXBQBAVVFRAIWMNWVMUKYSVA9IBPHOCCMOBDYSTYZSFTZTTYOWCTJMVYUAFE9JWKEPCBNTOMIJYVYKLYHVFLVJBVGLRJIGMBSK9HVGNCUNHMQMOEGAWZZRORGTOAZA9NNKXISDDQEELSLVQ9XHYFDLSNLKWGLTKDJJEVAXBCDKQJLJQVIEUMDTGMNMCZBI9FNDCEHDJJWQDWKFGMUEMUTDQPUHLLEQXQRQAWXRHDDPYHXBTYCUEHEVJSVXGWPGIXPJWBYWJOVKDXSNF9WQKHKA9X9CHOTSWNWIAAYQUTXVTMEPDJHX9ZMURDOQCC9RNYQKQYMUSJLWPHQNPXYWUGLBTAHFBVGHVSJSTBXQVBN9UC9MGHEKD9WLRKHZZZZJRNNTLFUCGZWSOMYUHQHUDIKUSQBCFYKTDNU9WNKKWD9XVSWGYASRYISLCU9HXKODOLSQZYUA9AMJRUZCFYKDHKQJWNWPWPNLYDUNOKWHTJDCYASUTFJWOPZNUYEBAN9YWWCVNNEZE9ZW9RCGPDFAKXRRCNBTMOQDARIVZRMLNJ9OXCGWRHYSGIIVZQRAKLVQEPHJWFCD9BAIOZGGEHKWPEEFXZOGYGGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICD999999999999999999999999999THISISATAG99999999999999999EJDWC9999B99999999C99999999XBJWKALTWCWWKDEDBBWHZXLQKRZVZJLFLFLQZJRBBSXDOEPX9QSFWLVCDODGRIAYL9FRCSKRQJHUDHPIC999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[2].toString()).to.be.equal("NJTUZNAHHFRIUGQVMZQUJOHXITWTOAITPDFFKXKSNBOCJBBWZKXIXZUVQIIXNKFFPWYTPIXXHWIVHVSPZOBXRQCSKWOJPYFTBWZCFALTXWDNJZOFNTHBLUOAKIQJRODDJYMEKTKGBCUQZAMLQ9CQEFKFJYSHILDBTAVWSWATHRJDZMZRBKMSOYQGNRWOQRMU9FI9ZCJZUTUICBZFHUIIMAGNHK9TLCVXCYEKJZAYTUBGBRWOOZZLLTQAAERF9VTESVQKHQPSRQXUXLYMOTAXOUB9VWPHLQRJZXHTZDUGORJXYXGFZWVTFZMDJNTNG9EZIMRXSEXOFCABWOZN9RKVYF9KCKV9WIGL9ZSWYWOPJOLUKZUNJBMAKPMPBGGYZYLEFPXEBOUYBCTUQUZXOOIYXKBKIAKVRKLJZMRVMWJXJNPAOCJYISAJVZKVQDTFOJHUJDJGDBJNXTDERIVTNHUCULTPJAY9WNWKSSEYD9EFRUTTRDIIBDCQMWVZYSPRRRZGKANSJOIQNKPHQLAYW9BGUNRGUXKYVKIWDOMUBHBNWCEVNVRPTZMKXPXARKHUHBHNGOPEMDDJDWHHSAXJVWZJUQC9JVWHUOFQXVVLKUGBYMVECOQYWVIQTVLMVSZAIITHJFOIUSBBPKVFTHQFYGOMMDLHJVCFXNUKRHQOQWAONCPGPXIZUICISJRNTMTJW9FWJWWRMFCGCQSPLWHDURRKZEEG9SGYOMIWLIJ9NOQD9WFHWAJV9SK9YIQLQVTWITKXARWDMEBXLHDLW9TNMCA9ZKTTVYWNNQ9ZIVRHLVSEVCTLZFQGLAX9DFJXPDT9DPBWYGODIRVPQMZYGNCUJDTFQOZNHSESILGVTYQU9BWEQDVQTXIACJYIZACTGXWXFKNWUUJJCQWLSBDVHWT9DLYMXLHGPJDXRSEM9WFPNPZZBZPXXUKRBEVNXQYOS9NGJKDZSEXWQOUUILFDPBQIPRLMVISKZBRWCTMXSDOYHXYNJA9WMMMVQDWEPJVLDHXOGHBMWBAFFFVERYDKUHDPHFEVPPXWSHY9ZAVCXWUKKGNMHS9SKDDDPFAMALSILASFB9CLHZBRD9LBFFTTQTDSTCLKNKIUKRQQMOIVLEZHUBSNEXU9NAZLOYV9WUXM9YYZSJXUGAWGSBNDDSPIXHBRCZX9FXSWQDVPGAKLHWAWKUUMLLSQFNCHHIRCSPMPFSQETVWQUHFVOY9BPGYOUMU9A9KFZVPCNGHXKLQUFJAFGJPUXAIJZENLM9OONPBYNJVQQ99YUIZCDOKPB9JLLFE9EFGC9WHC9BXXONEZMBMXDDLOKNBTSMIAGXIRLRRSJBGCCKRSNUHKJXO9SY9JIXWW9WPXFRLMVFVJITQEAOBXRAIOCXTSODXFRYUZIVMNDZOPOXMTDPWZEDPXUMOSEYLZZZK9LTVAHAIYLPLVAPMVHEV9PSUVQOUTQ9LKWHBYWMPLKGQELSBCWSWQLVITY9HB9Q9AUCULQSB9EFTVZNRPRTRZFQTBVNLAYBUEITRPRJDKSTI9TRBVZEADHLYJEOCZPCTGPJFJUJ9VJMZTZJ9LSLZUZKLRPIYPLSWAQPSF99EJAYWKZL9BZEDDJSZRGK9EKSKCWXMTLIWKUI9HXYWOTICQEJMLVUAITJPTEABKN9UUOWUIXOVKCDSBMM9JZ9UXESZFW9OHL9XZHUDOKMAYYXMQMPPWHEKOYFJXOEKFTFED9L9ORNFYNOXYLWSWHHLXFLARFIAJNYNQYHONAOXGFTZSFMTRR9NKLLRVEBAEP99QUBEKCILEAKXHZSWRYYSGNTSQTWFQVHF9LWABOKPDTGTSRHYNWWGJCIPMFCBLETMSBVOGQXTO9TZMIAHHGFWEUMW9WJADFWDLIDEELTIGOO999ARKDQQQURJVISYEOJQKPFSZTIDUOTHOWXVUSXWOGQDJHGPDQXSQZGKHWXXCYLUJYRTRVAWYBTYKURUXSR9CFKSFTTRYITBZLGFPYNEWMAFTBIRKHIPRTMFRPTDZCPGDBLVUOOGHTPDQXXQQHLTSMKYMIWVSNIOI9FLCQTWBIHNCLNVFYYDJXZMDA9TRBFKVKVGOLYPYZBSQBLRGSZNYR9TQSWMJPGPUHNZIUVJXPWHUGLJBLJTPSXABBUBJEFMFMNANKYXVCRVJBBHJXPOUCZCDTJREIFKDJMBGGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICDKY9999999999999999999999999THISISATAG99999999999999999EJDWC9999A99999999C99999999XBJWKALTWCWWKDEDBBWHZXLQKRZVZJLFLFLQZJRBBSXDOEPX9QSFWLVCDODGRIAYL9FRCSKRQJHUDHPIC999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[3].toString()).to.be.equal("BLAHBLAHBLAHBLAH99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGBE99999999999999999999999999BNJSISATAG99999999999999999EJDWC9999999999999C99999999XBJWKALTWCWWKDEDBBWHZXLQKRZVZJLFLFLQZJRBBSXDOEPX9QSFWLVCDODGRIAYL9FRCSKRQJHUDHPIC999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //     });

    //     it("can prepare transfers with zero balance required", async () => {
    //         const timeServiceStub = <ITimeService>{};
    //         timeServiceStub.msSinceEpoch = sinon.stub().returns(1518782585);

    //         const obj = new TransactionClient(apiClientStub, undefined, timeServiceStub);

    //         const seed = Hash.fromTrytes(Trytes.fromString("ISHKSEIVNKYFLYAUKVDRAWEUIZJIAAVICHFCIAEEUPSIJJXTLOLVJBZWEISNBVQLQJCSHCAUAFMATP9KN"));

    //         const transfers = [
    //             Transfer.fromParams(
    //                 Address.fromTrytes(Trytes.fromString("YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGBKUUNDKVMX")),
    //                 0,
    //                 Trytes.fromString("BLAHBLAHBLAHBLAH"),
    //                 Tag.fromTrytes(Trytes.fromString("THISISATAG"))
    //             )
    //         ];

    //         const response = await obj.prepareTransfers(seed, transfers);

    //         // tslint:disable:max-line-length
    //         chai.expect(response[0].toString()).to.be.equal("BLAHBLAHBLAHBLAH99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGB999999999999999999999999999NMISISATAG99999999999999999EJDWC9999999999999999999999VPJKKEGZHZXJWTXG9ZRNZGOZETNW9FKGBDSYOPHQFZCBBEDXCJKPAQAEODXNEGGDLGAONDSJAUJHUQAOX999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //     });

    //     it("can prepare transfers with zero balance required and long message", async () => {
    //         const timeServiceStub = <ITimeService>{};
    //         timeServiceStub.msSinceEpoch = sinon.stub().returns(1518782585);

    //         const obj = new TransactionClient(apiClientStub, undefined, timeServiceStub);

    //         const seed = Hash.fromTrytes(Trytes.fromString("ISHKSEIVNKYFLYAUKVDRAWEUIZJIAAVICHFCIAEEUPSIJJXTLOLVJBZWEISNBVQLQJCSHCAUAFMATP9KN"));

    //         const transfers = [
    //             Transfer.fromParams(
    //                 Address.fromTrytes(Trytes.fromString("YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGBKUUNDKVMX")),
    //                 0,
    //                 Trytes.fromString("BLAHBLAHBLAHBLAH".repeat(200)),
    //                 Tag.fromTrytes(Trytes.fromString("THISISATAG"))
    //             )
    //         ];

    //         const response = await obj.prepareTransfers(seed, transfers);

    //         // tslint:disable:max-line-length
    //         chai.expect(response[0].toString()).to.be.equal("HBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAH9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGB999999999999999999999999999THISISATAG99999999999999999EJDWC9999A99999999A99999999SHXACCAOSFDADL9UPQDTIIKPVQAYSPPQLNJKLYSJZBXELFQKEHRIGIVLAYE9CVHBHTVVSBQFADRUSEWLA999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[1].toString()).to.be.equal("BLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAHBLAYWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGB999999999999999999999999999WJISISATAG99999999999999999EJDWC9999999999999A99999999SHXACCAOSFDADL9UPQDTIIKPVQAYSPPQLNJKLYSJZBXELFQKEHRIGIVLAYE9CVHBHTVVSBQFADRUSEWLA999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //     });

    //     it("can prepare transfers with hmac", async () => {
    //         const timeServiceStub = <ITimeService>{};
    //         timeServiceStub.msSinceEpoch = sinon.stub().returns(1519037971946);

    //         const obj = new TransactionClient(apiClientStub, undefined, timeServiceStub);

    //         apiClientStub.getBalances = sinon.stub().resolves({ balances: ["43"] });
    //         apiClientStub.wereAddressesSpentFrom = sinon.stub().resolves({ states: [false] });
    //         apiClientStub.findTransactions = sinon.stub().resolves({ hashes: [] });

    //         const seed = Hash.fromTrytes(Trytes.fromString("ISHKSEIVNKYFLYAUKVDRAWEUIZJIAAVICHFCIAEEUPSIJJXTLOLVJBZWEISNBVQLQJCSHCAUAFMATP9KN"));

    //         const inputs = [
    //             Input.fromParams(Address.fromTrytes(Trytes.fromString("GGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICD")),
    //                              AddressSecurity.medium,
    //                              0,
    //                              43)
    //         ];

    //         const transfers = [
    //             Transfer.fromParams(
    //                 Address.fromTrytes(Trytes.fromString("YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGBKUUNDKVMX")),
    //                 5,
    //                 Trytes.fromString("BLAHBLAHBLAHBLAH"),
    //                 Tag.fromTrytes(Trytes.fromString("THISISATAG"))
    //             )
    //         ];

    //         const response = await obj.prepareTransfers(seed, transfers, { inputs, hmacKey: Trytes.fromString("MYHMACKEY") });

    //         // tslint:disable:max-line-length
    //         chai.expect(response[0].toString()).to.be.equal("RBCTPJZUSPILJHQWBNUHY9IJJYPXBJKBHVXUFKNUKFEXGCBRAUQAWLBSWLXSWAJPJTMLYXDMIQJFJCHGS999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999PSTBGFZXBMTWL9JMOCPTJWO9GUDMJYMUJZ9IHLANBIEXVOWD9THLDYKE9JDIGKMPKGPOTOXPCNSDZKVGXKA9999999999999999999999999THISISATAG99999999999999999PJCIWYD99C99999999C99999999EXKEJWSQAXRUGLEAKUEYDOGXKBSNWKWDAX9VLILZGRLZWQIZRZRWESRXJCLLFVBPJIO9SCBNPIJRELWJZ999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[1].toString()).to.be.equal("DZPMLPWELYTPXPEAXFFK9G9IWSOPJWDAHIRONVWVXRGZKUFPPZCUQCNBTGNCB9XVAZUHRLQVMDAD9KXMYOMSDZMKLXOWBLGEXMWOFZQLFQJMOMZCCSPZIAKXCDNPYGYEZWFJP9WBPDPXRLPYPPWTXJXHPNHM9HMZHAZTYNCKCTIEUIXCFTNXEEC9BFWXMATSGBAOYWSNMNC9DXLTJCTPAORFAGBTJNSOXOCQDBYCPXHWPNCFGFWLHLR9XJRCCJUD9AUAWQJIADIGYAVKDBAQYZIRIQWUGIJDWQQXBQPEDBXAHEATNYGAGCANYUK9GWBHW9ZBYBRAWWMDQPJQFZXJQVOKLAYWJHRNCKIHDDQHFKFSDZCDNSDIRHQTP9ZQLYWIDDBFRYRBQKTNKDJNLMFVDBACJIBUXKGK9FGLMZNHHNHNYBINBFWKFFRILMMRTVEVHQKZXQMJBHYECPRVN9U9TALDHEWKETPTCONHNWGEUHAZOXWWXXVOOBXBFSDTBNYM9KU9TPGQVVZTVNHCWAMNL9LGDRSDVSOZHCPNTNILYM9JKBDHEAHYXFXDJWUIARNFRLMHEYCZQL9MVSDTPCEEYDTX9HOQRIFSKAFSCFTQH9TXRRETCQGYZUEAMAKOVXOQMDDLUOYDQLDFOKUNLDA9AWOGZPZYVZVPKDTQHZMFTMIPPXEQKCQCBYHTFUOVDNWGYPQDLJMFTSGTSKQFV9VHSGWNZKMDVXGKYCPCGMN9XREJNLVAXJPNKILKBS9AQOFOJOKFQ9IJLSLAEGZHGMYKXCMHVCUTXQOO9JCWMOUBYWVOQOGWSSSYQUMWCEUTJLWKSIECOQDPOUKJALOEPLDVALVLCVMAKKSROUL9BG9DYIMXFHIKNTXIXDIDIJAJRJAVBCYRZIISYATBYPLULADUVLVNXHIVMAECEHGMRIN9FGPTMNMBJSPNRNURTHSQWAMXFTZQAQSZBXKYMYAIUDYMJNURIJSNJQNFZCXXQBDAGZCC9JZQVCTKIYDZSFXSXNBGLMKJR9MNVHVYPPESBDDRFALPDUMAZYQBFRKHS99RVLOF9PEERSHUAGQYGWLGUFATKYCIMMCTYLIXVMEAYJENNK9ZEPWTIOAYQLIITRQQSLRFLZXPOGIVHNPNZFDNYDWVOLLYR9BTCHSLPDCZCBRWAFPZCHCWEHOHMMZRWWLE9MNWIBFNWUJZOLDKEYNIJE9VZFRWAQZNVHZHCTWABBQDWXSPSMKIKKDAUWMVDHJQDJLFJVXITCVCCHP9SRBERCOMFFBAGPJNDPECJSKAT9RDEGDKVZRABNWPYXMVJFRZHQPUYEDXCVNFWZGRS9BXEJ9VRASZRE9KQFHVEIDNETD9QRDN9HHUFOVSDWX9UYGRTJTWAYFDVTZZNELQKGRBZHJJLVCPXEZEGWBE9FQ9VZOVYAMMYKGQEOXPROCYDAPXUVMXGQHLZDDP9ZTRTSAMABXSBFHPCVURHSLUTZIGPGQRCFSORFLYYUASABOJNIPJOIUCIFQHFLVEOGAPCPEBYFNJCADKJCNOPIQOCLXOKWMDHPCENORQYUOZFVHUDNLECSZEOBHGXRY9IOJYDSIVHGJPPCPJHRQLDHAG9VIHJETWKFQABRPXJFDK9GIXZIZCBVFANXDLBWECMOBN9UBLWVTILDRCOIEEUZVDEUWLHMGTUFUTRPNGQMWBNYJVWNYTHOOOJSHDXGBIFEETQNVXWZLGEDWW9KCYOEODNZKQXABHYDBOZFDEQIOME9LXJZRGRBRLOZIMGCUXYDOOYKWR9DNMSJBF9FDJUHGP9ZOUFVBOEUUMYKAT9YDNZ9OZRPJBWD9ICQOZ9RLBHFNYDQKUA9BNJXVBJRXFHTKDFOHA9PUNBQCWOUKQIVCHQSECZLTWVHNMEHWJLIZVHKLP9SASNULKIYQMINLAQPRBJHQKCVGJ9BIZDYNUWDLMFSPADPJLBDZRG9FZONWYVLXGUIHSNQYYDBYCC99YZXDGPYBO9FDENWNKUDTFMZTV9IHPROWVDPK9XPUMFVEXIRTGKKBPPHP9DFVMUONPSWJTQKDXGJRWECVKSLYSQSDZZQIZKZPOTVEGFXJS9ANVI9NMNXZIIIYOXIWDLAIXLBYTVIVNOOGHIOOBYHMEMEGCURDUITQOWYBPPPMDLVABCIOJEADACGALWHYRHKLIKYYGGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICD999999999999999999999999999THISISATAG99999999999999999PJCIWYD99B99999999C99999999EXKEJWSQAXRUGLEAKUEYDOGXKBSNWKWDAX9VLILZGRLZWQIZRZRWESRXJCLLFVBPJIO9SCBNPIJRELWJZ999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[2].toString()).to.be.equal("NJTUZNAHHFRIUGQVMZQUJOHXITWTOAITPDFFKXKSNBOCJBBWZKXIXZUVQIIXNKFFPWYTPIXXHWIVHVSPZLBG9XZMXAFLLCOSNMNJEWJBXRNTLGWDEUTCXUHJGSAN9D9VYPCRM9KOYA9TQKEHCRJZXEDKDRJE9SWAMB9TZNKKISRIKONBRNETWCSDDOBJNYEISM9DIGYCSIOYOAJLVYXMKLLGSAODCSPHGJLOPIKAPHUQYQGLXUDAADWYBFFXQHHYWQDUNURGO9ZKVDNZRFPZOMEKOJDNGCIPKHSLUDLTND9DUA9KHMGGWKPVEJWISWK9QHXYAWRL9SRBYTTCVYTBMQODLHE99QRXFQZX9GIRHMNKK9ENEYZTI9CJGQAAILWIULPVCNLHNICWDOA9UB9ICOSWOZDWELRJVKCIY9DU9NRAOBVGVHZNNJBPQDTZEBAAWGGMUJJVJKHZGNZJUOOTA9WOJAZCSWNJCJYUADRIKXTWEXFEVWYKUFYTEHGLTZQALKHVYKMUABPDHMGAHFFLADMSCNIGLFZWHKXAXFXQFPMOZZRFYOOSG9BSSEYNRITYUUEABNIPAFRQUADWDBPMTBELSBOYRONFWPUUSFC9PPAIRVCAZ9LUFMPFYNDIVSUBPKRNNPRWBXTXFZWVDAPPRIGGHNDYHHUUCNTNSCXWMYDNEFZU9CCTVMEEKPFMLMHBTJGKGXKNFEZAQ9PM99CMHTLEZZO9MVPRSNNYGWXPCWG9IYBYHRVSRATKQAMKCWSZZHINOTGYUBVNLCKRTYMQZXWOJV9PYMEMENNRLDGURDPWHCTD9MZJTVHIWTZOP9LGJGZYPJLQEVDYZDVWKHVUULXISTZKG9JLJPWHNYHWPCLIQJEKOPUCCXHWGODWMPCKKORFR9NCARMPVJJLLAOROTNHDRLZMTYILTK9XWGXIXHYCXTMWFHNQ9WNRMYPKUISTJCNUBHRHAZXRLR9FZLKNVYOEJHCLAYECDWR9PCYFTCS9HUYLMZFDKGYJXSG9AEJVKECRDGLUZQHMLJHCZQKIE9RHCTPXGCFH9QEFZOYYKOMYWKDCONBXNKQEFIKIIZNHJNCKXWVSFOOZPUEBSQYKTXRZDYWCIYCRJ9IMDT9PQGZKWZLOYV9WUXM9YYZSJXUGAWGSBNDDSPIXHBRCZX9FXSWQDVPGAKLHWAWKUUMLLSQFNCHHIRCSPMPFSQETVW9NLJUBBKUHALLTAVWFCRJUQADHDOTJBXPWUKCECIXDAQPTHORNFDIMAGGTVKKLYMCFGEHB9SALAKOWEODRCC9SI9FQDVTFPXEJR9NPNPEC9YKEOALC9JMJRCFWKHLJ9RSRBGSZBUBLYDFPLWK9XIAXKZLNXX9FONQDMDDSNLG9GRXUEADMSSPUWH9NQAWNZFHULCOSYESVCYWO9PYYB9SSOJETKE9KEJGDEZNTOKFHGZMIFQXQWMMVHXSPAHE9YDRFSFJMCNVKRZSJQAAKDRZDSKOVBVREKYBAVDBLTIOAHODCV9CZEPHRMVIKTQMKPJL9CCUPJJTHTWQASJE9KQBMF9XPAAUKP9PZHCZBETLTPGOTIQUUSCLFNUQHLBUQVWCPXOCWNIQC9XSK9JKAEGZP9NGNRREGDEOQWTYOWXGJEFQLSVTOIZYCUEFBVZPXSJDXTPOVRZAIHXMEJFRVUREHEYDJSKRXQBWU9FCWVJOISDBWYNMHMU9QUALCSDKULXDSOCXPUMJCAZQEMQWXBCQZBAHMJCROH9MTUADZNXRAJEDXXJI9UEGYWQYZRQRNCZVNKYCNNJTUZ9RUDDZ9TUCSOEGCFJADHUGGTFSIGNXNJAREHUGKOCNLPYYFPVGU9PACBQEJRWBLIZJDHBHWPZAZVCGRHDFMWDXKSGSJMLENKPFELFLCXCANKBOWTCEBXPZISGZIXRHVHLBHTAECLQBC9UZQXSQZGKHWXXCYLUJYRTRVAWYBTYKURUXSR9CFKSFTTRYITBZLGFPYNEWMAFTBIRKHIPRTMFRPTDZCPGDBCYMYTOT9BEXDFWCLJIOWLJNJDMZCXXUJNUDKS9AN9PWFGNBIBIXP9FCIWMVQM99VCLFOCXHKDQVNKIXFCTNCFAGPFPZ9NZMKQNQ9ABPAJ9QZVWQNAWGXCKLOJOGEIDIRZUSXPY9TGZBRTNOEJTQYZBLNKO9MNGOGEBGGOUIA9VBWFTAUGFMEYYGYMOVBGT9XKBELVEFVWNKTRIUYGGWPTBJNSKOBNJGAXRGHHAZXBXZKLHTPICDKY9999999999999999999999999THISISATAG99999999999999999PJCIWYD99A99999999C99999999EXKEJWSQAXRUGLEAKUEYDOGXKBSNWKWDAX9VLILZGRLZWQIZRZRWESRXJCLLFVBPJIO9SCBNPIJRELWJZ999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[3].toString()).to.be.equal("RBCTPJZUSPILJHQWBNUHY9IJJYPXBJKBHVXUFKNUKFEXGCBRAUQAWLBSWLXSWAJPJTMLYXDMIQJFJCHGS999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999BLAHBLAHBLAHBLAH99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999YWFOASPRMMHRYPBTSPMRLZRUPQRUXXCXZRVTBHXETBUJFZXJVDHHLORPNECANTVYCTEQULGJXELPVNJGBE99999999999999999999999999PJISISATAG99999999999999999PJCIWYD99999999999C99999999EXKEJWSQAXRUGLEAKUEYDOGXKBSNWKWDAX9VLILZGRLZWQIZRZRWESRXJCLLFVBPJIO9SCBNPIJRELWJZ999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999THISISATAG99999999999999999999999999999999999999999999999999999999999999999999999");
    //     });
    // });

    // describe("getBundle", () => {
    //     it("can fail with invalid trunkTransaction", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.getBundle(<any>"ABC");
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The trunkTransaction");
    //         }
    //     });

    //     it("can fail with invalid bundle", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         apiClientStub.getTrytes = sinon.stub().onFirstCall().resolves({ trytes: ["AAA"] });
    //         try {
    //             // tslint:disable:max-line-length
    //             apiClientStub.getTrytes = sinon.stub()
    //                 .onFirstCall().resolves({ trytes: ["999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999NQWYCOBATZTLRNELEQZKKJHLQETGCKV9FZNIYSBJFFPQGMGSS99GCZWEEYEJYFZYWGDCVDV9YVQZQMLXCA99999999999999999999999999AF9999999999999999999999999YPEJWYD99999999999B99999999EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSDQCWJDQFSGVLSNCLAGZCIDHOQXZPCVJDXOMAZSZJWVDXEDGMLRSHWOOFNVINH9QWEBFRR9JVDSONVZ9999PWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999AF9999999999999999999999999QIENXZFJE999999999L99999999JCOWHODZ9VWXYOYNTKWWTVY99TJ"] })
    //                 .onSecondCall().resolves({ trytes: ["QWBEXIJXCAVCYXRBSWATNNCCRMIVE9SFBUGJAPQKDZDFDJPQASSVFXJDLFDGXZJRYLLSHTMNMO9OYORDCJXUCLRCRIMYZHDFDQXPKKK9HZLTSYWTYZ9MIXICDZSRVKQUUNUWUPQZUPDR9AEOJDRWUVXVSTSDZQRKZCXLTBOQVWMQSWUAIUAQHAINFMJNBMU9IBMVHPXQZLUKQBHMPBDAYAOTMQ9VMDWKXUDYXYXLPJDFVTUIEZAALTWPFIDPQJXXMTZZYWCLAF9HV9ULOZ9PTZIQALISTFUUBZO9CAXYUZKJNWCOWKKAL9HINUXVHZDAXTEWSFDNLGFTANUZSPUACFC9XQPHUWA9JBGJIEMUJTHTTRSGVTLJFEAEIUQLTXLCFTWPAT9RRKK9AGUBNQVXBMRMFCAYKGJFMTC9N9JDQDIVZBNWXDBVLRRSIUBFPTUVHUOEDCWXBEGYKDGEZUEDHPRFSVAJROZUBL9RCWYNYUSB9ULWFIMVGDGEUAMVDDIDLMTHATYKGTHRXVF9ZQRICDHQ9LLJUBRDQUSMNRWDDXSGEETSDJHJDBXMJOUILLLZRVOQHUYTUCGJGKUEQAK9NOJBXFCFLTPLJYCJPEYAJNWLUSQGCCBQSGSQGRMNU9UOW9KDBRHX9NEOZJZCPLIROTZLQSXHXCCRVKXCLGTPRJFPFGDNPJTJNXTPNVLLWTKFFVBTTJIWLXKUCYSURAAIMSIVYUVIXZCMQJNGNXWVUOMSA9YJUVOUPFMDJVVTSRBRUQECYZVXEOGTJCULDSIYZXKIOBGYDJHPBQEJBHUOYWEECTJTEFUYOTXATYKTYRE9FCRSDNGPGEMQQXXBB9VPDVMZKBRQLOE9CRDWJTVPLCCCZYDVMYPOJ9KZCCWE9CLNUTSVGTEAGTJZQQDMIVLYKOEHTQCGQQC9COGLTOQLJENUZNNE9LYAWEPTGAFTQFVBGPEQISVBSEZYPLEMXGAYKAAEA9JDLFFZTKJFTXGFRFWGZWYVVQ9UFCOF9YAL9JCTUJTUQT99VOEAOZHSWQMVXBPKPWNQWRBNHANHIGZUXP99DVUZGAR9PTPGZAEBTEZOAZTPFCDERVCHJVHLTRSQ9TYBSBAZGOHTEEWUJWAYAHNJOXCSM9MYESACAAHRYZJKCMTKUK9AGVECWJHOUYNOVGFCXWDUDGYYK9CHVM9LEESLPWASCQBQZSQPEGMPUNZOVNX9ZFZXUUTJSINYZVDQMHKQJQPOXMCWAMQYXEXXLQRLMXNOSGD9XNYNILMUNDQQOFSJGSTXLPLLGVVXDCKBIQBSKQZLPLGWMGLNLNEJPCBPI9RN9DTIFMBPTKDBUILHKJVMDBJDSBOVZGW9VTJBFXLWPDFWBOQHYHEBUTRDBWHLJMMFQPNXWUCDIRWXCAXZUGWWYGUDRBXRQBPCALK9XPODK9UKEZIKTAWUQYAJYXMRMFGKNDZUD99EMLSRYQDFQXJSMED9MXSEOANTACPTKJALKQIMNUVJBVIAPLSGOJUKAYLHQYH9HSPREYVGSPYGIAATCTICVVDLRRKBFUTDAXL9RXTURNDTIBWUJCCOMGLAIZBJMXGAETNTNNVCPFCJBVBZTSLTUDWSYGYBGTRCNW9IRORFOGKPWRLOOTHNGB999JHAJLMJVGB9WNRIIQKMICAPWNELTHXGRAFCRRIUFPSMJWPSCE9BTVZGYTGNMCCOYZSFDLXDFOHVLFQEWUDWKLJOHRBTGKHILPELTICCXQPLENMGGTFRFDLYJCSUOLXDPS9R9DJDQAGADPAIURGOBFZGBOFJCNIWPCZYAPPCEFXWJYYFLUCI9UXJBOORBQAVEBHFNOSPVUQHFGOTVDJLAFDZLFCGVGKQK9O9PEMHQCKZGPLLJSDNUHOGQYNYQUIUDOKDFARFUJBXOETEYEPSGJDZRJ9JOHWFHIMEWYYPRAYYASCNGXKATILOYGRDU9CBPHD9IGXVVL9AIWRWMRIOGLISRDIJDZZCFME9MHDTZLEETD9WUYBEGD9QSUISAPOBYFGAY9WPZFMENXUILGNBHA9RUSO9AVELPIVFTSFCNQQVCMNDOOXCCNV9VMQHUFGFWTNYBGVXJCVPBDFSNEBQGJHFUSZFEXOANLHMADIXEIVEYMKEHBWJFMNHLBW9OHTNYQJEOZUTKNGAJSEOZHHXWTJBOTZPJJCXECWTYDA9UWNYZEVNDHFHFGEKGIFRGKARQG9UMRAESXYSTBTDSLEBLLWVAVVVBYYQZOIEZGIPIIL9BXIBZ99999999999999999999999999999999999999999999999999999YPEJWYD99J99999999B99999999EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSDCSGDIOUGKLKTZQPTPPGOJI9XXKCBSUEKFOEJQZFFRXIVMDJI9AEDFSCKMCEKLZVHCLYYQZH9TZEH99999PWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999999999999999999999999999999OOBNXZFJE999999999L99999999OLRF9BJFNPFOIURDUIDYUYUPMSX"] })
    //                 .onThirdCall().resolves({ trytes: ["DPXEWZVMOSI9OTSC9YY9IBATBWRIAFOQWLKDUDNWHDKVB99GTKCMCEFITGL9BFCAWBKWKMFNBYTALCO9ZBDESYJHRBOWEYSZLXUPBQUDEK9BFSIMJOABKSYXLPHRJHWDEDRNUTRBLEDUUTIJLCLCNWEEOJJGXNPMWAULVFFZQJDQMBFMASQFOWDWBXVV9TCTBAYRLYRCYHVTRYADD9UXQSORQOULURUGOAJLWDXKXJYTIDVDMEDBJYRMUNWKWNHPDEAULNVXMXILVZEUJCSGOITAK9IHTVXKDMZVBUCXUDYXRQJXNCZCUGFJAHRXKTINEPYWWMKMMGEL9OIZUESMGSUTBHJTIS9HFLZDROHRJYETMWSGDKASTRJKGMVVILGGVJLFR9GXV9DRUVEAEHYRDXOPYYL9TSTDDXGTVUCBUGBQXBVPYRSFDJMBCWFGHAXCI9ZFZZJXI9KBMFXLSM9E9WNMDGLVJNTYNKZZHX9BGUCNKXRY9SRSLWWMQSMNARRGYO9IIPSRABMIFWVOVCZSSYICXQTHU9NHTQGAZTTUII9WPFDUZFMXJAAJQCRBEDLLLVZGUNVDRVETWQNJCTUZAYSCNSFDQPYTIIFZLRULSCXTWHJVYZSARFKCRVZUFRSDPMWFPWXAAVDKVRVIWAWGSTSMIG9LGOYJLXDBYTFPIWITGBUSDBZNTQZCKPJYWAEZWA9AMCLZOHQFFFFVEM99SIWDCIZGDFDZRHMMBVOUCEAOLYKBSGBAEKA9HESFDRJNRMZZD9FGTGLUJLUNVTFWZKGHXLLRQDZDWXBOEOCRCXYQJJVASPNGLQPHGYEFZBEPQJMZUHXFBRGVFBIYJBQUDU9HBTUEPW99GTEJNSZEAWIWRUSSOXDEOTQGJK9TR9RDDPOUTDXPALHKABHKTGRZGSDUCGQVM9OCRVYQRZLAEMZJCD9FLJWPERPUPXIJRZMWGGPYUZHWJZVXOMIMFDLKNMTFOBJSGGBYMTQTCZBYYMQOFVRQB9NDRTRQBGVOGEOMAZLIOQIUJBOVOMUFARUQLBOLA9GZDIGVHZICDCIREHOHQWNFWJPHYZIFQDSBNNOYLNWGWUVIVLYSEHTKXIUBLDRXIHUIHTJJOQQOJJSPNTEZYBIUUSHDONVWPXLGJSBXUQNFJ9RCIPUWZAGNVCNCHGWULQWVJWMMOVWQKGNRBLVOGWLPCH9CPEXWHYWFER9JJTXMV9NFZRQRHBPQXUHMFGSVQUSOIQEYQ9CPUYHCYHLNQPGEUB9BANDSACRIRQOSEKRFZJDBZSOXSUDYHULECYC9LEQCDVWDTAJEGNZHJJYJPJRPQVEHTSAEGEEECUICNVOIP9BASZVMDOMFYCRAWTSJZFZNGEYR9YNCJVRJHRHHRBGSFFEPVUQVARIUZJRTNEWCCMIKZAKTZAXUTARGRGGFJMVODIVDEFHENUYKZUCZMMEDHWFWBXTJRMK9KZBDOAMWYWKRWQVE9IBAQCPFRPWANG9XECCEWHTQMQSKHJZNVIKK9QVIMVUPIGA9MLUNMS9DAQHWXTJVGQBOXVYLZGQHYQKVFCZUXCBXYRUFDUAXOLYDUJKBOCGRCQMNPQGMDPRXZFKSLOGEBKLIORB9TJ9AYBAUXGRTQVNOYNUZS9YPGE9JGWFUHJN9NSANREKHOVEUDHWFTGRDCLGURKINSUL9CQVHLKUMRRELAGJBVKOIVEQPUVCNGIKLNIZZYGYSOLTRTOEDTUTCHUAVSJOAMCYANYMJZLJNRSSJQDPQKW9ALXCDMESFGBB9RXSXIVUYMJPNYWLRTFTKOXOKZIXHBTYCV9UDSJNHDKGXFQXWSMBSP9YNIEEDK9YKPHGZBJTYRWI9EDZYXKJSYZOZOUPDMLQXHJASMYITMKWLNYRAAKAIOSXXPTCESBUJSBCCKJTFMPZYIHRIVJUGKLMHEUFGICXCACN9PNVWEPCJYZZWPVPPZWSZUQUJTWDQZSNPHYSFAPI9FVFOMMEPNXDRZHNVSRSE9YUAYMYPTEBMRA9KXINTPYCXWXEMYZIRDEXAHFJVSGZDDOGJHWBFPHYNDQPBYQUAHHAVTPSGBCKRGJHNLBWQRQLSVW9PHVDFGASIZWEYJFTNUQVBGVKLFWSPESLNFPAOVPXEKMCWAFVDCZSB99UHXECKWUXEHRFXKNH9PPDYTEBXUMQCASXXECWTYDA9UWNYZEVNDHFHFGEKGIFRGKARQG9UMRAESXYSTBTDSLEBLLWVAVVVBYYQZOIEZGIPIIL9BXIB999999999999999999999999999999999999999999999999999999YPEJWYD99B99999999B99999999EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSDPWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999CRTPYSKRCJPBCJMLGTYWSPQSIVRYCCZAGLJCSDR9BXWDKYLFUGZZFNH9EUSXGOCWHDJNJYLRFETUZ9999999999999999999999999999999YLANXZFJE999999999L99999999AJNKZDXLQN9AYHXWIRTBGASOVXP"] })
    //                 .onCall(3).resolves({ trytes: ["KZXCRXMKOQSVDFUJND9DYSUSAJLRMGISKXJIUPSCSVBTYKERFCJFKXRNPIZDCXASVAYTDLVYNVQBMDOGGDFXOQLQBYTLJIUDSFSEDPTTC9LBLHVRLJO9XXIJITGDGFXSCQZPGOIUHXTLPBDXQYXXUOABECYAYDPVJTHBYBMTJYXWBEYJDTKUDTM9CSRZGRTKYPSTBYCKPEFA9MKLDWGJKWLFJQXMEXXHGGXACRZFXFVYAEHJL9PRNSGXGRESZRJRNXISBRXT9ACPQKTIQUBGNYHAQCT9YWVYRIZEMGEEPXEMWINNM9MSYUZIXYHBFTAEGJVWVPPDSBRXALMSAJDFFYKFMRNNHXDLPV9ITHHDUYDUVHDOYBQNYPQPSBJASIFBXAXMBAA9STGFVEXWBLLOSSGUFKYJWJKLADDOHRXNZTWGKOM9NNPCVEPSLFEFJVTDFQ9LVHQFTLRSPGEPJLLEDNZZPBOCYCQJCZDTWRHMQ9KKGPEHWROEYXSVDSZYAUZZAJCYKZRNZRWKOMJTUNZGORBLEYUAJTCGOLYPJLGKQWBCWJOJCDWRUIQNIGUEIZVQA9VX9AOZVTNOEKDLHGMLS9MPVGADYAASGLFYWELFLGQNDWSKRZOWZWKXZLO9ACX9YCSPQMVFCEPYZXMMADABHJEH9FOIZHQFEUCZTBFVBMGBGUGVYSPVDPPVBEDPQIWFUTITF9IAFCYLUZSSVOMJNCITBLRLCFGRREHDPYKPUDJWAWARQELWUAGQAKPZHMIGJWLMBQUXOHZFRNQZXSQFRZXEJPZGBYAGFIHEMWOLTXMPWGG9ARSNYJMHUCMDCEUKBQDIQQTDGEDEREOYGPZIUNIUBKTVXCUEDYSWAL9NUTKYVHQCMZORJNLWAEBKQGZYUMXOOZNEAMDTL9GBSEIFDZMJRVLZQHJPZBPT9NMSKYSXBSWVFB9FVSCYNLAQXFCJYVXRIVXWX9YKAJV9AHDIMBWDSEIIRDYOWCEWMSEYNPJNYXRXSRIAGJQUNYVGNEBQPFORPNWPGWGNDFC9HHVPVSOZGUQMIXQZMODTD9MYTY9GKFLTNBWYRB9RW9NGPXXZKTLGTSJWZSITHT9ROUECRBWZQCJBE9FOAQMXHFMHVCYSTILMIAZ9YOJIYTHNHJPGUNSSLSWAYMEO9FYYZURIQEKADETRFKTADKSTMAOASVPXZQEJNU9SSAEEAVOYAEGPONTCBUZESONQQESBKMOMKZ9HUQJ9NAKWVAPANO9XNU9ZOUFDS9JBIMSXXDYLPFVNPTSVGPFHOCKFBXIKEIOFYAAVD9TEDRTXZVNYGH9LLFXTWBNXKVZGDNHDFAYWJXZXXKXGBEIZNMVLOGTAF9WPQLPEBDDATOANFTPWEMFIHLFOGHLWGTHJRUQMMEITRLNACRIHTXBTMBARYWZIUKEMBGNXYJIHJVJJEZJKKKCYHUNOIFNTHVTIOA9RVCVWPAQXLWFRDPXHKBYQDJDMZBRKICVHZDNIKHXTKYCRROBHYQF9YSCVOEWTIUFDDLQBMUNZXUKUM9MWEMEFYDKBSVUYKDWCWEMUVRLE9ZKFKOTUHTCZHIGWDHKRAUTLVXCRIWAIJTJOL9NGCJDBKXZSW9ZUKMJNV9FIUDIPMIFKZEQHUMWJPFINZLXKOBTUJRDFR99BTWMNVGEUKNXXRNQLEZQBEPOFFURYPLT9QGJYWVWHHKIXECQRJXIJT9VYNXTURGDVEOCWORII9LXGS9GUOZUUMVUA9WVMCDXZNY9TTMIQKVTGDOK9INLUX9ZPT9VSKXKTRRYDRZWPCCRNSQBQZXH9TKMVHCHBYNZLEHITQOLTFETJCSZKJIXKXKRHFFCQOLDCGIEMXFCYIYKQJI9IYTFYJGETIXDLTTVELXXDLUOVWLNTWAPPPBIQACJMXPQXWENOFDVNGVKWT9BHJTHCTQNEXRWRWZXGDQJBJ9DCKNBLIAJEOJOCIHNUSVCKUDOTLTHRFXVQVFKTJC9BPIRGCCAEIJUROIGMFLFLYFJJMBPSEWIDMZN9YCXOVWWYFSFTDNBYGVUURVXQZQCCYBWR9BEYDWTBUQIUYX9QGUQXGXOTXTSMTTBMXAGLSKZXLODLFKMWMHUYLKTVYZ9AORUIRKXBMLSQLBDW9EFUFZIUVNCYBIAZKLTTPPCYWPHNCHVCNPBRGYJHHWKSBSVKPWCHICGJZXKE9GSUDXZYUAPLHAKAHYHDXNPHENTERYMMBQOPSQIDENXKLKCEYCPVTZQLEEJVYJZV9BWU999999999999999999999999999ZSZRA9999999999999999999999ZUFJWYD99999999999A99999999FGKNTKWXIRJQCXNYBVSYXKBTASXTIIYVXQCMTWJTMBAQUWBEOTONFRSWL9BBEQPXVIGLENQVIQJNVVYPXOLVGNJUXBMJB9XXEOIDUNVSCWFEUDRCNIRN9MV9XSCKZBGOEOXANBQMPDIMFGJRISMJVLZEYP9Y9A9999DNZOV9LPMY9SCGMEUGKLWDLXFAEOCCGHWQUM9CWIBRFYOOJJLBZTOBAGM9OEWTNYVYTSFEKVOXLSZ9999999999999999999999999999999999999999999999999999999999DTQDEHSRLWURPDNPSCQWYTOVFPB"] });

    //             await obj.getBundle(Hash.fromTrytes(Trytes.fromString("EZIP9CROCHKXAYAERE9SYIJWEDJNSORJ99EZGYVSNIWLJZGCGGQEP9IYMCSAFKJCMDSVVDRHHMMQ99999")));
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("Invalid bundle provided");
    //         }
    //     });

    //     it("can get a valid bundle", async () => {
    //         const obj = new TransactionClient(apiClientStub);

    //         // tslint:disable:max-line-length
    //         apiClientStub.getTrytes = sinon.stub()
    //             .onFirstCall().resolves({ trytes: ["999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999NQWYCOBATZTLRNELEQZKKJHLQETGCKV9FZNIYSBJFFPQGMGSS99GCZWEEYEJYFZYWGDCVDV9YVQZQMLXCA99999999999999999999999999AF9999999999999999999999999YPEJWYD99999999999B99999999EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSDQCWJDQFSGVLSNCLAGZCIDHOQXZPCVJDXOMAZSZJWVDXEDGMLRSHWOOFNVINH9QWEBFRR9JVDSONVZ9999PWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999AF9999999999999999999999999QIENXZFJE999999999L99999999JCOWHODZ9VWXYOYNTKWWTVY99TJ"] })
    //             // This second entry has an invalid currentIndex
    //             .onSecondCall().resolves({ trytes: ["QWBEXIJXCAVCYXRBSWATNNCCRMIVE9SFBUGJAPQKDZDFDJPQASSVFXJDLFDGXZJRYLLSHTMNMO9OYORDCJXUCLRCRIMYZHDFDQXPKKK9HZLTSYWTYZ9MIXICDZSRVKQUUNUWUPQZUPDR9AEOJDRWUVXVSTSDZQRKZCXLTBOQVWMQSWUAIUAQHAINFMJNBMU9IBMVHPXQZLUKQBHMPBDAYAOTMQ9VMDWKXUDYXYXLPJDFVTUIEZAALTWPFIDPQJXXMTZZYWCLAF9HV9ULOZ9PTZIQALISTFUUBZO9CAXYUZKJNWCOWKKAL9HINUXVHZDAXTEWSFDNLGFTANUZSPUACFC9XQPHUWA9JBGJIEMUJTHTTRSGVTLJFEAEIUQLTXLCFTWPAT9RRKK9AGUBNQVXBMRMFCAYKGJFMTC9N9JDQDIVZBNWXDBVLRRSIUBFPTUVHUOEDCWXBEGYKDGEZUEDHPRFSVAJROZUBL9RCWYNYUSB9ULWFIMVGDGEUAMVDDIDLMTHATYKGTHRXVF9ZQRICDHQ9LLJUBRDQUSMNRWDDXSGEETSDJHJDBXMJOUILLLZRVOQHUYTUCGJGKUEQAK9NOJBXFCFLTPLJYCJPEYAJNWLUSQGCCBQSGSQGRMNU9UOW9KDBRHX9NEOZJZCPLIROTZLQSXHXCCRVKXCLGTPRJFPFGDNPJTJNXTPNVLLWTKFFVBTTJIWLXKUCYSURAAIMSIVYUVIXZCMQJNGNXWVUOMSA9YJUVOUPFMDJVVTSRBRUQECYZVXEOGTJCULDSIYZXKIOBGYDJHPBQEJBHUOYWEECTJTEFUYOTXATYKTYRE9FCRSDNGPGEMQQXXBB9VPDVMZKBRQLOE9CRDWJTVPLCCCZYDVMYPOJ9KZCCWE9CLNUTSVGTEAGTJZQQDMIVLYKOEHTQCGQQC9COGLTOQLJENUZNNE9LYAWEPTGAFTQFVBGPEQISVBSEZYPLEMXGAYKAAEA9JDLFFZTKJFTXGFRFWGZWYVVQ9UFCOF9YAL9JCTUJTUQT99VOEAOZHSWQMVXBPKPWNQWRBNHANHIGZUXP99DVUZGAR9PTPGZAEBTEZOAZTPFCDERVCHJVHLTRSQ9TYBSBAZGOHTEEWUJWAYAHNJOXCSM9MYESACAAHRYZJKCMTKUK9AGVECWJHOUYNOVGFCXWDUDGYYK9CHVM9LEESLPWASCQBQZSQPEGMPUNZOVNX9ZFZXUUTJSINYZVDQMHKQJQPOXMCWAMQYXEXXLQRLMXNOSGD9XNYNILMUNDQQOFSJGSTXLPLLGVVXDCKBIQBSKQZLPLGWMGLNLNEJPCBPI9RN9DTIFMBPTKDBUILHKJVMDBJDSBOVZGW9VTJBFXLWPDFWBOQHYHEBUTRDBWHLJMMFQPNXWUCDIRWXCAXZUGWWYGUDRBXRQBPCALK9XPODK9UKEZIKTAWUQYAJYXMRMFGKNDZUD99EMLSRYQDFQXJSMED9MXSEOANTACPTKJALKQIMNUVJBVIAPLSGOJUKAYLHQYH9HSPREYVGSPYGIAATCTICVVDLRRKBFUTDAXL9RXTURNDTIBWUJCCOMGLAIZBJMXGAETNTNNVCPFCJBVBZTSLTUDWSYGYBGTRCNW9IRORFOGKPWRLOOTHNGB999JHAJLMJVGB9WNRIIQKMICAPWNELTHXGRAFCRRIUFPSMJWPSCE9BTVZGYTGNMCCOYZSFDLXDFOHVLFQEWUDWKLJOHRBTGKHILPELTICCXQPLENMGGTFRFDLYJCSUOLXDPS9R9DJDQAGADPAIURGOBFZGBOFJCNIWPCZYAPPCEFXWJYYFLUCI9UXJBOORBQAVEBHFNOSPVUQHFGOTVDJLAFDZLFCGVGKQK9O9PEMHQCKZGPLLJSDNUHOGQYNYQUIUDOKDFARFUJBXOETEYEPSGJDZRJ9JOHWFHIMEWYYPRAYYASCNGXKATILOYGRDU9CBPHD9IGXVVL9AIWRWMRIOGLISRDIJDZZCFME9MHDTZLEETD9WUYBEGD9QSUISAPOBYFGAY9WPZFMENXUILGNBHA9RUSO9AVELPIVFTSFCNQQVCMNDOOXCCNV9VMQHUFGFWTNYBGVXJCVPBDFSNEBQGJHFUSZFEXOANLHMADIXEIVEYMKEHBWJFMNHLBW9OHTNYQJEOZUTKNGAJSEOZHHXWTJBOTZPJJCXECWTYDA9UWNYZEVNDHFHFGEKGIFRGKARQG9UMRAESXYSTBTDSLEBLLWVAVVVBYYQZOIEZGIPIIL9BXIBZ99999999999999999999999999999999999999999999999999999YPEJWYD99A99999999B99999999EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSDCSGDIOUGKLKTZQPTPPGOJI9XXKCBSUEKFOEJQZFFRXIVMDJI9AEDFSCKMCEKLZVHCLYYQZH9TZEH99999PWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999999999999999999999999999999OOBNXZFJE999999999L99999999OLRF9BJFNPFOIURDUIDYUYUPMSX"] })
    //             .onThirdCall().resolves({ trytes: ["DPXEWZVMOSI9OTSC9YY9IBATBWRIAFOQWLKDUDNWHDKVB99GTKCMCEFITGL9BFCAWBKWKMFNBYTALCO9ZBDESYJHRBOWEYSZLXUPBQUDEK9BFSIMJOABKSYXLPHRJHWDEDRNUTRBLEDUUTIJLCLCNWEEOJJGXNPMWAULVFFZQJDQMBFMASQFOWDWBXVV9TCTBAYRLYRCYHVTRYADD9UXQSORQOULURUGOAJLWDXKXJYTIDVDMEDBJYRMUNWKWNHPDEAULNVXMXILVZEUJCSGOITAK9IHTVXKDMZVBUCXUDYXRQJXNCZCUGFJAHRXKTINEPYWWMKMMGEL9OIZUESMGSUTBHJTIS9HFLZDROHRJYETMWSGDKASTRJKGMVVILGGVJLFR9GXV9DRUVEAEHYRDXOPYYL9TSTDDXGTVUCBUGBQXBVPYRSFDJMBCWFGHAXCI9ZFZZJXI9KBMFXLSM9E9WNMDGLVJNTYNKZZHX9BGUCNKXRY9SRSLWWMQSMNARRGYO9IIPSRABMIFWVOVCZSSYICXQTHU9NHTQGAZTTUII9WPFDUZFMXJAAJQCRBEDLLLVZGUNVDRVETWQNJCTUZAYSCNSFDQPYTIIFZLRULSCXTWHJVYZSARFKCRVZUFRSDPMWFPWXAAVDKVRVIWAWGSTSMIG9LGOYJLXDBYTFPIWITGBUSDBZNTQZCKPJYWAEZWA9AMCLZOHQFFFFVEM99SIWDCIZGDFDZRHMMBVOUCEAOLYKBSGBAEKA9HESFDRJNRMZZD9FGTGLUJLUNVTFWZKGHXLLRQDZDWXBOEOCRCXYQJJVASPNGLQPHGYEFZBEPQJMZUHXFBRGVFBIYJBQUDU9HBTUEPW99GTEJNSZEAWIWRUSSOXDEOTQGJK9TR9RDDPOUTDXPALHKABHKTGRZGSDUCGQVM9OCRVYQRZLAEMZJCD9FLJWPERPUPXIJRZMWGGPYUZHWJZVXOMIMFDLKNMTFOBJSGGBYMTQTCZBYYMQOFVRQB9NDRTRQBGVOGEOMAZLIOQIUJBOVOMUFARUQLBOLA9GZDIGVHZICDCIREHOHQWNFWJPHYZIFQDSBNNOYLNWGWUVIVLYSEHTKXIUBLDRXIHUIHTJJOQQOJJSPNTEZYBIUUSHDONVWPXLGJSBXUQNFJ9RCIPUWZAGNVCNCHGWULQWVJWMMOVWQKGNRBLVOGWLPCH9CPEXWHYWFER9JJTXMV9NFZRQRHBPQXUHMFGSVQUSOIQEYQ9CPUYHCYHLNQPGEUB9BANDSACRIRQOSEKRFZJDBZSOXSUDYHULECYC9LEQCDVWDTAJEGNZHJJYJPJRPQVEHTSAEGEEECUICNVOIP9BASZVMDOMFYCRAWTSJZFZNGEYR9YNCJVRJHRHHRBGSFFEPVUQVARIUZJRTNEWCCMIKZAKTZAXUTARGRGGFJMVODIVDEFHENUYKZUCZMMEDHWFWBXTJRMK9KZBDOAMWYWKRWQVE9IBAQCPFRPWANG9XECCEWHTQMQSKHJZNVIKK9QVIMVUPIGA9MLUNMS9DAQHWXTJVGQBOXVYLZGQHYQKVFCZUXCBXYRUFDUAXOLYDUJKBOCGRCQMNPQGMDPRXZFKSLOGEBKLIORB9TJ9AYBAUXGRTQVNOYNUZS9YPGE9JGWFUHJN9NSANREKHOVEUDHWFTGRDCLGURKINSUL9CQVHLKUMRRELAGJBVKOIVEQPUVCNGIKLNIZZYGYSOLTRTOEDTUTCHUAVSJOAMCYANYMJZLJNRSSJQDPQKW9ALXCDMESFGBB9RXSXIVUYMJPNYWLRTFTKOXOKZIXHBTYCV9UDSJNHDKGXFQXWSMBSP9YNIEEDK9YKPHGZBJTYRWI9EDZYXKJSYZOZOUPDMLQXHJASMYITMKWLNYRAAKAIOSXXPTCESBUJSBCCKJTFMPZYIHRIVJUGKLMHEUFGICXCACN9PNVWEPCJYZZWPVPPZWSZUQUJTWDQZSNPHYSFAPI9FVFOMMEPNXDRZHNVSRSE9YUAYMYPTEBMRA9KXINTPYCXWXEMYZIRDEXAHFJVSGZDDOGJHWBFPHYNDQPBYQUAHHAVTPSGBCKRGJHNLBWQRQLSVW9PHVDFGASIZWEYJFTNUQVBGVKLFWSPESLNFPAOVPXEKMCWAFVDCZSB99UHXECKWUXEHRFXKNH9PPDYTEBXUMQCASXXECWTYDA9UWNYZEVNDHFHFGEKGIFRGKARQG9UMRAESXYSTBTDSLEBLLWVAVVVBYYQZOIEZGIPIIL9BXIB999999999999999999999999999999999999999999999999999999YPEJWYD99B99999999B99999999EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSDPWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999CRTPYSKRCJPBCJMLGTYWSPQSIVRYCCZAGLJCSDR9BXWDKYLFUGZZFNH9EUSXGOCWHDJNJYLRFETUZ9999999999999999999999999999999YLANXZFJE999999999L99999999AJNKZDXLQN9AYHXWIRTBGASOVXP"] })
    //             .onCall(3).resolves({ trytes: ["KZXCRXMKOQSVDFUJND9DYSUSAJLRMGISKXJIUPSCSVBTYKERFCJFKXRNPIZDCXASVAYTDLVYNVQBMDOGGDFXOQLQBYTLJIUDSFSEDPTTC9LBLHVRLJO9XXIJITGDGFXSCQZPGOIUHXTLPBDXQYXXUOABECYAYDPVJTHBYBMTJYXWBEYJDTKUDTM9CSRZGRTKYPSTBYCKPEFA9MKLDWGJKWLFJQXMEXXHGGXACRZFXFVYAEHJL9PRNSGXGRESZRJRNXISBRXT9ACPQKTIQUBGNYHAQCT9YWVYRIZEMGEEPXEMWINNM9MSYUZIXYHBFTAEGJVWVPPDSBRXALMSAJDFFYKFMRNNHXDLPV9ITHHDUYDUVHDOYBQNYPQPSBJASIFBXAXMBAA9STGFVEXWBLLOSSGUFKYJWJKLADDOHRXNZTWGKOM9NNPCVEPSLFEFJVTDFQ9LVHQFTLRSPGEPJLLEDNZZPBOCYCQJCZDTWRHMQ9KKGPEHWROEYXSVDSZYAUZZAJCYKZRNZRWKOMJTUNZGORBLEYUAJTCGOLYPJLGKQWBCWJOJCDWRUIQNIGUEIZVQA9VX9AOZVTNOEKDLHGMLS9MPVGADYAASGLFYWELFLGQNDWSKRZOWZWKXZLO9ACX9YCSPQMVFCEPYZXMMADABHJEH9FOIZHQFEUCZTBFVBMGBGUGVYSPVDPPVBEDPQIWFUTITF9IAFCYLUZSSVOMJNCITBLRLCFGRREHDPYKPUDJWAWARQELWUAGQAKPZHMIGJWLMBQUXOHZFRNQZXSQFRZXEJPZGBYAGFIHEMWOLTXMPWGG9ARSNYJMHUCMDCEUKBQDIQQTDGEDEREOYGPZIUNIUBKTVXCUEDYSWAL9NUTKYVHQCMZORJNLWAEBKQGZYUMXOOZNEAMDTL9GBSEIFDZMJRVLZQHJPZBPT9NMSKYSXBSWVFB9FVSCYNLAQXFCJYVXRIVXWX9YKAJV9AHDIMBWDSEIIRDYOWCEWMSEYNPJNYXRXSRIAGJQUNYVGNEBQPFORPNWPGWGNDFC9HHVPVSOZGUQMIXQZMODTD9MYTY9GKFLTNBWYRB9RW9NGPXXZKTLGTSJWZSITHT9ROUECRBWZQCJBE9FOAQMXHFMHVCYSTILMIAZ9YOJIYTHNHJPGUNSSLSWAYMEO9FYYZURIQEKADETRFKTADKSTMAOASVPXZQEJNU9SSAEEAVOYAEGPONTCBUZESONQQESBKMOMKZ9HUQJ9NAKWVAPANO9XNU9ZOUFDS9JBIMSXXDYLPFVNPTSVGPFHOCKFBXIKEIOFYAAVD9TEDRTXZVNYGH9LLFXTWBNXKVZGDNHDFAYWJXZXXKXGBEIZNMVLOGTAF9WPQLPEBDDATOANFTPWEMFIHLFOGHLWGTHJRUQMMEITRLNACRIHTXBTMBARYWZIUKEMBGNXYJIHJVJJEZJKKKCYHUNOIFNTHVTIOA9RVCVWPAQXLWFRDPXHKBYQDJDMZBRKICVHZDNIKHXTKYCRROBHYQF9YSCVOEWTIUFDDLQBMUNZXUKUM9MWEMEFYDKBSVUYKDWCWEMUVRLE9ZKFKOTUHTCZHIGWDHKRAUTLVXCRIWAIJTJOL9NGCJDBKXZSW9ZUKMJNV9FIUDIPMIFKZEQHUMWJPFINZLXKOBTUJRDFR99BTWMNVGEUKNXXRNQLEZQBEPOFFURYPLT9QGJYWVWHHKIXECQRJXIJT9VYNXTURGDVEOCWORII9LXGS9GUOZUUMVUA9WVMCDXZNY9TTMIQKVTGDOK9INLUX9ZPT9VSKXKTRRYDRZWPCCRNSQBQZXH9TKMVHCHBYNZLEHITQOLTFETJCSZKJIXKXKRHFFCQOLDCGIEMXFCYIYKQJI9IYTFYJGETIXDLTTVELXXDLUOVWLNTWAPPPBIQACJMXPQXWENOFDVNGVKWT9BHJTHCTQNEXRWRWZXGDQJBJ9DCKNBLIAJEOJOCIHNUSVCKUDOTLTHRFXVQVFKTJC9BPIRGCCAEIJUROIGMFLFLYFJJMBPSEWIDMZN9YCXOVWWYFSFTDNBYGVUURVXQZQCCYBWR9BEYDWTBUQIUYX9QGUQXGXOTXTSMTTBMXAGLSKZXLODLFKMWMHUYLKTVYZ9AORUIRKXBMLSQLBDW9EFUFZIUVNCYBIAZKLTTPPCYWPHNCHVCNPBRGYJHHWKSBSVKPWCHICGJZXKE9GSUDXZYUAPLHAKAHYHDXNPHENTERYMMBQOPSQIDENXKLKCEYCPVTZQLEEJVYJZV9BWU999999999999999999999999999ZSZRA9999999999999999999999ZUFJWYD99999999999A99999999FGKNTKWXIRJQCXNYBVSYXKBTASXTIIYVXQCMTWJTMBAQUWBEOTONFRSWL9BBEQPXVIGLENQVIQJNVVYPXOLVGNJUXBMJB9XXEOIDUNVSCWFEUDRCNIRN9MV9XSCKZBGOEOXANBQMPDIMFGJRISMJVLZEYP9Y9A9999DNZOV9LPMY9SCGMEUGKLWDLXFAEOCCGHWQUM9CWIBRFYOOJJLBZTOBAGM9OEWTNYVYTSFEKVOXLSZ9999999999999999999999999999999999999999999999999999999999DTQDEHSRLWURPDNPSCQWYTOVFPB"] });

    //         const response = await obj.getBundle(Hash.fromTrytes(Trytes.fromString("EZIP9CROCHKXAYAERE9SYIJWEDJNSORJ99EZGYVSNIWLJZGCGGQEP9IYMCSAFKJCMDSVVDRHHMMQ99999")));

    //         chai.expect(response.transactions.length).to.be.equal(3);
    //         chai.expect(response.transactions[0].signatureMessageFragment.toTrytes().toString()).to.be.equal("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response.transactions[0].address.toTrytes().toString()).to.be.equal("NQWYCOBATZTLRNELEQZKKJHLQETGCKV9FZNIYSBJFFPQGMGSS99GCZWEEYEJYFZYWGDCVDV9YVQZQMLXC");
    //         chai.expect(response.transactions[0].value.toNumber()).to.be.equal(1);
    //         chai.expect(response.transactions[0].obsoleteTag.toTrytes().toString()).to.be.equal("AF9999999999999999999999999");
    //         chai.expect(response.transactions[0].timestamp.toNumber()).to.be.equal(1519058554);
    //         chai.expect(response.transactions[0].currentIndex.toNumber()).to.be.equal(0);
    //         chai.expect(response.transactions[0].lastIndex.toNumber()).to.be.equal(2);
    //         chai.expect(response.transactions[0].bundle.toTrytes().toString()).to.be.equal("EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSD");
    //         chai.expect(response.transactions[0].trunkTransaction.toTrytes().toString()).to.be.equal("QCWJDQFSGVLSNCLAGZCIDHOQXZPCVJDXOMAZSZJWVDXEDGMLRSHWOOFNVINH9QWEBFRR9JVDSONVZ9999");
    //         chai.expect(response.transactions[0].branchTransaction.toTrytes().toString()).to.be.equal("PWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999");
    //         chai.expect(response.transactions[0].tag.toTrytes().toString()).to.be.equal("AF9999999999999999999999999");
    //         chai.expect(response.transactions[0].attachmentTimestamp.toNumber()).to.be.equal(1519059542138);
    //         chai.expect(response.transactions[0].attachmentTimestampLowerBound.toNumber()).to.be.equal(0);
    //         chai.expect(response.transactions[0].attachmentTimestampUpperBound.toNumber()).to.be.equal(12);
    //         chai.expect(response.transactions[0].nonce.toTrytes().toString()).to.be.equal("JCOWHODZ9VWXYOYNTKWWTVY99TJ");

    //         chai.expect(response.transactions[1].signatureMessageFragment.toTrytes().toString()).to.be.equal("QWBEXIJXCAVCYXRBSWATNNCCRMIVE9SFBUGJAPQKDZDFDJPQASSVFXJDLFDGXZJRYLLSHTMNMO9OYORDCJXUCLRCRIMYZHDFDQXPKKK9HZLTSYWTYZ9MIXICDZSRVKQUUNUWUPQZUPDR9AEOJDRWUVXVSTSDZQRKZCXLTBOQVWMQSWUAIUAQHAINFMJNBMU9IBMVHPXQZLUKQBHMPBDAYAOTMQ9VMDWKXUDYXYXLPJDFVTUIEZAALTWPFIDPQJXXMTZZYWCLAF9HV9ULOZ9PTZIQALISTFUUBZO9CAXYUZKJNWCOWKKAL9HINUXVHZDAXTEWSFDNLGFTANUZSPUACFC9XQPHUWA9JBGJIEMUJTHTTRSGVTLJFEAEIUQLTXLCFTWPAT9RRKK9AGUBNQVXBMRMFCAYKGJFMTC9N9JDQDIVZBNWXDBVLRRSIUBFPTUVHUOEDCWXBEGYKDGEZUEDHPRFSVAJROZUBL9RCWYNYUSB9ULWFIMVGDGEUAMVDDIDLMTHATYKGTHRXVF9ZQRICDHQ9LLJUBRDQUSMNRWDDXSGEETSDJHJDBXMJOUILLLZRVOQHUYTUCGJGKUEQAK9NOJBXFCFLTPLJYCJPEYAJNWLUSQGCCBQSGSQGRMNU9UOW9KDBRHX9NEOZJZCPLIROTZLQSXHXCCRVKXCLGTPRJFPFGDNPJTJNXTPNVLLWTKFFVBTTJIWLXKUCYSURAAIMSIVYUVIXZCMQJNGNXWVUOMSA9YJUVOUPFMDJVVTSRBRUQECYZVXEOGTJCULDSIYZXKIOBGYDJHPBQEJBHUOYWEECTJTEFUYOTXATYKTYRE9FCRSDNGPGEMQQXXBB9VPDVMZKBRQLOE9CRDWJTVPLCCCZYDVMYPOJ9KZCCWE9CLNUTSVGTEAGTJZQQDMIVLYKOEHTQCGQQC9COGLTOQLJENUZNNE9LYAWEPTGAFTQFVBGPEQISVBSEZYPLEMXGAYKAAEA9JDLFFZTKJFTXGFRFWGZWYVVQ9UFCOF9YAL9JCTUJTUQT99VOEAOZHSWQMVXBPKPWNQWRBNHANHIGZUXP99DVUZGAR9PTPGZAEBTEZOAZTPFCDERVCHJVHLTRSQ9TYBSBAZGOHTEEWUJWAYAHNJOXCSM9MYESACAAHRYZJKCMTKUK9AGVECWJHOUYNOVGFCXWDUDGYYK9CHVM9LEESLPWASCQBQZSQPEGMPUNZOVNX9ZFZXUUTJSINYZVDQMHKQJQPOXMCWAMQYXEXXLQRLMXNOSGD9XNYNILMUNDQQOFSJGSTXLPLLGVVXDCKBIQBSKQZLPLGWMGLNLNEJPCBPI9RN9DTIFMBPTKDBUILHKJVMDBJDSBOVZGW9VTJBFXLWPDFWBOQHYHEBUTRDBWHLJMMFQPNXWUCDIRWXCAXZUGWWYGUDRBXRQBPCALK9XPODK9UKEZIKTAWUQYAJYXMRMFGKNDZUD99EMLSRYQDFQXJSMED9MXSEOANTACPTKJALKQIMNUVJBVIAPLSGOJUKAYLHQYH9HSPREYVGSPYGIAATCTICVVDLRRKBFUTDAXL9RXTURNDTIBWUJCCOMGLAIZBJMXGAETNTNNVCPFCJBVBZTSLTUDWSYGYBGTRCNW9IRORFOGKPWRLOOTHNGB999JHAJLMJVGB9WNRIIQKMICAPWNELTHXGRAFCRRIUFPSMJWPSCE9BTVZGYTGNMCCOYZSFDLXDFOHVLFQEWUDWKLJOHRBTGKHILPELTICCXQPLENMGGTFRFDLYJCSUOLXDPS9R9DJDQAGADPAIURGOBFZGBOFJCNIWPCZYAPPCEFXWJYYFLUCI9UXJBOORBQAVEBHFNOSPVUQHFGOTVDJLAFDZLFCGVGKQK9O9PEMHQCKZGPLLJSDNUHOGQYNYQUIUDOKDFARFUJBXOETEYEPSGJDZRJ9JOHWFHIMEWYYPRAYYASCNGXKATILOYGRDU9CBPHD9IGXVVL9AIWRWMRIOGLISRDIJDZZCFME9MHDTZLEETD9WUYBEGD9QSUISAPOBYFGAY9WPZFMENXUILGNBHA9RUSO9AVELPIVFTSFCNQQVCMNDOOXCCNV9VMQHUFGFWTNYBGVXJCVPBDFSNEBQGJHFUSZFEXOANLHMADIXEIVEYMKEHBWJFMNHLBW9OHTNYQJEOZUTKNGAJSEOZHHXWTJBOTZPJJC");
    //         chai.expect(response.transactions[1].address.toTrytes().toString()).to.be.equal("XECWTYDA9UWNYZEVNDHFHFGEKGIFRGKARQG9UMRAESXYSTBTDSLEBLLWVAVVVBYYQZOIEZGIPIIL9BXIB");
    //         chai.expect(response.transactions[1].value.toNumber()).to.be.equal(-1);
    //         chai.expect(response.transactions[1].obsoleteTag.toTrytes().toString()).to.be.equal("999999999999999999999999999");
    //         chai.expect(response.transactions[1].timestamp.toNumber()).to.be.equal(1519058554);
    //         chai.expect(response.transactions[1].currentIndex.toNumber()).to.be.equal(1);
    //         chai.expect(response.transactions[1].lastIndex.toNumber()).to.be.equal(2);
    //         chai.expect(response.transactions[1].bundle.toTrytes().toString()).to.be.equal("EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSD");
    //         chai.expect(response.transactions[1].trunkTransaction.toTrytes().toString()).to.be.equal("CSGDIOUGKLKTZQPTPPGOJI9XXKCBSUEKFOEJQZFFRXIVMDJI9AEDFSCKMCEKLZVHCLYYQZH9TZEH99999");
    //         chai.expect(response.transactions[1].branchTransaction.toTrytes().toString()).to.be.equal("PWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999");
    //         chai.expect(response.transactions[1].tag.toTrytes().toString()).to.be.equal("999999999999999999999999999");
    //         chai.expect(response.transactions[1].attachmentTimestamp.toNumber()).to.be.equal(1519059539382);
    //         chai.expect(response.transactions[1].attachmentTimestampLowerBound.toNumber()).to.be.equal(0);
    //         chai.expect(response.transactions[1].attachmentTimestampUpperBound.toNumber()).to.be.equal(12);
    //         chai.expect(response.transactions[1].nonce.toTrytes().toString()).to.be.equal("OLRF9BJFNPFOIURDUIDYUYUPMSX");

    //         response.transactions[1].currentIndex = TryteNumber.fromNumber(10);

    //         chai.expect(response.transactions[2].signatureMessageFragment.toTrytes().toString()).to.be.equal("DPXEWZVMOSI9OTSC9YY9IBATBWRIAFOQWLKDUDNWHDKVB99GTKCMCEFITGL9BFCAWBKWKMFNBYTALCO9ZBDESYJHRBOWEYSZLXUPBQUDEK9BFSIMJOABKSYXLPHRJHWDEDRNUTRBLEDUUTIJLCLCNWEEOJJGXNPMWAULVFFZQJDQMBFMASQFOWDWBXVV9TCTBAYRLYRCYHVTRYADD9UXQSORQOULURUGOAJLWDXKXJYTIDVDMEDBJYRMUNWKWNHPDEAULNVXMXILVZEUJCSGOITAK9IHTVXKDMZVBUCXUDYXRQJXNCZCUGFJAHRXKTINEPYWWMKMMGEL9OIZUESMGSUTBHJTIS9HFLZDROHRJYETMWSGDKASTRJKGMVVILGGVJLFR9GXV9DRUVEAEHYRDXOPYYL9TSTDDXGTVUCBUGBQXBVPYRSFDJMBCWFGHAXCI9ZFZZJXI9KBMFXLSM9E9WNMDGLVJNTYNKZZHX9BGUCNKXRY9SRSLWWMQSMNARRGYO9IIPSRABMIFWVOVCZSSYICXQTHU9NHTQGAZTTUII9WPFDUZFMXJAAJQCRBEDLLLVZGUNVDRVETWQNJCTUZAYSCNSFDQPYTIIFZLRULSCXTWHJVYZSARFKCRVZUFRSDPMWFPWXAAVDKVRVIWAWGSTSMIG9LGOYJLXDBYTFPIWITGBUSDBZNTQZCKPJYWAEZWA9AMCLZOHQFFFFVEM99SIWDCIZGDFDZRHMMBVOUCEAOLYKBSGBAEKA9HESFDRJNRMZZD9FGTGLUJLUNVTFWZKGHXLLRQDZDWXBOEOCRCXYQJJVASPNGLQPHGYEFZBEPQJMZUHXFBRGVFBIYJBQUDU9HBTUEPW99GTEJNSZEAWIWRUSSOXDEOTQGJK9TR9RDDPOUTDXPALHKABHKTGRZGSDUCGQVM9OCRVYQRZLAEMZJCD9FLJWPERPUPXIJRZMWGGPYUZHWJZVXOMIMFDLKNMTFOBJSGGBYMTQTCZBYYMQOFVRQB9NDRTRQBGVOGEOMAZLIOQIUJBOVOMUFARUQLBOLA9GZDIGVHZICDCIREHOHQWNFWJPHYZIFQDSBNNOYLNWGWUVIVLYSEHTKXIUBLDRXIHUIHTJJOQQOJJSPNTEZYBIUUSHDONVWPXLGJSBXUQNFJ9RCIPUWZAGNVCNCHGWULQWVJWMMOVWQKGNRBLVOGWLPCH9CPEXWHYWFER9JJTXMV9NFZRQRHBPQXUHMFGSVQUSOIQEYQ9CPUYHCYHLNQPGEUB9BANDSACRIRQOSEKRFZJDBZSOXSUDYHULECYC9LEQCDVWDTAJEGNZHJJYJPJRPQVEHTSAEGEEECUICNVOIP9BASZVMDOMFYCRAWTSJZFZNGEYR9YNCJVRJHRHHRBGSFFEPVUQVARIUZJRTNEWCCMIKZAKTZAXUTARGRGGFJMVODIVDEFHENUYKZUCZMMEDHWFWBXTJRMK9KZBDOAMWYWKRWQVE9IBAQCPFRPWANG9XECCEWHTQMQSKHJZNVIKK9QVIMVUPIGA9MLUNMS9DAQHWXTJVGQBOXVYLZGQHYQKVFCZUXCBXYRUFDUAXOLYDUJKBOCGRCQMNPQGMDPRXZFKSLOGEBKLIORB9TJ9AYBAUXGRTQVNOYNUZS9YPGE9JGWFUHJN9NSANREKHOVEUDHWFTGRDCLGURKINSUL9CQVHLKUMRRELAGJBVKOIVEQPUVCNGIKLNIZZYGYSOLTRTOEDTUTCHUAVSJOAMCYANYMJZLJNRSSJQDPQKW9ALXCDMESFGBB9RXSXIVUYMJPNYWLRTFTKOXOKZIXHBTYCV9UDSJNHDKGXFQXWSMBSP9YNIEEDK9YKPHGZBJTYRWI9EDZYXKJSYZOZOUPDMLQXHJASMYITMKWLNYRAAKAIOSXXPTCESBUJSBCCKJTFMPZYIHRIVJUGKLMHEUFGICXCACN9PNVWEPCJYZZWPVPPZWSZUQUJTWDQZSNPHYSFAPI9FVFOMMEPNXDRZHNVSRSE9YUAYMYPTEBMRA9KXINTPYCXWXEMYZIRDEXAHFJVSGZDDOGJHWBFPHYNDQPBYQUAHHAVTPSGBCKRGJHNLBWQRQLSVW9PHVDFGASIZWEYJFTNUQVBGVKLFWSPESLNFPAOVPXEKMCWAFVDCZSB99UHXECKWUXEHRFXKNH9PPDYTEBXUMQCASX");
    //         chai.expect(response.transactions[2].address.toTrytes().toString()).to.be.equal("XECWTYDA9UWNYZEVNDHFHFGEKGIFRGKARQG9UMRAESXYSTBTDSLEBLLWVAVVVBYYQZOIEZGIPIIL9BXIB");
    //         chai.expect(response.transactions[2].value.toNumber()).to.be.equal(0);
    //         chai.expect(response.transactions[2].obsoleteTag.toTrytes().toString()).to.be.equal("999999999999999999999999999");
    //         chai.expect(response.transactions[2].timestamp.toNumber()).to.be.equal(1519058554);
    //         chai.expect(response.transactions[2].currentIndex.toNumber()).to.be.equal(2);
    //         chai.expect(response.transactions[2].lastIndex.toNumber()).to.be.equal(2);
    //         chai.expect(response.transactions[2].bundle.toTrytes().toString()).to.be.equal("EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSD");
    //         chai.expect(response.transactions[2].trunkTransaction.toTrytes().toString()).to.be.equal("PWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999");
    //         chai.expect(response.transactions[2].branchTransaction.toTrytes().toString()).to.be.equal("CRTPYSKRCJPBCJMLGTYWSPQSIVRYCCZAGLJCSDR9BXWDKYLFUGZZFNH9EUSXGOCWHDJNJYLRFETUZ9999");
    //         chai.expect(response.transactions[2].tag.toTrytes().toString()).to.be.equal("999999999999999999999999999");
    //         chai.expect(response.transactions[2].attachmentTimestamp.toNumber()).to.be.equal(1519059539311);
    //         chai.expect(response.transactions[2].attachmentTimestampLowerBound.toNumber()).to.be.equal(0);
    //         chai.expect(response.transactions[2].attachmentTimestampUpperBound.toNumber()).to.be.equal(12);
    //         chai.expect(response.transactions[2].nonce.toTrytes().toString()).to.be.equal("AJNKZDXLQN9AYHXWIRTBGASOVXP");
    //     });
    // });

    // describe("traverseBundle", () => {
    //     it("can fail with invalid trunkTransaction", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.traverseBundle(undefined);
    //             chai.assert("Should have failed");
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The trunkTransaction");
    //         }
    //     });

    //     it("can fail with empty getTrytes response", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         apiClientStub.getTrytes = sinon.stub().resolves(undefined);
    //         try {
    //             await obj.traverseBundle(Hash.fromTrytes(Trytes.fromString("EZIP9CROCHKXAYAERE9SYIJWEDJNSORJ99EZGYVSNIWLJZGCGGQEP9IYMCSAFKJCMDSVVDRHHMMQ99999")));
    //             chai.assert("Should have failed");
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("transactions not visible");
    //         }
    //     });

    //     it("can fail if first transaction is not a tail", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         // tslint:disable:max-line-length
    //         apiClientStub.getTrytes = sinon.stub()
    //             .onFirstCall().resolves({ trytes: ["QWBEXIJXCAVCYXRBSWATNNCCRMIVE9SFBUGJAPQKDZDFDJPQASSVFXJDLFDGXZJRYLLSHTMNMO9OYORDCJXUCLRCRIMYZHDFDQXPKKK9HZLTSYWTYZ9MIXICDZSRVKQUUNUWUPQZUPDR9AEOJDRWUVXVSTSDZQRKZCXLTBOQVWMQSWUAIUAQHAINFMJNBMU9IBMVHPXQZLUKQBHMPBDAYAOTMQ9VMDWKXUDYXYXLPJDFVTUIEZAALTWPFIDPQJXXMTZZYWCLAF9HV9ULOZ9PTZIQALISTFUUBZO9CAXYUZKJNWCOWKKAL9HINUXVHZDAXTEWSFDNLGFTANUZSPUACFC9XQPHUWA9JBGJIEMUJTHTTRSGVTLJFEAEIUQLTXLCFTWPAT9RRKK9AGUBNQVXBMRMFCAYKGJFMTC9N9JDQDIVZBNWXDBVLRRSIUBFPTUVHUOEDCWXBEGYKDGEZUEDHPRFSVAJROZUBL9RCWYNYUSB9ULWFIMVGDGEUAMVDDIDLMTHATYKGTHRXVF9ZQRICDHQ9LLJUBRDQUSMNRWDDXSGEETSDJHJDBXMJOUILLLZRVOQHUYTUCGJGKUEQAK9NOJBXFCFLTPLJYCJPEYAJNWLUSQGCCBQSGSQGRMNU9UOW9KDBRHX9NEOZJZCPLIROTZLQSXHXCCRVKXCLGTPRJFPFGDNPJTJNXTPNVLLWTKFFVBTTJIWLXKUCYSURAAIMSIVYUVIXZCMQJNGNXWVUOMSA9YJUVOUPFMDJVVTSRBRUQECYZVXEOGTJCULDSIYZXKIOBGYDJHPBQEJBHUOYWEECTJTEFUYOTXATYKTYRE9FCRSDNGPGEMQQXXBB9VPDVMZKBRQLOE9CRDWJTVPLCCCZYDVMYPOJ9KZCCWE9CLNUTSVGTEAGTJZQQDMIVLYKOEHTQCGQQC9COGLTOQLJENUZNNE9LYAWEPTGAFTQFVBGPEQISVBSEZYPLEMXGAYKAAEA9JDLFFZTKJFTXGFRFWGZWYVVQ9UFCOF9YAL9JCTUJTUQT99VOEAOZHSWQMVXBPKPWNQWRBNHANHIGZUXP99DVUZGAR9PTPGZAEBTEZOAZTPFCDERVCHJVHLTRSQ9TYBSBAZGOHTEEWUJWAYAHNJOXCSM9MYESACAAHRYZJKCMTKUK9AGVECWJHOUYNOVGFCXWDUDGYYK9CHVM9LEESLPWASCQBQZSQPEGMPUNZOVNX9ZFZXUUTJSINYZVDQMHKQJQPOXMCWAMQYXEXXLQRLMXNOSGD9XNYNILMUNDQQOFSJGSTXLPLLGVVXDCKBIQBSKQZLPLGWMGLNLNEJPCBPI9RN9DTIFMBPTKDBUILHKJVMDBJDSBOVZGW9VTJBFXLWPDFWBOQHYHEBUTRDBWHLJMMFQPNXWUCDIRWXCAXZUGWWYGUDRBXRQBPCALK9XPODK9UKEZIKTAWUQYAJYXMRMFGKNDZUD99EMLSRYQDFQXJSMED9MXSEOANTACPTKJALKQIMNUVJBVIAPLSGOJUKAYLHQYH9HSPREYVGSPYGIAATCTICVVDLRRKBFUTDAXL9RXTURNDTIBWUJCCOMGLAIZBJMXGAETNTNNVCPFCJBVBZTSLTUDWSYGYBGTRCNW9IRORFOGKPWRLOOTHNGB999JHAJLMJVGB9WNRIIQKMICAPWNELTHXGRAFCRRIUFPSMJWPSCE9BTVZGYTGNMCCOYZSFDLXDFOHVLFQEWUDWKLJOHRBTGKHILPELTICCXQPLENMGGTFRFDLYJCSUOLXDPS9R9DJDQAGADPAIURGOBFZGBOFJCNIWPCZYAPPCEFXWJYYFLUCI9UXJBOORBQAVEBHFNOSPVUQHFGOTVDJLAFDZLFCGVGKQK9O9PEMHQCKZGPLLJSDNUHOGQYNYQUIUDOKDFARFUJBXOETEYEPSGJDZRJ9JOHWFHIMEWYYPRAYYASCNGXKATILOYGRDU9CBPHD9IGXVVL9AIWRWMRIOGLISRDIJDZZCFME9MHDTZLEETD9WUYBEGD9QSUISAPOBYFGAY9WPZFMENXUILGNBHA9RUSO9AVELPIVFTSFCNQQVCMNDOOXCCNV9VMQHUFGFWTNYBGVXJCVPBDFSNEBQGJHFUSZFEXOANLHMADIXEIVEYMKEHBWJFMNHLBW9OHTNYQJEOZUTKNGAJSEOZHHXWTJBOTZPJJCXECWTYDA9UWNYZEVNDHFHFGEKGIFRGKARQG9UMRAESXYSTBTDSLEBLLWVAVVVBYYQZOIEZGIPIIL9BXIBZ99999999999999999999999999999999999999999999999999999YPEJWYD99A99999999B99999999EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSDCSGDIOUGKLKTZQPTPPGOJI9XXKCBSUEKFOEJQZFFRXIVMDJI9AEDFSCKMCEKLZVHCLYYQZH9TZEH99999PWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999999999999999999999999999999OOBNXZFJE999999999L99999999OLRF9BJFNPFOIURDUIDYUYUPMSX"] })

    //         try {
    //             await obj.traverseBundle(Hash.fromTrytes(Trytes.fromString("EZIP9CROCHKXAYAERE9SYIJWEDJNSORJ99EZGYVSNIWLJZGCGGQEP9IYMCSAFKJCMDSVVDRHHMMQ99999")));
    //             chai.assert("Should have failed");
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("tail transaction supplied");
    //         }
    //     });

    //     it("can succeed with single element", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         // tslint:disable:max-line-length
    //         apiClientStub.getTrytes = sinon.stub()
    //             .onFirstCall().resolves({ trytes: ["999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999NQWYCOBATZTLRNELEQZKKJHLQETGCKV9FZNIYSBJFFPQGMGSS99GCZWEEYEJYFZYWGDCVDV9YVQZQMLXCA99999999999999999999999999AF9999999999999999999999999YPEJWYD99999999999999999999EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSDQCWJDQFSGVLSNCLAGZCIDHOQXZPCVJDXOMAZSZJWVDXEDGMLRSHWOOFNVINH9QWEBFRR9JVDSONVZ9999PWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999AF9999999999999999999999999QIENXZFJE999999999L99999999JCOWHODZ9VWXYOYNTKWWTVY99TJ"] })

    //         const response = await obj.traverseBundle(Hash.fromTrytes(Trytes.fromString("EZIP9CROCHKXAYAERE9SYIJWEDJNSORJ99EZGYVSNIWLJZGCGGQEP9IYMCSAFKJCMDSVVDRHHMMQ99999")));

    //         chai.expect(response.length).to.be.equal(1);
    //         chai.expect(response[0].signatureMessageFragment.toTrytes().toString()).to.be.equal("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[0].address.toTrytes().toString()).to.be.equal("NQWYCOBATZTLRNELEQZKKJHLQETGCKV9FZNIYSBJFFPQGMGSS99GCZWEEYEJYFZYWGDCVDV9YVQZQMLXC");
    //         chai.expect(response[0].value.toNumber()).to.be.equal(1);
    //         chai.expect(response[0].obsoleteTag.toTrytes().toString()).to.be.equal("AF9999999999999999999999999");
    //         chai.expect(response[0].timestamp.toNumber()).to.be.equal(1519058554);
    //         chai.expect(response[0].currentIndex.toNumber()).to.be.equal(0);
    //         chai.expect(response[0].lastIndex.toNumber()).to.be.equal(0);
    //         chai.expect(response[0].bundle.toTrytes().toString()).to.be.equal("EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSD");
    //         chai.expect(response[0].trunkTransaction.toTrytes().toString()).to.be.equal("QCWJDQFSGVLSNCLAGZCIDHOQXZPCVJDXOMAZSZJWVDXEDGMLRSHWOOFNVINH9QWEBFRR9JVDSONVZ9999");
    //         chai.expect(response[0].branchTransaction.toTrytes().toString()).to.be.equal("PWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999");
    //         chai.expect(response[0].tag.toTrytes().toString()).to.be.equal("AF9999999999999999999999999");
    //         chai.expect(response[0].attachmentTimestamp.toNumber()).to.be.equal(1519059542138);
    //         chai.expect(response[0].attachmentTimestampLowerBound.toNumber()).to.be.equal(0);
    //         chai.expect(response[0].attachmentTimestampUpperBound.toNumber()).to.be.equal(12);
    //         chai.expect(response[0].nonce.toTrytes().toString()).to.be.equal("JCOWHODZ9VWXYOYNTKWWTVY99TJ")
    //     });

    //     it("can traverse bundles", async () => {
    //         const obj = new TransactionClient(apiClientStub);

    //         // tslint:disable:max-line-length
    //         apiClientStub.getTrytes = sinon.stub()
    //             .onFirstCall().resolves({ trytes: ["999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999NQWYCOBATZTLRNELEQZKKJHLQETGCKV9FZNIYSBJFFPQGMGSS99GCZWEEYEJYFZYWGDCVDV9YVQZQMLXCA99999999999999999999999999AF9999999999999999999999999YPEJWYD99999999999B99999999EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSDQCWJDQFSGVLSNCLAGZCIDHOQXZPCVJDXOMAZSZJWVDXEDGMLRSHWOOFNVINH9QWEBFRR9JVDSONVZ9999PWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999AF9999999999999999999999999QIENXZFJE999999999L99999999JCOWHODZ9VWXYOYNTKWWTVY99TJ"] })
    //             .onSecondCall().resolves({ trytes: ["QWBEXIJXCAVCYXRBSWATNNCCRMIVE9SFBUGJAPQKDZDFDJPQASSVFXJDLFDGXZJRYLLSHTMNMO9OYORDCJXUCLRCRIMYZHDFDQXPKKK9HZLTSYWTYZ9MIXICDZSRVKQUUNUWUPQZUPDR9AEOJDRWUVXVSTSDZQRKZCXLTBOQVWMQSWUAIUAQHAINFMJNBMU9IBMVHPXQZLUKQBHMPBDAYAOTMQ9VMDWKXUDYXYXLPJDFVTUIEZAALTWPFIDPQJXXMTZZYWCLAF9HV9ULOZ9PTZIQALISTFUUBZO9CAXYUZKJNWCOWKKAL9HINUXVHZDAXTEWSFDNLGFTANUZSPUACFC9XQPHUWA9JBGJIEMUJTHTTRSGVTLJFEAEIUQLTXLCFTWPAT9RRKK9AGUBNQVXBMRMFCAYKGJFMTC9N9JDQDIVZBNWXDBVLRRSIUBFPTUVHUOEDCWXBEGYKDGEZUEDHPRFSVAJROZUBL9RCWYNYUSB9ULWFIMVGDGEUAMVDDIDLMTHATYKGTHRXVF9ZQRICDHQ9LLJUBRDQUSMNRWDDXSGEETSDJHJDBXMJOUILLLZRVOQHUYTUCGJGKUEQAK9NOJBXFCFLTPLJYCJPEYAJNWLUSQGCCBQSGSQGRMNU9UOW9KDBRHX9NEOZJZCPLIROTZLQSXHXCCRVKXCLGTPRJFPFGDNPJTJNXTPNVLLWTKFFVBTTJIWLXKUCYSURAAIMSIVYUVIXZCMQJNGNXWVUOMSA9YJUVOUPFMDJVVTSRBRUQECYZVXEOGTJCULDSIYZXKIOBGYDJHPBQEJBHUOYWEECTJTEFUYOTXATYKTYRE9FCRSDNGPGEMQQXXBB9VPDVMZKBRQLOE9CRDWJTVPLCCCZYDVMYPOJ9KZCCWE9CLNUTSVGTEAGTJZQQDMIVLYKOEHTQCGQQC9COGLTOQLJENUZNNE9LYAWEPTGAFTQFVBGPEQISVBSEZYPLEMXGAYKAAEA9JDLFFZTKJFTXGFRFWGZWYVVQ9UFCOF9YAL9JCTUJTUQT99VOEAOZHSWQMVXBPKPWNQWRBNHANHIGZUXP99DVUZGAR9PTPGZAEBTEZOAZTPFCDERVCHJVHLTRSQ9TYBSBAZGOHTEEWUJWAYAHNJOXCSM9MYESACAAHRYZJKCMTKUK9AGVECWJHOUYNOVGFCXWDUDGYYK9CHVM9LEESLPWASCQBQZSQPEGMPUNZOVNX9ZFZXUUTJSINYZVDQMHKQJQPOXMCWAMQYXEXXLQRLMXNOSGD9XNYNILMUNDQQOFSJGSTXLPLLGVVXDCKBIQBSKQZLPLGWMGLNLNEJPCBPI9RN9DTIFMBPTKDBUILHKJVMDBJDSBOVZGW9VTJBFXLWPDFWBOQHYHEBUTRDBWHLJMMFQPNXWUCDIRWXCAXZUGWWYGUDRBXRQBPCALK9XPODK9UKEZIKTAWUQYAJYXMRMFGKNDZUD99EMLSRYQDFQXJSMED9MXSEOANTACPTKJALKQIMNUVJBVIAPLSGOJUKAYLHQYH9HSPREYVGSPYGIAATCTICVVDLRRKBFUTDAXL9RXTURNDTIBWUJCCOMGLAIZBJMXGAETNTNNVCPFCJBVBZTSLTUDWSYGYBGTRCNW9IRORFOGKPWRLOOTHNGB999JHAJLMJVGB9WNRIIQKMICAPWNELTHXGRAFCRRIUFPSMJWPSCE9BTVZGYTGNMCCOYZSFDLXDFOHVLFQEWUDWKLJOHRBTGKHILPELTICCXQPLENMGGTFRFDLYJCSUOLXDPS9R9DJDQAGADPAIURGOBFZGBOFJCNIWPCZYAPPCEFXWJYYFLUCI9UXJBOORBQAVEBHFNOSPVUQHFGOTVDJLAFDZLFCGVGKQK9O9PEMHQCKZGPLLJSDNUHOGQYNYQUIUDOKDFARFUJBXOETEYEPSGJDZRJ9JOHWFHIMEWYYPRAYYASCNGXKATILOYGRDU9CBPHD9IGXVVL9AIWRWMRIOGLISRDIJDZZCFME9MHDTZLEETD9WUYBEGD9QSUISAPOBYFGAY9WPZFMENXUILGNBHA9RUSO9AVELPIVFTSFCNQQVCMNDOOXCCNV9VMQHUFGFWTNYBGVXJCVPBDFSNEBQGJHFUSZFEXOANLHMADIXEIVEYMKEHBWJFMNHLBW9OHTNYQJEOZUTKNGAJSEOZHHXWTJBOTZPJJCXECWTYDA9UWNYZEVNDHFHFGEKGIFRGKARQG9UMRAESXYSTBTDSLEBLLWVAVVVBYYQZOIEZGIPIIL9BXIBZ99999999999999999999999999999999999999999999999999999YPEJWYD99A99999999B99999999EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSDCSGDIOUGKLKTZQPTPPGOJI9XXKCBSUEKFOEJQZFFRXIVMDJI9AEDFSCKMCEKLZVHCLYYQZH9TZEH99999PWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999999999999999999999999999999OOBNXZFJE999999999L99999999OLRF9BJFNPFOIURDUIDYUYUPMSX"] })
    //             .onThirdCall().resolves({ trytes: ["DPXEWZVMOSI9OTSC9YY9IBATBWRIAFOQWLKDUDNWHDKVB99GTKCMCEFITGL9BFCAWBKWKMFNBYTALCO9ZBDESYJHRBOWEYSZLXUPBQUDEK9BFSIMJOABKSYXLPHRJHWDEDRNUTRBLEDUUTIJLCLCNWEEOJJGXNPMWAULVFFZQJDQMBFMASQFOWDWBXVV9TCTBAYRLYRCYHVTRYADD9UXQSORQOULURUGOAJLWDXKXJYTIDVDMEDBJYRMUNWKWNHPDEAULNVXMXILVZEUJCSGOITAK9IHTVXKDMZVBUCXUDYXRQJXNCZCUGFJAHRXKTINEPYWWMKMMGEL9OIZUESMGSUTBHJTIS9HFLZDROHRJYETMWSGDKASTRJKGMVVILGGVJLFR9GXV9DRUVEAEHYRDXOPYYL9TSTDDXGTVUCBUGBQXBVPYRSFDJMBCWFGHAXCI9ZFZZJXI9KBMFXLSM9E9WNMDGLVJNTYNKZZHX9BGUCNKXRY9SRSLWWMQSMNARRGYO9IIPSRABMIFWVOVCZSSYICXQTHU9NHTQGAZTTUII9WPFDUZFMXJAAJQCRBEDLLLVZGUNVDRVETWQNJCTUZAYSCNSFDQPYTIIFZLRULSCXTWHJVYZSARFKCRVZUFRSDPMWFPWXAAVDKVRVIWAWGSTSMIG9LGOYJLXDBYTFPIWITGBUSDBZNTQZCKPJYWAEZWA9AMCLZOHQFFFFVEM99SIWDCIZGDFDZRHMMBVOUCEAOLYKBSGBAEKA9HESFDRJNRMZZD9FGTGLUJLUNVTFWZKGHXLLRQDZDWXBOEOCRCXYQJJVASPNGLQPHGYEFZBEPQJMZUHXFBRGVFBIYJBQUDU9HBTUEPW99GTEJNSZEAWIWRUSSOXDEOTQGJK9TR9RDDPOUTDXPALHKABHKTGRZGSDUCGQVM9OCRVYQRZLAEMZJCD9FLJWPERPUPXIJRZMWGGPYUZHWJZVXOMIMFDLKNMTFOBJSGGBYMTQTCZBYYMQOFVRQB9NDRTRQBGVOGEOMAZLIOQIUJBOVOMUFARUQLBOLA9GZDIGVHZICDCIREHOHQWNFWJPHYZIFQDSBNNOYLNWGWUVIVLYSEHTKXIUBLDRXIHUIHTJJOQQOJJSPNTEZYBIUUSHDONVWPXLGJSBXUQNFJ9RCIPUWZAGNVCNCHGWULQWVJWMMOVWQKGNRBLVOGWLPCH9CPEXWHYWFER9JJTXMV9NFZRQRHBPQXUHMFGSVQUSOIQEYQ9CPUYHCYHLNQPGEUB9BANDSACRIRQOSEKRFZJDBZSOXSUDYHULECYC9LEQCDVWDTAJEGNZHJJYJPJRPQVEHTSAEGEEECUICNVOIP9BASZVMDOMFYCRAWTSJZFZNGEYR9YNCJVRJHRHHRBGSFFEPVUQVARIUZJRTNEWCCMIKZAKTZAXUTARGRGGFJMVODIVDEFHENUYKZUCZMMEDHWFWBXTJRMK9KZBDOAMWYWKRWQVE9IBAQCPFRPWANG9XECCEWHTQMQSKHJZNVIKK9QVIMVUPIGA9MLUNMS9DAQHWXTJVGQBOXVYLZGQHYQKVFCZUXCBXYRUFDUAXOLYDUJKBOCGRCQMNPQGMDPRXZFKSLOGEBKLIORB9TJ9AYBAUXGRTQVNOYNUZS9YPGE9JGWFUHJN9NSANREKHOVEUDHWFTGRDCLGURKINSUL9CQVHLKUMRRELAGJBVKOIVEQPUVCNGIKLNIZZYGYSOLTRTOEDTUTCHUAVSJOAMCYANYMJZLJNRSSJQDPQKW9ALXCDMESFGBB9RXSXIVUYMJPNYWLRTFTKOXOKZIXHBTYCV9UDSJNHDKGXFQXWSMBSP9YNIEEDK9YKPHGZBJTYRWI9EDZYXKJSYZOZOUPDMLQXHJASMYITMKWLNYRAAKAIOSXXPTCESBUJSBCCKJTFMPZYIHRIVJUGKLMHEUFGICXCACN9PNVWEPCJYZZWPVPPZWSZUQUJTWDQZSNPHYSFAPI9FVFOMMEPNXDRZHNVSRSE9YUAYMYPTEBMRA9KXINTPYCXWXEMYZIRDEXAHFJVSGZDDOGJHWBFPHYNDQPBYQUAHHAVTPSGBCKRGJHNLBWQRQLSVW9PHVDFGASIZWEYJFTNUQVBGVKLFWSPESLNFPAOVPXEKMCWAFVDCZSB99UHXECKWUXEHRFXKNH9PPDYTEBXUMQCASXXECWTYDA9UWNYZEVNDHFHFGEKGIFRGKARQG9UMRAESXYSTBTDSLEBLLWVAVVVBYYQZOIEZGIPIIL9BXIB999999999999999999999999999999999999999999999999999999YPEJWYD99B99999999B99999999EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSDPWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999CRTPYSKRCJPBCJMLGTYWSPQSIVRYCCZAGLJCSDR9BXWDKYLFUGZZFNH9EUSXGOCWHDJNJYLRFETUZ9999999999999999999999999999999YLANXZFJE999999999L99999999AJNKZDXLQN9AYHXWIRTBGASOVXP"] })
    //             .onCall(3).resolves({ trytes: ["KZXCRXMKOQSVDFUJND9DYSUSAJLRMGISKXJIUPSCSVBTYKERFCJFKXRNPIZDCXASVAYTDLVYNVQBMDOGGDFXOQLQBYTLJIUDSFSEDPTTC9LBLHVRLJO9XXIJITGDGFXSCQZPGOIUHXTLPBDXQYXXUOABECYAYDPVJTHBYBMTJYXWBEYJDTKUDTM9CSRZGRTKYPSTBYCKPEFA9MKLDWGJKWLFJQXMEXXHGGXACRZFXFVYAEHJL9PRNSGXGRESZRJRNXISBRXT9ACPQKTIQUBGNYHAQCT9YWVYRIZEMGEEPXEMWINNM9MSYUZIXYHBFTAEGJVWVPPDSBRXALMSAJDFFYKFMRNNHXDLPV9ITHHDUYDUVHDOYBQNYPQPSBJASIFBXAXMBAA9STGFVEXWBLLOSSGUFKYJWJKLADDOHRXNZTWGKOM9NNPCVEPSLFEFJVTDFQ9LVHQFTLRSPGEPJLLEDNZZPBOCYCQJCZDTWRHMQ9KKGPEHWROEYXSVDSZYAUZZAJCYKZRNZRWKOMJTUNZGORBLEYUAJTCGOLYPJLGKQWBCWJOJCDWRUIQNIGUEIZVQA9VX9AOZVTNOEKDLHGMLS9MPVGADYAASGLFYWELFLGQNDWSKRZOWZWKXZLO9ACX9YCSPQMVFCEPYZXMMADABHJEH9FOIZHQFEUCZTBFVBMGBGUGVYSPVDPPVBEDPQIWFUTITF9IAFCYLUZSSVOMJNCITBLRLCFGRREHDPYKPUDJWAWARQELWUAGQAKPZHMIGJWLMBQUXOHZFRNQZXSQFRZXEJPZGBYAGFIHEMWOLTXMPWGG9ARSNYJMHUCMDCEUKBQDIQQTDGEDEREOYGPZIUNIUBKTVXCUEDYSWAL9NUTKYVHQCMZORJNLWAEBKQGZYUMXOOZNEAMDTL9GBSEIFDZMJRVLZQHJPZBPT9NMSKYSXBSWVFB9FVSCYNLAQXFCJYVXRIVXWX9YKAJV9AHDIMBWDSEIIRDYOWCEWMSEYNPJNYXRXSRIAGJQUNYVGNEBQPFORPNWPGWGNDFC9HHVPVSOZGUQMIXQZMODTD9MYTY9GKFLTNBWYRB9RW9NGPXXZKTLGTSJWZSITHT9ROUECRBWZQCJBE9FOAQMXHFMHVCYSTILMIAZ9YOJIYTHNHJPGUNSSLSWAYMEO9FYYZURIQEKADETRFKTADKSTMAOASVPXZQEJNU9SSAEEAVOYAEGPONTCBUZESONQQESBKMOMKZ9HUQJ9NAKWVAPANO9XNU9ZOUFDS9JBIMSXXDYLPFVNPTSVGPFHOCKFBXIKEIOFYAAVD9TEDRTXZVNYGH9LLFXTWBNXKVZGDNHDFAYWJXZXXKXGBEIZNMVLOGTAF9WPQLPEBDDATOANFTPWEMFIHLFOGHLWGTHJRUQMMEITRLNACRIHTXBTMBARYWZIUKEMBGNXYJIHJVJJEZJKKKCYHUNOIFNTHVTIOA9RVCVWPAQXLWFRDPXHKBYQDJDMZBRKICVHZDNIKHXTKYCRROBHYQF9YSCVOEWTIUFDDLQBMUNZXUKUM9MWEMEFYDKBSVUYKDWCWEMUVRLE9ZKFKOTUHTCZHIGWDHKRAUTLVXCRIWAIJTJOL9NGCJDBKXZSW9ZUKMJNV9FIUDIPMIFKZEQHUMWJPFINZLXKOBTUJRDFR99BTWMNVGEUKNXXRNQLEZQBEPOFFURYPLT9QGJYWVWHHKIXECQRJXIJT9VYNXTURGDVEOCWORII9LXGS9GUOZUUMVUA9WVMCDXZNY9TTMIQKVTGDOK9INLUX9ZPT9VSKXKTRRYDRZWPCCRNSQBQZXH9TKMVHCHBYNZLEHITQOLTFETJCSZKJIXKXKRHFFCQOLDCGIEMXFCYIYKQJI9IYTFYJGETIXDLTTVELXXDLUOVWLNTWAPPPBIQACJMXPQXWENOFDVNGVKWT9BHJTHCTQNEXRWRWZXGDQJBJ9DCKNBLIAJEOJOCIHNUSVCKUDOTLTHRFXVQVFKTJC9BPIRGCCAEIJUROIGMFLFLYFJJMBPSEWIDMZN9YCXOVWWYFSFTDNBYGVUURVXQZQCCYBWR9BEYDWTBUQIUYX9QGUQXGXOTXTSMTTBMXAGLSKZXLODLFKMWMHUYLKTVYZ9AORUIRKXBMLSQLBDW9EFUFZIUVNCYBIAZKLTTPPCYWPHNCHVCNPBRGYJHHWKSBSVKPWCHICGJZXKE9GSUDXZYUAPLHAKAHYHDXNPHENTERYMMBQOPSQIDENXKLKCEYCPVTZQLEEJVYJZV9BWU999999999999999999999999999ZSZRA9999999999999999999999ZUFJWYD99999999999A99999999FGKNTKWXIRJQCXNYBVSYXKBTASXTIIYVXQCMTWJTMBAQUWBEOTONFRSWL9BBEQPXVIGLENQVIQJNVVYPXOLVGNJUXBMJB9XXEOIDUNVSCWFEUDRCNIRN9MV9XSCKZBGOEOXANBQMPDIMFGJRISMJVLZEYP9Y9A9999DNZOV9LPMY9SCGMEUGKLWDLXFAEOCCGHWQUM9CWIBRFYOOJJLBZTOBAGM9OEWTNYVYTSFEKVOXLSZ9999999999999999999999999999999999999999999999999999999999DTQDEHSRLWURPDNPSCQWYTOVFPB"] });

    //         const response = await obj.traverseBundle(Hash.fromTrytes(Trytes.fromString("EZIP9CROCHKXAYAERE9SYIJWEDJNSORJ99EZGYVSNIWLJZGCGGQEP9IYMCSAFKJCMDSVVDRHHMMQ99999")));

    //         chai.expect(response.length).to.be.equal(3);
    //         chai.expect(response[0].signatureMessageFragment.toTrytes().toString()).to.be.equal("999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999");
    //         chai.expect(response[0].address.toTrytes().toString()).to.be.equal("NQWYCOBATZTLRNELEQZKKJHLQETGCKV9FZNIYSBJFFPQGMGSS99GCZWEEYEJYFZYWGDCVDV9YVQZQMLXC");
    //         chai.expect(response[0].value.toNumber()).to.be.equal(1);
    //         chai.expect(response[0].obsoleteTag.toTrytes().toString()).to.be.equal("AF9999999999999999999999999");
    //         chai.expect(response[0].timestamp.toNumber()).to.be.equal(1519058554);
    //         chai.expect(response[0].currentIndex.toNumber()).to.be.equal(0);
    //         chai.expect(response[0].lastIndex.toNumber()).to.be.equal(2);
    //         chai.expect(response[0].bundle.toTrytes().toString()).to.be.equal("EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSD");
    //         chai.expect(response[0].trunkTransaction.toTrytes().toString()).to.be.equal("QCWJDQFSGVLSNCLAGZCIDHOQXZPCVJDXOMAZSZJWVDXEDGMLRSHWOOFNVINH9QWEBFRR9JVDSONVZ9999");
    //         chai.expect(response[0].branchTransaction.toTrytes().toString()).to.be.equal("PWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999");
    //         chai.expect(response[0].tag.toTrytes().toString()).to.be.equal("AF9999999999999999999999999");
    //         chai.expect(response[0].attachmentTimestamp.toNumber()).to.be.equal(1519059542138);
    //         chai.expect(response[0].attachmentTimestampLowerBound.toNumber()).to.be.equal(0);
    //         chai.expect(response[0].attachmentTimestampUpperBound.toNumber()).to.be.equal(12);
    //         chai.expect(response[0].nonce.toTrytes().toString()).to.be.equal("JCOWHODZ9VWXYOYNTKWWTVY99TJ");

    //         chai.expect(response[1].signatureMessageFragment.toTrytes().toString()).to.be.equal("QWBEXIJXCAVCYXRBSWATNNCCRMIVE9SFBUGJAPQKDZDFDJPQASSVFXJDLFDGXZJRYLLSHTMNMO9OYORDCJXUCLRCRIMYZHDFDQXPKKK9HZLTSYWTYZ9MIXICDZSRVKQUUNUWUPQZUPDR9AEOJDRWUVXVSTSDZQRKZCXLTBOQVWMQSWUAIUAQHAINFMJNBMU9IBMVHPXQZLUKQBHMPBDAYAOTMQ9VMDWKXUDYXYXLPJDFVTUIEZAALTWPFIDPQJXXMTZZYWCLAF9HV9ULOZ9PTZIQALISTFUUBZO9CAXYUZKJNWCOWKKAL9HINUXVHZDAXTEWSFDNLGFTANUZSPUACFC9XQPHUWA9JBGJIEMUJTHTTRSGVTLJFEAEIUQLTXLCFTWPAT9RRKK9AGUBNQVXBMRMFCAYKGJFMTC9N9JDQDIVZBNWXDBVLRRSIUBFPTUVHUOEDCWXBEGYKDGEZUEDHPRFSVAJROZUBL9RCWYNYUSB9ULWFIMVGDGEUAMVDDIDLMTHATYKGTHRXVF9ZQRICDHQ9LLJUBRDQUSMNRWDDXSGEETSDJHJDBXMJOUILLLZRVOQHUYTUCGJGKUEQAK9NOJBXFCFLTPLJYCJPEYAJNWLUSQGCCBQSGSQGRMNU9UOW9KDBRHX9NEOZJZCPLIROTZLQSXHXCCRVKXCLGTPRJFPFGDNPJTJNXTPNVLLWTKFFVBTTJIWLXKUCYSURAAIMSIVYUVIXZCMQJNGNXWVUOMSA9YJUVOUPFMDJVVTSRBRUQECYZVXEOGTJCULDSIYZXKIOBGYDJHPBQEJBHUOYWEECTJTEFUYOTXATYKTYRE9FCRSDNGPGEMQQXXBB9VPDVMZKBRQLOE9CRDWJTVPLCCCZYDVMYPOJ9KZCCWE9CLNUTSVGTEAGTJZQQDMIVLYKOEHTQCGQQC9COGLTOQLJENUZNNE9LYAWEPTGAFTQFVBGPEQISVBSEZYPLEMXGAYKAAEA9JDLFFZTKJFTXGFRFWGZWYVVQ9UFCOF9YAL9JCTUJTUQT99VOEAOZHSWQMVXBPKPWNQWRBNHANHIGZUXP99DVUZGAR9PTPGZAEBTEZOAZTPFCDERVCHJVHLTRSQ9TYBSBAZGOHTEEWUJWAYAHNJOXCSM9MYESACAAHRYZJKCMTKUK9AGVECWJHOUYNOVGFCXWDUDGYYK9CHVM9LEESLPWASCQBQZSQPEGMPUNZOVNX9ZFZXUUTJSINYZVDQMHKQJQPOXMCWAMQYXEXXLQRLMXNOSGD9XNYNILMUNDQQOFSJGSTXLPLLGVVXDCKBIQBSKQZLPLGWMGLNLNEJPCBPI9RN9DTIFMBPTKDBUILHKJVMDBJDSBOVZGW9VTJBFXLWPDFWBOQHYHEBUTRDBWHLJMMFQPNXWUCDIRWXCAXZUGWWYGUDRBXRQBPCALK9XPODK9UKEZIKTAWUQYAJYXMRMFGKNDZUD99EMLSRYQDFQXJSMED9MXSEOANTACPTKJALKQIMNUVJBVIAPLSGOJUKAYLHQYH9HSPREYVGSPYGIAATCTICVVDLRRKBFUTDAXL9RXTURNDTIBWUJCCOMGLAIZBJMXGAETNTNNVCPFCJBVBZTSLTUDWSYGYBGTRCNW9IRORFOGKPWRLOOTHNGB999JHAJLMJVGB9WNRIIQKMICAPWNELTHXGRAFCRRIUFPSMJWPSCE9BTVZGYTGNMCCOYZSFDLXDFOHVLFQEWUDWKLJOHRBTGKHILPELTICCXQPLENMGGTFRFDLYJCSUOLXDPS9R9DJDQAGADPAIURGOBFZGBOFJCNIWPCZYAPPCEFXWJYYFLUCI9UXJBOORBQAVEBHFNOSPVUQHFGOTVDJLAFDZLFCGVGKQK9O9PEMHQCKZGPLLJSDNUHOGQYNYQUIUDOKDFARFUJBXOETEYEPSGJDZRJ9JOHWFHIMEWYYPRAYYASCNGXKATILOYGRDU9CBPHD9IGXVVL9AIWRWMRIOGLISRDIJDZZCFME9MHDTZLEETD9WUYBEGD9QSUISAPOBYFGAY9WPZFMENXUILGNBHA9RUSO9AVELPIVFTSFCNQQVCMNDOOXCCNV9VMQHUFGFWTNYBGVXJCVPBDFSNEBQGJHFUSZFEXOANLHMADIXEIVEYMKEHBWJFMNHLBW9OHTNYQJEOZUTKNGAJSEOZHHXWTJBOTZPJJC");
    //         chai.expect(response[1].address.toTrytes().toString()).to.be.equal("XECWTYDA9UWNYZEVNDHFHFGEKGIFRGKARQG9UMRAESXYSTBTDSLEBLLWVAVVVBYYQZOIEZGIPIIL9BXIB");
    //         chai.expect(response[1].value.toNumber()).to.be.equal(-1);
    //         chai.expect(response[1].obsoleteTag.toTrytes().toString()).to.be.equal("999999999999999999999999999");
    //         chai.expect(response[1].timestamp.toNumber()).to.be.equal(1519058554);
    //         chai.expect(response[1].currentIndex.toNumber()).to.be.equal(1);
    //         chai.expect(response[1].lastIndex.toNumber()).to.be.equal(2);
    //         chai.expect(response[1].bundle.toTrytes().toString()).to.be.equal("EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSD");
    //         chai.expect(response[1].trunkTransaction.toTrytes().toString()).to.be.equal("CSGDIOUGKLKTZQPTPPGOJI9XXKCBSUEKFOEJQZFFRXIVMDJI9AEDFSCKMCEKLZVHCLYYQZH9TZEH99999");
    //         chai.expect(response[1].branchTransaction.toTrytes().toString()).to.be.equal("PWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999");
    //         chai.expect(response[1].tag.toTrytes().toString()).to.be.equal("999999999999999999999999999");
    //         chai.expect(response[1].attachmentTimestamp.toNumber()).to.be.equal(1519059539382);
    //         chai.expect(response[1].attachmentTimestampLowerBound.toNumber()).to.be.equal(0);
    //         chai.expect(response[1].attachmentTimestampUpperBound.toNumber()).to.be.equal(12);
    //         chai.expect(response[1].nonce.toTrytes().toString()).to.be.equal("OLRF9BJFNPFOIURDUIDYUYUPMSX");

    //         chai.expect(response[2].signatureMessageFragment.toTrytes().toString()).to.be.equal("DPXEWZVMOSI9OTSC9YY9IBATBWRIAFOQWLKDUDNWHDKVB99GTKCMCEFITGL9BFCAWBKWKMFNBYTALCO9ZBDESYJHRBOWEYSZLXUPBQUDEK9BFSIMJOABKSYXLPHRJHWDEDRNUTRBLEDUUTIJLCLCNWEEOJJGXNPMWAULVFFZQJDQMBFMASQFOWDWBXVV9TCTBAYRLYRCYHVTRYADD9UXQSORQOULURUGOAJLWDXKXJYTIDVDMEDBJYRMUNWKWNHPDEAULNVXMXILVZEUJCSGOITAK9IHTVXKDMZVBUCXUDYXRQJXNCZCUGFJAHRXKTINEPYWWMKMMGEL9OIZUESMGSUTBHJTIS9HFLZDROHRJYETMWSGDKASTRJKGMVVILGGVJLFR9GXV9DRUVEAEHYRDXOPYYL9TSTDDXGTVUCBUGBQXBVPYRSFDJMBCWFGHAXCI9ZFZZJXI9KBMFXLSM9E9WNMDGLVJNTYNKZZHX9BGUCNKXRY9SRSLWWMQSMNARRGYO9IIPSRABMIFWVOVCZSSYICXQTHU9NHTQGAZTTUII9WPFDUZFMXJAAJQCRBEDLLLVZGUNVDRVETWQNJCTUZAYSCNSFDQPYTIIFZLRULSCXTWHJVYZSARFKCRVZUFRSDPMWFPWXAAVDKVRVIWAWGSTSMIG9LGOYJLXDBYTFPIWITGBUSDBZNTQZCKPJYWAEZWA9AMCLZOHQFFFFVEM99SIWDCIZGDFDZRHMMBVOUCEAOLYKBSGBAEKA9HESFDRJNRMZZD9FGTGLUJLUNVTFWZKGHXLLRQDZDWXBOEOCRCXYQJJVASPNGLQPHGYEFZBEPQJMZUHXFBRGVFBIYJBQUDU9HBTUEPW99GTEJNSZEAWIWRUSSOXDEOTQGJK9TR9RDDPOUTDXPALHKABHKTGRZGSDUCGQVM9OCRVYQRZLAEMZJCD9FLJWPERPUPXIJRZMWGGPYUZHWJZVXOMIMFDLKNMTFOBJSGGBYMTQTCZBYYMQOFVRQB9NDRTRQBGVOGEOMAZLIOQIUJBOVOMUFARUQLBOLA9GZDIGVHZICDCIREHOHQWNFWJPHYZIFQDSBNNOYLNWGWUVIVLYSEHTKXIUBLDRXIHUIHTJJOQQOJJSPNTEZYBIUUSHDONVWPXLGJSBXUQNFJ9RCIPUWZAGNVCNCHGWULQWVJWMMOVWQKGNRBLVOGWLPCH9CPEXWHYWFER9JJTXMV9NFZRQRHBPQXUHMFGSVQUSOIQEYQ9CPUYHCYHLNQPGEUB9BANDSACRIRQOSEKRFZJDBZSOXSUDYHULECYC9LEQCDVWDTAJEGNZHJJYJPJRPQVEHTSAEGEEECUICNVOIP9BASZVMDOMFYCRAWTSJZFZNGEYR9YNCJVRJHRHHRBGSFFEPVUQVARIUZJRTNEWCCMIKZAKTZAXUTARGRGGFJMVODIVDEFHENUYKZUCZMMEDHWFWBXTJRMK9KZBDOAMWYWKRWQVE9IBAQCPFRPWANG9XECCEWHTQMQSKHJZNVIKK9QVIMVUPIGA9MLUNMS9DAQHWXTJVGQBOXVYLZGQHYQKVFCZUXCBXYRUFDUAXOLYDUJKBOCGRCQMNPQGMDPRXZFKSLOGEBKLIORB9TJ9AYBAUXGRTQVNOYNUZS9YPGE9JGWFUHJN9NSANREKHOVEUDHWFTGRDCLGURKINSUL9CQVHLKUMRRELAGJBVKOIVEQPUVCNGIKLNIZZYGYSOLTRTOEDTUTCHUAVSJOAMCYANYMJZLJNRSSJQDPQKW9ALXCDMESFGBB9RXSXIVUYMJPNYWLRTFTKOXOKZIXHBTYCV9UDSJNHDKGXFQXWSMBSP9YNIEEDK9YKPHGZBJTYRWI9EDZYXKJSYZOZOUPDMLQXHJASMYITMKWLNYRAAKAIOSXXPTCESBUJSBCCKJTFMPZYIHRIVJUGKLMHEUFGICXCACN9PNVWEPCJYZZWPVPPZWSZUQUJTWDQZSNPHYSFAPI9FVFOMMEPNXDRZHNVSRSE9YUAYMYPTEBMRA9KXINTPYCXWXEMYZIRDEXAHFJVSGZDDOGJHWBFPHYNDQPBYQUAHHAVTPSGBCKRGJHNLBWQRQLSVW9PHVDFGASIZWEYJFTNUQVBGVKLFWSPESLNFPAOVPXEKMCWAFVDCZSB99UHXECKWUXEHRFXKNH9PPDYTEBXUMQCASX");
    //         chai.expect(response[2].address.toTrytes().toString()).to.be.equal("XECWTYDA9UWNYZEVNDHFHFGEKGIFRGKARQG9UMRAESXYSTBTDSLEBLLWVAVVVBYYQZOIEZGIPIIL9BXIB");
    //         chai.expect(response[2].value.toNumber()).to.be.equal(0);
    //         chai.expect(response[2].obsoleteTag.toTrytes().toString()).to.be.equal("999999999999999999999999999");
    //         chai.expect(response[2].timestamp.toNumber()).to.be.equal(1519058554);
    //         chai.expect(response[2].currentIndex.toNumber()).to.be.equal(2);
    //         chai.expect(response[2].lastIndex.toNumber()).to.be.equal(2);
    //         chai.expect(response[2].bundle.toTrytes().toString()).to.be.equal("EWEUWXFPUJCCWJT9ANZ9UJHCTBKYK9CSHPCNRJLSIKZJDGGFDWUNCIBCKKNWALE9ZOVWVVGWCDUJUDSSD");
    //         chai.expect(response[2].trunkTransaction.toTrytes().toString()).to.be.equal("PWK9RFDCFL9NHLVXTRTOBYQLDTGDOKZEOZGVNEOOQSILOCTHCMVHVGAJMGAJUOSPCJ9JESXNATBL99999");
    //         chai.expect(response[2].branchTransaction.toTrytes().toString()).to.be.equal("CRTPYSKRCJPBCJMLGTYWSPQSIVRYCCZAGLJCSDR9BXWDKYLFUGZZFNH9EUSXGOCWHDJNJYLRFETUZ9999");
    //         chai.expect(response[2].tag.toTrytes().toString()).to.be.equal("999999999999999999999999999");
    //         chai.expect(response[2].attachmentTimestamp.toNumber()).to.be.equal(1519059539311);
    //         chai.expect(response[2].attachmentTimestampLowerBound.toNumber()).to.be.equal(0);
    //         chai.expect(response[2].attachmentTimestampUpperBound.toNumber()).to.be.equal(12);
    //         chai.expect(response[2].nonce.toTrytes().toString()).to.be.equal("AJNKZDXLQN9AYHXWIRTBGASOVXP");
    //     });
    // });

    // describe("isPromotable", () => {
    //     it("can fail with invalid transactionTail", async () => {
    //         const obj = new TransactionClient(apiClientStub);
    //         try {
    //             await obj.isPromotable(<any>"ABC");
    //         } catch (err) {
    //             chai.expect(err.message).to.contain("The transactionTail");
    //         }
    //     });

    //     it("can find out if tail hash is promotable", async () => {
    //         const obj = new TransactionClient(apiClientStub);

    //         apiClientStub.checkConsistency = sinon.stub().resolves({ state: true });

    //         const response = await obj.isPromotable(Hash.fromTrytes(Trytes.fromString("HSXHHMXFSXMU9BPHHUVZNNMPGMJGDLXAOICGIESRMNAVUWKIQLNCLXCEEOS9XZHTKNFIVHOLWPHCA9999")));

    //         chai.expect(response).to.be.equal(true);
    //     });
    // });

    describe("getAccountData", () => {
        it("can fail with invalid seed", async () => {
            const obj = new TransactionClient(apiClientStub);
            try {
                await obj.getAccountData(<any>"ABC");
            } catch (err) {
                chai.expect(err.message).to.contain("The seed");
            }
        });

        it("can find out if tail hash is promotable", async () => {
            const obj = new TransactionClient(apiClientStub);

            apiClientStub.checkConsistency = sinon.stub().resolves({ state: true });

            const response = await obj.isPromotable(Hash.fromTrytes(Trytes.fromString("HSXHHMXFSXMU9BPHHUVZNNMPGMJGDLXAOICGIESRMNAVUWKIQLNCLXCEEOS9XZHTKNFIVHOLWPHCA9999")));

            chai.expect(response).to.be.equal(true);
        });
    });

});
