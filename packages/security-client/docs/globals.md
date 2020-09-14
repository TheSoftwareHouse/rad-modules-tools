[@tshio/security-client](README.md) › [Globals](globals.md)

# @tshio/security-client

## Index

### Classes

* [BadGateway](classes/badgateway.md)
* [BadRequest](classes/badrequest.md)
* [Conflict](classes/conflict.md)
* [Forbidden](classes/forbidden.md)
* [GatewayTimeout](classes/gatewaytimeout.md)
* [Gone](classes/gone.md)
* [HttpErrorBase](classes/httperrorbase.md)
* [InternalServerError](classes/internalservererror.md)
* [MethodNotAllowed](classes/methodnotallowed.md)
* [NotFound](classes/notfound.md)
* [NotImplemented](classes/notimplemented.md)
* [ProxyAuthenticationRequired](classes/proxyauthenticationrequired.md)
* [RequestTimeout](classes/requesttimeout.md)
* [SecurityClient](classes/securityclient.md)
* [ServiceUnavailable](classes/serviceunavailable.md)
* [TooManyRequests](classes/toomanyrequests.md)
* [Unauthorized](classes/unauthorized.md)

### Interfaces

* [ActivateUserRequest](interfaces/activateuserrequest.md)
* [ActivateUserResponse](interfaces/activateuserresponse.md)
* [AddAttributesRequest](interfaces/addattributesrequest.md)
* [AddAttributesResponse](interfaces/addattributesresponse.md)
* [AddPolicyRequest](interfaces/addpolicyrequest.md)
* [AddPolicyResponse](interfaces/addpolicyresponse.md)
* [AddUserRequest](interfaces/adduserrequest.md)
* [AddUserResponse](interfaces/adduserresponse.md)
* [Attribute](interfaces/attribute.md)
* [Attributes](interfaces/attributes.md)
* [AttributesQueryFilter](interfaces/attributesqueryfilter.md)
* [Auth](interfaces/auth.md)
* [CreateAccessKeyRequest](interfaces/createaccesskeyrequest.md)
* [CreateAccessKeyResponse](interfaces/createaccesskeyresponse.md)
* [DeactivateUserRequest](interfaces/deactivateuserrequest.md)
* [DeactivateUserResponse](interfaces/deactivateuserresponse.md)
* [DeleteUserRequest](interfaces/deleteuserrequest.md)
* [DeleteUserResponse](interfaces/deleteuserresponse.md)
* [GenerateTokenRequest](interfaces/generatetokenrequest.md)
* [GenerateTokenResponse](interfaces/generatetokenresponse.md)
* [GetAccessKeysRequest](interfaces/getaccesskeysrequest.md)
* [GetAccessKeysResponse](interfaces/getaccesskeysresponse.md)
* [GetAttributesResponse](interfaces/getattributesresponse.md)
* [GetPoliciesResponse](interfaces/getpoliciesresponse.md)
* [GetUserIdRequest](interfaces/getuseridrequest.md)
* [GetUserIdResponse](interfaces/getuseridresponse.md)
* [GetUserRequest](interfaces/getuserrequest.md)
* [GetUsersByResourceRequest](interfaces/getusersbyresourcerequest.md)
* [GetUsersByResourceResponse](interfaces/getusersbyresourceresponse.md)
* [GetUsersResponse](interfaces/getusersresponse.md)
* [HasAccessResponse](interfaces/hasaccessresponse.md)
* [HasAttributesResponse](interfaces/hasattributesresponse.md)
* [HttpError](interfaces/httperror.md)
* [HttpErrorDef](interfaces/httperrordef.md)
* [IsAuthenticatedResponse](interfaces/isauthenticatedresponse.md)
* [LoginRequest](interfaces/loginrequest.md)
* [PasswordResetTokenRequest](interfaces/passwordresettokenrequest.md)
* [PasswordResetTokenResponse](interfaces/passwordresettokenresponse.md)
* [PoliciesQueryFilter](interfaces/policiesqueryfilter.md)
* [Policy](interfaces/policy.md)
* [PolicyIdQuery](interfaces/policyidquery.md)
* [PolicyItem](interfaces/policyitem.md)
* [PolicyQuery](interfaces/policyquery.md)
* [RefreshTokenRequest](interfaces/refreshtokenrequest.md)
* [RemoveAccessKeyRequest](interfaces/removeaccesskeyrequest.md)
* [ResetPasswordRequest](interfaces/resetpasswordrequest.md)
* [ResetPasswordResponse](interfaces/resetpasswordresponse.md)
* [SetPasswordRequest](interfaces/setpasswordrequest.md)
* [SetPasswordResponse](interfaces/setpasswordresponse.md)
* [Tokens](interfaces/tokens.md)
* [User](interfaces/user.md)
* [Users](interfaces/users.md)
* [UsersQueryFilter](interfaces/usersqueryfilter.md)

