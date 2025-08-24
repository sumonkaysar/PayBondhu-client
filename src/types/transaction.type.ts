import type {
  TransactionStatus,
  TransactionType,
} from "@/consts/transaction.const";
import type { IUser } from "@/types/user.type";

export type TTransactionType = keyof typeof TransactionType;
export type TTransactionStatus = keyof typeof TransactionStatus;

export interface IAddOrWithdrawMoneyForm {
  amount: number;
  through: string;
}

export interface ITransaction {
  _id: string;
  sender: IUser;
  receiver: IUser;
  type: TTransactionType;
  amount: number;
  fee: number;
  commission: number;
  through?: string;
  status: TTransactionStatus;
  createdAt: Date;
}

export interface IReverseTransactionArg {
  transactionId: string;
}

export interface ITransactionsQueryParams {
  page?: number;
  limit?: number;
  type?: string;
  status?: string;
  search?: string;
  sort?: string;
}
