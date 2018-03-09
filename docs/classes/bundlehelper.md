[@iota-pico/business](../README.md) > [BundleHelper](../classes/bundlehelper.md)



# Class: BundleHelper


Helper class for signing bundles. Converted [https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js](https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js)

## Index

### Methods

* [address](bundlehelper.md#address)
* [digest](bundlehelper.md#digest)
* [finalizeBundle](bundlehelper.md#finalizebundle)
* [isValid](bundlehelper.md#isvalid)
* [normalizedHash](bundlehelper.md#normalizedhash)
* [prepareBundle](bundlehelper.md#preparebundle)
* [signInputs](bundlehelper.md#signinputs)
* [signTransactions](bundlehelper.md#signtransactions)
* [signatureMessageFragment](bundlehelper.md#signaturemessagefragment)
* [transactionHash](bundlehelper.md#transactionhash)
* [validateSignatures](bundlehelper.md#validatesignatures)



---
## Methods
<a id="address"></a>

### «Static» address

► **address**(digests: *`Int8Array`*): `Int8Array`



*Defined in [helpers/bundleHelper.ts:422](https://github.com/iotaeco/iota-pico-business/blob/77d04c8/src/helpers/bundleHelper.ts#L422)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| digests | `Int8Array`   |  - |





**Returns:** `Int8Array`





___

<a id="digest"></a>

### «Static» digest

► **digest**(normalizedBundleFragment: *`Int8Array`*, signatureMessageFragmentTrits: *`Int8Array`*): `Int8Array`



*Defined in [helpers/bundleHelper.ts:397](https://github.com/iotaeco/iota-pico-business/blob/77d04c8/src/helpers/bundleHelper.ts#L397)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| normalizedBundleFragment | `Int8Array`   |  - |
| signatureMessageFragmentTrits | `Int8Array`   |  - |





**Returns:** `Int8Array`





___

<a id="finalizebundle"></a>

### «Static» finalizeBundle

► **finalizeBundle**(bundle: *`Bundle`*): `void`



*Defined in [helpers/bundleHelper.ts:314](https://github.com/iotaeco/iota-pico-business/blob/77d04c8/src/helpers/bundleHelper.ts#L314)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundle | `Bundle`   |  - |





**Returns:** `void`





___

<a id="isvalid"></a>

### «Static» isValid

► **isValid**(bundle: *`Bundle`*): `boolean`



*Defined in [helpers/bundleHelper.ts:31](https://github.com/iotaeco/iota-pico-business/blob/77d04c8/src/helpers/bundleHelper.ts#L31)*



Is the bundle valid.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundle | `Bundle`   |  The bundle to check for validity. |





**Returns:** `boolean`
True if the bundle is valid.






___

<a id="normalizedhash"></a>

### «Static» normalizedHash

► **normalizedHash**(bundleHash: *`Hash`*): `Int8Array`



*Defined in [helpers/bundleHelper.ts:359](https://github.com/iotaeco/iota-pico-business/blob/77d04c8/src/helpers/bundleHelper.ts#L359)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundleHash | `Hash`   |  - |





**Returns:** `Int8Array`





___

<a id="preparebundle"></a>

### «Static» prepareBundle

► **prepareBundle**(timeService: *`ITimeService`*, transfers: *`Transfer`[]*): `object`



*Defined in [helpers/bundleHelper.ts:158](https://github.com/iotaeco/iota-pico-business/blob/77d04c8/src/helpers/bundleHelper.ts#L158)*



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



*Defined in [helpers/bundleHelper.ts:222](https://github.com/iotaeco/iota-pico-business/blob/77d04c8/src/helpers/bundleHelper.ts#L222)*



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



*Defined in [helpers/bundleHelper.ts:265](https://github.com/iotaeco/iota-pico-business/blob/77d04c8/src/helpers/bundleHelper.ts#L265)*



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



*Defined in [helpers/bundleHelper.ts:449](https://github.com/iotaeco/iota-pico-business/blob/77d04c8/src/helpers/bundleHelper.ts#L449)*



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



*Defined in [helpers/bundleHelper.ts:435](https://github.com/iotaeco/iota-pico-business/blob/77d04c8/src/helpers/bundleHelper.ts#L435)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transaction | `Transaction`   |  - |





**Returns:** `Hash`





___

<a id="validatesignatures"></a>

### «Static» validateSignatures

► **validateSignatures**(signedBundle: *`Bundle`*, inputAddress: *`Address`*): `boolean`



*Defined in [helpers/bundleHelper.ts:127](https://github.com/iotaeco/iota-pico-business/blob/77d04c8/src/helpers/bundleHelper.ts#L127)*



Validate signatures for each of the co-signers in the multi-signature to independently verify that a generated transaction with the corresponding signatures of the co-signers is valid.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| signedBundle | `Bundle`   |  The signed bundle to check the signatures. |
| inputAddress | `Address`   |  The address used to initiate the transfer. |





**Returns:** `boolean`
True is the signatures are valid.






___


