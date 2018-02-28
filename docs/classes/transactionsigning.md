[@iota-pico/business](../README.md) > [TransactionSigning](../classes/transactionsigning.md)



# Class: TransactionSigning


Helper class for signing transactions. Original [https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js](https://github.com/iotaledger/iota.lib.js/blob/master/lib/crypto/signing/signing.js)

## Index

### Methods

* [address](transactionsigning.md#address)
* [createChecksum](transactionsigning.md#createchecksum)
* [digests](transactionsigning.md#digests)
* [key](transactionsigning.md#key)
* [signatureFragment](transactionsigning.md#signaturefragment)



---
## Methods
<a id="address"></a>

### «Static» address

► **address**(digests: *`Int8Array`*): `Int8Array`



*Defined in transactions/transactionSigning.ts:81*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| digests | `Int8Array`   |  - |





**Returns:** `Int8Array`





___

<a id="createchecksum"></a>

### «Static» createChecksum

► **createChecksum**(trits: *`Int8Array`*, checksumLength: *`number`*): `string`



*Defined in transactions/transactionSigning.ts:93*



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



*Defined in transactions/transactionSigning.ts:41*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | `Int8Array`   |  - |





**Returns:** `Int8Array`





___

<a id="key"></a>

### «Static» key

► **key**(seed: *`Hash`*, index: *`number`*, length: *`number`*): `Int8Array`



*Defined in transactions/transactionSigning.ts:10*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  - |
| index | `number`   |  - |
| length | `number`   |  - |





**Returns:** `Int8Array`





___

<a id="signaturefragment"></a>

### «Static» signatureFragment

► **signatureFragment**(normalizedBundleFragment: *`Int8Array`*, keyFragment: *`Int8Array`*): `Int8Array`



*Defined in transactions/transactionSigning.ts:105*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| normalizedBundleFragment | `Int8Array`   |  - |
| keyFragment | `Int8Array`   |  - |





**Returns:** `Int8Array`





___


