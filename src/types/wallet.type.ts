import type { IUser, TRole } from "@/types/user.type";

export interface IWallet {
  _id: string;
  user: IUser;
  isBlocked: boolean;
  balance: number;
  createdAt: Date;
}

export interface IUpdateWalletStatusArg {
  walletId: string;
  isBlocked: boolean;
}

export interface IWalletsQueryParams {
  _id?: string;
  page?: number;
  limit?: number;
  status?: string;
  searchTerm?: string;
  sort?: string;
  isBlocked?: boolean;
  balance?: number;
  role?: TRole;
}
