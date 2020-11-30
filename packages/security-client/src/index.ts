import { SecurityClient } from "./services/security-client";
import { Credentials, Token, AuthOptions, Options } from "./services/service";
import * as HttpErrors from "./services/http-errors";
import * as UserDefinitions from "./defs/user";
import * as TokensDefinitions from "./defs/user";
import * as PolicyDefinitions from "./defs/policy";
import * as AuthDefinitions from "./defs/auth";
import * as AttributesDefinitions from "./defs/attributes";

export const getSecurityClient = (
  options: Options = {
    host: "localhost",
    port: 50050,
  },
) => new SecurityClient(options);

export {
  Credentials,
  Token,
  AuthOptions,
  Options,
  SecurityClient,
  HttpErrors,
  UserDefinitions,
  TokensDefinitions,
  PolicyDefinitions,
  AuthDefinitions,
  AttributesDefinitions,
};
