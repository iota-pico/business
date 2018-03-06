[@iota-pico/business](../README.md) > [Signing](../classes/signing.md)



# Class: Signing


Helper class for signing transactions. Original [https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js](https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js)

## Index

### Methods

* [address](signing.md#address)
* [createChecksum](signing.md#createchecksum)
* [digests](signing.md#digests)
* [key](signing.md#key)
* [validateSignatures](signing.md#validatesignatures)



---
## Methods
<a id="address"></a>

### «Static» address

► **address**(digests: *`Int8Array`*): `Int8Array`



*Defined in sign/signing.ts:88*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| digests | `Int8Array`   |  - |





**Returns:** `Int8Array`





___

<a id="createchecksum"></a>

### «Static» createChecksum

► **createChecksum**(trits: *`Int8Array`*, checksumLength: *`number`*): `string`



*Defined in sign/signing.ts:101*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `Int8Array`   |  - |
| checksumLength | `number`   |  - |





**Returns:** `string`





___

<a id="digests"></a>

### «Static» digests

► **digests**(key: *`Int8Array`*): `Int8Array`



*Defined in sign/signing.ts:47*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | `Int8Array`   |  - |





**Returns:** `Int8Array`





___

<a id="key"></a>

### «Static» key

► **key**(seed: *`Hash`*, index: *`number`*, length: *`AddressSecurity`*): `Int8Array`



*Defined in sign/signing.ts:15*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  - |
| index | `number`   |  - |
| length | `AddressSecurity`   |  - |





**Returns:** `Int8Array`





___

<a id="validatesignatures"></a>

### «Static» validateSignatures

► **validateSignatures**(expectedAddress: *`Address`*, signatureMessageFragments: *`SignatureMessageFragment`[]*, bundleHash: *`Hash`*): `boolean`



*Defined in sign/signing.ts:114*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| expectedAddress | `Address`   |  - |
| signatureMessageFragments | `SignatureMessageFragment`[]   |  - |
| bundleHash | `Hash`   |  - |





**Returns:** `boolean`





___


