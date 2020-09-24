import "mocha";
import { NotificationsClient } from "../index";
import * as assert from "assert";

describe("Resource Notifications", () => {
  const notificationsClient = new NotificationsClient({
    host: "localhost",
    port: 50090,
  });

  let messageId;

  it("Should send notification", async () => {
    const result = await notificationsClient.notifications.send({
      channels: ["default"],
      message: "Test message",
    });

    assert.deepStrictEqual(Object.keys(result ?? {}), ["notificationsIds"]);

    messageId = result.notificationsIds.pop();
  });

  it("Should get notifications", async () => {
    const result = await notificationsClient.notifications.get();

    assert.deepStrictEqual(Object.keys(result ?? {}), ["notifications", "total", "page", "limit"]);

    const message = result.notifications.find((notification) => notification.id === messageId);

    assert.deepStrictEqual(Object.keys(message ?? {}), ["id", "channel", "message", "createdAt"]);

    assert.strictEqual(message.message, "Test message");
  });
});
