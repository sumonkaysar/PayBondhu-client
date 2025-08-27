import type { Role } from "@/consts/user.const";
import type { IWallet } from "@/types/wallet.type";

export type TRole = keyof typeof Role;

export interface IUserRegisterARg {
  name: string;
  phoneNumber: string;
  password: string;
  role: TRole;
}

export interface IUpdateUserNameArg {
  name?: string;
  password?: string;
  status?: string;
}

export interface IUpdateUserStatusArg {
  userId: string;
  status: string;
}

export interface IUser {
  _id: string;
  name: string;
  phoneNumber: string;
  password: string;
  role: TRole;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  wallet: IWallet;
}

export interface IUserStats {
  totalTransactions: number;
  totalDeposits: number;
  totalWithdrawals: number;
}

export interface IUsersQueryParams {
  _id?: string;
  page?: number;
  limit?: number;
  status?: string;
  searchTerm?: string;
  sort?: string;
  name?: string;
  phoneNumber?: string;
  role?: string;
}
