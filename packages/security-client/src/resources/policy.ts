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

export const policy = (serviceClient: ServiceClient) =>
  ({
    addPolicy(request: AddPolicyRequest): Promise<AddPolicyResponse> {
      return serviceClient
        .request({
          pathname: "/api/policy/add-policy",
          method: "POST",
          body: JSON.stringify({ ...request }),
        })
        .then((response) => response.body as AddPolicyResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    getPolicies(queryFilter: GetPoliciesRequest = {}): Promise<GetPoliciesResponse> {
      return serviceClient
        .request({
          pathname: `/api/policy/get-policies?${qs.stringify(queryFilter)}`,
          method: "GET",
        })
        .then((response) => response.body as GetPoliciesResponse)
        .catch((error) => {
          throw getHttpError(error);
        });
    },

    async removePolicy(request: RemovePolicyRequest): Promise<void> {
      await serviceClient
        .request({
          pathname: "/api/policy/remove-policy",
          method: "DELETE",
          query: request,
        })
        .catch((error) => {
          throw getHttpError(error);
        });
    },
  } as Policy);
