"use strict";
/* eslint max-classes-per-file: ["off"] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayTimeout = exports.ServiceUnavailable = exports.BadGateway = exports.NotImplemented = exports.InternalServerError = exports.TooManyRequests = exports.Gone = exports.Conflict = exports.RequestTimeout = exports.ProxyAuthenticationRequired = exports.MethodNotAllowed = exports.NotFound = exports.Forbidden = exports.Unauthorized = exports.BadRequest = exports.isServerError = exports.HttpErrorBase = exports.isClientError = exports.isHttpError = void 0;
function isHttpError(e) {
    return Number.isInteger(e.statusCode);
}
exports.isHttpError = isHttpError;
function isClientError(e) {
    return isHttpError(e) && e.statusCode >= 400 && e.statusCode <= 499;
}
exports.isClientError = isClientError;
class HttpErrorBase extends Error {
    constructor(message = null) {
        super(message || "HTTP error");
        this.statusCode = 500;
        this.title = "Internal Server Error";
        this.message = message;
    }
}
exports.HttpErrorBase = HttpErrorBase;
function isServerError(e) {
    return isHttpError(e) && e.statusCode >= 500 && e.statusCode <= 599;
}
exports.isServerError = isServerError;
class BadRequest extends HttpErrorBase {
    constructor() {
        super(...arguments);
        this.statusCode = 400;
        this.title = "Bad Request";
    }
}
exports.BadRequest = BadRequest;
class Unauthorized extends HttpErrorBase {
    constructor() {
        super(...arguments);
        this.statusCode = 401;
        this.title = "Unauthorized";
    }
}
exports.Unauthorized = Unauthorized;
class Forbidden extends HttpErrorBase {
    constructor() {
        super(...arguments);
        this.statusCode = 403;
        this.title = "Forbiddden";
    }
}
exports.Forbidden = Forbidden;
class NotFound extends HttpErrorBase {
    constructor() {
        super(...arguments);
        this.statusCode = 404;
        this.title = "Not Found";
    }
}
exports.NotFound = NotFound;
class MethodNotAllowed extends HttpErrorBase {
    constructor() {
        super(...arguments);
        this.statusCode = 405;
        this.title = "Method Not Allowed";
    }
}
exports.MethodNotAllowed = MethodNotAllowed;
class ProxyAuthenticationRequired extends HttpErrorBase {
    constructor() {
        super(...arguments);
        this.statusCode = 407;
        this.title = "Proxy Authentication Required";
    }
}
exports.ProxyAuthenticationRequired = ProxyAuthenticationRequired;
class RequestTimeout extends HttpErrorBase {
    constructor() {
        super(...arguments);
        this.statusCode = 408;
        this.title = "Request Timeout";
    }
}
exports.RequestTimeout = RequestTimeout;
class Conflict extends HttpErrorBase {
    constructor() {
        super(...arguments);
        this.statusCode = 409;
        this.title = "Conflict";
    }
}
exports.Conflict = Conflict;
class Gone extends HttpErrorBase {
    constructor() {
        super(...arguments);
        this.statusCode = 410;
        this.title = "Gone";
    }
}
exports.Gone = Gone;
class TooManyRequests extends HttpErrorBase {
    constructor() {
        super(...arguments);
        this.statusCode = 429;
        this.title = "Too Many Requests";
    }
}
exports.TooManyRequests = TooManyRequests;
class InternalServerError extends HttpErrorBase {
    constructor() {
        super(...arguments);
        this.statusCode = 500;
        this.title = "Internal Server Error";
    }
}
exports.InternalServerError = InternalServerError;
class NotImplemented extends HttpErrorBase {
    constructor() {
        super(...arguments);
        this.statusCode = 501;
        this.title = "Not Implemented";
    }
}
exports.NotImplemented = NotImplemented;
class BadGateway extends HttpErrorBase {
    constructor() {
        super(...arguments);
        this.statusCode = 502;
        this.title = "Bad Gateway";
    }
}
exports.BadGateway = BadGateway;
class ServiceUnavailable extends HttpErrorBase {
    constructor() {
        super(...arguments);
        this.statusCode = 503;
        this.title = "Service Unavailable";
    }
}
exports.ServiceUnavailable = ServiceUnavailable;
class GatewayTimeout extends HttpErrorBase {
    constructor() {
        super(...arguments);
        this.statusCode = 504;
        this.title = "Gateway Timeout";
    }
}
exports.GatewayTimeout = GatewayTimeout;
//# sourceMappingURL=http-errors.js.map