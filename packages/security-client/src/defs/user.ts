export interface User {
  id: string;
  username: string;
  isActive: boolean;
  isSuperAdmin: boolean;
  attributes: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type GetUserColumns = "id" | "username" | "isActive" | "createdAt" | "updatedAt" | "attribute.name";

export type FilterOperators =
  | "eq"
  | "eqOr"
  | "neq"
  | "neqOr"
  | "lt"
  | "ltOr"
  | "gt"
  | "gtOr"
  | "gte"
  | "gteOr"
  | "include"
  | "includeOr";

export interface UsersQueryFilter {
  page?: number;
  limit?: number;
  filter?: {
    [column in GetUserColumns]: {
      [operator in FilterOperators]: string;
    };
  };
  order?: {
    by: GetUserColumns;
    type: "asc" | "desc";
  };
}

export interface Users {
  getUsers(queryFilter: UsersQueryFilter): Promise<User[]>;
  activateUser(token: string);
  isAuthenticated();
  deactivateUser();
  hasAttributes(attributes: string[]);
  hasAccess(resources: string[]);
  addAttributes(userId: string, attributes: string[]);
  addUser({ username, password, attributes });
  deleteUser(userId: string);
  getUser(userId: string);
  getUserId(username: string);
}
