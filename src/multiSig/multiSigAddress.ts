import { ArrayHelper } from "@iota-pico/core/dist/helpers/arrayHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { SpongeFactory } from "@iota-pico/crypto/dist/factories/spongeFactory";
import { ISponge } from "@iota-pico/crypto/dist/interfaces/ISponge";
import { Address } from "@iota-pico/data/dist/data/address";
import { Trits } from "@iota-pico/data/dist/data/trits";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { BusinessError } from "../error/businessError";

/**
 * Address using multiple signatures.
 */
export class MultiSigAddress {
    /* @internal */
    private readonly _kerl: ISponge;

    /* @internal */
    private readonly _hashLength: number;

    /**
     * Create a new instance of the MultiSigAddress.
     */
    constructor() {
        this._kerl = SpongeFactory.instance().create("kerl");
        this._hashLength = this._kerl.getConstants().HASH_LENGTH;
        this._kerl.initialize();
    }

    /**
     * Absorb key digests.
     * @param digests The digests hashes to absorb.
     */
    public absorb(digests: Trytes[]): void {
        if (!ArrayHelper.isTyped(digests, Trytes)) {
            throw new BusinessError("The digests should be an array of type Trytes");
        }
        for (let i = 0; i < digests.length; i++) {
            const digestTrits = Trits.fromTrytes(digests[i]).toArray();

            this._kerl.absorb(digestTrits, 0, digestTrits.length);
        }
    }

    /**
     * Finalizes and returns the multisig address in trytes.
     * @param digests The final digests hashes to absorb.
     * @returns The multi signature address.
     */
    public finalize(digests?: Trytes[]): Address {
        if (!ObjectHelper.isEmpty(digests)) {
            this.absorb(digests);
        }

        const addressTrits = new Int8Array(this._hashLength);
        this._kerl.squeeze(addressTrits, 0, addressTrits.length);

        return Address.fromTrytes(Trits.fromArray(addressTrits).toTrytes());
    }
}
