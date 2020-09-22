import { ServiceClient } from "perron";
import { Jobs } from "./defs/jobs";
import { jobs } from "./resources/jobs";

export type Options = {
  host: string;
  port: number;
};

export class SchedulerClient {
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

    this.jobs = jobs(this.serviceClient);
  }

  private readonly serviceClient: ServiceClient;

  public jobs: Jobs;
}
