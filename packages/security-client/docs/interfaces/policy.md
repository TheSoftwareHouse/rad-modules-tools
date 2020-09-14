# Interface: Policy

## Hierarchy

* **Policy**

## Implemented by

* [PolicyResources](../classes/policyresources.md)

## Index

### Methods

* [addPolicy](policy.md#addpolicy)
* [getPolicies](policy.md#getpolicies)
* [removePolicy](policy.md#removepolicy)

## Methods

###  addPolicy

▸ **addPolicy**(`request`: [AddPolicyRequest](addpolicyrequest.md)): *Promise‹[AddPolicyResponse](addpolicyresponse.md)›*

*Defined in [packages/security-client/src/defs/policy.ts:65](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/defs/policy.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [AddPolicyRequest](addpolicyrequest.md) |

**Returns:** *Promise‹[AddPolicyResponse](addpolicyresponse.md)›*

___

###  getPolicies

▸ **getPolicies**(`queryFilter`: [GetPoliciesRequest](../globals.md#getpoliciesrequest)): *Promise‹[GetPoliciesResponse](getpoliciesresponse.md)›*

*Defined in [packages/security-client/src/defs/policy.ts:66](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/defs/policy.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`queryFilter` | [GetPoliciesRequest](../globals.md#getpoliciesrequest) |

**Returns:** *Promise‹[GetPoliciesResponse](getpoliciesresponse.md)›*

___

###  removePolicy

▸ **removePolicy**(`request`: [RemovePolicyRequest](../globals.md#removepolicyrequest)): *Promise‹void›*

*Defined in [packages/security-client/src/defs/policy.ts:67](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/defs/policy.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [RemovePolicyRequest](../globals.md#removepolicyrequest) |

**Returns:** *Promise‹void›*
