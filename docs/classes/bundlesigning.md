[@iota-pico/business](../README.md) > [BundleSigning](../classes/bundlesigning.md)



# Class: BundleSigning


Helper class for signing bundles. Converted [https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js](https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js)

## Index

### Methods

* [address](bundlesigning.md#address)
* [digest](bundlesigning.md#digest)
* [finalizeBundle](bundlesigning.md#finalizebundle)
* [isValid](bundlesigning.md#isvalid)
* [normalizedBundle](bundlesigning.md#normalizedbundle)
* [signInputs](bundlesigning.md#signinputs)
* [transactionHash](bundlesigning.md#transactionhash)
* [validateSignatures](bundlesigning.md#validatesignatures)



---
## Methods
<a id="address"></a>

### «Static» address

► **address**(digests: *`Int8Array`*): `Int8Array`



*Defined in transactions/bundleSigning.ts:332*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| digests | `Int8Array`   |  - |





**Returns:** `Int8Array`





___

<a id="digest"></a>

### «Static» digest

► **digest**(normalizedBundleFragment: *`Int8Array`*, signatureMessageFragmentTrits: *`Int8Array`*): `Int8Array`



*Defined in transactions/bundleSigning.ts:307*



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



*Defined in transactions/bundleSigning.ts:113*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundle | `Bundle`   |  - |





**Returns:** `void`





___

<a id="isvalid"></a>

### «Static» isValid

► **isValid**(transactions: *`Transaction`[]*): `boolean`



*Defined in transactions/bundleSigning.ts:196*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transactions | `Transaction`[]   |  - |





**Returns:** `boolean`





___

<a id="normalizedbundle"></a>

### «Static» normalizedBundle

► **normalizedBundle**(bundleHash: *`Hash`*): `Int8Array`



*Defined in transactions/bundleSigning.ts:158*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundleHash | `Hash`   |  - |





**Returns:** `Int8Array`





___

<a id="signinputs"></a>

### «Static» signInputs

► **signInputs**(seed: *`Hash`*, bundle: *`Bundle`*, transferOptions: *[TransferOptions](../#transferoptions)*, signatureMessageFragments: *`SignatureMessageFragment`[]*, inputs: *`Input`[]*, addedHMAC: *`boolean`*): `Transaction`[]



*Defined in transactions/bundleSigning.ts:23*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  - |
| bundle | `Bundle`   |  - |
| transferOptions | [TransferOptions](../#transferoptions)   |  - |
| signatureMessageFragments | `SignatureMessageFragment`[]   |  - |
| inputs | `Input`[]   |  - |
| addedHMAC | `boolean`   |  - |





**Returns:** `Transaction`[]





___

<a id="transactionhash"></a>

### «Static» transactionHash

► **transactionHash**(transaction: *`Transaction`*): `Hash`



*Defined in transactions/bundleSigning.ts:345*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transaction | `Transaction`   |  - |





**Returns:** `Hash`





___

<a id="validatesignatures"></a>

### «Static» validateSignatures

► **validateSignatures**(expectedAddress: *`Address`*, signatureMessageFragments: *`SignatureMessageFragment`[]*, bundleHash: *`Hash`*): `boolean`



*Defined in transactions/bundleSigning.ts:283*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| expectedAddress | `Address`   |  - |
| signatureMessageFragments | `SignatureMessageFragment`[]   |  - |
| bundleHash | `Hash`   |  - |





**Returns:** `boolean`





___


