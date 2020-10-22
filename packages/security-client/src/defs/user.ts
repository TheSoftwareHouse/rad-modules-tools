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
    [column in GetUserColumns]?: {
      [operator in FilterOperators]?: string;
    };
  };
  order?: {
    by: GetUserColumns;
    type: "asc" | "desc";
  };
}

export type GetUsersRequest = UsersQueryFilter;

export interface GetUsersResponse {
  users: User[];
  total: number;
  page: number;
  limit: number;
}

export interface SetPasswordRequest {
  username: string;
  oldPassword: string;
  newPassword: string;
}

export interface SetPasswordResponse {
  passwordChanged: boolean;
}

export interface ActivateUserRequest {
  activationToken: string;
}

export interface ActivateUserResponse {
  userId: string;
  isActive: boolean;
}

export interface AddAttributesRequest {
  userId: string;
  attributes: string[];
}

export interface AddAttributesResponse {}

export interface AddUserRequest {
  username: string;
  password: string;
  attributes?: string[];
}

export interface AddUserResponse {
  newUserId: string;
}

export interface DeactivateUserRequest {
  userId: string;
}

export interface DeactivateUserResponse {
  userId: string;
  isActive: boolean;
  deactivationDate: Date;
}

export interface DeleteUserRequest {
  userId: string;
}

export interface DeleteUserResponse {}

export interface GetUserRequest {
  userId: string;
}

export type GetUserResponse = User;

export interface GetUserIdRequest {
  username: string;
}

export interface GetUserIdResponse {
  userId: string;
}

export interface GetUsersByResourceRequest {
  resource: string;
  page?: number;
  limit?: number;
}

export interface GetUsersByResourceResponse {
  users: User[];
  total: number;
  page: number;
  limit: number;
}

export interface HasAccessRequest {
  resources: string[];
}

export interface HasAccessResponse {
  hasAccess: boolean;
  forbidden: string[];
}

export interface HasAttributesRequest {
  attributes: string[];
}

export interface HasAttributesResponse {
  hasAllAttributes: boolean;
}

export interface IsAuthenticatedResponse {
  isAuthenticated: boolean;
}

export interface PasswordResetTokenRequest {
  username: string;
}

export interface PasswordResetTokenResponse {
  resetPasswordToken: string;
}

export interface RemoveAttributesRequest {
  userId: string;
  attributes: string[];
}

export interface Users {
  getUsers(queryFilter: GetUsersRequest, options?: AuthOptions): Promise<GetUsersResponse>;
  activateUser(request: ActivateUserRequest, options?: AuthOptions): Promise<ActivateUserResponse>;
  addAttributes(request: AddAttributesRequest, options?: AuthOptions): Promise<AddAttributesResponse>;
  removeAttributes(request: RemoveAttributesRequest, options?: AuthOptions);
  addUser(request: AddUserRequest, options?: AuthOptions): Promise<AddUserResponse>;
  deactivateUser(request: DeactivateUserRequest, options?: AuthOptions): Promise<DeactivateUserResponse>;
  deleteUser(request: DeleteUserRequest, options?: AuthOptions): Promise<DeleteUserResponse>;
  getUser(request: GetUserRequest, options?: AuthOptions): Promise<GetUserResponse>;
  getUserId(request: GetUserIdRequest, options?: AuthOptions): Promise<GetUserIdResponse>;
  getUsersByResource(request: GetUsersByResourceRequest, options?: AuthOptions): Promise<GetUsersByResourceResponse>;
  hasAccess(request: HasAccessRequest, options?: AuthOptions): Promise<HasAccessResponse>;
  hasAttributes(request: HasAttributesRequest, options?: AuthOptions): Promise<HasAttributesResponse>;
  isAuthenticated(options?: AuthOptions): Promise<IsAuthenticatedResponse>;
  setPassword(request: SetPasswordRequest, options?: AuthOptions): Promise<SetPasswordResponse>;
  passwordResetToken(request: PasswordResetTokenRequest, options?: AuthOptions): Promise<PasswordResetTokenResponse>;
}
