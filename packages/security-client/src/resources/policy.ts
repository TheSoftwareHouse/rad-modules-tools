import { getHttpError } from "../services/security-client";
import { ServiceClient } from "perron";
import * as qs from "qs";
import {
  AddPolicyRequest,
  AddPolicyResponse,
  GetPoliciesRequest,
  GetPoliciesResponse,
  Policy,
  RemovePolicyRequest,
} from "../defs/policy";
import { createHeadersForRequest } from "../services/headers-factory";
import { AuthOptions } from "../services/service";

export const policy = (serviceClient: ServiceClient) =>
  ({
    addPolicy(request: AddPolicyRequest, authOptions?: AuthOptions): Promise<AddPolicyResponse> {
      return serviceClient
        .request({
          pathname: "/api/policy/add-policy",
          method: "POST",
          body: JSON.stringify({ ...request }),
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response.body as AddPolicyResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    getPolicies(queryFilter: GetPoliciesRequest, authOptions?: AuthOptions): Promise<GetPoliciesResponse> {
      return serviceClient
        .request({
          pathname: `/api/policy/get-policies?${qs.stringify(queryFilter)}`,
          method: "GET",
          headers: createHeadersForRequest(authOptions),
        })
        .then((response) => response.body as GetPoliciesResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    async removePolicy(request: RemovePolicyRequest, authOptions?: AuthOptions): Promise<void> {
      await serviceClient
        .request({
          pathname: "/api/policy/remove-policy",
          method: "DELETE",
          query: request,
          headers: createHeadersForRequest(authOptions),
        })
        .catch((error) => {
          throw getHttpError(error);
        });
    },
  } as Policy);
