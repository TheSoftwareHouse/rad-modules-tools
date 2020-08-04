import { AttributesFeature } from "./features/attributes-feature";

export class SecurityClient {
  private attributes: AttributesFeature;

  public constructor() {
    this.attributes = new AttributesFeature();
  }

  getAttributes() {
    return this.attributes.getAttributes();
  }
}
