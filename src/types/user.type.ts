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

export interface IAnalytics {
  meta: {
    from: Date;
    to: Date;
    months: Date[];
  };
  summary: {
    totalUsers: number;
    totalAgents: number;
    totalTransactions: number;
    totalVolumes: number;
  };
  monthlyVolume: {
    month: Date;
    count: number;
  }[];
  monthlyCount: {
    month: Date;
    count: number;
  }[];
  byType: {
    type: string;
    count: number;
    totalAmount: number;
  }[];
  mostActiveType: {
    type: string;
    count: number;
  };
  monthWithHighestVolume: {
    month: Date;
    totalAmount: number;
  };
  dayWithHighestVolume: {
    count: number;
    date: Date;
    totalAmount: number;
  };
}
