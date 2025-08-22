import type { IUserInfoResponse } from "@/types";

export interface ILoginArg {
  phoneNumber: string;
  password: string;
}

export interface IChangePasswordArg {
  oldPassword: string;
  newPassword: string;
}

export interface ILoginResponse {
  user: IUserInfoResponse;
  accessToken: string;
  refreshToken: string;
}
