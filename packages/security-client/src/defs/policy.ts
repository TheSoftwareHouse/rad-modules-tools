export interface User {
  id: string;
  username: string;
  isActive: boolean;
  isSuperAdmin: boolean;
  attributes: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type GetPoliciesColumns = "id" | "resource" | "attribute";

export type GetPoliciesFilterOperators = "eq" | "neq" | "lt" | "gt" | "include" | "includeOr";

export interface PoliciesQueryFilter {
  page?: number;
  limit?: number;
  filter?: {
    [column in GetPoliciesColumns]: {
      [operator in GetPoliciesFilterOperators]: string;
    };
  };
  order?: {
    by: "resource" | "attribute";
    type: "asc" | "desc";
  };
}

export interface PolicyItem {
  id: string;
  resource: string;
  attribute: string;
}

export type GetPoliciesRequest = PoliciesQueryFilter;

export interface GetPoliciesResponse {
  policies: PolicyItem[];
  total: number;
  page: number;
  limit: number;
}

export interface AddPolicyRequest {
  resource: string;
  attribute: string;
}

export interface AddPolicyResponse {
  id: string;
}

export interface PolicyIdQuery {
  id: string;
}

export interface PolicyQuery {
  resource: string;
  attribute: string;
}

export type RemovePolicyRequest = PolicyIdQuery | PolicyQuery;

export interface Policy {
  addPolicy(request: AddPolicyRequest): Promise<AddPolicyResponse>;
  getPolicies(queryFilter: GetPoliciesRequest): Promise<GetPoliciesResponse>;
  removePolicy(request: RemovePolicyRequest): Promise<void>;
}
