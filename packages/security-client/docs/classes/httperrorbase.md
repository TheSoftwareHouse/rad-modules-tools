# Class: HttpErrorBase

## Hierarchy

* [Error](../interfaces/httperror.md#error)

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

* [constructor](httperrorbase.md#constructor)

### Properties

* [message](httperrorbase.md#message)
* [name](httperrorbase.md#name)
* [stack](httperrorbase.md#optional-stack)
* [statusCode](httperrorbase.md#statuscode)
* [title](httperrorbase.md#title)
* [Error](httperrorbase.md#static-error)

## Constructors

###  constructor

\+ **new HttpErrorBase**(`message`: string | null): *[HttpErrorBase](httperrorbase.md)*

*Defined in [packages/security-client/src/services/http-errors.ts:22](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/services/http-errors.ts#L22)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | string &#124; null | null |

**Returns:** *[HttpErrorBase](httperrorbase.md)*

## Properties

###  message

• **message**: *string*

*Implementation of [HttpErrorDef](../interfaces/httperrordef.md).[message](../interfaces/httperrordef.md#message)*

*Inherited from [HttpError](../interfaces/httperror.md).[message](../interfaces/httperror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Implementation of [HttpErrorDef](../interfaces/httperrordef.md).[name](../interfaces/httperrordef.md#name)*

*Inherited from [HttpError](../interfaces/httperror.md).[name](../interfaces/httperror.md#name)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *string*

*Implementation of [HttpErrorDef](../interfaces/httperrordef.md).[stack](../interfaces/httperrordef.md#optional-stack)*

*Inherited from [HttpError](../interfaces/httperror.md).[stack](../interfaces/httperror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

###  statusCode

• **statusCode**: *number* = 500

*Implementation of [HttpErrorDef](../interfaces/httperrordef.md).[statusCode](../interfaces/httperrordef.md#statuscode)*

*Defined in [packages/security-client/src/services/http-errors.ts:20](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/services/http-errors.ts#L20)*

___

###  title

• **title**: *string* = "Internal Server Error"

*Implementation of [HttpErrorDef](../interfaces/httperrordef.md).[title](../interfaces/httperrordef.md#title)*

*Defined in [packages/security-client/src/services/http-errors.ts:22](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/services/http-errors.ts#L22)*

___

### `Static` Error

▪ **Error**: *ErrorConstructor*

Defined in node_modules/typescript/lib/lib.es5.d.ts:984
