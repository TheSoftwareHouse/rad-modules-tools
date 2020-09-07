"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokens = void 0;
const http_service_1 = require("../services/http-service");
exports.tokens = (serviceClient) => ({
    createAccessKey(request) {
        return serviceClient
            .request({
            pathname: "/api/tokens/create-access-key",
            method: "POST",
            body: JSON.stringify({
                accessToken: request.accessToken,
            }),
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
    generateToken(request) {
        return serviceClient
            .request({
            pathname: "/api/tokens/generate-token",
            method: "POST",
            body: JSON.stringify({ ...request }),
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
    getAccessKeys(request) {
        return serviceClient
            .request({
            pathname: "/api/tokens/get-access-keys",
            method: "GET",
            query: {
                ...request,
            }
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
    async removeAccessKey(request) {
        await serviceClient
            .request({
            pathname: `/api/tokens/remove-access-key/${request.apiKey}`,
            method: "DELETE",
        })
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
});
//# sourceMappingURL=tokens.js.map