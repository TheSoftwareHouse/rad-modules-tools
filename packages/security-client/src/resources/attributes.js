"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attributes = void 0;
const http_service_1 = require("../services/http-service");
// import { User, UsersQueryFilter } from "../defs/user";
exports.attributes = (serviceClient) => ({
    getAttributes(queryFilter) {
        return serviceClient
            .request({
            pathname: "/api/attributes",
            method: "GET",
            query: queryFilter,
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
});
//# sourceMappingURL=attributes.js.map