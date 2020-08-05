import ServiceClient from "perron";
import { Authentication } from "./authentication";

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

export class AttributesFeature implements Authentication {
  private accessToken?: string;

  public constructor(private serviceClient: ServiceClient) {}

  setAccessToken(token: string): void {
    this.accessToken = token;
  }

  async getAttributes(params: GetAttributesParams) {
    return this.serviceClient.request({
      method: "GET",
      pathname: "/api/attributes",
      headers: {
        authorization: `bearer ${this.accessToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(params),
    });
  }
}
