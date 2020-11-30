import { SecurityClient } from "./security-client";

export type Credentials = {
  username: string;
  password: string;
};

export type Token = {
  accessToken: string;
  refreshToken?: string;
};

export interface AuthOptions {
  apiKey?: string;
  accessToken?: string;
}

export type ApiKey = string;

export type Resources = string[];

export type Options = {
  host: string;
  port: number;
  https?: boolean;
};

export { SecurityClient };
