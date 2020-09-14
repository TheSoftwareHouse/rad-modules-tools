# Class: SecurityClient

## Hierarchy

* **SecurityClient**

## Index

### Constructors

* [constructor](securityclient.md#constructor)

### Properties

* [attributes](securityclient.md#attributes)
* [auth](securityclient.md#auth)
* [policy](securityclient.md#policy)
* [serviceClient](securityclient.md#serviceclient)
* [tokens](securityclient.md#tokens)
* [users](securityclient.md#users)

### Methods

* [setApiKey](securityclient.md#setapikey)
* [setToken](securityclient.md#settoken)

## Constructors

###  constructor

\+ **new SecurityClient**(`options`: [Options](../globals.md#options)): *[SecurityClient](securityclient.md)*

*Defined in [packages/security-client/src/services/security-client.ts:73](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/services/security-client.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [Options](../globals.md#options) |

**Returns:** *[SecurityClient](securityclient.md)*

## Properties

###  attributes

• **attributes**: *[Attributes](../interfaces/attributes.md)*

*Defined in [packages/security-client/src/services/security-client.ts:114](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/services/security-client.ts#L114)*

___

###  auth

• **auth**: *[Auth](../interfaces/auth.md)*

*Defined in [packages/security-client/src/services/security-client.ts:110](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/services/security-client.ts#L110)*

___

###  policy

• **policy**: *[PolicyResources](policyresources.md)*

*Defined in [packages/security-client/src/services/security-client.ts:116](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/services/security-client.ts#L116)*

___

###  serviceClient

• **serviceClient**: *ServiceClient*

*Defined in [packages/security-client/src/services/security-client.ts:106](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/services/security-client.ts#L106)*

___

###  tokens

• **tokens**: *[Tokens](../interfaces/tokens.md)*

*Defined in [packages/security-client/src/services/security-client.ts:112](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/services/security-client.ts#L112)*

___

###  users

• **users**: *[Users](../interfaces/users.md)*

*Defined in [packages/security-client/src/services/security-client.ts:108](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/services/security-client.ts#L108)*

## Methods

###  setApiKey

▸ **setApiKey**(`apiKey`: string): *Promise‹void›*

*Defined in [packages/security-client/src/services/security-client.ts:118](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/services/security-client.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`apiKey` | string |

**Returns:** *Promise‹void›*

___

###  setToken

▸ **setToken**(`token`: [Token](../globals.md#token)): *Promise‹void›*

*Defined in [packages/security-client/src/services/security-client.ts:122](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/services/security-client.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`token` | [Token](../globals.md#token) |

**Returns:** *Promise‹void›*
