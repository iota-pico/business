[@iota-pico/api](../README.md) > [IGetInclusionStatesResponse](../interfaces/igetinclusionstatesresponse.md)



# Interface: IGetInclusionStatesResponse


Represents the response from getInclusionStates command.
*__interface__*: 



## Properties
<a id="duration"></a>

###  duration

**●  duration**:  *`number`* 

*Defined in [models/IGetInclusionStatesResponse.ts:14](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetInclusionStatesResponse.ts#L14)*



The duration of the request.




___

<a id="states"></a>

###  states

**●  states**:  *`boolean`[]* 

*Defined in [models/IGetInclusionStatesResponse.ts:10](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetInclusionStatesResponse.ts#L10)*



List of boolean values in the same order as the transaction list you submitted, thus you get a true/false whether a transaction is confirmed or not.




___


