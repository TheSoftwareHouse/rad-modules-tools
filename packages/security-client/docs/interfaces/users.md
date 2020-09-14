[@tshio/security-client](../README.md) › [Globals](../globals.md) › [Users](users.md)

# Interface: Users

## Hierarchy

* **Users**

## Index

### Methods

* [activateUser](users.md#markdown-header-activateuser)
* [addAttributes](users.md#markdown-header-addattributes)
* [addUser](users.md#markdown-header-adduser)
* [deactivateUser](users.md#markdown-header-deactivateuser)
* [deleteUser](users.md#markdown-header-deleteuser)
* [getUser](users.md#markdown-header-getuser)
* [getUserByResource](users.md#markdown-header-getuserbyresource)
* [getUserId](users.md#markdown-header-getuserid)
* [getUsers](users.md#markdown-header-getusers)
* [hasAccess](users.md#markdown-header-hasaccess)
* [hasAttributes](users.md#markdown-header-hasattributes)
* [isAuthenticated](users.md#markdown-header-isauthenticated)
* [passwordResetToken](users.md#markdown-header-passwordresettoken)
* [setPassword](users.md#markdown-header-setpassword)

## Methods

###  activateUser

▸ **activateUser**(`request`: [ActivateUserRequest](activateuserrequest.md)): *Promise‹[ActivateUserResponse](activateuserresponse.md)›*

*Defined in [packages/security-client/src/defs/user.ts:152](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [ActivateUserRequest](activateuserrequest.md) |

**Returns:** *Promise‹[ActivateUserResponse](activateuserresponse.md)›*

___

###  addAttributes

▸ **addAttributes**(`request`: [AddAttributesRequest](addattributesrequest.md)): *Promise‹[AddAttributesResponse](addattributesresponse.md)›*

*Defined in [packages/security-client/src/defs/user.ts:153](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [AddAttributesRequest](addattributesrequest.md) |

**Returns:** *Promise‹[AddAttributesResponse](addattributesresponse.md)›*

___

###  addUser

▸ **addUser**(`request`: [AddUserRequest](adduserrequest.md)): *Promise‹[AddUserResponse](adduserresponse.md)›*

*Defined in [packages/security-client/src/defs/user.ts:154](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L154)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [AddUserRequest](adduserrequest.md) |

**Returns:** *Promise‹[AddUserResponse](adduserresponse.md)›*

___

###  deactivateUser

▸ **deactivateUser**(`request`: [DeactivateUserRequest](deactivateuserrequest.md)): *Promise‹[DeactivateUserResponse](deactivateuserresponse.md)›*

*Defined in [packages/security-client/src/defs/user.ts:155](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L155)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [DeactivateUserRequest](deactivateuserrequest.md) |

**Returns:** *Promise‹[DeactivateUserResponse](deactivateuserresponse.md)›*

___

###  deleteUser

▸ **deleteUser**(`request`: [DeleteUserRequest](deleteuserrequest.md)): *Promise‹[DeleteUserResponse](deleteuserresponse.md)›*

*Defined in [packages/security-client/src/defs/user.ts:156](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [DeleteUserRequest](deleteuserrequest.md) |

**Returns:** *Promise‹[DeleteUserResponse](deleteuserresponse.md)›*

___

###  getUser

▸ **getUser**(`request`: [GetUserRequest](getuserrequest.md)): *Promise‹[GetUserResponse](../globals.md#markdown-header-getuserresponse)›*

*Defined in [packages/security-client/src/defs/user.ts:157](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [GetUserRequest](getuserrequest.md) |

**Returns:** *Promise‹[GetUserResponse](../globals.md#markdown-header-getuserresponse)›*

___

###  getUserByResource

▸ **getUserByResource**(`request`: [GetUsersByResourceRequest](getusersbyresourcerequest.md)): *Promise‹[GetUsersByResourceResponse](getusersbyresourceresponse.md)›*

*Defined in [packages/security-client/src/defs/user.ts:159](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L159)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [GetUsersByResourceRequest](getusersbyresourcerequest.md) |

**Returns:** *Promise‹[GetUsersByResourceResponse](getusersbyresourceresponse.md)›*

___

###  getUserId

▸ **getUserId**(`request`: [GetUserIdRequest](getuseridrequest.md)): *Promise‹[GetUserIdResponse](getuseridresponse.md)›*

*Defined in [packages/security-client/src/defs/user.ts:158](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [GetUserIdRequest](getuseridrequest.md) |

**Returns:** *Promise‹[GetUserIdResponse](getuseridresponse.md)›*

___

###  getUsers

▸ **getUsers**(`queryFilter`: [UsersQueryFilter](usersqueryfilter.md)): *Promise‹[GetUsersResponse](getusersresponse.md)›*

*Defined in [packages/security-client/src/defs/user.ts:151](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L151)*

**Parameters:**

Name | Type |
------ | ------ |
`queryFilter` | [UsersQueryFilter](usersqueryfilter.md) |

**Returns:** *Promise‹[GetUsersResponse](getusersresponse.md)›*

___

###  hasAccess

▸ **hasAccess**(`resources`: string[]): *Promise‹[HasAccessResponse](hasaccessresponse.md)›*

*Defined in [packages/security-client/src/defs/user.ts:160](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L160)*

**Parameters:**

Name | Type |
------ | ------ |
`resources` | string[] |

**Returns:** *Promise‹[HasAccessResponse](hasaccessresponse.md)›*

___

###  hasAttributes

▸ **hasAttributes**(`attributes`: string[]): *Promise‹[HasAttributesResponse](hasattributesresponse.md)›*

*Defined in [packages/security-client/src/defs/user.ts:161](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L161)*

**Parameters:**

Name | Type |
------ | ------ |
`attributes` | string[] |

**Returns:** *Promise‹[HasAttributesResponse](hasattributesresponse.md)›*

___

###  isAuthenticated

▸ **isAuthenticated**(): *Promise‹[IsAuthenticatedResponse](isauthenticatedresponse.md)›*

*Defined in [packages/security-client/src/defs/user.ts:162](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L162)*

**Returns:** *Promise‹[IsAuthenticatedResponse](isauthenticatedresponse.md)›*

___

###  passwordResetToken

▸ **passwordResetToken**(`request`: [PasswordResetTokenRequest](passwordresettokenrequest.md)): *Promise‹[PasswordResetTokenResponse](passwordresettokenresponse.md)›*

*Defined in [packages/security-client/src/defs/user.ts:164](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L164)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [PasswordResetTokenRequest](passwordresettokenrequest.md) |

**Returns:** *Promise‹[PasswordResetTokenResponse](passwordresettokenresponse.md)›*

___

###  setPassword

▸ **setPassword**(`request`: [SetPasswordRequest](setpasswordrequest.md)): *Promise‹[SetPasswordResponse](setpasswordresponse.md)›*

*Defined in [packages/security-client/src/defs/user.ts:163](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/defs/user.ts#L163)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [SetPasswordRequest](setpasswordrequest.md) |

**Returns:** *Promise‹[SetPasswordResponse](setpasswordresponse.md)›*
