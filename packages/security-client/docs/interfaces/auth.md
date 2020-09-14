# Interface: Auth

## Hierarchy

* **Auth**

## Implemented by

* [AuthResources](../classes/authresources.md)

## Index

### Methods

* [login](auth.md#login)
* [refreshToken](auth.md#refreshtoken)
* [refreshUserActiveToken](auth.md#refreshuseractivetoken)
* [resetPassword](auth.md#resetpassword)

## Methods

###  login

▸ **login**(`request`: [LoginRequest](loginrequest.md)): *Promise‹[Token](../globals.md#token)›*

*Defined in [packages/security-client/src/defs/auth.ts:27](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/defs/auth.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [LoginRequest](loginrequest.md) |

**Returns:** *Promise‹[Token](../globals.md#token)›*

___

###  refreshToken

▸ **refreshToken**(`request`: [RefreshTokenRequest](refreshtokenrequest.md)): *Promise‹[RefreshTokenResponse](../globals.md#refreshtokenresponse)›*

*Defined in [packages/security-client/src/defs/auth.ts:29](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/defs/auth.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [RefreshTokenRequest](refreshtokenrequest.md) |

**Returns:** *Promise‹[RefreshTokenResponse](../globals.md#refreshtokenresponse)›*

___

###  refreshUserActiveToken

▸ **refreshUserActiveToken**(`userId`: string): *Promise‹[RefreshUserActiveTokenResponse](../globals.md#refreshuseractivetokenresponse)›*

*Defined in [packages/security-client/src/defs/auth.ts:30](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/defs/auth.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | string |

**Returns:** *Promise‹[RefreshUserActiveTokenResponse](../globals.md#refreshuseractivetokenresponse)›*

___

###  resetPassword

▸ **resetPassword**(`request`: [ResetPasswordRequest](resetpasswordrequest.md)): *Promise‹[ResetPasswordResponse](resetpasswordresponse.md)›*

*Defined in [packages/security-client/src/defs/auth.ts:28](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/defs/auth.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [ResetPasswordRequest](resetpasswordrequest.md) |

**Returns:** *Promise‹[ResetPasswordResponse](resetpasswordresponse.md)›*
