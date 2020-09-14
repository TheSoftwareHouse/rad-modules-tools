# Interface: Tokens

## Hierarchy

* **Tokens**

## Index

### Methods

* [createAccessKey](tokens.md#createaccesskey)
* [generateToken](tokens.md#generatetoken)
* [getAccessKeys](tokens.md#getaccesskeys)
* [removeAccessKey](tokens.md#removeaccesskey)

## Methods

###  createAccessKey

▸ **createAccessKey**(`request`: [CreateAccessKeyRequest](createaccesskeyrequest.md)): *Promise‹[CreateAccessKeyResponse](createaccesskeyresponse.md)›*

*Defined in [packages/security-client/src/defs/tokens.ts:42](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/defs/tokens.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [CreateAccessKeyRequest](createaccesskeyrequest.md) |

**Returns:** *Promise‹[CreateAccessKeyResponse](createaccesskeyresponse.md)›*

___

###  generateToken

▸ **generateToken**(`request`: [GenerateTokenRequest](generatetokenrequest.md)): *Promise‹[GenerateTokenResponse](generatetokenresponse.md)›*

*Defined in [packages/security-client/src/defs/tokens.ts:43](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/defs/tokens.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [GenerateTokenRequest](generatetokenrequest.md) |

**Returns:** *Promise‹[GenerateTokenResponse](generatetokenresponse.md)›*

___

###  getAccessKeys

▸ **getAccessKeys**(`request?`: [GetAccessKeysRequest](getaccesskeysrequest.md)): *Promise‹[GetAccessKeysResponse](getaccesskeysresponse.md)›*

*Defined in [packages/security-client/src/defs/tokens.ts:44](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/defs/tokens.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`request?` | [GetAccessKeysRequest](getaccesskeysrequest.md) |

**Returns:** *Promise‹[GetAccessKeysResponse](getaccesskeysresponse.md)›*

___

###  removeAccessKey

▸ **removeAccessKey**(`request?`: [RemoveAccessKeyRequest](removeaccesskeyrequest.md)): *Promise‹void›*

*Defined in [packages/security-client/src/defs/tokens.ts:45](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/defs/tokens.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`request?` | [RemoveAccessKeyRequest](removeaccesskeyrequest.md) |

**Returns:** *Promise‹void›*
