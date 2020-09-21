import { getHttpError } from "../services/security-client";
import { ServiceClient } from "perron";
import { Attributes, GetAttributesRequest, GetAttributesResponse } from "../defs/attributes";
import * as qs from "qs";

export const attributes = (serviceClient: ServiceClient) =>
  ({
    getAttributes(queryFilter: GetAttributesRequest = {}): Promise<GetAttributesResponse> {
      return serviceClient
        .request({
          pathname: `/api/attributes?${qs.stringify(queryFilter)}`,
          method: "GET",
          query: queryFilter,
        })
        .then((response) => response.body as GetAttributesResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },
  } as Attributes);
