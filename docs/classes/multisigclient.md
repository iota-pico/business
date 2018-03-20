[@iota-pico/business](../README.md) > [MultiSigClient](../classes/multisigclient.md)



# Class: MultiSigClient


Multiple signatures. Converted [https://github.com/iotaledger/iota.lib.js/blob/master/lib/multisig/multisig.js](https://github.com/iotaledger/iota.lib.js/blob/master/lib/multisig/multisig.js)

## Index

### Constructors

* [constructor](multisigclient.md#constructor)


### Methods

* [prepareTransfer](multisigclient.md#preparetransfer)
* [addSignature](multisigclient.md#addsignature)
* [getDigest](multisigclient.md#getdigest)
* [getKey](multisigclient.md#getkey)
* [validateAddress](multisigclient.md#validateaddress)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new MultiSigClient**(apiClient: *`IApiClient`*, timeService?: *`ITimeService`*): [MultiSigClient](multisigclient.md)


*Defined in [multiSig/multiSigClient.ts:31](https://github.com/iotaeco/iota-pico-business/blob/ab10af2/src/multiSig/multiSigClient.ts#L31)*



Create a new instance of the MultiSigClient.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| apiClient | `IApiClient`  | - |   An API Client to communicate through. |
| timeService | `ITimeService`  |  new TimeService() |   A class which can provide the time. |





**Returns:** [MultiSigClient](multisigclient.md)

---


## Methods
<a id="preparetransfer"></a>

###  prepareTransfer

► **prepareTransfer**(address: *`Address`*, securitySum: *`number`*, balance: *`number`*, transfers: *`Transfer`[]*, remainderAddress?: *`Address`*): `Promise`.<`Bundle`>



*Defined in [multiSig/multiSigClient.ts:163](https://github.com/iotaeco/iota-pico-business/blob/ab10af2/src/multiSig/multiSigClient.ts#L163)*



Initiates the creation of a new transfer by generating an empty bundle with the correct number of bundle entries to be later used for the signing process.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| address | `Address`   |  Address which has sufficient balance and is controlled by the co-signers. |
| securitySum | `number`   |  the sum of the security levels from all cosigners chosen during the private key generation (getKey / getDigest) |
| balance | `number`   |  The balance available for the transfer, if 0 will call getBalances to lookup available. |
| transfers | `Transfer`[]   |  The transfers to perform. |
| remainderAddress | `Address`   |  If there is a remainder after the transfer then send the amount to this address. |





**Returns:** `Promise`.<`Bundle`>





___

<a id="addsignature"></a>

### «Static» addSignature

► **addSignature**(bundle: *`Bundle`*, address: *`Address`*, key: *`Trytes`*): `void`



*Defined in [multiSig/multiSigClient.ts:111](https://github.com/iotaeco/iota-pico-business/blob/ab10af2/src/multiSig/multiSigClient.ts#L111)*



Adds the cosigner signatures to the corresponding bundle transactions.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundle | `Bundle`   |  The bundle to sign. |
| address | `Address`   |  The address to match the transactions. |
| key | `Trytes`   |  The key to sign the transactions with. |





**Returns:** `void`





___

<a id="getdigest"></a>

### «Static» getDigest

► **getDigest**(seed: *`Hash`*, index: *`number`*, security: *`AddressSecurity`*): `Trytes`



*Defined in [multiSig/multiSigClient.ts:71](https://github.com/iotaeco/iota-pico-business/blob/ab10af2/src/multiSig/multiSigClient.ts#L71)*



Get the digest value of a seed.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  The seed to get the digest for. |
| index | `number`   |  The address index to use. |
| security | `AddressSecurity`   |  The security level to use. |





**Returns:** `Trytes`
The trytes for the digest.






___

<a id="getkey"></a>

### «Static» getKey

► **getKey**(seed: *`Hash`*, index: *`number`*, security: *`AddressSecurity`*): `Trytes`



*Defined in [multiSig/multiSigClient.ts:50](https://github.com/iotaeco/iota-pico-business/blob/ab10af2/src/multiSig/multiSigClient.ts#L50)*



Get the key value of a seed.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  The seed to get the key for. |
| index | `number`   |  The address index to use. |
| security | `AddressSecurity`   |  The security level to use. |





**Returns:** `Trytes`
The trytes for the key.






___

<a id="validateaddress"></a>

### «Static» validateAddress

► **validateAddress**(address: *`Address`*, digests: *`Trytes`[]*): `boolean`



*Defined in [multiSig/multiSigClient.ts:93](https://github.com/iotaeco/iota-pico-business/blob/ab10af2/src/multiSig/multiSigClient.ts#L93)*



Validate address.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| address | `Address`   |  The address to validate against the digests. |
| digests | `Trytes`[]   |  The digests to use to validate the address. |





**Returns:** `boolean`
True if the address matches the digests.






___


