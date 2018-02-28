[@iota-pico/business](../README.md) > [BusinessError](../classes/businesserror.md)



# Class: BusinessError


A business implementation of an error.

## Hierarchy


 `CoreError`

**↳ BusinessError**







## Index

### Constructors

* [constructor](businesserror.md#constructor)


### Properties

* [additional](businesserror.md#additional)
* [innerError](businesserror.md#innererror)
* [message](businesserror.md#message)
* [name](businesserror.md#name)
* [stack](businesserror.md#stack)


### Methods

* [format](businesserror.md#format)
* [isError](businesserror.md#iserror)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new BusinessError**(message: *`string`*, additional?: *`object`*, innerError?: *`Error`*): [BusinessError](businesserror.md)


*Inherited from CoreError.__constructor*

*Defined in D:/Workarea/iotaeco/iota-pico-business/node_modules/@iota-pico/core/dist/error/coreError.d.ts:14*



Create an instance of CoreError.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| message | `string`   |  The message for the error. |
| additional | `object`   |  Additional details about the error. |
| innerError | `Error`   |  Add information from inner error if there was one. |





**Returns:** [BusinessError](businesserror.md)

---


## Properties
<a id="additional"></a>

### «Optional» additional

**●  additional**:  *`object`* 

*Inherited from CoreError.additional*

*Defined in D:/Workarea/iotaeco/iota-pico-business/node_modules/@iota-pico/core/dist/error/coreError.d.ts:8*



Additional details about the error.

#### Type declaration


[id: `string`]: `any`






___

<a id="innererror"></a>

### «Optional» innerError

**●  innerError**:  *`Error`* 

*Inherited from CoreError.innerError*

*Defined in D:/Workarea/iotaeco/iota-pico-business/node_modules/@iota-pico/core/dist/error/coreError.d.ts:14*



The inner error if there was one.




___

<a id="message"></a>

### «Static» message

**●  message**:  *`string`* 

*Inherited from Error.message*

*Defined in D:/Workarea/iotaeco/iota-pico-business/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:874*





___

<a id="name"></a>

### «Static» name

**●  name**:  *`string`* 

*Inherited from Error.name*

*Defined in D:/Workarea/iotaeco/iota-pico-business/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:873*





___

<a id="stack"></a>

### «Static»«Optional» stack

**●  stack**:  *`string`* 

*Inherited from Error.stack*

*Defined in D:/Workarea/iotaeco/iota-pico-business/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:875*





___


## Methods
<a id="format"></a>

###  format

► **format**(): `string`



*Inherited from CoreError.format*

*Defined in D:/Workarea/iotaeco/iota-pico-business/node_modules/@iota-pico/core/dist/error/coreError.d.ts:33*



Format the error to a readable version.




**Returns:** `string`





___

<a id="iserror"></a>

### «Static» isError

► **isError**(obj: *`any`*): `boolean`



*Inherited from CoreError.isError*

*Defined in D:/Workarea/iotaeco/iota-pico-business/node_modules/@iota-pico/core/dist/error/coreError.d.ts:29*



Check if an object could be a CoreError.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| obj | `any`   |  The object to check if it is a CoreError. |





**Returns:** `boolean`
true If the tested object is a CoreError.






___


