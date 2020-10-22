import "mocha";
import * as assert from "assert";
import { getSecurityClient } from "..";
import { Token } from "../services/service";

const securityClient = getSecurityClient();

describe("Resource Tokens", () => {
  let token: Token;
  let apiKey: string;

  before("Set token", async () => {
    const result = await securityClient.auth.login({ username: "superadmin", password: "superadmin" });
    assert.deepStrictEqual(Object.keys(result ?? []), ["accessToken", "refreshToken"]);
    token = result;
  });

  it("Should createAccessKey", async () => {
    const result = await securityClient.tokens.createAccessKey({
      accessToken: token.accessToken,
    });

    assert.deepStrictEqual(Object.keys(result ?? {}), ["apiKey", "type", "createdBy"]);
    apiKey = result.apiKey;
  });

  it("Should generateToken", async () => {
    const result = await securityClient.tokens.generateToken(
      {
        accessExpirationInSeconds: 10000,
        refreshExpirationInSeconds: 20000,
      },
      {
        apiKey,
      },
    );

    assert.deepStrictEqual(Object.keys(result ?? {}), ["accessToken", "refreshToken"]);
  });
});
