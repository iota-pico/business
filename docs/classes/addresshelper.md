[@iota-pico/business](../README.md) > [AddressHelper](../classes/addresshelper.md)

# Class: AddressHelper

Helper class for address signing. Original [https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js](https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js)

## Hierarchy

**AddressHelper**

## Index

### Methods

* [createChecksum](addresshelper.md#createchecksum)

---

## Methods

<a id="createchecksum"></a>

### `<Static>` createChecksum

▸ **createChecksum**(trits: *`Int8Array`*, checksumLength: *`number`*): `string`

*Defined in [helpers/addressHelper.ts:15](https://github.com/iota-pico/business/tree/master/src/helpers/addressHelper.ts#L15*

Create a checksum for the trits.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| trits | `Int8Array` |  The trits to create the checksum for. |
| checksumLength | `number` |  The length of the checksum. |

**Returns:** `string`
the checksum as trytes.

___

