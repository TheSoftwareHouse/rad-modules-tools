[@tshio/security-client](../README.md) › [Globals](../globals.md) › [NotImplemented](notimplemented.md)

# Class: NotImplemented

## Hierarchy

  ↳ [HttpErrorBase](httperrorbase.md)

  ↳ **NotImplemented**

## Implements

* [HttpErrorDef](../interfaces/httperrordef.md)

## Index

### Constructors

* [constructor](notimplemented.md#markdown-header-constructor)

### Properties

* [message](notimplemented.md#markdown-header-message)
* [name](notimplemented.md#markdown-header-name)
* [stack](notimplemented.md#markdown-header-optional-stack)
* [statusCode](notimplemented.md#markdown-header-statuscode)
* [title](notimplemented.md#markdown-header-title)

## Constructors

###  constructor

\+ **new NotImplemented**(`message`: string | null): *[NotImplemented](notimplemented.md)*

*Inherited from [HttpErrorBase](httperrorbase.md).[constructor](httperrorbase.md#markdown-header-constructor)*

*Defined in [packages/security-client/src/services/http-errors.ts:22](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/http-errors.ts#L22)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string &#124; null | null |

**Returns:** *[NotImplemented](notimplemented.md)*

## Properties

###  message

• **message**: *string*

*Implementation of [HttpErrorDef](../interfaces/httperrordef.md).[message](../interfaces/httperrordef.md#markdown-header-message)*

*Inherited from [HttpError](../interfaces/httperror.md).[message](../interfaces/httperror.md#markdown-header-message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Implementation of [HttpErrorDef](../interfaces/httperrordef.md).[name](../interfaces/httperrordef.md#markdown-header-name)*

*Inherited from [HttpError](../interfaces/httperror.md).[name](../interfaces/httperror.md#markdown-header-name)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *string*

*Implementation of [HttpErrorDef](../interfaces/httperrordef.md).[stack](../interfaces/httperrordef.md#markdown-header-optional-stack)*

*Inherited from [HttpError](../interfaces/httperror.md).[stack](../interfaces/httperror.md#markdown-header-optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

###  statusCode

• **statusCode**: *number* = 501

*Implementation of [HttpErrorDef](../interfaces/httperrordef.md).[statusCode](../interfaces/httperrordef.md#markdown-header-statuscode)*

*Overrides [HttpErrorBase](httperrorbase.md).[statusCode](httperrorbase.md#markdown-header-statuscode)*

*Defined in [packages/security-client/src/services/http-errors.ts:101](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/http-errors.ts#L101)*

___

###  title

• **title**: *string* = "Not Implemented"

*Implementation of [HttpErrorDef](../interfaces/httperrordef.md).[title](../interfaces/httperrordef.md#markdown-header-title)*

*Overrides [HttpErrorBase](httperrorbase.md).[title](httperrorbase.md#markdown-header-title)*

*Defined in [packages/security-client/src/services/http-errors.ts:103](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/http-errors.ts#L103)*
