/**
 * Authorization module.
 * @module auth
 */

import { getHttpError } from "../services/security-client";
import { ServiceClient } from "perron";
import { Token } from "../services/service";
import {
  Auth,
  FacebookLoginRequest,
  GoogleLoginRequest,
  LoginRequest,
  RefreshTokenRequest,
  RefreshTokenResponse,
  RefreshUserActiveTokenResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
} from "../defs/auth";
import { createHeadersForRequest } from "../services/headers-factory";

export const auth = (serviceClient: ServiceClient) =>
  ({
    /**
     * Returns Token object
     *
     * @param credentials {object} - Credentials object
     * @param credentials.username {string} - User name
     * @param credentials.password {string} - User password
     * @return {Promise<Token>}
     * @fulfil {string} - the rendered docs
     * @category async
     *
     * @alias module:auth.login
     */
    async login(request: LoginRequest): Promise<Token> {
      return serviceClient
        .request({
          pathname: "/api/public/auth/login",
          method: "POST",
          body: JSON.stringify(request),
          headers: createHeadersForRequest(),
        })
        .then((response) => response!.body as Token)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    async googleLogin(request: GoogleLoginRequest): Promise<Token> {
      return serviceClient
        .request({
          pathname: "/api/public/auth/oauth-redirect/google",
          method: "POST",
          body: JSON.stringify(request),
          headers: createHeadersForRequest(),
        })
        .then((response) => response!.body as Token)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    async facebookLogin(request: FacebookLoginRequest): Promise<Token> {
      return serviceClient
        .request({
          pathname: "/api/public/auth/oauth-redirect/facebook",
          method: "POST",
          body: JSON.stringify(request),
          headers: createHeadersForRequest(),
        })
        .then((response) => response!.body as Token)
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
          headers: createHeadersForRequest(),
        })
        .then((response) => response.body as ResetPasswordResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    refreshToken(request: RefreshTokenRequest): Promise<RefreshTokenResponse> {
      return serviceClient
        .request({
          pathname: "/api/public/auth/refresh-token",
          method: "POST",
          body: JSON.stringify(request),
          headers: createHeadersForRequest(),
        })
        .then((response) => response.body as RefreshTokenResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    refreshUserActiveToken(userId: string): Promise<RefreshUserActiveTokenResponse> {
      return serviceClient
        .request({
          pathname: "/api/public/auth/refresh-token",
          method: "POST",
          body: JSON.stringify({ userId }),
          headers: createHeadersForRequest(),
        })
        .then((response) => response.body as RefreshUserActiveTokenResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },
  } as Auth);
