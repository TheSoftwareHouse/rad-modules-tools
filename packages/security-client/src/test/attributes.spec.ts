import "mocha";
import * as assert from "assert";
import { getSecurityClient } from "..";
import { GetAttributesRequest } from "../defs/attributes";

const securityClient = getSecurityClient();

describe("Resource Attributes", () => {
  let token;
  before("Set token", async () => {
    const result = await securityClient.auth.login({ username: "superadmin", password: "superadmin" });
    assert.deepStrictEqual(Object.keys(result ?? []), ["accessToken", "refreshToken"]);
    token = result;
  });

  it("Should getAttributes", async () => {
    const filter: GetAttributesRequest = {};
    const result = await securityClient.attributes.getAttributes(filter, {
      accessToken: token.accessToken,
    });
    assert.deepStrictEqual(Object.keys(result ?? {}), ["attributes", "total", "page", "limit"]);
    assert.strictEqual(result.page, 1);
    assert.strictEqual(result.limit, 25);
  });
});
