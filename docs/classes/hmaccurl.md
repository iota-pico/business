[@iota-pico/business](../README.md) > [HmacCurl](../classes/hmaccurl.md)



# Class: HmacCurl


Hashed Message Authentication Code using Curl.

## Index

### Constructors

* [constructor](hmaccurl.md#constructor)


### Methods

* [addHMAC](hmaccurl.md#addhmac)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new HmacCurl**(key: *`Trytes`*): [HmacCurl](hmaccurl.md)


*Defined in [sign/hmacCurl.ts:14](https://github.com/iotaeco/iota-pico-business/blob/d67547c/src/sign/hmacCurl.ts#L14)*



Create a new instance of the HmacCurl.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | `Trytes`   |  The key to seed with. |





**Returns:** [HmacCurl](hmaccurl.md)

---


## Methods
<a id="addhmac"></a>

###  addHMAC

► **addHMAC**(bundle: *`Bundle`*): `void`



*Defined in [sign/hmacCurl.ts:27](https://github.com/iotaeco/iota-pico-business/blob/d67547c/src/sign/hmacCurl.ts#L27)*



Add bundle to the HMAC.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundle | `Bundle`   |  - |





**Returns:** `void`





___


