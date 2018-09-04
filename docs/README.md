
#  @iota-pico/business

## Index

### Classes

* [AddressHelper](classes/addresshelper.md)
* [BundleHelper](classes/bundlehelper.md)
* [BusinessError](classes/businesserror.md)
* [HmacCurl](classes/hmaccurl.md)
* [MultiSigAddress](classes/multisigaddress.md)
* [MultiSigClient](classes/multisigclient.md)
* [ProofOfWorkApi](classes/proofofworkapi.md)
* [TransactionClient](classes/transactionclient.md)

### Interfaces

* [ITransactionClient](interfaces/itransactionclient.md)

### Type aliases

* [AccountData](#accountdata)
* [PromoteOptions](#promoteoptions)
* [TransferOptions](#transferoptions)

---

## Type aliases

<a id="accountdata"></a>

###  AccountData

**Ƭ AccountData**: *`object`*

*Defined in [types/accountData.ts:8](https://github.com/iota-pico/business/tree/master/src/types/accountData.ts#L8*

Account data information returned from getAccountData.

#### Type declaration

 addresses: `Address`[]

 balance: `number`

 inputs: `Input`[]

 latestAddress: `Address`

 transfers: `Bundle`[]

___
<a id="promoteoptions"></a>

###  PromoteOptions

**Ƭ PromoteOptions**: *`object`*

*Defined in [types/promoteOptions.ts:4](https://github.com/iota-pico/business/tree/master/src/types/promoteOptions.ts#L4*

Options used during promote process in promoteTransaction.

#### Type declaration

`Optional`  delay: `number`

Delay between promotion transfers.

`Optional`  interrupt:  `boolean` &#124; `function`

Flag or method to terminate promotion.

___
<a id="transferoptions"></a>

###  TransferOptions

**Ƭ TransferOptions**: *`object`*

*Defined in [types/transferOptions.ts:9](https://github.com/iota-pico/business/tree/master/src/types/transferOptions.ts#L9*

Options used during prepare transfer process prepareTransfers and sendTransfer.

#### Type declaration

`Optional`  hmacKey: `Trytes`

Hmac key to sign the bundle.

`Optional`  inputs: `Input`[]

List of inputs used for funding the transfer.

`Optional`  remainderAddress: `Address`

If defined, this address will be used for sending the remainder value (of the inputs) to.

`Optional`  security: `AddressSecurity`

Security level to be used for the private key / addresses.

___

