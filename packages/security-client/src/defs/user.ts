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

export interface ResetPasswordRequest {
  resetPasswordToken: string;
  newPassword?: string;
}

export interface ResetPasswordResponse {
  newPassword: string;
}

export interface PasswordResetTokenRequest {
  username: string;
}

export interface PasswordResetTokenResponse {
  resetPasswordToken: string;
}

export interface Users {
  getUsers(queryFilter: UsersQueryFilter): Promise<GetUsersResponse>;
  activateUser(request: ActivateUserRequest): Promise<ActivateUserResponse>;
  addAttributes(request: AddAttributesRequest): Promise<AddAttributesResponse>;
  addUser(request: AddUserRequest): Promise<AddUserResponse>;
  deactivateUser(request: DeactivateUserRequest): Promise<DeactivateUserResponse>;
  deleteUser(request: DeleteUserRequest): Promise<DeleteUserResponse>;
  getUser(request: GetUserRequest): Promise<GetUserResponse>;
  getUserId(username: string);
  getUserByResource(request: GetUsersByResourceRequest): Promise<GetUsersByResourceResponse>;
  isAuthenticated();
  deactivateUser();
  hasAttributes(attributes: string[]);
  hasAccess(resources: string[]);
  addAttributes(userId: string, attributes: string[]);
  addUser({ username, password, attributes });
  deleteUser(userId: string);
  setPassword(request: SetPasswordRequest): Promise<SetPasswordResponse>;
  passwordResetToken(request: PasswordResetTokenRequest): Promise<PasswordResetTokenResponse>;
}
