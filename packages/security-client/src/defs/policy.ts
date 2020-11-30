import { AuthOptions } from "../services/service";

interface User {
  id: string;
  username: string;
  isActive: boolean;
  isSuperAdmin: boolean;
  attributes: string[];
  createdAt: Date;
  updatedAt: Date;
}

type GetPoliciesColumns = "id" | "resource" | "attribute";

type GetPoliciesFilterOperators = "eq" | "neq" | "lt" | "gt" | "include" | "includeOr";

interface PoliciesQueryFilter {
  page?: number;
  limit?: number;
  filter?: {
    [column in GetPoliciesColumns]?: {
      [operator in GetPoliciesFilterOperators]?: string;
    };
  };
  order?: {
    by: "resource" | "attribute";
    type: "asc" | "desc";
  };
}

interface PolicyItem {
  id: string;
  resource: string;
  attribute: string;
}

type GetPoliciesRequest = PoliciesQueryFilter;

interface GetPoliciesResponse {
  policies: PolicyItem[];
  total: number;
  page: number;
  limit: number;
}

interface AddPolicyRequest {
  resource: string;
  attribute: string;
}

interface AddPolicyResponse {
  id: string;
}

interface PolicyIdQuery {
  id: string;
}

interface PolicyQuery {
  resource: string;
  attribute: string;
}

type RemovePolicyRequest = PolicyIdQuery | PolicyQuery;

interface Policy {
  addPolicy(request: AddPolicyRequest, options?: AuthOptions): Promise<AddPolicyResponse>;
  getPolicies(queryFilter: GetPoliciesRequest, options?: AuthOptions): Promise<GetPoliciesResponse>;
  removePolicy(request: RemovePolicyRequest, options?: AuthOptions): Promise<void>;
}

export {
  Policy,
  GetPoliciesColumns,
  GetPoliciesFilterOperators,
  PoliciesQueryFilter,
  GetPoliciesRequest,
  GetPoliciesResponse,
  AddPolicyRequest,
  AddPolicyResponse,
  PolicyIdQuery,
  PolicyQuery,
  RemovePolicyRequest,
};
