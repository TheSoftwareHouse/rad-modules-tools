import { SecurityClient } from "@tshio/security-client";
import * as assert from "assert";

const securityClient = new SecurityClient();
(async () => {
  const loginResponse = await securityClient.login("superadmin", "superadmin");
  assert.strictEqual(typeof loginResponse.accessToken, "string");
  assert.strictEqual(typeof loginResponse.refreshToken, "string");

  const unauthorized = await securityClient.login("superadmin", "wrong password").catch((error) => error);
  assert.strictEqual(unauthorized.message, "Wrong username or password");
  assert.strictEqual(unauthorized.statusCode, 401);

  const badRequest = await securityClient.login("superadmin", "").catch((error) => error);
  assert.strictEqual(badRequest.message, '"password" is not allowed to be empty');
  assert.strictEqual(badRequest.statusCode, 400);
})().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error.message);
  process.exit(1);
});
