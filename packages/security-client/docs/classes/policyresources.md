# Class: PolicyResources

## Hierarchy

* **PolicyResources**

## Implements

* [Policy](../interfaces/policy.md)

## Index

### Constructors

* [constructor](policyresources.md#constructor)

### Methods

* [addPolicy](policyresources.md#addpolicy)
* [getPolicies](policyresources.md#getpolicies)
* [removePolicy](policyresources.md#removepolicy)

## Constructors

###  constructor

\+ **new PolicyResources**(`serviceClient`: ServiceClient): *[PolicyResources](policyresources.md)*

*Defined in [packages/security-client/src/resources/policy.ts:12](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/resources/policy.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceClient` | ServiceClient |

**Returns:** *[PolicyResources](policyresources.md)*

## Methods

###  addPolicy

▸ **addPolicy**(`request`: [AddPolicyRequest](../interfaces/addpolicyrequest.md)): *Promise‹[AddPolicyResponse](../interfaces/addpolicyresponse.md)›*

*Implementation of [Policy](../interfaces/policy.md)*

*Defined in [packages/security-client/src/resources/policy.ts:15](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/resources/policy.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [AddPolicyRequest](../interfaces/addpolicyrequest.md) |

**Returns:** *Promise‹[AddPolicyResponse](../interfaces/addpolicyresponse.md)›*

___

###  getPolicies

▸ **getPolicies**(`queryFilter`: [GetPoliciesRequest](../globals.md#getpoliciesrequest)): *Promise‹[GetPoliciesResponse](../interfaces/getpoliciesresponse.md)›*

*Implementation of [Policy](../interfaces/policy.md)*

*Defined in [packages/security-client/src/resources/policy.ts:28](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/resources/policy.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`queryFilter` | [GetPoliciesRequest](../globals.md#getpoliciesrequest) |

**Returns:** *Promise‹[GetPoliciesResponse](../interfaces/getpoliciesresponse.md)›*

___

###  removePolicy

▸ **removePolicy**(`request`: [RemovePolicyRequest](../globals.md#removepolicyrequest)): *Promise‹void›*

*Implementation of [Policy](../interfaces/policy.md)*

*Defined in [packages/security-client/src/resources/policy.ts:41](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/resources/policy.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [RemovePolicyRequest](../globals.md#removepolicyrequest) |

**Returns:** *Promise‹void›*
