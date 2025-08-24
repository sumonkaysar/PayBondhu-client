import type { IUser } from "@/types/user.type";

export interface IWallet {
  _id: string;
  user: IUser;
  isBlocked: boolean;
  balance: number;
}

export interface IUpdateWalletStatusArg {
  walletId: string;
  isBlocked: boolean;
}
