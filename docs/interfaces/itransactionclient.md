[@iota-pico/business](../README.md) > [ITransactionClient](../interfaces/itransactionclient.md)



# Interface: ITransactionClient


Represents a client for performing transactions using the api if required.
*__interface__*: 


## Implemented by

* [TransactionClient](../classes/transactionclient.md)


## Methods
<a id="attachtotangle"></a>

###  attachToTangle

► **attachToTangle**(trytes: *`Trytes`[]*, depth: *`number`*, minWeightMagnitude: *`number`*, reference?: *`Hash`*): `Promise`.<`Transaction`[]>



*Defined in interfaces/ITransactionClient.ts:118*



Attach the trytes to the tangle by doing proof of work.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | `Trytes`[]   |  The trytes to attach. |
| depth | `number`   |  Value that determines how far to go for tip selection. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude for the proof of work. |
| reference | `Hash`   |  The reference to send with the trytes. |





**Returns:** `Promise`.<`Transaction`[]>
Promise which resolves to the list of transactions created or rejects with an error.






___

<a id="broadcastbundle"></a>

###  broadcastBundle

► **broadcastBundle**(transactionTail: *`Hash`*): `Promise`.<`void`>



*Defined in interfaces/ITransactionClient.ts:200*



Re-Broadcasts a transfer.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transactionTail | `Hash`   |  The hash of the transaction to be promoted. |





**Returns:** `Promise`.<`void`>
Promise which resolves or rejects with an error.






___

<a id="findtransactionobjects"></a>

###  findTransactionObjects

► **findTransactionObjects**(bundles?: *`Hash`[]*, addresses?: *`Address`[]*, tags?: *`Tag`[]*, approvees?: *`Hash`[]*): `Promise`.<`Transaction`[]>



*Defined in interfaces/ITransactionClient.ts:211*



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



*Defined in interfaces/ITransactionClient.ts:40*



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



*Defined in interfaces/ITransactionClient.ts:234*



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



*Defined in interfaces/ITransactionClient.ts:74*



Generates addresses index-based.


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



*Defined in interfaces/ITransactionClient.ts:84*



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

<a id="getbundle"></a>

###  getBundle

► **getBundle**(trunkTransaction: *`Hash`*): `Promise`.<`Bundle`>



*Defined in interfaces/ITransactionClient.ts:175*



Gets the associated bundle transactions of a single transaction. Does validation of signatures, total sum as well as bundle order.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trunkTransaction | `Hash`   |  Hash of a trunk or a tail transaction of a bundle. |





**Returns:** `Promise`.<`Bundle`>
Promise which resolves to the bundle transactions or rejects with an error.






___

<a id="getinputs"></a>

###  getInputs

► **getInputs**(seed: *`Hash`*, startIndex: *`number`*, endIndex: *`number`*, security: *`AddressSecurity`*, totalRequired: *`number`*): `Promise`.<`object`>



*Defined in interfaces/ITransactionClient.ts:95*



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



*Defined in interfaces/ITransactionClient.ts:52*



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



*Defined in interfaces/ITransactionClient.ts:63*



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



*Defined in interfaces/ITransactionClient.ts:28*



Returns the list of transaction in progress.




**Returns:** `Promise`.<`Hash`[]>
Promise which resolves to a list of hashes or rejects with error.






___

<a id="gettransactionsobjects"></a>

###  getTransactionsObjects

► **getTransactionsObjects**(transactionHashes: *`Hash`[]*): `Promise`.<`Transaction`[]>



*Defined in interfaces/ITransactionClient.ts:46*



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



*Defined in interfaces/ITransactionClient.ts:224*



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



*Defined in interfaces/ITransactionClient.ts:22*



Initialize the client.




**Returns:** `Promise`.<`void`>





___

<a id="ispromotable"></a>

###  isPromotable

► **isPromotable**(transactionTail: *`Hash`*): `Promise`.<`boolean`>



*Defined in interfaces/ITransactionClient.ts:151*



Find out if a transaction is promotable.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transactionTail | `Hash`   |  The hash of the transaction to be promoted. |





**Returns:** `Promise`.<`boolean`>
Promise which resolves to true if the transaction is promotable rejects with an error.






___

<a id="preparetransfers"></a>

###  prepareTransfers

