import { AttributesFeature } from "./features/attributes-feature";

export class SecurityClient {
  private attributes: AttributesFeature;

  public constructor(url: string) {
    this.attributes = new AttributesFeature(url);
  }

  getAttributes() {
    return this.attributes.getAttributes();
  }
}
