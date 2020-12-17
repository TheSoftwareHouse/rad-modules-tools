import "mocha";
import { getSecurityClient } from "..";
import * as assert from "assert";
import { UsersQueryFilter } from "../defs/user";

const securityClient = getSecurityClient();

describe("Resource Users", () => {
  let token;
  let userId;

  before("Set token", async () => {
    const result = await securityClient.auth.login({ username: "superadmin", password: "superadmin" });
    assert.deepStrictEqual(Object.keys(result ?? []), ["accessToken", "refreshToken"]);
    token = result;
  });

  it("Should get users", async () => {
    const usersQueryFilter: UsersQueryFilter = {};

    const result = await securityClient.users.getUsers(usersQueryFilter, {
      accessToken: token.accessToken,
    });
    assert.deepStrictEqual(Object.keys(result ?? {}), ["users", "total", "page", "limit"]);
    assert.strictEqual(result.users.length, result.total);
    assert.strictEqual(result.page, 1);
    assert.strictEqual(result.limit, 25);
  });

  it("Should get users with filter", async () => {
    const usersQueryFilter: UsersQueryFilter = {
      limit: 500,
      page: 100,
    };

    const result = await securityClient.users.getUsers(usersQueryFilter, {
      accessToken: token.accessToken,
    });
    assert.deepStrictEqual(Object.keys(result ?? {}), ["users", "total", "page", "limit"]);
    assert.strictEqual(result.users.length, result.total);
    assert.strictEqual(result.page, 1);
    assert.strictEqual(result.limit, 500);
  });

  it("Should not get users", async () => {
    const usersQueryFilter: UsersQueryFilter = {
      limit: 10000,
    };

    const result = await securityClient.users
      .getUsers(usersQueryFilter, { accessToken: token.accessToken })
      .catch((error) => error.message);
    assert.strictEqual(result.details[0].message, '"limit" must be less than or equal to 1000');
  });

  it("Should isAuthenticated", async () => {
    const result = await securityClient.users.isAuthenticated({ accessToken: token.accessToken });
    assert.deepStrictEqual(Object.keys(result ?? {}), ["isAuthenticated"]);
    assert.strictEqual(result.isAuthenticated, true);
  });

  it("Should isAuthenticated", async () => {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NWD4Y2RiMy0zZDdjLTQ4MWMtOTc0Zi1jNzcwZTc0OGM0Y2UiLCJ1c2VybmFtZSI6InN1cGVyYWRtaW4iLCJhdHRyaWJ1dGVzIjpbIlJPTEVfU1VQRVJBRE1JTiJdLCJwb2xpY3kiOltdLCJ0eXBlIjoidXNlciIsImlhdCI6MTU5OTczODIyMiwiZXhwIjoxNTk5NzQ4MjIyfQ.Efk05uuYlpEDaVH5KGb4zVbqE_yl-OWaiz6ZQs7vg1g";

    const result = await securityClient.users
      .isAuthenticated({
        accessToken,
      })
      .catch((error) => error);
    assert.deepStrictEqual(Object.keys(result ?? {}), ["statusCode", "title"]);
    assert.strictEqual(result.statusCode, 401);
    assert.strictEqual(result.title, "Unauthorized");
    assert.strictEqual(result.message, "localhost: Response filter marked request as failed. Response status 401");
  });

  it("Should hasAttributes", async () => {
    const result = await securityClient.users.hasAttributes(
      {
        attributes: ["ROLE_SUPERADMIN"],
      },
      {
        accessToken: token.accessToken,
      },
    );
    assert.deepStrictEqual(Object.keys(result ?? {}), ["hasAllAttributes"]);
    assert.strictEqual(result.hasAllAttributes, true);
  });

  it("Should hasAttributes", async () => {
    const result = await securityClient.users.hasAttributes(
      {
        attributes: ["SOME_ATTRIBUTE"],
      },
      { accessToken: token.accessToken },
    );
    assert.deepStrictEqual(Object.keys(result ?? {}), ["hasAllAttributes"]);
    assert.strictEqual(result.hasAllAttributes, false);
  });

  it("Should hasAccess", async () => {
    const result = await securityClient.users.hasAccess(
      {
        resources: ["SUPER ADMIN ALWAYS HAVE ACCESS"],
      },
      { accessToken: token.accessToken },
    );
    assert.deepStrictEqual(Object.keys(result ?? {}), ["hasAccess"]);
    assert.strictEqual(result.hasAccess, true);
  });

  it("Should getUserId", async () => {
    const result = await securityClient.users.getUserId(
      {
        username: "superadmin",
      },
      { accessToken: token.accessToken },
    );
    assert.deepStrictEqual(Object.keys(result ?? {}), ["userId"]);
    userId = result.userId;
  });

  it("Should getUser", async () => {
    const result = await securityClient.users.getUser(
      {
        userId,
      },
      { accessToken: token.accessToken },
    );
    assert.deepStrictEqual(Object.keys(result ?? {}), [
      "id",
      "username",
      "isActive",
      "activationToken",
      "createdAt",
      "updatedAt",
      "attributes",
      "isSuperAdmin",
    ]);
    assert.strictEqual(result.username, "superadmin");
    assert.strictEqual(result.isActive, true);
    assert.deepStrictEqual(result.attributes, ["ROLE_SUPERADMIN"]);
    assert.strictEqual(result.isSuperAdmin, true);
  });

  it("Should setPassword", async () => {
    const setPasswordRequest = {
      username: "superadmin",
      oldPassword: "superadmin",
      newPassword: "newPassword",
    };
    const result = await securityClient.users.setPassword(setPasswordRequest, { accessToken: token.accessToken });
    assert.deepStrictEqual(result, { passwordChanged: true });

    const newToken = await securityClient.auth.login({
      username: setPasswordRequest.username,
      password: setPasswordRequest.newPassword,
    });
    assert.deepEqual(Object.keys(newToken ?? []), ["accessToken", "refreshToken"]);

    await securityClient.users.setPassword(
      {
        username: "superadmin",
        oldPassword: setPasswordRequest.newPassword,
        newPassword: setPasswordRequest.oldPassword,
      },
      { accessToken: token.accessToken },
    );
    assert.deepStrictEqual(result, { passwordChanged: true });
  });

  it("Should passwordResetToken", async () => {
    const passwordResetToken = {
      username: "superadmin",
    };
    const result = await securityClient.users.passwordResetToken(passwordResetToken, {
      accessToken: token.accessToken,
    });

    assert.deepStrictEqual(Object.keys(result || []), ["resetPasswordToken"]);
  });

  it("Should get 'me' profile", async () => {
    const result = await securityClient.users.me({
      accessToken: token.accessToken,
    });

    assert.deepStrictEqual(Object.keys(result ?? {}), [
      "id",
      "username",
      "email",
      "isActive",
      "attributes",
      "resources",
    ]);
  });
});
