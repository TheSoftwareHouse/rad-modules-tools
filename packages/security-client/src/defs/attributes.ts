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

type GetAttributesColumns = "id" | "name" | "user.id" | "user.username";

type GetAttributesFilterOperators = "eq" | "eqOr" | "neq" | "lt" | "gt" | "include" | "includeOr";

interface AttributesQueryFilter {
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

interface Attribute {
  id: string;
  name: string;
  userId: string;
  username: string;
}

type GetAttributesRequest = AttributesQueryFilter;

interface GetAttributesResponse {
  attributes: Attribute[];
  total: number;
  page: number;
  limit: number;
}

interface Attributes {
  getAttributes(queryFilter: AttributesQueryFilter, options?: AuthOptions): Promise<GetAttributesResponse>;
}

export {
  User,
  GetAttributesColumns,
  GetAttributesFilterOperators,
  AttributesQueryFilter,
  Attribute,
  GetAttributesRequest,
  GetAttributesResponse,
  Attributes,
};
