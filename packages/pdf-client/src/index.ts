import { ServiceClient } from "perron";
import { Pdf } from "./defs/pdf";
import { pdf } from "./resources/pdf";

export type Options = {
  host: string;
  port: number;
};

export class PdfClient {
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

    this.pdf = pdf(this.serviceClient);
  }

  private readonly serviceClient: ServiceClient;

  public pdf: Pdf;
}
