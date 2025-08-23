import { baseApi } from "@/redux/baseApi";
import type { IResponse, ITransactionResponse } from "@/types";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addMoney: builder.mutation({
      query: (data) => ({
        url: "/transactions/add-money",
        method: "POST",
        data,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    withdrawMoney: builder.mutation({
      query: (data) => ({
        url: "/transactions/withdraw",
        method: "POST",
        data,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    sendMoney: builder.mutation({
      query: (data) => ({
        url: "/transactions/send-money",
        method: "POST",
        data,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    cashIn: builder.mutation({
      query: (data) => ({
        url: "/transactions/cash-in",
        method: "POST",
        data,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    cashOut: builder.mutation({
      query: (data) => ({
        url: "/transactions/cash-out",
        method: "POST",
        data,
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    reverseTransaction: builder.mutation({
      query: (transactionId) => ({
        url: `/transactions/${transactionId}/reverse`,
        method: "GET",
      }),
      invalidatesTags: ["TRANSACTION"],
    }),
    getAllTransactions: builder.query({
      query: () => ({
        url: "/transactions/all-transactions",
        method: "GET",
      }),
      providesTags: ["TRANSACTION"],
    }),
    getMyTransactions: builder.query<
      IResponse<ITransactionResponse[]>,
      Record<string, string | number>
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
