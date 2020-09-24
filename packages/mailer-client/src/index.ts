import { ServiceClient } from "perron";
import { Mailer } from "./defs/mailer";
import { mailer } from "./resources/mailer";

export type Options = {
  host: string;
  port: number;
};

export class MailerClient {
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

    this.mailer = mailer(this.serviceClient);
  }

  private readonly serviceClient: ServiceClient;

  public mailer: Mailer;
}
