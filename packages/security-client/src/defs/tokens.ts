export interface CreateAccessKeyRequest {
  accessToken: string;
}

export interface CreateAccessKeyResponse {
  apiKey: string;
  type: "custom";
  createdBy: string;
}

export interface GenerateTokenRequest {
  accessExpirationInSeconds: number;
  refreshExpirationInSeconds: number;
}

export interface GenerateTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface GetAccessKeysRequest {
  page: number;
  limit: number;
}

export interface GetAccessKeysResponse {
  accessKeys: {
    id: string;
    apiKey: string;
    type: string;
    createdBy: string;
    createdAt: Date;
  }[];
  total: number;
}

export interface RemoveAccessKeyRequest {
  apiKey: string;
}
