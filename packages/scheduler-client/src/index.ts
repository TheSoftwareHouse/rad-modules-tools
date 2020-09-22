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
      filters: [ServiceClient.treat4xxAsError, ServiceClient.treat5xxAsError],
    });

    this.jobs = jobs(this.serviceClient);
  }

  private serviceClient: ServiceClient;

  public jobs: Jobs;
}
