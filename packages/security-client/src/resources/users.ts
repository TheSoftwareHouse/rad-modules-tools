import { getHttpError } from "../services/security-client";
import { ServiceClient } from "perron";
import * as qs from "qs";
import {
  ActivateUserRequest,
  ActivateUserResponse,
  AddAttributesRequest,
  AddAttributesResponse,
  AddUserRequest,
  AddUserResponse,
  DeactivateUserRequest,
  DeactivateUserResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  GetUserIdRequest,
  GetUserIdResponse,
  GetUserRequest,
  GetUserResponse,
  GetUsersByResourceRequest,
  GetUsersByResourceResponse,
  GetUsersRequest,
  GetUsersResponse,
  HasAccessRequest,
  HasAccessResponse,
  HasAttributesRequest,
  HasAttributesResponse,
  IsAuthenticatedResponse,
  PasswordResetTokenRequest,
  PasswordResetTokenResponse,
  RemoveAttributesRequest,
  SetPasswordRequest,
  SetPasswordResponse,
  Users,
} from "../defs/user";
import { createHeadersForRequest } from "../services/headers-factory";
import { AuthOptions } from "../services/service";

export const users = (serviceClient: ServiceClient) =>
  ({
    getUsers(queryFilter: GetUsersRequest, authOptions?: AuthOptions): Promise<GetUsersResponse> {
      return serviceClient
        .request({
          pathname: `/api/users?${qs.stringify(queryFilter)}`,
          method: "GET",
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response.body as GetUsersResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    activateUser(request: ActivateUserRequest, authOptions?: AuthOptions): Promise<ActivateUserResponse> {
      return serviceClient
        .request({
          pathname: `/api/users/activate-user/${request.activationToken}`,
          method: "POST",
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response.body as ActivateUserResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    isAuthenticated(authOptions?: AuthOptions): Promise<IsAuthenticatedResponse> {
      return serviceClient
        .request({
          pathname: "/api/users/is-authenticated",
          method: "GET",
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response.body as IsAuthenticatedResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    deactivateUser(request: DeactivateUserRequest, authOptions?: AuthOptions): Promise<DeactivateUserResponse> {
      return serviceClient
        .request({
          pathname: "/api/users/deactivate-user",
          method: "POST",
          body: JSON.stringify(request),
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => {
          return {
            userId: (response!.body as any)!.userId as string,
            isActive: (response!.body as any)!.isActive as boolean,
            deactivationDate: new Date(Date.parse((response!.body as any)!.deactivationDate || 0)),
          } as DeactivateUserResponse;
        })
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    hasAttributes(request: HasAttributesRequest, authOptions?: AuthOptions): Promise<HasAttributesResponse> {
      return serviceClient
        .request({
          pathname: "/api/users/has-attributes",
          method: "POST",
          body: JSON.stringify({ attributes: request.attributes }),
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response.body as HasAttributesResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    hasAccess(request: HasAccessRequest, authOptions?: AuthOptions): Promise<HasAccessResponse> {
      return serviceClient
        .request({
          pathname: "/api/users/has-access",
          method: "POST",
          body: JSON.stringify({ resources: request.resources }),
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response.body as HasAccessResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    addAttributes(request: AddAttributesRequest, authOptions?: AuthOptions): Promise<AddAttributesResponse> {
      return serviceClient
        .request({
          pathname: "/api/users/add-attribute",
          method: "POST",
          body: JSON.stringify(request),
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response.body as AddAttributesResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    removeAttributes(request: RemoveAttributesRequest, authOptions?: AuthOptions) {
      return serviceClient
        .request({
          pathname: `/api/users/remove-attribute?userId=${request.userId}attribute`,
          query: { userId: request.userId, attributes: request.attributes.join(",") },
          method: "DELETE",
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response.body)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    addUser(request: AddUserRequest, authOptions?: AuthOptions): Promise<AddUserResponse> {
      return serviceClient
        .request({
          pathname: "/api/users/add-user",
          method: "POST",
          body: JSON.stringify({ attributes: [], ...request }),
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response.body as AddUserResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    deleteUser(request: DeleteUserRequest, authOptions?: AuthOptions): Promise<DeleteUserResponse> {
      return serviceClient
        .request({
          pathname: "/api/users/delete-user",
          method: "DELETE",
          query: request,
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response.body)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    getUser(request: GetUserRequest, authOptions?: AuthOptions): Promise<GetUserResponse> {
      return serviceClient
        .request({
          pathname: `/api/users/get-user/${request.userId}`,
          method: "GET",
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response.body as GetUserResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    getUserId(request: GetUserIdRequest, authOptions?: AuthOptions): Promise<GetUserIdResponse> {
      return serviceClient
        .request({
          pathname: "/api/users/get-user-id",
          method: "GET",
          query: request,
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response.body as GetUserIdResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    getUsersByResource(
      request: GetUsersByResourceRequest,
      authOptions?: AuthOptions,
    ): Promise<GetUsersByResourceResponse> {
      return serviceClient
        .request({
          pathname: "/api/users/get-user-id",
          method: "GET",
          query: { page: 1, limit: 25, ...request },
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response.body as GetUsersByResourceResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    setPassword(request: SetPasswordRequest, authOptions?: AuthOptions): Promise<SetPasswordResponse> {
      return serviceClient
        .request({
          pathname: "/api/users/set-password",
          method: "POST",
          body: JSON.stringify(request),
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response.body as SetPasswordResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    passwordResetToken(
      request: PasswordResetTokenRequest,
      authOptions?: AuthOptions,
    ): Promise<PasswordResetTokenResponse> {
      return serviceClient
        .request({
          pathname: "/api/users/password-reset-token",
          method: "POST",
          body: JSON.stringify(request),
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response.body as PasswordResetTokenResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },
  } as Users);
