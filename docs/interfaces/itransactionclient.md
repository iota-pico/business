[@iota-pico/business](../README.md) > [ITransactionClient](../interfaces/itransactionclient.md)



# Interface: ITransactionClient


Represents a client for performing transactions using the api if required.
*__interface__*: 


## Implemented by

* [TransactionClient](../classes/transactionclient.md)


## Methods
<a id="findtransactions"></a>

###  findTransactions

► **findTransactions**(bundles?: *`Hash`[]*, addresses?: *`Address`[]*, tags?: *`Tag`[]*, approvees?: *`Hash`[]*): `Promise`.<`Hash`[]>



*Defined in interfaces/ITransactionClient.ts:27*



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



*Defined in interfaces/ITransactionClient.ts:50*



Generates addresses index-based.


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



*Defined in interfaces/ITransactionClient.ts:60*



Generates address which havent been used using apis.


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



*Defined in interfaces/ITransactionClient.ts:71*



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



*Defined in interfaces/ITransactionClient.ts:39*



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



*Defined in interfaces/ITransactionClient.ts:33*



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



*Defined in interfaces/ITransactionClient.ts:18*



Returns the list of transaction in progress.




**Returns:** `Promise`.<`Hash`[]>
Promise which resolves to a list of hashes or rejects with error.






___

<a id="preparetransfers"></a>

###  prepareTransfers

► **prepareTransfers**(seed: *`Hash`*, transfers: *`Transfer`[]*, inputs: *`Input`[]*, remainderAddress: *`Address`*, security: *`AddressSecurity`*, hmacKey: *`Trytes`*): `Promise`.<`Trytes`[]>



*Defined in interfaces/ITransactionClient.ts:83*



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


