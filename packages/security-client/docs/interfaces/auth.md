[@tshio/security-client](../README.md) › [Globals](../globals.md) › [Auth](auth.md)

# Interface: Auth

## Hierarchy

* **Auth**

## Index

### Methods

* [login](auth.md#markdown-header-login)
* [refreshToken](auth.md#markdown-header-refreshtoken)
* [refreshUserActiveToken](auth.md#markdown-header-refreshuseractivetoken)
* [resetPassword](auth.md#markdown-header-resetpassword)

## Methods

###  login

▸ **login**(`request`: [LoginRequest](loginrequest.md)): *Promise‹[Token](../globals.md#markdown-header-token)›*

*Defined in [packages/security-client/src/defs/auth.ts:27](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/auth.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [LoginRequest](loginrequest.md) |

**Returns:** *Promise‹[Token](../globals.md#markdown-header-token)›*

___

###  refreshToken

▸ **refreshToken**(`request`: [RefreshTokenRequest](refreshtokenrequest.md)): *Promise‹[RefreshTokenResponse](../globals.md#markdown-header-refreshtokenresponse)›*

*Defined in [packages/security-client/src/defs/auth.ts:29](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/auth.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [RefreshTokenRequest](refreshtokenrequest.md) |

**Returns:** *Promise‹[RefreshTokenResponse](../globals.md#markdown-header-refreshtokenresponse)›*

___

###  refreshUserActiveToken

▸ **refreshUserActiveToken**(`userId`: string): *Promise‹[RefreshUserActiveTokenResponse](../globals.md#markdown-header-refreshuseractivetokenresponse)›*

*Defined in [packages/security-client/src/defs/auth.ts:30](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/auth.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | string |

**Returns:** *Promise‹[RefreshUserActiveTokenResponse](../globals.md#markdown-header-refreshuseractivetokenresponse)›*

___

###  resetPassword

▸ **resetPassword**(`request`: [ResetPasswordRequest](resetpasswordrequest.md)): *Promise‹[ResetPasswordResponse](resetpasswordresponse.md)›*

*Defined in [packages/security-client/src/defs/auth.ts:28](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/auth.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [ResetPasswordRequest](resetpasswordrequest.md) |

**Returns:** *Promise‹[ResetPasswordResponse](resetpasswordresponse.md)›*
