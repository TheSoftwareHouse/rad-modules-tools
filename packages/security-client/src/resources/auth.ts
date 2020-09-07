import { getHttpError } from "../services/security-client";
import { ServiceClient } from "perron";
import { Token } from "../services/service";
// import { User, UsersQueryFilter } from "../defs/user";

export const auth = (serviceClient: ServiceClient) => ({
  login(username: string, password: string): Promise<Token> {
    return serviceClient
      .request({
        pathname: "/api/public/auth/login",
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
      })
      .then((response) => response!.body as Token)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  resetPassword(username: string) {
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
        throw getHttpError(error);
      });
  },

  refreshToken(accessToken: string, refreshToken: string) {
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
        throw getHttpError(error);
      });
  },
});
