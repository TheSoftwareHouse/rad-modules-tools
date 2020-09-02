import { ResponseFilterError, ServiceClient } from "perron";
import { Options, Token } from "./service";
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

export function getHttpError(error: ResponseFilterError): HttpError {
  const { response } = error;
  const { error: errorMessage } = response.body as any;

  switch (response.statusCode) {
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

export class HttpService {
  constructor(private options: Options) {
    this.serviceClient = new ServiceClient({
      hostname: process.env.API_HOST || options.host,
      defaultRequestOptions: {
        port: options.port,
        protocol: "http:",
      },
      filters: [
        {
          request(request) {
            request.headers["Content-Type"] = "application/json";
            if (options.autoSetToken) {
              if (options?.credentials?.apiKey) {
                request.headers["x-api-key"] = options.credentials.apiKey;
              } else if (options?.credentials?.token) {
                request.headers.Authorization = `Bearer ${options.credentials.token.accessToken}`;
              }
            }
            return request;
          },
        },
        ServiceClient.treat4xxAsError,
        ServiceClient.treat5xxAsError,
      ],
    });
  }

  private serviceClient: ServiceClient;

  public async setApiKey(apiKey: string) {
    const { credentials = { apiKey } } = this.options;
    credentials.apiKey = apiKey;
    this.options.credentials = credentials;
  }

  public async setToken(token: Token) {
    const { credentials = { token } } = this.options;
    credentials.token = token;
    this.options.credentials = credentials;
  }

  public async login(username: string, password: string): Promise<Token> {
    return this.serviceClient
      .request({
        pathname: "/api/public/auth/login",
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
      })
      .then((response) => response!.body as Token)
      .catch((error) => {
        throw getHttpError(error);
      });
  }

  public async resetPassword(username: string) {
    return this.serviceClient
      .request({
        pathname: "/api/public/auth/reset-password",
        method: "POST",
        body: JSON.stringify({
          username,
        }),
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  }

  public async refreshToken(accessToken: string, refreshToken: string) {
    return this.serviceClient
      .request({
        pathname: "/api/public/auth/refresh-token",
        method: "POST",
        body: JSON.stringify({
          accessToken,
          refreshToken,
        }),
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  }

  // users

  public async activateUser(token: string) {
    return this.serviceClient
      .request({
        pathname: `/api/users/activate-user/${token}`,
        method: "POST",
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  }

  public async isAuthenticated() {
    return this.serviceClient
      .request({
        pathname: "/api/users/is-authenticated",
        method: "GET",
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  }

  public async deactivateUser() {
    return this.serviceClient
      .request({
        pathname: "/api/users/deactivate-user",
        method: "POST",
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  }

  public async hasAttributes(attributes: string[]) {
    return this.serviceClient
      .request({
        pathname: "/api/users/has-attributes",
        method: "POST",
        body: JSON.stringify({ attributes }),
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  }

  public async hasAccess(resources: string[]) {
    return this.serviceClient
      .request({
        pathname: "/api/users/has-access",
        method: "POST",
        body: JSON.stringify({ resources }),
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  }

  public async addAttributes(userId: string, attributes: string[]) {
    return this.serviceClient
      .request({
        pathname: "/api/users/add-attribute",
        method: "POST",
        body: JSON.stringify({ userId, attributes: attributes.join(",") }),
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  }

  public async removeAttributes(userId: string, attributes: string[]) {
    return this.serviceClient
      .request({
        pathname: `/api/users/remove-attribute?userId=${userId}attribute`,
        query: { userId, attributes: attributes.join(",") },
        method: "DELETE",
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  }

  public async addUser({ username, password, attributes }) {
    return this.serviceClient
      .request({
        pathname: "/api/users/add-user",
        method: "POST",
        body: JSON.stringify({ username, password, attributes }),
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  }

  public async deleteUser(userId: string) {
    return this.serviceClient
      .request({
        pathname: "/api/users/delete-user",
        method: "DELETE",
        body: JSON.stringify({ userId }),
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  }
}
