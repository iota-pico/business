[@iota-pico/business](../README.md) > [ITransactionClient](../interfaces/itransactionclient.md)

# Interface: ITransactionClient

Represents a client for performing transactions using the api if required.
*__interface__*: 

## Hierarchy

**ITransactionClient**

## Implemented by

* [TransactionClient](../classes/transactionclient.md)

## Index

### Methods

* [attachToTangle](itransactionclient.md#attachtotangle)
* [findTransactionObjects](itransactionclient.md#findtransactionobjects)
* [findTransactions](itransactionclient.md#findtransactions)
* [getAccountData](itransactionclient.md#getaccountdata)
* [getAddressesByIndex](itransactionclient.md#getaddressesbyindex)
* [getAddressesToUnused](itransactionclient.md#getaddressestounused)
* [getBundle](itransactionclient.md#getbundle)
* [getInputs](itransactionclient.md#getinputs)
* [getLatestInclusion](itransactionclient.md#getlatestinclusion)
* [getNewAddress](itransactionclient.md#getnewaddress)
* [getTransactionsInProgress](itransactionclient.md#gettransactionsinprogress)
* [getTransactionsObjects](itransactionclient.md#gettransactionsobjects)
* [getTransfers](itransactionclient.md#gettransfers)
* [isPromotable](itransactionclient.md#ispromotable)
* [isReattachable](itransactionclient.md#isreattachable)
* [prepareTransfers](itransactionclient.md#preparetransfers)
* [promoteTransaction](itransactionclient.md#promotetransaction)
* [reattachBundle](itransactionclient.md#reattachbundle)
* [rebroadcastBundle](itransactionclient.md#rebroadcastbundle)
* [sendTransactions](itransactionclient.md#sendtransactions)
* [sendTransfer](itransactionclient.md#sendtransfer)
* [traverseBundle](itransactionclient.md#traversebundle)

---

## Methods

<a id="attachtotangle"></a>

###  attachToTangle

▸ **attachToTangle**(bundle: *`Bundle`*, depth: *`number`*, minWeightMagnitude: *`number`*, reference?: *`Hash`*): `Promise`<`Bundle`>

*Defined in [interfaces/ITransactionClient.ts:112](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L112*

Attach the transactions to the tangle by doing proof of work.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| bundle | `Bundle` |  The bundle of transactions to attach. |
| depth | `number` |  Value that determines how far to go for tip selection. |
| minWeightMagnitude | `number` |  The minimum weight magnitude for the proof of work. |
| `Optional` reference | `Hash` |  The reference to send with the transactions. |

**Returns:** `Promise`<`Bundle`>
Promise which resolves to the bundle of transactions created or rejects with an error.

___
<a id="findtransactionobjects"></a>

###  findTransactionObjects

▸ **findTransactionObjects**(bundles?: *`Hash`[]*, addresses?: *`Address`[]*, tags?: *`Tag`[]*, approvees?: *`Hash`[]*): `Promise`<`Transaction`[]>

*Defined in [interfaces/ITransactionClient.ts:212](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L212*

Get transaction objects by fist performing a findTransactions call.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` bundles | `Hash`[] |  Bundles to lookup transactions for. |
| `Optional` addresses | `Address`[] |  Addresses to lookup transactions for. |
| `Optional` tags | `Tag`[] |  Tags to lookup transactions for. |
| `Optional` approvees | `Hash`[] |  Approvees to lookup transactions for. |

**Returns:** `Promise`<`Transaction`[]>
Promise which resolves to the list of transactions or rejects with an error.

___
<a id="findtransactions"></a>

###  findTransactions

▸ **findTransactions**(bundles?: *`Hash`[]*, addresses?: *`Address`[]*, tags?: *`Tag`[]*, approvees?: *`Hash`[]*): `Promise`<`Hash`[]>

*Defined in [interfaces/ITransactionClient.ts:34](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L34*

Find the transactions which match the specified input and return. All input values are lists, for which a list of return values (transaction hashes), in the same order, is returned for all individual elements. Using multiple of these input fields returns the intersection of the values.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` bundles | `Hash`[] |  Bundles to lookup transaction hashes for. |
| `Optional` addresses | `Address`[] |  Addresses to lookup transaction hashes for. |
| `Optional` tags | `Tag`[] |  Tags to lookup transaction hashes for. |
| `Optional` approvees | `Hash`[] |  Approvees to lookup transaction hashes for. |

**Returns:** `Promise`<`Hash`[]>
Promise which resolves with a list of hashes or rejects with error.

___
<a id="getaccountdata"></a>

###  getAccountData

▸ **getAccountData**(seed: *`Hash`*, startIndex?: *`number`*, endIndex?: *`number`*, security?: *`AddressSecurity`*): `Promise`<[AccountData](../#accountdata)>

*Defined in [interfaces/ITransactionClient.ts:235](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L235*

Similar to getTransfers, just that it returns additional account data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash` |  The seed to get the transfers for |
| `Optional` startIndex | `number` |  The start index to get the transfers for. |
| `Optional` endIndex | `number` |  The end index to get the transfers for. |
| `Optional` security | `AddressSecurity` |  The security level for the transfers. |

**Returns:** `Promise`<[AccountData](../#accountdata)>
Promise which resolves to the account data or rejects with an error.

___
<a id="getaddressesbyindex"></a>

###  getAddressesByIndex

▸ **getAddressesByIndex**(seed: *`Hash`*, startIndex: *`number`*, endIndex: *`number`*, includeChecksum: *`boolean`*, security: *`AddressSecurity`*): `Promise`<`Address`[]>

*Defined in [interfaces/ITransactionClient.ts:68](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L68*

Generates addresses index-based.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash` |  The seed to generate the addresses from. |
| startIndex | `number` |  The start index to generate addresses. |
| endIndex | `number` |  The end index to generate addresses. |
| includeChecksum | `boolean` |  Includes the checksum on addresses. |
| security | `AddressSecurity` |  The security level at which to create the addresses. |

**Returns:** `Promise`<`Address`[]>
Promise which resolves to the list of addresses or rejects with error.

___
<a id="getaddressestounused"></a>

###  getAddressesToUnused

▸ **getAddressesToUnused**(seed: *`Hash`*, startIndex: *`number`*, includeChecksum: *`boolean`*, security: *`AddressSecurity`*): `Promise`<`Address`[]>

*Defined in [interfaces/ITransactionClient.ts:78](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L78*

Generates address which havent been used using apis.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash` |  The seed to generate the addresses from. |
| startIndex | `number` |  The start index to generate addresses. |
| includeChecksum | `boolean` |  Includes the checksum on addresses. |
| security | `AddressSecurity` |  The security level at which to create the addresses. |

**Returns:** `Promise`<`Address`[]>
Promise which resolves to an addresses list, the first unused address is the last in the list or rejects with error.

___
<a id="getbundle"></a>

###  getBundle

▸ **getBundle**(transactionHash: *`Hash`*): `Promise`<`Bundle`>

*Defined in [interfaces/ITransactionClient.ts:176](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L176*

Gets the associated bundle transactions of a single transaction. Does validation of signatures, total sum as well as bundle order.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| transactionHash | `Hash` |  Hash of a trunk or a tail transaction of a bundle. |

**Returns:** `Promise`<`Bundle`>
Promise which resolves to the bundle transactions or rejects with an error.

___
<a id="getinputs"></a>

###  getInputs

▸ **getInputs**(seed: *`Hash`*, startIndex: *`number`*, endIndex: *`number`*, security: *`AddressSecurity`*, totalRequired: *`number`*): `Promise`<`object`>

*Defined in [interfaces/ITransactionClient.ts:89](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L89*

Get the input data for a range of addresses.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash` |  The seed to get the input data for. |
| startIndex | `number` |  The start index to get the addresses. |
| endIndex | `number` |  The end index to get the addresses. |
| security | `AddressSecurity` |  The security level used to create the addresses. |
| totalRequired | `number` |  The threshold at which total balance to stop gathering addresses. |

**Returns:** `Promise`<`object`>
Promise which resolves to the inputs for each address or rejects with error.

___
<a id="getlatestinclusion"></a>

###  getLatestInclusion

▸ **getLatestInclusion**(transactionHashes: *`Hash`[]*): `Promise`<`boolean`[]>

*Defined in [interfaces/ITransactionClient.ts:46](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L46*

Get the inclusion states of a list of transaction hashes.

**Parameters:**

| Name | Type |
| ------ | ------ |
| transactionHashes | `Hash`[] |

**Returns:** `Promise`<`boolean`[]>
Promise which resolves to the list of inclusion states or rejects with error.

___
<a id="getnewaddress"></a>

###  getNewAddress

▸ **getNewAddress**(seed: *`Hash`*, startIndex?: *`number`*, endIndex?: *`number`*, includeChecksum?: *`boolean`*, security?: *`AddressSecurity`*): `Promise`<`Address`[]>

*Defined in [interfaces/ITransactionClient.ts:57](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L57*

Generates addresses with index-based or using apis.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash` |  The seed to generate the addresses from. |
| `Optional` startIndex | `number` |  The start index to generate addresses. |
| `Optional` endIndex | `number` |  The end index to generate addresses. |
| `Optional` includeChecksum | `boolean` |  Includes the checksum on addresses. |
| `Optional` security | `AddressSecurity` |  The security level at which to create the addresses. |

**Returns:** `Promise`<`Address`[]>
Promise which resolves to the list of addresses or rejects with error.

___
<a id="gettransactionsinprogress"></a>

###  getTransactionsInProgress

▸ **getTransactionsInProgress**(): `Promise`<`Hash`[]>

*Defined in [interfaces/ITransactionClient.ts:22](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L22*

Returns the list of transaction in progress.

**Returns:** `Promise`<`Hash`[]>
Promise which resolves to a list of hashes or rejects with error.

___
<a id="gettransactionsobjects"></a>

###  getTransactionsObjects

▸ **getTransactionsObjects**(transactionHashes: *`Hash`[]*): `Promise`<`Transaction`[]>

*Defined in [interfaces/ITransactionClient.ts:40](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L40*

Get the transaction details of specific transactions.

**Parameters:**

| Name | Type |
| ------ | ------ |
| transactionHashes | `Hash`[] |

**Returns:** `Promise`<`Transaction`[]>
Promise which resolves to the list of transactions or rejects with error.

___
<a id="gettransfers"></a>

###  getTransfers

▸ **getTransfers**(seed: *`Hash`*, startIndex?: *`number`*, endIndex?: *`number`*, security?: *`AddressSecurity`*, inclusionStates?: *`boolean`*): `Promise`<`Bundle`[]>

*Defined in [interfaces/ITransactionClient.ts:225](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L225*

The transfers which are associated with a seed. The transfers are determined by either calculating deterministically which addresses were already used, or by providing a list of indexes to get the addresses and the associated transfers from. The transfers are sorted by their timestamp.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash` |  The seed to get the transfers for |
| `Optional` startIndex | `number` |  The start index to get the transfers for. |
| `Optional` endIndex | `number` |  The end index to get the transfers for. |
| `Optional` security | `AddressSecurity` |  The security level for the transfers. |
| `Optional` inclusionStates | `boolean` |  Do you want inclusion states in the bundles. |

**Returns:** `Promise`<`Bundle`[]>
Promise which resolves to the requested bundles or rejects with an error.

___
<a id="ispromotable"></a>

###  isPromotable

▸ **isPromotable**(transactionTail: *`Hash`*): `Promise`<`boolean`>

*Defined in [interfaces/ITransactionClient.ts:145](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L145*

Find out if a transaction is promotable.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| transactionTail | `Hash` |  The hash of the transaction to be promoted. |

**Returns:** `Promise`<`boolean`>
Promise which resolves to true if the transaction is promotable rejects with an error.

___
<a id="isreattachable"></a>

###  isReattachable

▸ **isReattachable**(addresses: *`Address`[]*): `Promise`<`boolean`[]>

*Defined in [interfaces/ITransactionClient.ts:152](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L152*

Determines whether you should replay a transaction or make a new one (either with the same input, or a different one).

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| addresses | `Address`[] |  Input address you want to have tested. |

**Returns:** `Promise`<`boolean`[]>
Promise which resolves to true if the addresses are reattachable or rejects with an error.

___
<a id="preparetransfers"></a>

###  prepareTransfers

▸ **prepareTransfers**(seed: *`Hash`*, transfers: *`Transfer`[]*, transferOptions?: *[TransferOptions](../#transferoptions)*): `Promise`<`Bundle`>

*Defined in [interfaces/ITransactionClient.ts:102](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L102*

Prepares transfer by generating bundle, finding and signing inputs.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash` |  The seed to prepare the transfer for. |
| transfers | `Transfer`[] |  The transfers to prepare. |
| `Optional` transferOptions | [TransferOptions](../#transferoptions) |  Additional options for the transfer. @property inputs List of inputs used for funding the transfer. @property security Security level to be used for the private key / addresses. @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to. @property hmacKey Hmac key to sign the bundle. |

**Returns:** `Promise`<`Bundle`>
Promise which resolves to the array of Transactions for the transfer or rejects with error.

___
<a id="promotetransaction"></a>

###  promoteTransaction

▸ **promoteTransaction**(transactionTail: *`Hash`*, depth: *`number`*, minWeightMagnitude: *`number`*, transfers: *`Transfer`[]*, promoteOptions?: *[PromoteOptions](../#promoteoptions)*): `Promise`<`Bundle`>

*Defined in [interfaces/ITransactionClient.ts:168](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L168*

Promotes a transaction by adding spam on top of it, as long as it is promotable. Will promote by adding transfers on top of the current one with delay interval. Use promoteOptions.interrupt to terminate the promotion. If promoteOptions.delay is set to 0 only one promotion transfer will be sent.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| transactionTail | `Hash` |  The hash of the transaction to be promoted. |
| depth | `number` |  Value that determines how far to go for tip selection. |
| minWeightMagnitude | `number` |  The minimum weight magnitude for the proof of work. |
| transfers | `Transfer`[] |  The transfers to send. |
| `Optional` promoteOptions | [PromoteOptions](../#promoteoptions) |  Additional options for the promote. @property delay Delay between promotion transfers @property interrupt Flag or method to terminate promotion. |

**Returns:** `Promise`<`Bundle`>
Promise which resolves to the list of transactions created or rejects with an error.

___
<a id="reattachbundle"></a>

###  reattachBundle

▸ **reattachBundle**(transactionHash: *`Hash`*, depth: *`number`*, minWeightMagnitude: *`number`*): `Promise`<`Bundle`>

*Defined in [interfaces/ITransactionClient.ts:194](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L194*

Wrapper which gets a bundle and then replays a transfer by doing Proof of Work again.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| transactionHash | `Hash` |  The hash of the transaction to be promoted. |
| depth | `number` |  Value that determines how far to go for tip selection. |
| minWeightMagnitude | `number` |  The minimum weight magnitude for the proof of work. |

**Returns:** `Promise`<`Bundle`>
Promise which resolves to the list of transactions created or rejects with an error.

___
<a id="rebroadcastbundle"></a>

###  rebroadcastBundle

▸ **rebroadcastBundle**(transactionHash: *`Hash`*): `Promise`<`Bundle`>

*Defined in [interfaces/ITransactionClient.ts:201](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L201*

Wrapper which gets a bundle and then broadcasts it.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| transactionHash | `Hash` |  The hash of the transaction to be re-broadcast. |

**Returns:** `Promise`<`Bundle`>
Promise which resolves or rejects with an error.

___
<a id="sendtransactions"></a>

###  sendTransactions

▸ **sendTransactions**(bundle: *`Bundle`*, depth: *`number`*, minWeightMagnitude: *`number`*, reference?: *`Hash`*): `Promise`<`Bundle`>

*Defined in [interfaces/ITransactionClient.ts:122](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L122*

Wrapper function that does attachToTangle and then stores and broadcasts the transactions.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| bundle | `Bundle` |  The bundle of transactions to send. |
| depth | `number` |  Value that determines how far to go for tip selection. |
| minWeightMagnitude | `number` |  The minimum weight magnitude for the proof of work. |
| `Optional` reference | `Hash` |  The reference to send with the transactions. |

**Returns:** `Promise`<`Bundle`>
Promise which resolves to the bundle of transactions created or rejects with an error.

___
<a id="sendtransfer"></a>

###  sendTransfer

▸ **sendTransfer**(seed: *`Hash`*, depth: *`number`*, minWeightMagnitude: *`number`*, transfers: *`Transfer`[]*, transferOptions?: *[TransferOptions](../#transferoptions)*, reference?: *`Hash`*): `Promise`<`Bundle`>

*Defined in [interfaces/ITransactionClient.ts:138](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L138*

Wrapper function that does prepareTransfers and then sendTransactions.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| seed | `Hash` |  The seed to send the transfer for. |
| depth | `number` |  Value that determines how far to go for tip selection. |
| minWeightMagnitude | `number` |  The minimum weight magnitude for the proof of work. |
| transfers | `Transfer`[] |  The transfers to send. |
| `Optional` transferOptions | [TransferOptions](../#transferoptions) |  Additional options for the transfer. @property inputs List of inputs used for funding the transfer. @property security Security level to be used for the private key / addresses. @property remainderAddress If defined, this address will be used for sending the remainder value (of the inputs) to. @property hmacKey Hmac key to sign the bundle. |
| `Optional` reference | `Hash` |  The reference to send with the transactions. |

**Returns:** `Promise`<`Bundle`>
Promise which resolves to the list of transactions created or rejects with an error.

___
<a id="traversebundle"></a>

###  traverseBundle

▸ **traverseBundle**(trunkTransaction: *`Hash`*, bundleHash?: *`Hash`*): `Promise`<`Transaction`[]>

*Defined in [interfaces/ITransactionClient.ts:185](https://github.com/iota-pico/business/tree/master/src/interfaces/ITransactionClient.ts#L185*

Traverse the Bundle by going down the trunkTransactions until the bundle hash of the transaction is no longer the same.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| trunkTransaction | `Hash` |  Hash of a trunk or a tail transaction of a bundle. |
| `Optional` bundleHash | `Hash` |  The bundle hash to match. |

**Returns:** `Promise`<`Transaction`[]>
Promise which resolves to the bundle transactions or rejects with an error.

___

