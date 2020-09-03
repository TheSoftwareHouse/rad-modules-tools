"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const http_service_1 = require("../services/http-service");
exports.users = (serviceClient) => ({
    getUsers(_queryFilter) {
        return serviceClient
            .request({
            pathname: "/api/users/get-users",
            method: "GET",
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
    activateUser(token) {
        return serviceClient
            .request({
            pathname: `/api/users/activate-user/${token}`,
            method: "POST",
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
    isAuthenticated() {
        return serviceClient
            .request({
            pathname: "/api/users/is-authenticated",
            method: "GET",
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
    deactivateUser() {
        return serviceClient
            .request({
            pathname: "/api/users/deactivate-user",
            method: "POST",
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
    hasAttributes(attributes) {
        return serviceClient
            .request({
            pathname: "/api/users/has-attributes",
            method: "POST",
            body: JSON.stringify({ attributes }),
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
    hasAccess(resources) {
        return serviceClient
            .request({
            pathname: "/api/users/has-access",
            method: "POST",
            body: JSON.stringify({ resources }),
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
    addAttributes(userId, attributes) {
        return serviceClient
            .request({
            pathname: "/api/users/add-attribute",
            method: "POST",
            body: JSON.stringify({ userId, attributes: attributes.join(",") }),
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
    removeAttributes(userId, attributes) {
        return serviceClient
            .request({
            pathname: `/api/users/remove-attribute?userId=${userId}attribute`,
            query: { userId, attributes: attributes.join(",") },
            method: "DELETE",
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
    addUser({ username, password, attributes }) {
        return serviceClient
            .request({
            pathname: "/api/users/add-user",
            method: "POST",
            body: JSON.stringify({ username, password, attributes }),
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
    deleteUser(userId) {
        return serviceClient
            .request({
            pathname: "/api/users/delete-user",
            method: "DELETE",
            body: JSON.stringify({ userId }),
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
    getUser(userId) {
        return serviceClient
            .request({
            pathname: `/api/users/get-user/${userId}`,
            method: "GET",
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
    getUserId(username) {
        return serviceClient
            .request({
            pathname: "/api/users/get-user-id",
            method: "GET",
            query: { username },
        })
            .then((response) => response.body)
            .catch((error) => {
            throw http_service_1.getHttpError(error);
        });
    },
});
//# sourceMappingURL=users.js.map