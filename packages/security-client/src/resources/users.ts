import { getHttpError } from "../services/security-client";
import { ServiceClient } from "perron";
import { GetUsersResponse, UsersQueryFilter } from "../defs/user";

export const users = (serviceClient: ServiceClient) => ({
  getUsers(_queryFilter: UsersQueryFilter): Promise<GetUsersResponse> {
    return serviceClient
      .request({
        pathname: "/api/users",
        method: "GET",
      })
      .then((response) => response.body as GetUsersResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  activateUser(token: string) {
    return serviceClient
      .request({
        pathname: `/api/users/activate-user/${token}`,
        method: "POST",
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
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
        throw getHttpError(error);
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
        throw getHttpError(error);
      });
  },

  hasAttributes(attributes: string[]) {
    return serviceClient
      .request({
        pathname: "/api/users/has-attributes",
        method: "POST",
        body: JSON.stringify({ attributes }),
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  hasAccess(resources: string[]) {
    return serviceClient
      .request({
        pathname: "/api/users/has-access",
        method: "POST",
        body: JSON.stringify({ resources }),
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  addAttributes(userId: string, attributes: string[]) {
    return serviceClient
      .request({
        pathname: "/api/users/add-attribute",
        method: "POST",
        body: JSON.stringify({ userId, attributes: attributes.join(",") }),
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  removeAttributes(userId: string, attributes: string[]) {
    return serviceClient
      .request({
        pathname: `/api/users/remove-attribute?userId=${userId}attribute`,
        query: { userId, attributes: attributes.join(",") },
        method: "DELETE",
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
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
        throw getHttpError(error);
      });
  },

  deleteUser(userId: string) {
    return serviceClient
      .request({
        pathname: "/api/users/delete-user",
        method: "DELETE",
        body: JSON.stringify({ userId }),
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  getUser(userId: string) {
    return serviceClient
      .request({
        pathname: `/api/users/get-user/${userId}`,
        method: "GET",
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  getUserId(username: string) {
    return serviceClient
      .request({
        pathname: "/api/users/get-user-id",
        method: "GET",
        query: { username },
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  },
});
