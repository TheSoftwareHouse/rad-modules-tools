"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.policy = void 0;
const http_service_1 = require("../services/http-service");
// import { User, UsersQueryFilter } from "../defs/user";
exports.policy = (serviceClient) => ({
    getPolicies(queryFilter) {
        return serviceClient
            .request({
            pathname: "/api/policy/get-policies",
            method: "GET",
            query: queryFilter,
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
});
//# sourceMappingURL=policy.js.map