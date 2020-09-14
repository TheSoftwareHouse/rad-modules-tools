# Class: AuthResources

## Hierarchy

* **AuthResources**

## Implements

* [Auth](../interfaces/auth.md)

## Index

### Constructors

* [constructor](authresources.md#constructor)

### Methods

* [login](authresources.md#login)
* [refreshToken](authresources.md#refreshtoken)
* [refreshUserActiveToken](authresources.md#refreshuseractivetoken)
* [resetPassword](authresources.md#resetpassword)

## Constructors

###  constructor

\+ **new AuthResources**(`serviceClient`: ServiceClient): *[AuthResources](authresources.md)*

*Defined in [packages/security-client/src/resources/auth.ts:14](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/resources/auth.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceClient` | ServiceClient |

**Returns:** *[AuthResources](authresources.md)*

## Methods

###  login

▸ **login**(`request`: [LoginRequest](../interfaces/loginrequest.md)): *Promise‹[Token](../globals.md#token)›*

*Implementation of [Auth](../interfaces/auth.md)*

*Defined in [packages/security-client/src/resources/auth.ts:26](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/resources/auth.ts#L26)*

Returns Token object

**`beta`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`request` | [LoginRequest](../interfaces/loginrequest.md) | LoginRequest |

**Returns:** *Promise‹[Token](../globals.md#token)›*

Token

___

###  refreshToken

▸ **refreshToken**(`request`: [RefreshTokenRequest](../interfaces/refreshtokenrequest.md)): *Promise‹[RefreshTokenResponse](../globals.md#refreshtokenresponse)›*

*Implementation of [Auth](../interfaces/auth.md)*

*Defined in [packages/security-client/src/resources/auth.ts:54](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/resources/auth.ts#L54)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [RefreshTokenRequest](../interfaces/refreshtokenrequest.md) |

**Returns:** *Promise‹[RefreshTokenResponse](../globals.md#refreshtokenresponse)›*

___

###  refreshUserActiveToken

▸ **refreshUserActiveToken**(`userId`: string): *Promise‹[RefreshUserActiveTokenResponse](../globals.md#refreshuseractivetokenresponse)›*

*Implementation of [Auth](../interfaces/auth.md)*

*Defined in [packages/security-client/src/resources/auth.ts:67](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/resources/auth.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`userId` | string |

**Returns:** *Promise‹[RefreshUserActiveTokenResponse](../globals.md#refreshuseractivetokenresponse)›*

___

###  resetPassword

▸ **resetPassword**(`request`: [ResetPasswordRequest](../interfaces/resetpasswordrequest.md)): *Promise‹[ResetPasswordResponse](../interfaces/resetpasswordresponse.md)›*

*Implementation of [Auth](../interfaces/auth.md)*

*Defined in [packages/security-client/src/resources/auth.ts:39](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/resources/auth.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [ResetPasswordRequest](../interfaces/resetpasswordrequest.md) |

**Returns:** *Promise‹[ResetPasswordResponse](../interfaces/resetpasswordresponse.md)›*
