[@tshio/security-client](../README.md) › [Globals](../globals.md) › [HttpErrorBase](httperrorbase.md)

# Class: HttpErrorBase

## Hierarchy

* [Error](../interfaces/httperror.md#markdown-header-error)

  ↳ **HttpErrorBase**

  ↳ [BadRequest](badrequest.md)

  ↳ [Unauthorized](unauthorized.md)

  ↳ [Forbidden](forbidden.md)

  ↳ [NotFound](notfound.md)

  ↳ [MethodNotAllowed](methodnotallowed.md)

  ↳ [ProxyAuthenticationRequired](proxyauthenticationrequired.md)

  ↳ [RequestTimeout](requesttimeout.md)

  ↳ [Conflict](conflict.md)

  ↳ [Gone](gone.md)

  ↳ [TooManyRequests](toomanyrequests.md)

  ↳ [InternalServerError](internalservererror.md)

  ↳ [NotImplemented](notimplemented.md)

  ↳ [BadGateway](badgateway.md)

  ↳ [ServiceUnavailable](serviceunavailable.md)

  ↳ [GatewayTimeout](gatewaytimeout.md)

## Implements

* [HttpErrorDef](../interfaces/httperrordef.md)

## Index

### Constructors

* [constructor](httperrorbase.md#markdown-header-constructor)

### Properties

* [message](httperrorbase.md#markdown-header-message)
* [name](httperrorbase.md#markdown-header-name)
* [stack](httperrorbase.md#markdown-header-optional-stack)
* [statusCode](httperrorbase.md#markdown-header-statuscode)
* [title](httperrorbase.md#markdown-header-title)
* [Error](httperrorbase.md#markdown-header-static-error)

## Constructors

###  constructor

\+ **new HttpErrorBase**(`message`: string | null): *[HttpErrorBase](httperrorbase.md)*

*Defined in [packages/security-client/src/services/http-errors.ts:22](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/http-errors.ts#L22)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string &#124; null | null |

**Returns:** *[HttpErrorBase](httperrorbase.md)*

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

• **statusCode**: *number* = 500

*Implementation of [HttpErrorDef](../interfaces/httperrordef.md).[statusCode](../interfaces/httperrordef.md#markdown-header-statuscode)*

*Defined in [packages/security-client/src/services/http-errors.ts:20](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/http-errors.ts#L20)*

___

###  title

• **title**: *string* = "Internal Server Error"

*Implementation of [HttpErrorDef](../interfaces/httperrordef.md).[title](../interfaces/httperrordef.md#markdown-header-title)*

*Defined in [packages/security-client/src/services/http-errors.ts:22](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/afe5496/packages/security-client/src/services/http-errors.ts#L22)*

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
