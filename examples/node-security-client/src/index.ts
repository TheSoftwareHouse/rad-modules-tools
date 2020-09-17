import { getSecurityClient } from "@tshio/security-client";
import * as assert from "assert";

const securityClient = getSecurityClient();

(async () => {
  const loginResponse = await securityClient.auth.login({ username: "superadmin", password: "superadmin" });
  assert.strictEqual(typeof loginResponse.accessToken, "string");
  assert.strictEqual(typeof loginResponse.refreshToken, "string");

  const unauthorized = await securityClient.auth
    .login({ username: "superadmin", password: "wrong password" })
    .catch((error) => error);
  assert.strictEqual(unauthorized.message, "Wrong username or password");
  assert.strictEqual(unauthorized.statusCode, 401);

  const badRequest = await securityClient.auth.login({ username: "superadmin", password: "" }).catch((error) => error);
  assert.strictEqual(badRequest.message, '"password" is not allowed to be empty');
  assert.strictEqual(badRequest.statusCode, 400);
})().catch((error) => {
  // eslint-disable-next-line no-console
  console.error(error.message);
  process.exit(1);
});
