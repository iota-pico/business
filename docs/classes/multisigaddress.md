[@iota-pico/business](../README.md) > [MultiSigAddress](../classes/multisigaddress.md)

# Class: MultiSigAddress

Address using multiple signatures.

## Hierarchy

**MultiSigAddress**

## Index

### Constructors

* [constructor](multisigaddress.md#constructor)

### Methods

* [absorb](multisigaddress.md#absorb)
* [finalize](multisigaddress.md#finalize)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MultiSigAddress**(): [MultiSigAddress](multisigaddress.md)

*Defined in [multiSig/multiSigAddress.ts:18](https://github.com/iota-pico/business/tree/master/src/multiSig/multiSigAddress.ts#L18*

Create a new instance of the MultiSigAddress.

**Returns:** [MultiSigAddress](multisigaddress.md)

___

## Methods

<a id="absorb"></a>

###  absorb

▸ **absorb**(digests: *`Trytes`[]*): `void`

*Defined in [multiSig/multiSigAddress.ts:33](https://github.com/iota-pico/business/tree/master/src/multiSig/multiSigAddress.ts#L33*

Absorb key digests.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| digests | `Trytes`[] |  The digests hashes to absorb. |

**Returns:** `void`

___
<a id="finalize"></a>

###  finalize

▸ **finalize**(digests?: *`Trytes`[]*): `Address`

*Defined in [multiSig/multiSigAddress.ts:49](https://github.com/iota-pico/business/tree/master/src/multiSig/multiSigAddress.ts#L49*

Finalizes and returns the multisig address in trytes.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` digests | `Trytes`[] |  The final digests hashes to absorb. |

**Returns:** `Address`
The multi signature address.

___

