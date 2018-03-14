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
* [signatureMessageFragment](bundlehelper.md#signaturemessagefragment)
* [transactionHash](bundlehelper.md#transactionhash)
* [validateSignatures](bundlehelper.md#validatesignatures)



---
## Properties
<a id="number_of_fragment_chunks"></a>

### «Static» NUMBER_OF_FRAGMENT_CHUNKS

**●  NUMBER_OF_FRAGMENT_CHUNKS**:  *`number`*  = 27

*Defined in [helpers/bundleHelper.ts:26](https://github.com/iotaeco/iota-pico-business/blob/8515434/src/helpers/bundleHelper.ts#L26)*





___


## Methods
<a id="finalizebundle"></a>

### «Static» finalizeBundle

► **finalizeBundle**(bundle: *`Bundle`*): `void`



*Defined in [helpers/bundleHelper.ts:316](https://github.com/iotaeco/iota-pico-business/blob/8515434/src/helpers/bundleHelper.ts#L316)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundle | `Bundle`   |  - |





**Returns:** `void`





___

<a id="isvalid"></a>

### «Static» isValid

► **isValid**(bundle: *`Bundle`*): `boolean`



*Defined in [helpers/bundleHelper.ts:33](https://github.com/iotaeco/iota-pico-business/blob/8515434/src/helpers/bundleHelper.ts#L33)*



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



*Defined in [helpers/bundleHelper.ts:160](https://github.com/iotaeco/iota-pico-business/blob/8515434/src/helpers/bundleHelper.ts#L160)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| timeService | `ITimeService`   |  - |
| transfers | `Transfer`[]   |  - |





**Returns:** `object`





___

<a id="signinputs"></a>

### «Static» signInputs

► **signInputs**(seed: *`Hash`*, bundle: *`Bundle`*, transferOptions: *[TransferOptions](../#transferoptions)*, signatureMessageFragments: *`SignatureMessageFragment`[]*, inputs: *`Input`[]*, addedHMAC: *`boolean`*): `void`



*Defined in [helpers/bundleHelper.ts:224](https://github.com/iotaeco/iota-pico-business/blob/8515434/src/helpers/bundleHelper.ts#L224)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  - |
| bundle | `Bundle`   |  - |
| transferOptions | [TransferOptions](../#transferoptions)   |  - |
| signatureMessageFragments | `SignatureMessageFragment`[]   |  - |
| inputs | `Input`[]   |  - |
| addedHMAC | `boolean`   |  - |





**Returns:** `void`





___

<a id="signtransactions"></a>

### «Static» signTransactions

► **signTransactions**(bundle: *`Bundle`*, index: *`number`*, firstUnsignedIndex: *`number`*, keyTrits: *`Int8Array`*, addressTrytes: *`string`*, security: *`AddressSecurity`*): `void`



*Defined in [helpers/bundleHelper.ts:267](https://github.com/iotaeco/iota-pico-business/blob/8515434/src/helpers/bundleHelper.ts#L267)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundle | `Bundle`   |  - |
| index | `number`   |  - |
| firstUnsignedIndex | `number`   |  - |
| keyTrits | `Int8Array`   |  - |
| addressTrytes | `string`   |  - |
| security | `AddressSecurity`   |  - |





**Returns:** `void`





___

<a id="signaturemessagefragment"></a>

### «Static» signatureMessageFragment

► **signatureMessageFragment**(normalizedBundleFragment: *`Int8Array`*, keyFragment: *`Int8Array`*): `Int8Array`



*Defined in [helpers/bundleHelper.ts:375](https://github.com/iotaeco/iota-pico-business/blob/8515434/src/helpers/bundleHelper.ts#L375)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| normalizedBundleFragment | `Int8Array`   |  - |
| keyFragment | `Int8Array`   |  - |





**Returns:** `Int8Array`





___

<a id="transactionhash"></a>

### «Static» transactionHash

► **transactionHash**(transaction: *`Transaction`*): `Hash`



*Defined in [helpers/bundleHelper.ts:361](https://github.com/iotaeco/iota-pico-business/blob/8515434/src/helpers/bundleHelper.ts#L361)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transaction | `Transaction`   |  - |





**Returns:** `Hash`





___

<a id="validatesignatures"></a>

### «Static» validateSignatures

► **validateSignatures**(signedBundle: *`Bundle`*, inputAddress: *`Address`*): `boolean`



*Defined in [helpers/bundleHelper.ts:129](https://github.com/iotaeco/iota-pico-business/blob/8515434/src/helpers/bundleHelper.ts#L129)*



Validate signatures for each of the co-signers in the multi-signature to independently verify that a generated transaction with the corresponding signatures of the co-signers is valid.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| signedBundle | `Bundle`   |  The signed bundle to check the signatures. |
| inputAddress | `Address`   |  The address used to initiate the transfer. |





**Returns:** `boolean`
True is the signatures are valid.






___


