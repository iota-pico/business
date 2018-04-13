[@iota-pico/business](../README.md) > [BundleHelper](../classes/bundlehelper.md)



# Class: BundleHelper


Helper class for signing bundles. Converted [https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js](https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js)

## Index

### Properties

* [NUMBER_OF_FRAGMENT_CHUNKS](bundlehelper.md#number_of_fragment_chunks)


### Methods

* [finalizeBundle](bundlehelper.md#finalizebundle)
* [isValid](bundlehelper.md#isvalid)
* [prepareBundle](bundlehelper.md#preparebundle)
* [signInputs](bundlehelper.md#signinputs)
* [signTransactions](bundlehelper.md#signtransactions)
* [validateSignatures](bundlehelper.md#validatesignatures)



---
## Properties
<a id="number_of_fragment_chunks"></a>

### «Static» NUMBER_OF_FRAGMENT_CHUNKS

**●  NUMBER_OF_FRAGMENT_CHUNKS**:  *`number`*  = 27

*Defined in [helpers/bundleHelper.ts:26](https://github.com/iotaeco/iota-pico-business/blob/be1d62c/src/helpers/bundleHelper.ts#L26)*





___


## Methods
<a id="finalizebundle"></a>

### «Static» finalizeBundle

► **finalizeBundle**(bundle: *`Bundle`*): `void`



*Defined in [helpers/bundleHelper.ts:340](https://github.com/iotaeco/iota-pico-business/blob/be1d62c/src/helpers/bundleHelper.ts#L340)*



Finalize a bundle.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundle | `Bundle`   |  The bundle to finalize. |





**Returns:** `void`





___

<a id="isvalid"></a>

### «Static» isValid

► **isValid**(bundle: *`Bundle`*): `boolean`



*Defined in [helpers/bundleHelper.ts:33](https://github.com/iotaeco/iota-pico-business/blob/be1d62c/src/helpers/bundleHelper.ts#L33)*



Is the bundle valid.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundle | `Bundle`   |  The bundle to check for validity. |





**Returns:** `boolean`
True if the bundle is valid.






___

<a id="preparebundle"></a>

### «Static» prepareBundle

► **prepareBundle**(timeService: *`ITimeService`*, transfers: *`Transfer`[]*): `object`



*Defined in [helpers/bundleHelper.ts:165](https://github.com/iotaeco/iota-pico-business/blob/be1d62c/src/helpers/bundleHelper.ts#L165)*



Prepare a bundle.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| timeService | `ITimeService`   |  To use for stamping the transactions. |
| transfers | `Transfer`[]   |  The transfers to add to the bundle. |





**Returns:** `object`





___

<a id="signinputs"></a>

### «Static» signInputs

► **signInputs**(seed: *`Hash`*, bundle: *`Bundle`*, transferOptions: *[TransferOptions](../#transferoptions)*, signatureMessageFragments: *`SignatureMessageFragment`[]*, inputs: *`Input`[]*, addedHMAC: *`boolean`*): `void`



*Defined in [helpers/bundleHelper.ts:237](https://github.com/iotaeco/iota-pico-business/blob/be1d62c/src/helpers/bundleHelper.ts#L237)*



Sign the input of the bundle.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  The seed to use for signing. |
| bundle | `Bundle`   |  The bundle to sign. |
| transferOptions | [TransferOptions](../#transferoptions)   |  Additional transfer options. |
| signatureMessageFragments | `SignatureMessageFragment`[]   |  The signature message fragemtns. |
| inputs | `Input`[]   |  The input for use. |
| addedHMAC | `boolean`   |  Has an HMAC been added. |





**Returns:** `void`





___

<a id="signtransactions"></a>

### «Static» signTransactions

► **signTransactions**(bundle: *`Bundle`*, index: *`number`*, firstUnsignedIndex: *`number`*, keyTrits: *`Int8Array`*, addressTrytes: *`string`*, security: *`AddressSecurity`*): `void`



*Defined in [helpers/bundleHelper.ts:288](https://github.com/iotaeco/iota-pico-business/blob/be1d62c/src/helpers/bundleHelper.ts#L288)*



Sign the trsnactions


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundle | `Bundle`   |  The bundle of transactions to sign. |
| index | `number`   |  The index to start. |
| firstUnsignedIndex | `number`   |  The first unsigned index. |
| keyTrits | `Int8Array`   |  The key trits. |
| addressTrytes | `string`   |  The address trytes. |
| security | `AddressSecurity`   |  The security level. |





**Returns:** `void`





___

<a id="validatesignatures"></a>

### «Static» validateSignatures

► **validateSignatures**(signedBundle: *`Bundle`*, inputAddress: *`Address`*): `boolean`



*Defined in [helpers/bundleHelper.ts:129](https://github.com/iotaeco/iota-pico-business/blob/be1d62c/src/helpers/bundleHelper.ts#L129)*



Validate signatures for each of the co-signers in the multi-signature to independently verify that a generated transaction with the corresponding signatures of the co-signers is valid.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| signedBundle | `Bundle`   |  The signed bundle to check the signatures. |
| inputAddress | `Address`   |  The address used to initiate the transfer. |





**Returns:** `boolean`
True is the signatures are valid.






___


