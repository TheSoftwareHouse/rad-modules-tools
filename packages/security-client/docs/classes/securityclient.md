[@tshio/security-client](../README.md) › [Globals](../globals.md) › [SecurityClient](securityclient.md)

# Class: SecurityClient

## Hierarchy

* **SecurityClient**

## Index

### Constructors

* [constructor](securityclient.md#markdown-header-constructor)

### Properties

* [attributes](securityclient.md#markdown-header-attributes)
* [auth](securityclient.md#markdown-header-auth)
* [policy](securityclient.md#markdown-header-policy)
* [serviceClient](securityclient.md#markdown-header-serviceclient)
* [tokens](securityclient.md#markdown-header-tokens)
* [users](securityclient.md#markdown-header-users)

### Methods

* [setApiKey](securityclient.md#markdown-header-setapikey)
* [setToken](securityclient.md#markdown-header-settoken)

## Constructors

###  constructor

\+ **new SecurityClient**(`options`: [Options](../globals.md#markdown-header-options)): *[SecurityClient](securityclient.md)*

*Defined in [packages/security-client/src/services/security-client.ts:73](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/security-client.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [Options](../globals.md#markdown-header-options) |

**Returns:** *[SecurityClient](securityclient.md)*

## Properties

###  attributes

• **attributes**: *[Attributes](../interfaces/attributes.md)*

*Defined in [packages/security-client/src/services/security-client.ts:114](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/security-client.ts#L114)*

___

###  auth

• **auth**: *[Auth](../interfaces/auth.md)*

*Defined in [packages/security-client/src/services/security-client.ts:110](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/security-client.ts#L110)*

___

###  policy

• **policy**: *[Policy](../interfaces/policy.md)*

*Defined in [packages/security-client/src/services/security-client.ts:116](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/security-client.ts#L116)*

___

###  serviceClient

• **serviceClient**: *ServiceClient*

*Defined in [packages/security-client/src/services/security-client.ts:106](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/security-client.ts#L106)*

___

###  tokens

• **tokens**: *[Tokens](../interfaces/tokens.md)*

*Defined in [packages/security-client/src/services/security-client.ts:112](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/security-client.ts#L112)*

___

###  users

• **users**: *[Users](../interfaces/users.md)*

*Defined in [packages/security-client/src/services/security-client.ts:108](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/security-client.ts#L108)*

## Methods

###  setApiKey

▸ **setApiKey**(`apiKey`: string): *Promise‹void›*

*Defined in [packages/security-client/src/services/security-client.ts:118](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/security-client.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`apiKey` | string |

**Returns:** *Promise‹void›*

___

###  setToken

▸ **setToken**(`token`: [Token](../globals.md#markdown-header-token)): *Promise‹void›*

*Defined in [packages/security-client/src/services/security-client.ts:122](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/security-client.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`token` | [Token](../globals.md#markdown-header-token) |

**Returns:** *Promise‹void›*
