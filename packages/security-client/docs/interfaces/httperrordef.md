# Interface: HttpErrorDef

## Hierarchy

  ↳ [HttpError](httperror.md)

  ↳ **HttpErrorDef**

## Implemented by

* [BadGateway](../classes/badgateway.md)
* [BadRequest](../classes/badrequest.md)
* [Conflict](../classes/conflict.md)
* [Forbidden](../classes/forbidden.md)
* [GatewayTimeout](../classes/gatewaytimeout.md)
* [Gone](../classes/gone.md)
* [HttpErrorBase](../classes/httperrorbase.md)
* [InternalServerError](../classes/internalservererror.md)
* [MethodNotAllowed](../classes/methodnotallowed.md)
* [NotFound](../classes/notfound.md)
* [NotImplemented](../classes/notimplemented.md)
* [ProxyAuthenticationRequired](../classes/proxyauthenticationrequired.md)
* [RequestTimeout](../classes/requesttimeout.md)
* [ServiceUnavailable](../classes/serviceunavailable.md)
* [TooManyRequests](../classes/toomanyrequests.md)
* [Unauthorized](../classes/unauthorized.md)

## Index

### Properties

* [message](httperrordef.md#message)
* [name](httperrordef.md#name)
* [stack](httperrordef.md#optional-stack)
* [statusCode](httperrordef.md#statuscode)
* [title](httperrordef.md#title)

## Properties

###  message

• **message**: *string*

*Inherited from [HttpError](httperror.md).[message](httperror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from [HttpError](httperror.md).[name](httperror.md#name)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [HttpError](httperror.md).[stack](httperror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975

___

###  statusCode

• **statusCode**: *number*

*Inherited from [HttpError](httperror.md).[statusCode](httperror.md#statuscode)*

*Defined in [packages/security-client/src/services/http-errors.ts:4](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/services/http-errors.ts#L4)*

___

###  title

• **title**: *string*

*Defined in [packages/security-client/src/services/http-errors.ts:8](https://github.com/TheSoftwareHouse/rad-modules-tools/blob/56e5326/packages/security-client/src/services/http-errors.ts#L8)*
