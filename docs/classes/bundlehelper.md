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



*Defined in helpers/bundleHelper.ts:406*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| digests | `Int8Array`   |  - |





**Returns:** `Int8Array`





___

<a id="digest"></a>

### «Static» digest

► **digest**(normalizedBundleFragment: *`Int8Array`*, signatureMessageFragmentTrits: *`Int8Array`*): `Int8Array`



*Defined in helpers/bundleHelper.ts:381*



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



*Defined in helpers/bundleHelper.ts:181*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundle | `Bundle`   |  - |





**Returns:** `void`





___

<a id="isvalid"></a>

### «Static» isValid

► **isValid**(bundle: *`Bundle`*): `boolean`



*Defined in helpers/bundleHelper.ts:264*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundle | `Bundle`   |  - |





**Returns:** `boolean`





___

<a id="normalizedhash"></a>

### «Static» normalizedHash

► **normalizedHash**(bundleHash: *`Hash`*): `Int8Array`



*Defined in helpers/bundleHelper.ts:226*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundleHash | `Hash`   |  - |





**Returns:** `Int8Array`





___

<a id="preparebundle"></a>

### «Static» prepareBundle

► **prepareBundle**(timeService: *`ITimeService`*, transfers: *`Transfer`[]*): `object`



*Defined in helpers/bundleHelper.ts:25*



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



*Defined in helpers/bundleHelper.ts:89*



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



*Defined in helpers/bundleHelper.ts:132*



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



*Defined in helpers/bundleHelper.ts:433*



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



*Defined in helpers/bundleHelper.ts:419*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transaction | `Transaction`   |  - |





**Returns:** `Hash`





___

<a id="validatesignatures"></a>

### «Static» validateSignatures

► **validateSignatures**(signedBundle: *`Bundle`*, inputAddress: *`Address`*): `boolean`



*Defined in helpers/bundleHelper.ts:354*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| signedBundle | `Bundle`   |  - |
| inputAddress | `Address`   |  - |





**Returns:** `boolean`





___


