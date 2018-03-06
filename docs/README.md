


#  @iota-pico/business

## Index

### Classes

* [BundleHelper](classes/bundlehelper.md)
* [BusinessError](classes/businesserror.md)
* [HmacCurl](classes/hmaccurl.md)
* [MultiSigAddress](classes/multisigaddress.md)
* [MultiSigClient](classes/multisigclient.md)
* [Signing](classes/signing.md)
* [TransactionClient](classes/transactionclient.md)


### Interfaces

* [ITransactionClient](interfaces/itransactionclient.md)


### Type aliases

* [AccountData](#accountdata)
* [PromoteOptions](#promoteoptions)
* [TransferOptions](#transferoptions)



---
# Type aliases
<a id="accountdata"></a>

###  AccountData

**Τ AccountData**:  *`object`* 

*Defined in interfaces/accountData.ts:8*



Account data information.

#### Type declaration




 addresses: `Address`[]






 balance: `number`






 inputs: `Input`[]






 latestAddress: `Address`






 transfers: `Bundle`[]







___

<a id="promoteoptions"></a>

###  PromoteOptions

**Τ PromoteOptions**:  *`object`* 

*Defined in interfaces/promoteOptions.ts:4*



Options used during promote process.

#### Type declaration




«Optional»  delay: `number`






«Optional»  interrupt: `boolean`⎮`function`







___

<a id="transferoptions"></a>

###  TransferOptions

**Τ TransferOptions**:  *`object`* 

*Defined in interfaces/transferOptions.ts:9*



Options used during prepare transfer process.

#### Type declaration




«Optional»  hmacKey: `Trytes`






«Optional»  inputs: `Input`[]






«Optional»  remainderAddress: `Address`






«Optional»  security: `AddressSecurity`







___


