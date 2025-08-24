import type { IUser } from "@/types/user.type";

export interface ILoginResponse {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

export interface INewAccessToken {
  accessToken: string;
}
