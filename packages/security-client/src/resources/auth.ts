import { getHttpError } from "../services/security-client";
import { ServiceClient } from "perron";
import { Token } from "../services/service";
import {
  Auth,
  LoginRequest,
  RefreshTokenRequest,
  RefreshTokenResponse,
  RefreshUserActiveTokenResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
} from "../defs/auth";

export class AuthResources implements Auth {
  constructor(private serviceClient: ServiceClient) {}

  /**
   * Returns Token object
   *
   *
   * @param {Promise<Token>} request - LoginRequest
   * @returns Token
   *
   * @beta
   */
  login(request: LoginRequest): Promise<Token> {
    return this.serviceClient
      .request({
        pathname: "/api/public/auth/login",
        method: "POST",
        body: JSON.stringify(request),
      })
      .then((response) => response!.body as Token)
      .catch((error) => {
        throw getHttpError(error);
      });
  }

  resetPassword(request: ResetPasswordRequest): Promise<ResetPasswordResponse> {
    return this.serviceClient
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
  }

  refreshToken(request: RefreshTokenRequest): Promise<RefreshTokenResponse> {
    return this.serviceClient
      .request({
        pathname: "/api/public/auth/refresh-token",
        method: "POST",
        body: JSON.stringify(request),
      })
      .then((response) => response.body as RefreshTokenResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  }

  refreshUserActiveToken(userId: string): Promise<RefreshUserActiveTokenResponse> {
    return this.serviceClient
      .request({
        pathname: "/api/public/auth/refresh-token",
        method: "POST",
        body: JSON.stringify({ userId }),
      })
      .then((response) => response.body as RefreshUserActiveTokenResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  }
}