### Type aliases

* [ApiKey](globals.md#markdown-header-apikey)
* [Credentials](globals.md#markdown-header-credentials)
* [FilterOperators](globals.md#markdown-header-filteroperators)
* [GetAttributesColumns](globals.md#markdown-header-getattributescolumns)
* [GetAttributesFilterOperators](globals.md#markdown-header-getattributesfilteroperators)
* [GetPoliciesColumns](globals.md#markdown-header-getpoliciescolumns)
* [GetPoliciesFilterOperators](globals.md#markdown-header-getpoliciesfilteroperators)
* [GetPoliciesRequest](globals.md#markdown-header-getpoliciesrequest)
* [GetUserColumns](globals.md#markdown-header-getusercolumns)
* [GetUserResponse](globals.md#markdown-header-getuserresponse)
* [GetUsersRequest](globals.md#markdown-header-getusersrequest)
* [Options](globals.md#markdown-header-options)
* [RefreshTokenResponse](globals.md#markdown-header-refreshtokenresponse)
* [RefreshUserActiveTokenResponse](globals.md#markdown-header-refreshuseractivetokenresponse)
* [RemovePolicyRequest](globals.md#markdown-header-removepolicyrequest)
* [Resources](globals.md#markdown-header-resources)
* [Token](globals.md#markdown-header-token)

### Functions

* [attributes](globals.md#markdown-header-const-attributes)
* [auth](globals.md#markdown-header-const-auth)
* [getHttpError](globals.md#markdown-header-gethttperror)
* [getSecurityClient](globals.md#markdown-header-const-getsecurityclient)
* [isClientError](globals.md#markdown-header-isclienterror)
* [isHttpError](globals.md#markdown-header-ishttperror)
* [isServerError](globals.md#markdown-header-isservererror)
* [policy](globals.md#markdown-header-const-policy)
* [tokens](globals.md#markdown-header-const-tokens)
* [users](globals.md#markdown-header-const-users)

## Type aliases

###  ApiKey

Ƭ **ApiKey**: *string*

*Defined in [packages/security-client/src/services/service.ts:13](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/service.ts#L13)*

___

###  Credentials

Ƭ **Credentials**: *object*

*Defined in [packages/security-client/src/services/service.ts:3](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/service.ts#L3)*

#### Type declaration:

* **password**: *string*

* **username**: *string*

___

###  FilterOperators

Ƭ **FilterOperators**: *"eq" | "eqOr" | "neq" | "neqOr" | "lt" | "ltOr" | "gt" | "gtOr" | "gte" | "gteOr" | "include" | "includeOr"*

*Defined in [packages/security-client/src/defs/user.ts:13](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L13)*

___

###  GetAttributesColumns

Ƭ **GetAttributesColumns**: *"id" | "name" | "user.id" | "user.username"*

*Defined in [packages/security-client/src/defs/attributes.ts:11](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/attributes.ts#L11)*

___

###  GetAttributesFilterOperators

Ƭ **GetAttributesFilterOperators**: *"eq" | "eqOr" | "neq" | "lt" | "gt" | "include" | "includeOr"*

*Defined in [packages/security-client/src/defs/attributes.ts:13](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/attributes.ts#L13)*

___

###  GetPoliciesColumns

Ƭ **GetPoliciesColumns**: *"id" | "resource" | "attribute"*

*Defined in [packages/security-client/src/defs/policy.ts:11](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/policy.ts#L11)*

___

###  GetPoliciesFilterOperators

Ƭ **GetPoliciesFilterOperators**: *"eq" | "neq" | "lt" | "gt" | "include" | "includeOr"*

*Defined in [packages/security-client/src/defs/policy.ts:13](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/policy.ts#L13)*

___

###  GetPoliciesRequest

Ƭ **GetPoliciesRequest**: *[PoliciesQueryFilter](interfaces/policiesqueryfilter.md)*

*Defined in [packages/security-client/src/defs/policy.ts:35](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/policy.ts#L35)*

___

###  GetUserColumns

Ƭ **GetUserColumns**: *"id" | "username" | "isActive" | "createdAt" | "updatedAt" | "attribute.name"*

*Defined in [packages/security-client/src/defs/user.ts:11](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L11)*

___

###  GetUserResponse

Ƭ **GetUserResponse**: *[User](interfaces/user.md)*

*Defined in [packages/security-client/src/defs/user.ts:106](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L106)*

___

###  GetUsersRequest

Ƭ **GetUsersRequest**: *[UsersQueryFilter](interfaces/usersqueryfilter.md)*

*Defined in [packages/security-client/src/defs/user.ts:41](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L41)*

___

###  Options

Ƭ **Options**: *object*

*Defined in [packages/security-client/src/services/service.ts:17](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/service.ts#L17)*

#### Type declaration:

* **autoSetToken**? : *boolean*

* **credentials**(): *object*

  * **apiKey**? : *string*

  * **password**? : *string*

  * **token**(): *object*

    * **accessToken**: *string*

    * **refreshToken**? : *string*

  * **username**? : *string*

* **host**: *string*

* **port**: *number*

___

###  RefreshTokenResponse

Ƭ **RefreshTokenResponse**: *[Token](globals.md#markdown-header-token)*

*Defined in [packages/security-client/src/defs/auth.ts:22](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/auth.ts#L22)*

___

###  RefreshUserActiveTokenResponse

Ƭ **RefreshUserActiveTokenResponse**: *[Token](globals.md#markdown-header-token)*

*Defined in [packages/security-client/src/defs/auth.ts:24](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/auth.ts#L24)*

___

###  RemovePolicyRequest

Ƭ **RemovePolicyRequest**: *[PolicyIdQuery](interfaces/policyidquery.md) | [PolicyQuery](interfaces/policyquery.md)*

*Defined in [packages/security-client/src/defs/policy.ts:62](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/policy.ts#L62)*

___

###  Resources

Ƭ **Resources**: *string[]*

*Defined in [packages/security-client/src/services/service.ts:15](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/service.ts#L15)*

___

###  Token

Ƭ **Token**: *object*

*Defined in [packages/security-client/src/services/service.ts:8](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/service.ts#L8)*

#### Type declaration:

* **accessToken**: *string*

* **refreshToken**? : *string*

## Functions

### `Const` attributes

▸ **attributes**(`serviceClient`: ServiceClient): *[Attributes](interfaces/attributes.md)*

*Defined in [packages/security-client/src/resources/attributes.ts:5](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/resources/attributes.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceClient` | ServiceClient |

**Returns:** *[Attributes](interfaces/attributes.md)*

___

### `Const` auth

▸ **auth**(`serviceClient`: ServiceClient): *[Auth](interfaces/auth.md)*

*Defined in [packages/security-client/src/resources/auth.ts:14](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/resources/auth.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceClient` | ServiceClient |

**Returns:** *[Auth](interfaces/auth.md)*

___

###  getHttpError

▸ **getHttpError**(`error`: ResponseFilterError): *[HttpError](interfaces/httperror.md)*

*Defined in [packages/security-client/src/services/security-client.ts:33](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/security-client.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`error` | ResponseFilterError |

**Returns:** *[HttpError](interfaces/httperror.md)*

___

### `Const` getSecurityClient

▸ **getSecurityClient**(`options`: [Options](globals.md#markdown-header-options)): *[SecurityClient](classes/securityclient.md)‹›*

*Defined in [packages/security-client/src/index.ts:5](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/index.ts#L5)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [Options](globals.md#markdown-header-options) | {
    host: "localhost",
    port: 50050,
    autoSetToken: true,
    credentials: {},
  } |

**Returns:** *[SecurityClient](classes/securityclient.md)‹›*

___

###  isClientError

▸ **isClientError**(`e`: [Error](interfaces/httperror.md#markdown-header-error)): *boolean*

*Defined in [packages/security-client/src/services/http-errors.ts:15](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/http-errors.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [Error](interfaces/httperror.md#markdown-header-error) |

**Returns:** *boolean*

___

###  isHttpError

▸ **isHttpError**(`e`: [Error](interfaces/httperror.md#markdown-header-error)): *e is HttpError*

*Defined in [packages/security-client/src/services/http-errors.ts:11](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/http-errors.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [Error](interfaces/httperror.md#markdown-header-error) |

**Returns:** *e is HttpError*

___

###  isServerError

▸ **isServerError**(`e`: [Error](interfaces/httperror.md#markdown-header-error)): *boolean*

*Defined in [packages/security-client/src/services/http-errors.ts:30](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/http-errors.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [Error](interfaces/httperror.md#markdown-header-error) |

**Returns:** *boolean*

___

### `Const` policy

▸ **policy**(`serviceClient`: ServiceClient): *[Policy](interfaces/policy.md)*

*Defined in [packages/security-client/src/resources/policy.ts:12](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/resources/policy.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceClient` | ServiceClient |

**Returns:** *[Policy](interfaces/policy.md)*

___

### `Const` tokens

▸ **tokens**(`serviceClient`: ServiceClient): *[Tokens](interfaces/tokens.md)*

*Defined in [packages/security-client/src/resources/tokens.ts:14](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/resources/tokens.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceClient` | ServiceClient |

**Returns:** *[Tokens](interfaces/tokens.md)*

___

### `Const` users

▸ **users**(`serviceClient`: ServiceClient): *object*

*Defined in [packages/security-client/src/resources/users.ts:31](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/resources/users.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`serviceClient` | ServiceClient |

**Returns:** *object*

* **activateUser**(`request`: [ActivateUserRequest](interfaces/activateuserrequest.md)): *Promise‹[ActivateUserResponse](interfaces/activateuserresponse.md)›*

* **addAttributes**(`request`: [AddAttributesRequest](interfaces/addattributesrequest.md)): *Promise‹[AddAttributesResponse](interfaces/addattributesresponse.md)›*

* **addUser**(`request`: [AddUserRequest](interfaces/adduserrequest.md)): *Promise‹[AddUserResponse](interfaces/adduserresponse.md)›*

* **deactivateUser**(`request`: [DeactivateUserRequest](interfaces/deactivateuserrequest.md)): *Promise‹[DeactivateUserResponse](interfaces/deactivateuserresponse.md)›*

* **deleteUser**(`request`: [DeleteUserRequest](interfaces/deleteuserrequest.md)): *Promise‹[DeleteUserResponse](interfaces/deleteuserresponse.md)›*

* **getUser**(`request`: [GetUserRequest](interfaces/getuserrequest.md)): *Promise‹[GetUserResponse](globals.md#markdown-header-getuserresponse)›*

* **getUserByResource**(`request`: [GetUsersByResourceRequest](interfaces/getusersbyresourcerequest.md)): *Promise‹[GetUsersByResourceResponse](interfaces/getusersbyresourceresponse.md)›*

* **getUserId**(`request`: [GetUserIdRequest](interfaces/getuseridrequest.md)): *Promise‹[GetUserIdResponse](interfaces/getuseridresponse.md)›*

* **getUsers**(`queryFilter`: [GetUsersRequest](globals.md#markdown-header-getusersrequest)): *Promise‹[GetUsersResponse](interfaces/getusersresponse.md)›*

* **hasAccess**(`resources`: string[]): *Promise‹[HasAccessResponse](interfaces/hasaccessresponse.md)›*

* **hasAttributes**(`attributes`: string[]): *Promise‹[HasAttributesResponse](interfaces/hasattributesresponse.md)›*

* **isAuthenticated**(): *Promise‹[IsAuthenticatedResponse](interfaces/isauthenticatedresponse.md)›*

* **passwordResetToken**(`request`: [PasswordResetTokenRequest](interfaces/passwordresettokenrequest.md)): *Promise‹[PasswordResetTokenResponse](interfaces/passwordresettokenresponse.md)›*

* **removeAttributes**(`userId`: string, `attributes`: string[]): *Promise‹string | object | Buffer‹››*

* **setPassword**(`request`: [SetPasswordRequest](interfaces/setpasswordrequest.md)): *Promise‹[SetPasswordResponse](interfaces/setpasswordresponse.md)›*
