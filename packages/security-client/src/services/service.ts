import { HttpService } from "./http-service";

export type Credentials = {
  username: string;
  password: string;
};

export type Token = {
  accessToken: string;
  refreshToken?: string;
};

export type ApiKey = string;

export type Resources = string[];

export type Options = {
  host: string;
  port: number;
  autoSetToken?: boolean;
  credentials?: {
    username?: string;
    password?: string;
    apiKey?: string;
    token?: {
      accessToken: string;
      refreshToken?: string;
    };
  };
};

export { HttpService };
