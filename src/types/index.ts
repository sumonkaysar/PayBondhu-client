import { Role } from "@/consts/auth.const";
import type {
  TransactionStatus,
  TransactionType,
} from "@/consts/transaction.type";
import type { ComponentType } from "react";

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

interface IMeta {
  page: number;
  limit: number;
  totalPage: number;
  total: number;
}

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
  meta?: IMeta;
}

export interface IErrorResponse {
  data: {
    statusCode: number;
    success: boolean;
    message: string;
  };
}

export type TRole = keyof typeof Role;

export interface IUserInfoResponse {
  _id: string;
  name: string;
  phoneNumber: string;
  password: string;
  role: TRole;
  status: string;
  createdAt: string;
  updatedAt: string;
  wallet: IWalletResponse;
}

export interface IWalletResponse {
  _id: string;
  user: string;
  isBlocked: boolean;
  balance: number;
}

export type TTransactionType = keyof typeof TransactionType;
export type TTransactionStatus = keyof typeof TransactionStatus;

export interface ITransactionResponse {
  _id?: string;
  sender: string;
  receiver: string;
  type: TTransactionType;
  amount: number;
  fee: number;
  commission: number;
  through?: string;
  status: TTransactionStatus;
  createdAt: Date;
}
