import { SecurityClient } from "@tshio/security-client";
import * as assert from "assert";

const securityClient = new SecurityClient();
(async () => {
  const token = await securityClient.login("superadmin", "superadmin");
  await securityClient.setToken(token);
  await securityClient.hasAccess(["resource1"]);

  const result = await securityClient.login("superadmin", "wrong password").catch((error) => error.message);
  assert.strictEqual(result, "localhost: Response filter marked request as failed. Wrong username or password");
})().catch((error) => {
  // eslint-disable-next-line no-console
  console.log(error.message);
  process.exit(1);
});
