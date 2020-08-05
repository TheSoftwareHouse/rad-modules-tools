import ServiceClient from "perron";
import { AttributesFeature, GetAttributesParams } from "./features/attributes-feature";

export class SecurityClient {
  private readonly serviceClient: ServiceClient;

  private readonly attributes: AttributesFeature;

  public constructor(url: string) {
    this.serviceClient = new ServiceClient(url);
    this.attributes = new AttributesFeature(this.serviceClient);
  }

  getAttributes(params: GetAttributesParams) {
    return this.attributes.getAttributes(params);
  }
}
