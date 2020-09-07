import { getHttpError } from "../services/security-client";
import { ServiceClient } from "perron";
import { AttributesQueryFilter, GetAttributesResponse } from "../defs/attributes";
// import { User, UsersQueryFilter } from "../defs/user";

export const attributes = (serviceClient: ServiceClient) => ({
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
});
