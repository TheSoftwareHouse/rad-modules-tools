import { getHttpError } from "../services/security-client";
import { ServiceClient } from "perron";
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
  HasAccessResponse,
  HasAttributesResponse,
  IsAuthenticatedResponse,
  PasswordResetTokenRequest,
  PasswordResetTokenResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  SetPasswordRequest,
  SetPasswordResponse,
} from "../defs/user";

export const users = (serviceClient: ServiceClient) => ({
  getUsers(queryFilter: GetUsersRequest): Promise<GetUsersResponse> {
    return serviceClient
      .request({
        pathname: "/api/users",
        method: "GET",
        query: queryFilter,
      })
      .then((response) => response.body as GetUsersResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  activateUser(request: ActivateUserRequest): Promise<ActivateUserResponse> {
    return serviceClient
      .request({
        pathname: `/api/users/activate-user/${request.activationToken}`,
        method: "POST",
      })
      .then((response) => response.body as ActivateUserResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  isAuthenticated(): Promise<IsAuthenticatedResponse> {
    return serviceClient
      .request({
        pathname: "/api/users/is-authenticated",
        method: "GET",
      })
      .then((response) => response.body as IsAuthenticatedResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  deactivateUser(request: DeactivateUserRequest): Promise<DeactivateUserResponse> {
    return serviceClient
      .request({
        pathname: "/api/users/deactivate-user",
        method: "POST",
        body: JSON.stringify(request),
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

  hasAttributes(attributes: string[]): Promise<HasAttributesResponse> {
    return serviceClient
      .request({
        pathname: "/api/users/has-attributes",
        method: "POST",
        body: JSON.stringify({ attributes }),
      })
      .then((response) => response.body as HasAttributesResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  hasAccess(resources: string[]): Promise<HasAccessResponse> {
    return serviceClient
      .request({
        pathname: "/api/users/has-access",
        method: "POST",
        body: JSON.stringify({ resources }),
      })
      .then((response) => response.body as HasAccessResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  addAttributes(request: AddAttributesRequest): Promise<AddAttributesResponse> {
    return serviceClient
      .request({
        pathname: "/api/users/add-attribute",
        method: "POST",
        body: JSON.stringify(request),
      })
      .then((response) => response.body as AddAttributesResponse)
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

  addUser(request: AddUserRequest): Promise<AddUserResponse> {
    return serviceClient
      .request({
        pathname: "/api/users/add-user",
        method: "POST",
        body: JSON.stringify({ attributes: [], ...request }),
      })
      .then((response) => response.body as AddUserResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse> {
    return serviceClient
      .request({
        pathname: "/api/users/delete-user",
        method: "DELETE",
        body: JSON.stringify(request),
      })
      .then((response) => response.body)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  getUser(request: GetUserRequest): Promise<GetUserResponse> {
    return serviceClient
      .request({
        pathname: `/api/users/get-user/${request.userId}`,
        method: "GET",
      })
      .then((response) => response.body as GetUserResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  getUserId(request: GetUserIdRequest): Promise<GetUserIdResponse> {
    return serviceClient
      .request({
        pathname: "/api/users/get-user-id",
        method: "GET",
        query: request,
      })
      .then((response) => response.body as GetUserIdResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  getUserByResource(request: GetUsersByResourceRequest): Promise<GetUsersByResourceResponse> {
    return serviceClient
      .request({
        pathname: "/api/users/get-user-id",
        method: "GET",
        query: { page: 1, limit: 25, ...request },
      })
      .then((response) => response.body as GetUsersByResourceResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  setPassword(request: SetPasswordRequest): Promise<SetPasswordResponse> {
    return serviceClient
      .request({
        pathname: "/api/users/set-password",
        method: "POST",
        body: JSON.stringify(request),
      })
      .then((response) => response.body as SetPasswordResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  resetPassword(request: ResetPasswordRequest): Promise<ResetPasswordResponse> {
    return serviceClient
      .request({
        pathname: `/api/users/reset-password/${request.resetPasswordToken}`,
        method: "POST",
        body: JSON.stringify({
          newPassword: request.newPassword,
        }),
      })
      .then((response) => response.body as ResetPasswordResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  passwordResetToken(request: PasswordResetTokenRequest): Promise<PasswordResetTokenResponse> {
    return serviceClient
      .request({
        pathname: "/api/users/password-reset-token",
        method: "POST",
        body: JSON.stringify(request),
      })
      .then((response) => response.body as PasswordResetTokenResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },
});
