"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpErrors = exports.SecurityClient = void 0;
const http_service_1 = require("./services/http-service");
const HttpErrors = __importStar(require("./services/http-errors"));
exports.HttpErrors = HttpErrors;
class SecurityClient {
    constructor(options = {
        host: "localhost",
        port: 50050,
        autoSetToken: true,
    }) {
        this.options = options;
        this.httpService = new http_service_1.HttpService(options);
    }
    async setToken(token) {
        return this.httpService.setToken(token);
    }
    async login(username, password) {
        return this.httpService.login(username, password);
    }
    async hasAccess(_resources, _credentials) {
        return Promise.resolve("OK!@");
    }
}
exports.SecurityClient = SecurityClient;
//# sourceMappingURL=index.js.map