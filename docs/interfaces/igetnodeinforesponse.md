[@iota-pico/api](../README.md) > [IGetNodeInfoResponse](../interfaces/igetnodeinforesponse.md)



# Interface: IGetNodeInfoResponse


Represents the response from getNodeInfo command.
*__interface__*: 



## Properties
<a id="appname"></a>

###  appName

**●  appName**:  *`string`* 

*Defined in [models/IGetNodeInfoResponse.ts:9](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetNodeInfoResponse.ts#L9)*



Name of the IOTA software you're currently using (IRI stands for Initial Reference Implementation).




___

<a id="appversion"></a>

###  appVersion

**●  appVersion**:  *`string`* 

*Defined in [models/IGetNodeInfoResponse.ts:13](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetNodeInfoResponse.ts#L13)*



The version of the IOTA software you're currently running.




___

<a id="duration"></a>

###  duration

**●  duration**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:75](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetNodeInfoResponse.ts#L75)*



The duration of the request.




___

<a id="jreavailableprocessors"></a>

###  jreAvailableProcessors

**●  jreAvailableProcessors**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:17](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetNodeInfoResponse.ts#L17)*



Available cores on your machine for JRE.




___

<a id="jrefreememory"></a>

###  jreFreeMemory

**●  jreFreeMemory**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:25](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetNodeInfoResponse.ts#L25)*



Returns the amount of free memory in the Java Virtual Machine.




___

<a id="jremaxmemory"></a>

###  jreMaxMemory

**●  jreMaxMemory**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:29](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetNodeInfoResponse.ts#L29)*



Returns the maximum amount of memory that the Java virtual machine will attempt to use.




___

<a id="jretotalmemory"></a>

###  jreTotalMemory

**●  jreTotalMemory**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:33](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetNodeInfoResponse.ts#L33)*



Returns the total amount of memory in the Java virtual machine.




___

<a id="jreversion"></a>

###  jreVersion

**●  jreVersion**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:21](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetNodeInfoResponse.ts#L21)*



The version of the Java Virtual Machine.




___

<a id="latestmilestone"></a>

###  latestMilestone

**●  latestMilestone**:  *`string`* 

*Defined in [models/IGetNodeInfoResponse.ts:37](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetNodeInfoResponse.ts#L37)*



Latest milestone that was signed off by the coordinator.




___

<a id="latestmilestoneindex"></a>

###  latestMilestoneIndex

**●  latestMilestoneIndex**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:41](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetNodeInfoResponse.ts#L41)*



Index of the latest milestone.




___

<a id="latestsolidsubtanglemilestone"></a>

###  latestSolidSubtangleMilestone

**●  latestSolidSubtangleMilestone**:  *`string`* 

*Defined in [models/IGetNodeInfoResponse.ts:47](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetNodeInfoResponse.ts#L47)*



The latest milestone which is solid and is used for sending transactions. For a milestone to become solid your local node must basically approve the subtangle of coordinator-approved transactions, and have a consistent view of all referenced transactions.




___

<a id="latestsolidsubtanglemilestoneindex"></a>

###  latestSolidSubtangleMilestoneIndex

**●  latestSolidSubtangleMilestoneIndex**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:51](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetNodeInfoResponse.ts#L51)*



Index of the latest solid subtangle.




___

<a id="neighbors"></a>

###  neighbors

**●  neighbors**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:55](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetNodeInfoResponse.ts#L55)*



Number of neighbors you are directly connected with.




___

<a id="packetsqueuesize"></a>

###  packetsQueueSize

**●  packetsQueueSize**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:59](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetNodeInfoResponse.ts#L59)*



Packets which are currently queued up.




___

<a id="time"></a>

###  time

**●  time**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:63](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetNodeInfoResponse.ts#L63)*



Current UNIX timestamp.




___

<a id="tips"></a>

###  tips

**●  tips**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:67](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetNodeInfoResponse.ts#L67)*



Number of tips in the network.




___

<a id="transactionstorequest"></a>

###  transactionsToRequest

**●  transactionsToRequest**:  *`number`* 

*Defined in [models/IGetNodeInfoResponse.ts:71](https://github.com/iotaeco/iota-pico-api/blob/f25437b/src/models/IGetNodeInfoResponse.ts#L71)*



Transactions to request during syncing process.




___


