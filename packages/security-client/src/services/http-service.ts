import { ServiceClient } from "perron";
import { ApiKey, Options, Token } from "./service";
import {
  BadGateway,
  BadRequest,
  Conflict,
  Forbidden,
  GatewayTimeout,
  Gone,
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
                request.headers["Authorization"] = `Bearer ${options.credentials.token.accessToken}`;
              }
            }
            return request;
          },
          response(response) {
            if (response.statusCode < 400) {
              return response;
            }
            const { error } = response.body as any;

            switch (response.statusCode) {
              case 400:
                throw new BadRequest(error);
              case 401:
                throw new Unauthorized(error);
              case 403:
                throw new Forbidden(error);
              case 404:
                throw new NotFound(error);
              case 405:
                throw new MethodNotAllowed(error);
              case 407:
                throw new ProxyAuthenticationRequired(error);
              case 408:
                throw new RequestTimeout(error);
              case 409:
                throw new Conflict(error);
              case 410:
                throw new Gone(error);
              case 429:
                throw new TooManyRequests(error);
              case 500:
                throw new InternalServerError(error);
              case 501:
                throw new NotImplemented(error);
              case 502:
                throw new BadGateway(error);
              case 503:
                throw new ServiceUnavailable(error);
              case 504:
                throw new GatewayTimeout(error);
              default:
                throw new InternalServerError(error);
            }
          },
        },
      ],
    });
  }

  private serviceClient: ServiceClient;

  private autoAuthorize = false;

  private credentials: Token | ApiKey;

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
      .then((response) => response!.body as Token);
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
      .then((response) => response.body);
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
      .then((response) => response.body);
  }
}
