import { baseApi } from "../../baseApi";

export const walletApi = baseApi.injectEndpoints({
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
    getMyTransactions: builder.query({
      query: () => ({
        url: "/transactions/me",
        method: "GET",
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
} = walletApi;
