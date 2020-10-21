import { getHttpError } from "../services/security-client";
import { ServiceClient } from "perron";
import { Attributes, GetAttributesRequest, GetAttributesResponse } from "../defs/attributes";
import * as qs from "qs";
import { createHeadersForRequest } from "../services/headers-factory";
import { AuthOptions } from "../services/service";

export const attributes = (serviceClient: ServiceClient) =>
  ({
    getAttributes(queryFilter: GetAttributesRequest, authOptions?: AuthOptions): Promise<GetAttributesResponse> {
      return serviceClient
        .request({
          pathname: `/api/attributes?${qs.stringify(queryFilter)}`,
          method: "GET",
          query: queryFilter,
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response.body as GetAttributesResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },
  } as Attributes);
