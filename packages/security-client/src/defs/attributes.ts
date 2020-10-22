import { AuthOptions } from "../services/service";

export interface User {
  id: string;
  username: string;
  isActive: boolean;
  isSuperAdmin: boolean;
  attributes: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type GetAttributesColumns = "id" | "name" | "user.id" | "user.username";

export type GetAttributesFilterOperators = "eq" | "eqOr" | "neq" | "lt" | "gt" | "include" | "includeOr";

export interface AttributesQueryFilter {
  page?: number;
  limit?: number;
  filter?: {
    [column in GetAttributesColumns]?: {
      [operator in GetAttributesFilterOperators]?: string;
    };
  };
  order?: {
    by: "user.username" | "name";
    type: "asc" | "desc";
  };
}

export interface Attribute {
  id: string;
  name: string;
  userId: string;
  username: string;
}

export type GetAttributesRequest = AttributesQueryFilter;

export interface GetAttributesResponse {
  attributes: Attribute[];
  total: number;
  page: number;
  limit: number;
}

export interface Attributes {
  getAttributes(queryFilter: AttributesQueryFilter, options?: AuthOptions): Promise<GetAttributesResponse>;
}
