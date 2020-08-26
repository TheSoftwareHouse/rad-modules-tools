export interface HttpError extends Error {
  statusCode: number;
}

export enum HttpErrorType {
  CLIENT_ERROR = "client",
  SERVER_ERROR = "server",
}

export interface HttpErrorDef extends HttpError {
  type: HttpErrorType;
  title: string;
}

export class HttpErrorBase extends Error implements HttpErrorDef {
  type: HttpErrorType | null = null;
  statusCode: number = 500;
  title: string = "Internal Server Error";

  constructor(message: string | null = null) {
    super(message || "HTTP error");
    this.message = message;
    this.type = isClientError(this)
      ? HttpErrorType.CLIENT_ERROR
      : isServerError(this)
      ? HttpErrorType.SERVER_ERROR
      : null;
  }
}

export function isHttpError(e: Error): e is HttpError {
  return Number.isInteger((<HttpError>e).statusCode);
}

export function isClientError(e: Error): boolean {
  return isHttpError(e) && e.statusCode >= 400 && e.statusCode <= 499;
}

export function isServerError(e: Error): boolean {
  return isHttpError(e) && e.statusCode >= 500 && e.statusCode <= 599;
}

export class BadRequest extends HttpErrorBase {
  statusCode = 400;
  title = "Bad Request";
}

export class Unauthorized extends HttpErrorBase {
  statusCode = 401;
  title = "Unauthorized";
}

export class Forbidden extends HttpErrorBase {
  statusCode = 403;
  title = "Forbiddden";
}

export class NotFound extends HttpErrorBase {
  statusCode = 404;
  title = "Not Found";
}

export class MethodNotAllowed extends HttpErrorBase {
  statusCode = 405;
  title = "Method Not Allowed";
}

export class ProxyAuthenticationRequired extends HttpErrorBase {
  statusCode = 407;
  title = "Proxy Authentication Required";
}

export class RequestTimeout extends HttpErrorBase {
  statusCode = 408;
  title = "Request Timeout";
}

export class Conflict extends HttpErrorBase {
  statusCode = 409;
  title = "Conflict";
}

export class Gone extends HttpErrorBase {
  statusCode = 410;
  title = "Gone";
}

export class TooManyRequests extends HttpErrorBase {
  statusCode = 429;
  title = "Too Many Requests";
}

export class InternalServerError extends HttpErrorBase {
  statusCode = 500;
  title = "Internal Server Error";
}

export class NotImplemented extends HttpErrorBase {
  statusCode = 501;
  title = "Not Implemented";
}

export class BadGateway extends HttpErrorBase {
  statusCode = 502;
  title = "Bad Gateway";
}

export class ServiceUnavailable extends HttpErrorBase {
  statusCode = 503;
  title = "Service Unavailable";
}

export class GatewayTimeout extends HttpErrorBase {
  statusCode = 504;
  title = "Gateway Timeout";
}
