import { Token } from "../services/service";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface ResetPasswordRequest {
  resetPasswordToken: string;
  newPassword?: string;
}

export interface ResetPasswordResponse {
  newPassword: string;
}

export interface RefreshTokenRequest {
  accessToken: string;
  refreshToken: string;
}

export type RefreshTokenResponse = Token;

export type RefreshUserActiveTokenResponse = Token;

export interface Auth {
  login(request: LoginRequest): Promise<Token>;
  resetPassword(request: ResetPasswordRequest): Promise<ResetPasswordResponse>;
  refreshToken(request: RefreshTokenRequest): Promise<RefreshTokenResponse>;
  refreshUserActiveToken(userId: string): Promise<RefreshUserActiveTokenResponse>;
}
