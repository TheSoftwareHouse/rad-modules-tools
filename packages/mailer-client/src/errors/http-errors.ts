/* eslint max-classes-per-file: ["off"] */

import { ResponseFilterError } from "perron";

export interface HttpError extends Error {
  statusCode: number;
}

export interface HttpErrorDef extends HttpError {
  title: string;
}

export function isHttpError(e: Error): e is HttpError {
  return Number.isInteger((<HttpError>e).statusCode);
}

export function isClientError(e: Error): boolean {
  return isHttpError(e) && e.statusCode >= 400 && e.statusCode <= 499;
}

export class HttpErrorBase extends Error implements HttpErrorDef {
  statusCode: number = 500;

  title: string = "Internal Server Error";

  constructor(message: string | null = null) {
    super(message || "HTTP error");
    this.message = message;
  }
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

export function getHttpError(error: ResponseFilterError): HttpError {
  const { response } = error;
  const errorMessage = (response as any)?.body?.error ?? error.message;

  switch (response?.statusCode) {
    case 400:
      return new BadRequest(errorMessage);
    case 401:
      return new Unauthorized(errorMessage);
    case 403:
      return new Forbidden(errorMessage);
    case 404:
      return new NotFound(errorMessage);
    case 405:
      return new MethodNotAllowed(errorMessage);
    case 407:
      return new ProxyAuthenticationRequired(errorMessage);
    case 408:
      return new RequestTimeout(errorMessage);
    case 409:
      return new Conflict(errorMessage);
    case 410:
      return new Gone(errorMessage);
    case 429:
      return new TooManyRequests(errorMessage);
    case 500:
      throw new InternalServerError(errorMessage);
    case 501:
      return new NotImplemented(errorMessage);
    case 502:
      return new BadGateway(errorMessage);
    case 503:
      return new ServiceUnavailable(errorMessage);
    case 504:
      return new GatewayTimeout(errorMessage);
    default:
      return new HttpErrorBase(error.message);
  }
}
