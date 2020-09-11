import { getHttpError } from "../services/security-client";
import { ServiceClient } from "perron";
import { Attributes, AttributesQueryFilter, GetAttributesResponse } from "../defs/attributes";

export const attributes = (serviceClient: ServiceClient) =>
  ({
    getAttributes(queryFilter: AttributesQueryFilter) {
      return serviceClient
        .request({
          pathname: "/api/attributes",
          method: "GET",
          query: queryFilter,
        })
        .then((response) => response.body as GetAttributesResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },
  } as Attributes);
