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

► **address**(digests: *`number`[]*): `number`[]



*Defined in transactions/transactionSigning.ts:80*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| digests | `number`[]   |  - |





**Returns:** `number`[]





___

<a id="createchecksum"></a>

### «Static» createChecksum

► **createChecksum**(trits: *`number`[]*, checksumLength: *`number`*): `string`



*Defined in transactions/transactionSigning.ts:92*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trits | `number`[]   |  - |
| checksumLength | `number`   |  - |





**Returns:** `string`





___

<a id="digests"></a>

### «Static» digests

► **digests**(key: *`number`[]*): `number`[]



*Defined in transactions/transactionSigning.ts:41*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | `number`[]   |  - |





**Returns:** `number`[]





___

<a id="key"></a>

### «Static» key

► **key**(seed: *`Hash`*, index: *`number`*, length: *`number`*): `number`[]



*Defined in transactions/transactionSigning.ts:10*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  - |
| index | `number`   |  - |
| length | `number`   |  - |





**Returns:** `number`[]





___

<a id="signaturefragment"></a>

### «Static» signatureFragment

► **signatureFragment**(normalizedBundleFragment: *`number`[]*, keyFragment: *`number`[]*): `number`[]



*Defined in transactions/transactionSigning.ts:104*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| normalizedBundleFragment | `number`[]   |  - |
| keyFragment | `number`[]   |  - |





**Returns:** `number`[]





___


