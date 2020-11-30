import { AuthOptions } from "../services/service";

interface CreateAccessKeyResponse {
  apiKey: string;
  type: "custom";
  createdBy: string;
}

interface GenerateTokenRequest {
  accessExpirationInSeconds: number;
  refreshExpirationInSeconds: number;
}

interface GenerateTokenResponse {
  accessToken: string;
  refreshToken: string;
}

interface GetAccessKeysRequest {
  page: number;
  limit: number;
}

interface GetAccessKeysResponse {
  accessKeys: {
    id: string;
    apiKey: string;
    type: string;
    createdBy: string;
    createdAt: Date;
  }[];
  total: number;
}

interface RemoveAccessKeyRequest {
  apiKey: string;
}

interface Tokens {
  createAccessKey(options?: AuthOptions): Promise<CreateAccessKeyResponse>;
  generateToken(request: GenerateTokenRequest, options?: AuthOptions): Promise<GenerateTokenResponse>;
  getAccessKeys(request?: GetAccessKeysRequest, options?: AuthOptions): Promise<GetAccessKeysResponse>;
  removeAccessKey(request?: RemoveAccessKeyRequest, options?: AuthOptions): Promise<void>;
}

export {
  CreateAccessKeyResponse,
  GenerateTokenRequest,
  GenerateTokenResponse,
  GetAccessKeysRequest,
  GetAccessKeysResponse,
  RemoveAccessKeyRequest,
  Tokens,
};
