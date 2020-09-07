"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpService = exports.getHttpError = void 0;
const perron_1 = require("perron");
const users_1 = require("../resources/users");
const http_errors_1 = require("./http-errors");
const auth_1 = require("../resources/auth");
function getHttpError(error) {
    const { response } = error;
    const { error: errorMessage } = response.body;
    switch (response.statusCode) {
        case 400:
            return new http_errors_1.BadRequest(errorMessage);
        case 401:
            return new http_errors_1.Unauthorized(errorMessage);
        case 403:
            return new http_errors_1.Forbidden(errorMessage);
        case 404:
            return new http_errors_1.NotFound(errorMessage);
        case 405:
            return new http_errors_1.MethodNotAllowed(errorMessage);
        case 407:
            return new http_errors_1.ProxyAuthenticationRequired(errorMessage);
        case 408:
            return new http_errors_1.RequestTimeout(errorMessage);
        case 409:
            return new http_errors_1.Conflict(errorMessage);
        case 410:
            return new http_errors_1.Gone(errorMessage);
        case 429:
            return new http_errors_1.TooManyRequests(errorMessage);
        case 500:
            throw new http_errors_1.InternalServerError(errorMessage);
        case 501:
            return new http_errors_1.NotImplemented(errorMessage);
        case 502:
            return new http_errors_1.BadGateway(errorMessage);
        case 503:
            return new http_errors_1.ServiceUnavailable(errorMessage);
        case 504:
            return new http_errors_1.GatewayTimeout(errorMessage);
        default:
            return new http_errors_1.HttpErrorBase(error.message);
    }
}
exports.getHttpError = getHttpError;
class HttpService {
    constructor(options) {
        this.options = options;
        this.serviceClient = new perron_1.ServiceClient({
            hostname: process.env.API_HOST || options.host,
            defaultRequestOptions: {
                port: options.port,
                protocol: "http:",
            },
            filters: [
                {
                    request(request) {
                        var _a, _b;
                        request.headers["Content-Type"] = "application/json";
                        if (options.autoSetToken) {
                            if ((_a = options === null || options === void 0 ? void 0 : options.credentials) === null || _a === void 0 ? void 0 : _a.apiKey) {
                                request.headers["x-api-key"] = options.credentials.apiKey;
                            }
                            else if ((_b = options === null || options === void 0 ? void 0 : options.credentials) === null || _b === void 0 ? void 0 : _b.token) {
                                request.headers.Authorization = `Bearer ${options.credentials.token.accessToken}`;
                            }
                        }
                        return request;
                    },
                },
                perron_1.ServiceClient.treat4xxAsError,
                perron_1.ServiceClient.treat5xxAsError,
            ],
        });
        this.users = users_1.users(this.serviceClient);
        this.auth = auth_1.auth(this.serviceClient);
    }
    async setApiKey(apiKey) {
        const { credentials = { apiKey } } = this.options;
        credentials.apiKey = apiKey;
        this.options.credentials = credentials;
    }
    async setToken(token) {
        const { credentials = { token } } = this.options;
        credentials.token = token;
        this.options.credentials = credentials;
    }
}
exports.HttpService = HttpService;
//# sourceMappingURL=http-service.js.map