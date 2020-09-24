import { ServiceClient } from "perron";
import { Notifications } from "./defs/notifications";
import { notifications } from "./resources/notifications";

export type Options = {
  host: string;
  port: number;
};

export class NotificationsClient {
  constructor(private options: Options) {
    this.serviceClient = new ServiceClient({
      hostname: process.env.API_HOST || options.host,
      defaultRequestOptions: {
        port: options.port,
        protocol: "http:",
      },
      filters: [
        {
          request(request) {
            request.headers["Content-Type"] = "application/json";
            return request;
          },
        },
        ServiceClient.treat4xxAsError,
        ServiceClient.treat5xxAsError,
      ],
    });

    this.notifications = notifications(this.serviceClient);
  }

  private readonly serviceClient: ServiceClient;

  public notifications: Notifications;
}
