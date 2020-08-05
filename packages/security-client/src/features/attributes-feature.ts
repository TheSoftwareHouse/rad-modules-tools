import ServiceClient from "perron";

export interface GetAttributesParams {
  page: number;
  limit: number;
  filter: {
    [key: string]: object;
  };
  order: {
    by: string;
    type: "asc" | "desc";
  };
}

export class AttributesFeature {
  public constructor(private serviceClient: ServiceClient) {}

  getAttributes(params: GetAttributesParams) {}
}