► **prepareTransfers**(seed: *`Hash`*, transfers: *`Transfer`[]*, transferOptions?: *[TransferOptions](../#transferoptions)*): `Promise`.<`Trytes`[]>



*Defined in interfaces/ITransactionClient.ts:108*



Prepares transfer by generating bundle, finding and signing inputs.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  The seed to prepare the transfer for. |
| transfers | `Transfer`[]   |  The transfers to prepare. |
| transferOptions | [TransferOptions](../#transferoptions)   |  Additional options for the transfer. @property inputs List of inputs used for funding the transfer. @property security Security level to be used for the private key / addresses. @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to. @property hmacKey Hmac key to sign the bundle. |





**Returns:** `Promise`.<`Trytes`[]>
Promise which resolves to the array of Trytes for the transfer or rejects with error.






___

<a id="promotetransaction"></a>

###  promoteTransaction

► **promoteTransaction**(transactionTail: *`Hash`*, depth: *`number`*, minWeightMagnitude: *`number`*, transfers: *`Transfer`[]*, promoteOptions?: *[PromoteOptions](../#promoteoptions)*): `Promise`.<`Transaction`[]>



*Defined in interfaces/ITransactionClient.ts:167*



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

<a id="replaybundle"></a>

###  replayBundle

► **replayBundle**(transactionTail: *`Hash`*, depth: *`number`*, minWeightMagnitude: *`number`*): `Promise`.<`Transaction`[]>



*Defined in interfaces/ITransactionClient.ts:193*



Replays a transfer by doing Proof of Work again.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| transactionTail | `Hash`   |  The hash of the transaction to be promoted. |
| depth | `number`   |  Value that determines how far to go for tip selection. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude for the proof of work. |





**Returns:** `Promise`.<`Transaction`[]>
Promise which resolves to the list of transactions created or rejects with an error.






___

<a id="sendtransfer"></a>

###  sendTransfer

► **sendTransfer**(seed: *`Hash`*, depth: *`number`*, minWeightMagnitude: *`number`*, transfers: *`Transfer`[]*, transferOptions?: *[TransferOptions](../#transferoptions)*, reference?: *`Hash`*): `Promise`.<`Transaction`[]>



*Defined in interfaces/ITransactionClient.ts:144*



Wrapper function that does prepareTransfers, as well as attachToTangle and finally, it broadcasts and stores the transactions locally.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash`   |  The seed to send the transfer for. |
| depth | `number`   |  Value that determines how far to go for tip selection. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude for the proof of work. |
| transfers | `Transfer`[]   |  The transfers to send. |
| transferOptions | [TransferOptions](../#transferoptions)   |  Additional options for the transfer. @property inputs List of inputs used for funding the transfer. @property security Security level to be used for the private key / addresses. @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to. @property hmacKey Hmac key to sign the bundle. |
| reference | `Hash`   |  The reference to send with the trytes. |





**Returns:** `Promise`.<`Transaction`[]>
Promise which resolves to the list of transactions created or rejects with an error.






___

<a id="sendtrytes"></a>

###  sendTrytes

► **sendTrytes**(trytes: *`Trytes`[]*, depth: *`number`*, minWeightMagnitude: *`number`*, reference?: *`Hash`*): `Promise`.<`Transaction`[]>



*Defined in interfaces/ITransactionClient.ts:128*



Wrapper function that does attachToTangle and finally, it broadcasts and stores the transactions.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | `Trytes`[]   |  The trytes to send. |
| depth | `number`   |  Value that determines how far to go for tip selection. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude for the proof of work. |
| reference | `Hash`   |  The reference to send with the trytes. |





**Returns:** `Promise`.<`Transaction`[]>
Promise which resolves to the list of transactions created or rejects with an error.






___

<a id="traversebundle"></a>

###  traverseBundle

► **traverseBundle**(trunkTransaction: *`Hash`*, bundleHash?: *`Hash`*): `Promise`.<`Transaction`[]>



*Defined in interfaces/ITransactionClient.ts:184*



Traverse the Bundle by going down the trunkTransactions until the bundle hash of the transaction is no longer the same.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trunkTransaction | `Hash`   |  Hash of a trunk or a tail transaction of a bundle. |
| bundleHash | `Hash`   |  The bundle hash to match. |





**Returns:** `Promise`.<`Transaction`[]>
Promise which resolves to the bundle transactions or rejects with an error.






___


