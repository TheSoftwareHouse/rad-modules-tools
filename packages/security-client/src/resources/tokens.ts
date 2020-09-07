import { getHttpError } from "../services/http-service";
import { ServiceClient } from "perron";
import {
  CreateAccessKeyRequest,
  CreateAccessKeyResponse,
  GenerateTokenRequest,
  GenerateTokenResponse,
  GetAccessKeysRequest,
  GetAccessKeysResponse,
  RemoveAccessKeyRequest,
} from "../defs/tokens";

export const tokens = (serviceClient: ServiceClient) => ({
  createAccessKey(request: CreateAccessKeyRequest): Promise<CreateAccessKeyResponse> {
    return serviceClient
      .request({
        pathname: "/api/tokens/create-access-key",
        method: "POST",
        body: JSON.stringify({
          accessToken: request.accessToken,
        }),
      })
      .then((response) => response!.body as CreateAccessKeyResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  generateToken(request: GenerateTokenRequest): Promise<GenerateTokenResponse> {
    return serviceClient
      .request({
        pathname: "/api/tokens/generate-token",
        method: "POST",
        body: JSON.stringify({ ...request }),
      })
      .then((response) => response!.body as GenerateTokenResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  getAccessKeys(request?: GetAccessKeysRequest): Promise<GetAccessKeysResponse> {
    return serviceClient
      .request({
        pathname: "/api/tokens/get-access-keys",
        method: "GET",
        query: {
          ...request,
        },
      })
      .then((response) => response!.body as GetAccessKeysResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },

  async removeAccessKey(request?: RemoveAccessKeyRequest): Promise<void> {
    await serviceClient
      .request({
        pathname: `/api/tokens/remove-access-key/${request.apiKey}`,
        method: "DELETE",
      })
      .catch((error) => {
        throw getHttpError(error);
      });
  },
});
