import { getHttpError } from "../services/http-service";
import { ServiceClient } from "perron";
import { AttributesQueryFilter, GetAttributesResponse } from "../defs/attributes";
// import { User, UsersQueryFilter } from "../defs/user";

export const policy = (serviceClient: ServiceClient) => ({
  getPolicies(queryFilter: AttributesQueryFilter) {
    return serviceClient
      .request({
        pathname: "/api/policy/get-policies",
        method: "GET",
        query: queryFilter,
      })
      .then((response) => response.body as GetAttributesResponse)
      .catch((error) => {
        throw getHttpError(error);
      });
  },
});
