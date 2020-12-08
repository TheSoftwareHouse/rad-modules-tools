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

type GetUserColumns = "id" | "username" | "isActive" | "createdAt" | "updatedAt" | "attribute.name";

type FilterOperators =
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

interface UsersQueryFilter {
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

type GetUsersRequest = UsersQueryFilter;

interface GetUsersResponse {
  users: User[];
  total: number;
  page: number;
  limit: number;
}

interface SetPasswordRequest {
  username: string;
  oldPassword: string;
  newPassword: string;
}

interface SetPasswordResponse {
  passwordChanged: boolean;
}

interface ActivateUserRequest {
  activationToken: string;
}

interface ActivateUserResponse {
  userId: string;
  isActive: boolean;
}

interface AddAttributesRequest {
  userId: string;
  attributes: string[];
}

interface AddAttributesResponse {}

interface AddUserRequest {
  username: string;
  password: string;
  attributes?: string[];
}

interface AddUserResponse {
  newUserId: string;
}

interface DeactivateUserRequest {
  userId: string;
}

interface DeactivateUserResponse {
  userId: string;
  isActive: boolean;
  deactivationDate: Date;
}

interface DeleteUserRequest {
  userId: string;
}

interface DeleteUserResponse {}

interface GetUserRequest {
  userId: string;
}

type GetUserResponse = User;

interface GetUserIdRequest {
  username: string;
}

interface GetUserIdResponse {
  userId: string;
}

interface GetUsersByResourceRequest {
  resource: string;
  page?: number;
  limit?: number;
}

interface GetUsersByResourceResponse {
  users: User[];
  total: number;
  page: number;
  limit: number;
}

interface HasAccessRequest {
  resources: string[];
}

interface HasAccessResponse {
  hasAccess: boolean;
  forbidden: string[];
}

interface HasAttributesRequest {
  attributes: string[];
}

interface HasAttributesResponse {
  hasAllAttributes: boolean;
}

interface IsAuthenticatedResponse {
  isAuthenticated: boolean;
}

interface PasswordResetTokenRequest {
  username: string;
}

interface PasswordResetTokenResponse {
  resetPasswordToken: string;
}

interface RemoveAttributesRequest {
  userId: string;
  attributes: string[];
}

interface MeResponse {
  resetPasswordToken: string;
}

interface Users {
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
  me(options?: AuthOptions): Promise<MeResponse>;
}

export {
  User,
  GetUserColumns,
  FilterOperators,
  UsersQueryFilter,
  GetUsersRequest,
  GetUsersResponse,
  SetPasswordRequest,
  SetPasswordResponse,
  ActivateUserRequest,
  ActivateUserResponse,
  AddAttributesRequest,
  AddAttributesResponse,
  AddUserRequest,
  AddUserResponse,
  DeactivateUserRequest,
  DeactivateUserResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  GetUserRequest,
  GetUserResponse,
  GetUserIdRequest,
  GetUserIdResponse,
  GetUsersByResourceRequest,
  GetUsersByResourceResponse,
  HasAccessRequest,
  HasAccessResponse,
  HasAttributesRequest,
  HasAttributesResponse,
  IsAuthenticatedResponse,
  PasswordResetTokenRequest,
  PasswordResetTokenResponse,
  RemoveAttributesRequest,
  MeResponse,
  Users,
};
