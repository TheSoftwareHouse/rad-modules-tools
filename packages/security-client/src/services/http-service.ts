import { ServiceClient } from "perron";
import { Credentials } from "./service";

export class HttpService {
  constructor(private options: any) {
    this.serviceClient = new ServiceClient({
      hostname: options.apiUrl,
    });
  }

  private serviceClient: ServiceClient;

  public async login(_credentials: Credentials) {
    return Promise.resolve();
  }
}
