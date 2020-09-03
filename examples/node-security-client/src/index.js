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
const security_client_1 = require("@tshio/security-client");
const assert = __importStar(require("assert"));
const securityClient = new security_client_1.SecurityClient();
(async () => {
    const loginResponse = await securityClient.login("superadmin", "superadmin");
    assert.strictEqual(typeof loginResponse.accessToken, "string");
    assert.strictEqual(typeof loginResponse.refreshToken, "string");
    const unauthorized = await securityClient.login("superadmin", "wrong password").catch((error) => error);
    assert.strictEqual(unauthorized.message, "Wrong username or password");
    assert.strictEqual(unauthorized.statusCode, 401);
    const badRequest = await securityClient.login("superadmin", "").catch((error) => error);
    assert.strictEqual(badRequest.message, '"password" is not allowed to be empty');
    assert.strictEqual(badRequest.statusCode, 400);
})().catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error.message);
    process.exit(1);
});
//# sourceMappingURL=index.js.map