[@iota-pico/business](../README.md) > [TransactionClient](../classes/transactionclient.md)



# Class: TransactionClient


Default implementation of the ITransactionClient.

## Implements

* [ITransactionClient](../interfaces/itransactionclient.md)

## Index

### Constructors

* [constructor](transactionclient.md#constructor)


### Methods

* [findTransactions](transactionclient.md#findtransactions)
* [getAddressesByIndex](transactionclient.md#getaddressesbyindex)
* [getAddressesToUnused](transactionclient.md#getaddressestounused)
* [getInputs](transactionclient.md#getinputs)
* [getLatestInclusion](transactionclient.md#getlatestinclusion)
* [getTransactionsDetails](transactionclient.md#gettransactionsdetails)
* [getTransactionsInProgress](transactionclient.md#gettransactionsinprogress)
* [prepareTransfers](transactionclient.md#preparetransfers)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new TransactionClient**(apiClient: *`IApiClient`*, timeProvider?: *[ITimeProvider](../interfaces/itimeprovider.md)*): [TransactionClient](transactionclient.md)


*Defined in transactions/transactionClient.ts:36*



Create a new instance of the TransactionClient.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| apiClient | `IApiClient`  | - |   An API Client to communicate through. |
| timeProvider | [ITimeProvider](../interfaces/itimeprovider.md)  |  new TimeProvider() |   A class which can provide the time. |





**Returns:** [TransactionClient](transactionclient.md)

---


## Methods
<a id="findtransactions"></a>

###  findTransactions

► **findTransactions**(bundles?: *`Hash`[]*, addresses?: *`Address`[]*, tags?: *`Tag`[]*, approvees?: *`Hash`[]*): `Promise`.<`Hash`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[findTransactions](../interfaces/itransactionclient.md#findtransactions)*

*Defined in transactions/transactionClient.ts:68*



Find the transactions which match the specified input and return. All input values are lists, for which a list of return values (transaction hashes), in the same order, is returned for all individual elements. The input fields can either be bundles, addresses, tags or approvees. Using multiple of these input fields returns the intersection of the values.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundles | `Hash`[]   |  - |
| addresses | `Address`[]   |  - |
| tags | `Tag`[]   |  - |
| approvees | `Hash`[]   |  - |





**Returns:** `Promise`.<`Hash`[]>
Promise which resolves with a list of hashes or rejects with error.






___

<a id="getaddressesbyindex"></a>

###  getAddressesByIndex

► **getAddressesByIndex**(seed: *`Hash`*, startIndex: *`number`*, createCount: *`number`*, includeChecksum: *`boolean`*, security: *`AddressSecurity`*): `Promise`.<`Address`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[getAddressesByIndex](../interfaces/itransactionclient.md#getaddressesbyindex)*

*Defined in transactions/transactionClient.ts:149*



Generates new addresses index-based.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  The seed to generate the addresses from. |
| startIndex | `number`   |  The start index to generate addresses. |
| createCount | `number`   |  The number of addresses to create. |
| includeChecksum | `boolean`   |  Includes the checksum on addresses. |
| security | `AddressSecurity`   |  The security level at which to create the addresses. |





**Returns:** `Promise`.<`Address`[]>
Promise which resolves to the list of addresses or rejects with error.






___

<a id="getaddressestounused"></a>

###  getAddressesToUnused

► **getAddressesToUnused**(seed: *`Hash`*, startIndex: *`number`*, includeChecksum: *`boolean`*, security: *`AddressSecurity`*): `Promise`.<`Address`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[getAddressesToUnused](../interfaces/itransactionclient.md#getaddressestounused)*

*Defined in transactions/transactionClient.ts:182*



Generates new address which havent been used using apis.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  The seed to generate the addresses from. |
| startIndex | `number`   |  The start index to generate addresses. |
| includeChecksum | `boolean`   |  Includes the checksum on addresses. |
| security | `AddressSecurity`   |  The security level at which to create the addresses. |





**Returns:** `Promise`.<`Address`[]>
Promise which resolves to an addresses list, the first unused address is the last in the list or rejects with error.






___

<a id="getinputs"></a>

###  getInputs

► **getInputs**(seed: *`Hash`*, startIndex: *`number`*, endIndex: *`number`*, security: *`AddressSecurity`*, totalRequired: *`number`*): `Promise`.<`object`>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[getInputs](../interfaces/itransactionclient.md#getinputs)*

*Defined in transactions/transactionClient.ts:235*



Get the input data for a range of addresses.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  The seed to get the input data for. |
| startIndex | `number`   |  The start index to get the addresses. |
| endIndex | `number`   |  The end index to get the addresses. |
| security | `AddressSecurity`   |  The security level used to create the addresses. |
| totalRequired | `number`   |  The threshold at which total balance to stop gathering addresses. |





**Returns:** `Promise`.<`object`>
Promise which resolves to the inputs for each address or rejects with error.






___

<a id="getlatestinclusion"></a>

###  getLatestInclusion

► **getLatestInclusion**(transactionHashes: *`Hash`[]*): `Promise`.<`boolean`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[getLatestInclusion](../interfaces/itransactionclient.md#getlatestinclusion)*

*Defined in transactions/transactionClient.ts:118*



Get the inclusion states of a list of transaction hashes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transactionHashes | `Hash`[]   |  - |





**Returns:** `Promise`.<`boolean`[]>
Promise which resolves to the list of inclusion states or rejects with error.






___

<a id="gettransactionsdetails"></a>

###  getTransactionsDetails

► **getTransactionsDetails**(transactionHashes: *`Hash`[]*): `Promise`.<`Transaction`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[getTransactionsDetails](../interfaces/itransactionclient.md#gettransactionsdetails)*

*Defined in transactions/transactionClient.ts:97*



Get the transaction details of specific transactions.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transactionHashes | `Hash`[]   |  - |





**Returns:** `Promise`.<`Transaction`[]>
Promise which resolves to the list of transactions or rejects with error.






___

<a id="gettransactionsinprogress"></a>

###  getTransactionsInProgress

► **getTransactionsInProgress**(): `Promise`.<`Hash`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[getTransactionsInProgress](../interfaces/itransactionclient.md#gettransactionsinprogress)*

*Defined in transactions/transactionClient.ts:52*



Returns the list of transaction in progress.




**Returns:** `Promise`.<`Hash`[]>
Promise which resolves to a list of hashes or rejects with error.






___

<a id="preparetransfers"></a>

###  prepareTransfers

► **prepareTransfers**(seed: *`Hash`*, transfers: *`Transfer`[]*, inputs: *`Input`[]*, remainderAddress: *`Address`*, security: *`AddressSecurity`*, hmacKey: *`Trytes`*): `Promise`.<`Trytes`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[prepareTransfers](../interfaces/itransactionclient.md#preparetransfers)*

*Defined in transactions/transactionClient.ts:298*



Prepares transfer by generating bundle, finding and signing inputs.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  The seed to prepare the transfer for. |
| transfers | `Transfer`[]   |  The transfers to prepare. |
| inputs | `Input`[]   |  List of inputs used for funding the transfer. |
| remainderAddress | `Address`   |  If defined, this address will be used for sending the remainder value (of the inputs) to. |
| security | `AddressSecurity`   |  Security level to be used for the private key / addresses. |
| hmacKey | `Trytes`   |  Hmac key to sign the bundle. |





**Returns:** `Promise`.<`Trytes`[]>
Promise which resolves to the array of Trytes for the transfer or rejects with error.






___


