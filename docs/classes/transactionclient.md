[@iota-pico/business](../README.md) > [TransactionClient](../classes/transactionclient.md)



# Class: TransactionClient


Default implementation of the ITransactionClient.

## Implements

* [ITransactionClient](../interfaces/itransactionclient.md)

## Index

### Constructors

* [constructor](transactionclient.md#constructor)


### Methods

* [attachToTangle](transactionclient.md#attachtotangle)
* [findTransactionObjects](transactionclient.md#findtransactionobjects)
* [findTransactions](transactionclient.md#findtransactions)
* [getAccountData](transactionclient.md#getaccountdata)
* [getAddressesByIndex](transactionclient.md#getaddressesbyindex)
* [getAddressesToUnused](transactionclient.md#getaddressestounused)
* [getBundle](transactionclient.md#getbundle)
* [getInputs](transactionclient.md#getinputs)
* [getLatestInclusion](transactionclient.md#getlatestinclusion)
* [getNewAddress](transactionclient.md#getnewaddress)
* [getTransactionsInProgress](transactionclient.md#gettransactionsinprogress)
* [getTransactionsObjects](transactionclient.md#gettransactionsobjects)
* [getTransfers](transactionclient.md#gettransfers)
* [initialize](transactionclient.md#initialize)
* [isPromotable](transactionclient.md#ispromotable)
* [isReattachable](transactionclient.md#isreattachable)
* [prepareTransfers](transactionclient.md#preparetransfers)
* [promoteTransaction](transactionclient.md#promotetransaction)
* [reattachBundle](transactionclient.md#reattachbundle)
* [rebroadcastBundle](transactionclient.md#rebroadcastbundle)
* [sendTransactions](transactionclient.md#sendtransactions)
* [sendTransfer](transactionclient.md#sendtransfer)
* [traverseBundle](transactionclient.md#traversebundle)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new TransactionClient**(apiClient: *`IApiClient`*, proofOfWork?: *`IProofOfWork`*, timeService?: *`ITimeService`*, backgroundTaskService?: *`IBackgroundTaskService`*): [TransactionClient](transactionclient.md)


*Defined in transactions/transactionClient.ts:63*



Create a new instance of the TransactionClient.


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| apiClient | `IApiClient`  | - |   An API Client to communicate through. |
| proofOfWork | `IProofOfWork`  | - |   Proof of work module to use, if undefined will use remote. |
| timeService | `ITimeService`  |  new TimeService() |   A class which can provide the time. |
| backgroundTaskService | `IBackgroundTaskService`  |  new BackgroundTaskService() |   A class which can provide background tasks. |





**Returns:** [TransactionClient](transactionclient.md)

---


## Methods
<a id="attachtotangle"></a>

###  attachToTangle

► **attachToTangle**(transactions: *`Transaction`[]*, depth: *`number`*, minWeightMagnitude: *`number`*, reference?: *`Hash`*): `Promise`.<`Transaction`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[attachToTangle](../interfaces/itransactionclient.md#attachtotangle)*

*Defined in transactions/transactionClient.ts:550*



Attach the transactions to the tangle by doing proof of work.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transactions | `Transaction`[]   |  The transactions to attach. |
| depth | `number`   |  Value that determines how far to go for tip selection. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude for the proof of work. |
| reference | `Hash`   |  The reference to send with the transactions. |





**Returns:** `Promise`.<`Transaction`[]>
Promise which resolves to the list of transactions created or rejects with an error.






___

<a id="findtransactionobjects"></a>

###  findTransactionObjects

► **findTransactionObjects**(bundles?: *`Hash`[]*, addresses?: *`Address`[]*, tags?: *`Tag`[]*, approvees?: *`Hash`[]*): `Promise`.<`Transaction`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[findTransactionObjects](../interfaces/itransactionclient.md#findtransactionobjects)*

*Defined in transactions/transactionClient.ts:906*



Get transaction objects by fist performing a findTransactions call.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundles | `Hash`[]   |  Bundles to lookup transactions for. |
| addresses | `Address`[]   |  Addresses to lookup transactions for. |
| tags | `Tag`[]   |  Tags to lookup transactions for. |
| approvees | `Hash`[]   |  Approvees to lookup transactions for. |





**Returns:** `Promise`.<`Transaction`[]>
Promise which resolves to the list of transactions or rejects with an error.






___

<a id="findtransactions"></a>

###  findTransactions

► **findTransactions**(bundles?: *`Hash`[]*, addresses?: *`Address`[]*, tags?: *`Tag`[]*, approvees?: *`Hash`[]*): `Promise`.<`Hash`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[findTransactions](../interfaces/itransactionclient.md#findtransactions)*

*Defined in transactions/transactionClient.ts:114*



Find the transactions which match the specified input and return. All input values are lists, for which a list of return values (transaction hashes), in the same order, is returned for all individual elements. Using multiple of these input fields returns the intersection of the values.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundles | `Hash`[]   |  Bundles to lookup transaction hashes for. |
| addresses | `Address`[]   |  Addresses to lookup transaction hashes for. |
| tags | `Tag`[]   |  Tags to lookup transaction hashes for. |
| approvees | `Hash`[]   |  Approvees to lookup transaction hashes for. |





**Returns:** `Promise`.<`Hash`[]>
Promise which resolves with a list of hashes or rejects with error.






___

<a id="getaccountdata"></a>

###  getAccountData

► **getAccountData**(seed: *`Hash`*, startIndex?: *`number`*, endIndex?: *`number`*, security?: *`AddressSecurity`*): `Promise`.<[AccountData](../#accountdata)>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[getAccountData](../interfaces/itransactionclient.md#getaccountdata)*

*Defined in transactions/transactionClient.ts:948*



Similar to getTransfers, just that it returns additional account data.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  The seed to get the transfers for |
| startIndex | `number`   |  The start index to get the transfers for. |
| endIndex | `number`   |  The end index to get the transfers for. |
| security | `AddressSecurity`   |  The security level for the transfers. |





**Returns:** `Promise`.<[AccountData](../#accountdata)>
Promise which resolves to the account data or rejects with an error.






___

<a id="getaddressesbyindex"></a>

###  getAddressesByIndex

► **getAddressesByIndex**(seed: *`Hash`*, startIndex: *`number`*, endIndex: *`number`*, includeChecksum: *`boolean`*, security: *`AddressSecurity`*): `Promise`.<`Address`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[getAddressesByIndex](../interfaces/itransactionclient.md#getaddressesbyindex)*

*Defined in transactions/transactionClient.ts:253*



Generates new addresses index-based.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  The seed to generate the addresses from. |
| startIndex | `number`   |  The start index to generate addresses. |
| endIndex | `number`   |  The end index to generate addresses. |
| includeChecksum | `boolean`   |  Includes the checksum on addresses. |
| security | `AddressSecurity`   |  The security level at which to create the addresses. |





**Returns:** `Promise`.<`Address`[]>
Promise which resolves to the list of addresses or rejects with error.






___

<a id="getaddressestounused"></a>

###  getAddressesToUnused

► **getAddressesToUnused**(seed: *`Hash`*, startIndex: *`number`*, includeChecksum: *`boolean`*, security: *`AddressSecurity`*): `Promise`.<`Address`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[getAddressesToUnused](../interfaces/itransactionclient.md#getaddressestounused)*

*Defined in transactions/transactionClient.ts:288*



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

<a id="getbundle"></a>

###  getBundle

► **getBundle**(transactionHash: *`Hash`*): `Promise`.<`Bundle`>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[getBundle](../interfaces/itransactionclient.md#getbundle)*

*Defined in transactions/transactionClient.ts:789*



Gets the associated bundle transactions of a single transaction. Does validation of signatures, total sum as well as bundle order.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transactionHash | `Hash`   |  Hash of a trunk or a tail transaction of a bundle. |





**Returns:** `Promise`.<`Bundle`>
Promise which resolves to the bundle transactions or rejects with an error.






___

<a id="getinputs"></a>

###  getInputs

► **getInputs**(seed: *`Hash`*, startIndex: *`number`*, endIndex: *`number`*, security: *`AddressSecurity`*, totalRequired: *`number`*): `Promise`.<`object`>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[getInputs](../interfaces/itransactionclient.md#getinputs)*

*Defined in transactions/transactionClient.ts:341*



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

*Defined in transactions/transactionClient.ts:180*



Get the inclusion states of a list of transaction hashes.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transactionHashes | `Hash`[]   |  - |





**Returns:** `Promise`.<`boolean`[]>
Promise which resolves to the list of inclusion states or rejects with error.






___

<a id="getnewaddress"></a>

###  getNewAddress

► **getNewAddress**(seed: *`Hash`*, startIndex?: *`number`*, endIndex?: *`number`*, includeChecksum?: *`boolean`*, security?: *`AddressSecurity`*): `Promise`.<`Address`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[getNewAddress](../interfaces/itransactionclient.md#getnewaddress)*

*Defined in transactions/transactionClient.ts:211*



Generates addresses with index-based or using apis.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  The seed to generate the addresses from. |
| startIndex | `number`   |  The start index to generate addresses. |
| endIndex | `number`   |  The end index to generate addresses. |
| includeChecksum | `boolean`   |  Includes the checksum on addresses. |
| security | `AddressSecurity`   |  The security level at which to create the addresses. |





**Returns:** `Promise`.<`Address`[]>
Promise which resolves to the list of addresses or rejects with error.






___

<a id="gettransactionsinprogress"></a>

###  getTransactionsInProgress

► **getTransactionsInProgress**(): `Promise`.<`Hash`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[getTransactionsInProgress](../interfaces/itransactionclient.md#gettransactionsinprogress)*

*Defined in transactions/transactionClient.ts:95*



Returns the list of transaction in progress.




**Returns:** `Promise`.<`Hash`[]>
Promise which resolves to a list of hashes or rejects with error.






___

<a id="gettransactionsobjects"></a>

###  getTransactionsObjects

► **getTransactionsObjects**(transactionHashes: *`Hash`[]*): `Promise`.<`Transaction`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[getTransactionsObjects](../interfaces/itransactionclient.md#gettransactionsobjects)*

*Defined in transactions/transactionClient.ts:159*



Get the transaction details of specific transactions.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transactionHashes | `Hash`[]   |  - |





**Returns:** `Promise`.<`Transaction`[]>
Promise which resolves to the list of transactions or rejects with error.






___

<a id="gettransfers"></a>

###  getTransfers

► **getTransfers**(seed: *`Hash`*, startIndex?: *`number`*, endIndex?: *`number`*, security?: *`AddressSecurity`*, inclusionStates?: *`boolean`*): `Promise`.<`Bundle`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[getTransfers](../interfaces/itransactionclient.md#gettransfers)*

*Defined in transactions/transactionClient.ts:926*



The transfers which are associated with a seed. The transfers are determined by either calculating deterministically which addresses were already used, or by providing a list of indexes to get the addresses and the associated transfers from. The transfers are sorted by their timestamp.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  The seed to get the transfers for |
| startIndex | `number`   |  The start index to get the transfers for. |
| endIndex | `number`   |  The end index to get the transfers for. |
| security | `AddressSecurity`   |  The security level for the transfers. |
| inclusionStates | `boolean`   |  Do you want inclusion states in the bundles. |





**Returns:** `Promise`.<`Bundle`[]>
Promise which resolves to the requested bundles or rejects with an error.






___

<a id="initialize"></a>

###  initialize

► **initialize**(): `Promise`.<`void`>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[initialize](../interfaces/itransactionclient.md#initialize)*

*Defined in transactions/transactionClient.ts:85*



Initialize the client.




**Returns:** `Promise`.<`void`>





___

<a id="ispromotable"></a>

###  isPromotable

► **isPromotable**(transactionTail: *`Hash`*): `Promise`.<`boolean`>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[isPromotable](../interfaces/itransactionclient.md#ispromotable)*

*Defined in transactions/transactionClient.ts:652*



Find out if a transaction is promotable.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transactionTail | `Hash`   |  The hash of the transaction to be promoted. |





**Returns:** `Promise`.<`boolean`>
Promise which resolves to true if the transaction is promotable rejects with an error.






___

<a id="isreattachable"></a>

###  isReattachable

► **isReattachable**(addresses: *`Address`[]*): `Promise`.<`boolean`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[isReattachable](../interfaces/itransactionclient.md#isreattachable)*

*Defined in transactions/transactionClient.ts:671*



Determines whether you should replay a transaction or make a new one (either with the same input, or a different one).


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| addresses | `Address`[]   |  Input address you want to have tested. |





**Returns:** `Promise`.<`boolean`[]>
Promise which resolves to true if the addresses are reattachable or rejects with an error.






___

<a id="preparetransfers"></a>

###  prepareTransfers

► **prepareTransfers**(seed: *`Hash`*, transfers: *`Transfer`[]*, transferOptions?: *[TransferOptions](../#transferoptions)*): `Promise`.<`Transaction`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[prepareTransfers](../interfaces/itransactionclient.md#preparetransfers)*

*Defined in transactions/transactionClient.ts:400*



Prepares transfer by generating bundle, finding and signing inputs.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  The seed to prepare the transfer for. |
| transfers | `Transfer`[]   |  The transfers to prepare. |
| transferOptions | [TransferOptions](../#transferoptions)   |       @property inputs List of inputs used for funding the transfer.     @property security Security level to be used for the private key / addresses.     @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to.     @property hmacKey Hmac key to sign the bundle.     @property reference The transaction to reference. |





**Returns:** `Promise`.<`Transaction`[]>
Promise which resolves to the array of Trytes for the transfer or rejects with error.






___

<a id="promotetransaction"></a>

###  promoteTransaction

► **promoteTransaction**(transactionTail: *`Hash`*, depth: *`number`*, minWeightMagnitude: *`number`*, transfers: *`Transfer`[]*, promoteOptions?: *[PromoteOptions](../#promoteoptions)*): `Promise`.<`Transaction`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[promoteTransaction](../interfaces/itransactionclient.md#promotetransaction)*

*Defined in transactions/transactionClient.ts:740*



Promotes a transaction by adding spam on top of it, as long as it is promotable. Will promote by adding transfers on top of the current one with delay interval. Use promoteOptions.interrupt to terminate the promotion. If promoteOptions.delay is set to 0 only one promotion transfer will be sent.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transactionTail | `Hash`   |  The hash of the transaction to be promoted. |
| depth | `number`   |  Value that determines how far to go for tip selection. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude for the proof of work. |
| transfers | `Transfer`[]   |  The transfers to send. |
| promoteOptions | [PromoteOptions](../#promoteoptions)   |  Additional options for the promote. @property delay Delay between promotion transfers @property interrupt Flag or method to terminate promotion. |





**Returns:** `Promise`.<`Transaction`[]>
Promise which resolves to the list of transactions created or rejects with an error.






___

<a id="reattachbundle"></a>

###  reattachBundle

► **reattachBundle**(transactionHash: *`Hash`*, depth: *`number`*, minWeightMagnitude: *`number`*): `Promise`.<`Transaction`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[reattachBundle](../interfaces/itransactionclient.md#reattachbundle)*

*Defined in transactions/transactionClient.ts:874*



Wrapper which gets a bundle and then replays a transfer by doing Proof of Work again.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transactionHash | `Hash`   |  The hash of the transaction to be promoted. |
| depth | `number`   |  Value that determines how far to go for tip selection. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude for the proof of work. |





**Returns:** `Promise`.<`Transaction`[]>
Promise which resolves to the list of transactions created or rejects with an error.






___

<a id="rebroadcastbundle"></a>

###  rebroadcastBundle

► **rebroadcastBundle**(transactionHash: *`Hash`*): `Promise`.<`Bundle`>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[rebroadcastBundle](../interfaces/itransactionclient.md#rebroadcastbundle)*

*Defined in transactions/transactionClient.ts:885*



Wrapper which gets a bundle and then broadcasts it.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transactionHash | `Hash`   |  The hash of the transaction to be re-broadcast. |





**Returns:** `Promise`.<`Bundle`>
Promise which resolves or rejects with an error.






___

<a id="sendtransactions"></a>

###  sendTransactions

► **sendTransactions**(transactions: *`Transaction`[]*, depth: *`number`*, minWeightMagnitude: *`number`*, reference?: *`Hash`*): `Promise`.<`Transaction`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[sendTransactions](../interfaces/itransactionclient.md#sendtransactions)*

*Defined in transactions/transactionClient.ts:609*



Wrapper function that does attachToTangle and then stores and broadcasts the transactions.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transactions | `Transaction`[]   |  The transactions to send. |
| depth | `number`   |  Value that determines how far to go for tip selection. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude for the proof of work. |
| reference | `Hash`   |  The reference to send with the transactions. |





**Returns:** `Promise`.<`Transaction`[]>
Promise which resolves to the list of transactions created or rejects with an error.






___

<a id="sendtransfer"></a>

###  sendTransfer

► **sendTransfer**(seed: *`Hash`*, depth: *`number`*, minWeightMagnitude: *`number`*, transfers: *`Transfer`[]*, transferOptions?: *[TransferOptions](../#transferoptions)*, reference?: *`Hash`*): `Promise`.<`Transaction`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[sendTransfer](../interfaces/itransactionclient.md#sendtransfer)*

*Defined in transactions/transactionClient.ts:641*



Wrapper function that does prepareTransfers and then sendTransactions.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  The seed to send the transfer for. |
| depth | `number`   |  Value that determines how far to go for tip selection. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude for the proof of work. |
| transfers | `Transfer`[]   |  The transfers to send. |
| transferOptions | [TransferOptions](../#transferoptions)   |  Additional options for the transfer. @property inputs List of inputs used for funding the transfer. @property security Security level to be used for the private key / addresses. @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to. @property hmacKey Hmac key to sign the bundle. |
| reference | `Hash`   |  The reference to send with the transactions. |





**Returns:** `Promise`.<`Transaction`[]>
Promise which resolves to the list of transactions created or rejects with an error.






___

<a id="traversebundle"></a>

###  traverseBundle

► **traverseBundle**(trunkTransaction: *`Hash`*, bundleHash?: *`Hash`*): `Promise`.<`Transaction`[]>



*Implementation of [ITransactionClient](../interfaces/itransactionclient.md).[traverseBundle](../interfaces/itransactionclient.md#traversebundle)*

*Defined in transactions/transactionClient.ts:814*



Traverse the Bundle by going down the trunkTransactions until the bundle hash of the transaction is no longer the same.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trunkTransaction | `Hash`   |  Hash of a trunk or a tail transaction of a bundle. |
| bundleHash | `Hash`   |  The bundle hash to match. |





**Returns:** `Promise`.<`Transaction`[]>
Promise which resolves to the bundle transactions or rejects with an error.






___


