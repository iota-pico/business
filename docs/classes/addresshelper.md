[@iota-pico/business](../README.md) > [AddressHelper](../classes/addresshelper.md)

# Class: AddressHelper

Helper class for address signing. Original [https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js](https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js)
*__internal__*: 

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

*Defined in [helpers/addressHelper.ts:16](https://github.com/iota-pico/business/blob/1a1476b/src/helpers/addressHelper.ts#L16)*

Create a checksum for the trits.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `Int8Array`   |  The trits to create the checksum for. |
| checksumLength | `number`   |  The length of the checksum. |

**Returns:** `string`
the checksum as trytes.

___

