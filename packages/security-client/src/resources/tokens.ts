import { getHttpError } from "../services/security-client";
import { ServiceClient } from "perron";
import {
  CreateAccessKeyResponse,
  GenerateTokenRequest,
  GenerateTokenResponse,
  GetAccessKeysRequest,
  GetAccessKeysResponse,
  RemoveAccessKeyRequest,
  Tokens,
} from "../defs/tokens";
import { createHeadersForRequest } from "../services/headers-factory";
import { AuthOptions } from "../services/service";

export const tokens = (serviceClient: ServiceClient) =>
  ({
    createAccessKey(authOptions?: AuthOptions): Promise<CreateAccessKeyResponse> {
      return serviceClient
        .request({
          pathname: "/api/tokens/create-access-key",
          method: "POST",
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response!.body as CreateAccessKeyResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    generateToken(request: GenerateTokenRequest, authOptions?: AuthOptions): Promise<GenerateTokenResponse> {
      return serviceClient
        .request({
          pathname: "/api/tokens/generate-token",
          method: "POST",
          body: JSON.stringify({ ...request }),
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response!.body as GenerateTokenResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    getAccessKeys(request: GetAccessKeysRequest, authOptions?: AuthOptions): Promise<GetAccessKeysResponse> {
      return serviceClient
        .request({
          pathname: "/api/tokens/get-access-keys",
          method: "GET",
          query: {
            ...request,
          },
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response!.body as GetAccessKeysResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    async removeAccessKey(request: RemoveAccessKeyRequest, authOptions?: AuthOptions): Promise<void> {
      await serviceClient
        .request({
          pathname: `/api/tokens/remove-access-key/${request.apiKey}`,
          method: "DELETE",
          headers: createHeadersForRequest(authOptions),
        })
        .catch((error) => {
          throw getHttpError(error);
        });
    },
  } as Tokens);
