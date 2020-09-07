"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const http_service_1 = require("../services/http-service");
// import { User, UsersQueryFilter } from "../defs/user";
exports.auth = (serviceClient) => ({
    login(username, password) {
        return serviceClient
            .request({
            pathname: "/api/public/auth/login",
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
    resetPassword(username) {
        return serviceClient
            .request({
            pathname: "/api/public/auth/reset-password",
            method: "POST",
            body: JSON.stringify({
                username,
            }),
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
    refreshToken(accessToken, refreshToken) {
        return serviceClient
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
            throw http_service_1.getHttpError(error);
        });
    },
});
//# sourceMappingURL=auth.js.map