import "mocha";
import * as assert from "assert";
import { getSecurityClient } from "..";
import { AddPolicyRequest, GetPoliciesRequest } from "../defs/policy";

const securityClient = getSecurityClient();

describe("Resource Policy", () => {
  const policyItem: AddPolicyRequest = {
    resource: "TEST_RESOURCE",
    attribute: "TEST_ATTRIBUTE",
  };

  let token;

  before("Set token", async () => {
    const result = await securityClient.auth.login({ username: "superadmin", password: "superadmin" });
    assert.deepStrictEqual(Object.keys(result ?? []), ["accessToken", "refreshToken"]);
    token = result;
  });

  it("Should addPolicy", async () => {
    const result = await securityClient.policy.addPolicy(
      {
        ...policyItem,
      },
      {
        accessToken: token.accessToken,
      },
    );
    assert.deepStrictEqual(Object.keys(result ?? {}), ["id"]);
  });

  it("Should getPolicies", async () => {
    const filter: GetPoliciesRequest = {};
    const result = await securityClient.policy.getPolicies(filter, { accessToken: token.accessToken });
    assert.deepStrictEqual(Object.keys(result ?? {}), ["policies", "total", "page", "limit"]);
  });

  it("Should removePolicy", async () => {
    await securityClient.policy.removePolicy(
      {
        ...policyItem,
      },
      { accessToken: token.accessToken },
    );
  });
});
