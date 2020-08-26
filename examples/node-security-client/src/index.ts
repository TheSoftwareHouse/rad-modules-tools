import { SecurityClient } from "@tshio/security-client";

const securityClient = new SecurityClient();
(async () => {
  await securityClient.login({
    username: "superadmin",
    password: "superadmin",
  });
})();
