import { getSecurityClient } from "..";
import * as assert from "assert";

const securityClient = getSecurityClient();

describe("Resource Auth", () => {
  let token;

  it("Should login", async () => {
    const result = await securityClient.auth.login({ username: "superadmin", password: "superadmin" });
    assert.deepEqual(Object.keys(result ?? []), ["accessToken", "refreshToken"]);
    token = result;
  });

  it("Should refresh token", async () => {
    const result = await securityClient.auth.refreshToken({
      accessToken: token.accessToken,
      refreshToken: token.refreshToken,
    });
    assert.deepEqual(Object.keys(result ?? []), ["accessToken", "refreshToken"]);
  });
});
