import { Token } from "../services/service";

interface LoginRequest {
  username: string;
  password: string;
}

interface GoogleLoginRequest {
  code: string;
  redirectUrl: string;
}

interface FacebookLoginRequest {
  code: string;
  redirectUrl: string;
}

interface ResetPasswordRequest {
  resetPasswordToken: string;
  newPassword?: string;
}

interface ResetPasswordResponse {
  newPassword: string;
}

interface RefreshTokenRequest {
  accessToken: string;
  refreshToken: string;
}

type RefreshTokenResponse = Token;

type RefreshUserActiveTokenResponse = Token;

interface Auth {
  login(request: LoginRequest): Promise<Token>;
  googleLogin(request: GoogleLoginRequest): Promise<Token>;
  facebookLogin(request: FacebookLoginRequest): Promise<Token>;
  resetPassword(request: ResetPasswordRequest): Promise<ResetPasswordResponse>;
  refreshToken(request: RefreshTokenRequest): Promise<RefreshTokenResponse>;
  refreshUserActiveToken(userId: string): Promise<RefreshUserActiveTokenResponse>;
}

export {
  Auth,
  LoginRequest,
  GoogleLoginRequest,
  FacebookLoginRequest,
  ResetPasswordRequest,
  ResetPasswordResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  RefreshUserActiveTokenResponse,
};
