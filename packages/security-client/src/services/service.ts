import { HttpService } from "./http-service";

export type Credentials = {
  username: string;
  password: string;
};

export type Token = string;

export type ApiKey = string;

export type Resources = string[];

export type Options = {
  apiUrl: string;
  autoSetToken: boolean;
};

export { HttpService };
