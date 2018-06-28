[@iota-pico/business](../README.md) > [HmacCurl](../classes/hmaccurl.md)

# Class: HmacCurl

Hashed Message Authentication Code using Curl.

## Hierarchy

**HmacCurl**

## Index

### Constructors

* [constructor](hmaccurl.md#constructor)

### Methods

* [addHMAC](hmaccurl.md#addhmac)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new HmacCurl**(key: *`Trytes`*): [HmacCurl](hmaccurl.md)

*Defined in [sign/hmacCurl.ts:14](https://github.com/iota-pico/business/blob/d578214/src/sign/hmacCurl.ts#L14)*

Create a new instance of the HmacCurl.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| key | `Trytes` |  The key to seed with. |

**Returns:** [HmacCurl](hmaccurl.md)

___

## Methods

<a id="addhmac"></a>

###  addHMAC

▸ **addHMAC**(bundle: *`Bundle`*): `void`

*Defined in [sign/hmacCurl.ts:28](https://github.com/iota-pico/business/blob/d578214/src/sign/hmacCurl.ts#L28)*

Add bundle to the HMAC.

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| bundle | `Bundle` |  The bundle to add the HMAC to. |

**Returns:** `void`

___

