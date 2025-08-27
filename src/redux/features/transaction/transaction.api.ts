import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type {
  IReverseTransactionArg,
  ITransaction,
  ITransactionsQueryParams,
} from "@/types/transaction.type";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addMoney: builder.mutation<
      IResponse<ITransaction>,
      { through: string; amount: number }
    >({
      query: (data) => ({
        url: "/transactions/add-money",
        method: "POST",
        data,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    withdrawMoney: builder.mutation<
      IResponse<ITransaction>,
      { through: string; amount: number }
    >({
      query: (data) => ({
        url: "/transactions/withdraw",
        method: "POST",
        data,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    sendMoney: builder.mutation<
      IResponse<ITransaction>,
      { receiver: string; amount: number }
    >({
      query: (data) => ({
        url: "/transactions/send-money",
        method: "POST",
        data,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    cashIn: builder.mutation<
      IResponse<ITransaction>,
      { receiver: string; amount: number }
    >({
      query: (data) => ({
        url: "/transactions/cash-in",
        method: "POST",
        data,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    cashOut: builder.mutation<
      IResponse<ITransaction>,
      { receiver: string; amount: number }
    >({
      query: (data) => ({
        url: "/transactions/cash-out",
        method: "POST",
        data,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    reverseTransaction: builder.mutation<
      IResponse<ITransaction>,
      IReverseTransactionArg
    >({
      query: (transactionId) => ({
        url: `/transactions/${transactionId}/reverse`,
        method: "GET",
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    getAllTransactions: builder.query<
      IResponse<ITransaction[]>,
      ITransactionsQueryParams
    >({
      query: (params) => ({
        url: "/transactions/all-transactions",
        method: "GET",
        params,
      }),
      providesTags: ["TRANSACTION"],
    }),
    getMyTransactions: builder.query<
      IResponse<ITransaction[]>,
      ITransactionsQueryParams
    >({
      query: (params) => ({
        url: "/transactions/me",
        method: "GET",
        params,
      }),
      providesTags: ["TRANSACTION"],
    }),
  }),
});

export const {
  useAddMoneyMutation,
  useWithdrawMoneyMutation,
  useSendMoneyMutation,
  useCashInMutation,
  useCashOutMutation,
  useReverseTransactionMutation,
  useGetAllTransactionsQuery,
  useGetMyTransactionsQuery,
} = transactionApi;
