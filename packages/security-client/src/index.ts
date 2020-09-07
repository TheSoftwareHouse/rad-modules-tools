import { SecurityClient } from "./services/security-client";
import { Options } from "./services/service";
import * as HttpErrors from "./services/http-errors";

export const getSecurityClient = (
  options: Options = {
    host: "localhost",
    port: 50050,
    autoSetToken: true,
  },
) => new SecurityClient(options);

export { HttpErrors };
