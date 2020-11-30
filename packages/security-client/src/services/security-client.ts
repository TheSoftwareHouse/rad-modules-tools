import { ResponseFilterError, ServiceClient } from "perron";
import { Options } from "./service";
import { users } from "../resources/users";
import {
  BadGateway,
  BadRequest,
  Conflict,
  Forbidden,
  GatewayTimeout,
  Gone,
  HttpError,
  HttpErrorBase,
  InternalServerError,
  MethodNotAllowed,
  NotFound,
  NotImplemented,
  ProxyAuthenticationRequired,
  RequestTimeout,
  ServiceUnavailable,
  TooManyRequests,
  Unauthorized,
} from "./http-errors";
import { auth } from "../resources/auth";
import { tokens } from "../resources/tokens";
import { attributes } from "../resources/attributes";
import { policy } from "../resources/policy";
import { Users } from "../defs/user";
import { Auth } from "../defs/auth";
import { Attributes } from "../defs/attributes";
import { Tokens } from "../defs/tokens";
import { Policy } from "../defs/policy";

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

export class SecurityClient {
  constructor(private options: Options) {
    this.serviceClient = new ServiceClient({
      hostname: process.env.API_HOST || options.host,
      defaultRequestOptions: {
        port: options.port,
        protocol: options.https ? "https:" : "http:",
      },
      filters: [ServiceClient.treat4xxAsError, ServiceClient.treat5xxAsError],
    });
    this.users = users(this.serviceClient);
    this.auth = auth(this.serviceClient);
    this.tokens = tokens(this.serviceClient);
    this.attributes = attributes(this.serviceClient);
    this.policy = policy(this.serviceClient);
  }

  public serviceClient: ServiceClient;

  public users: Users;

  public auth: Auth;

  public tokens: Tokens;

  public attributes: Attributes;

  public policy: Policy;
}
