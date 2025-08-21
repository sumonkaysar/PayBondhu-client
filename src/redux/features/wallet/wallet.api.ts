import { baseApi } from "../../baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateWalletBlockStatus: builder.mutation({
      query: (walletId: string) => ({
        url: `/wallets/${walletId}/block-status`,
        method: "PATCH",
      }),
      invalidatesTags: ["WALLET"],
    }),
    getAllWallets: builder.query({
      query: () => ({
        url: "/wallets/all-wallets",
        method: "GET",
      }),
      providesTags: ["WALLET"],
    }),
    getMyWallet: builder.query({
      query: () => ({
        url: "/wallets/me",
        method: "GET",
      }),
      providesTags: ["WALLET"],
    }),
  }),
});

export const {
  useUpdateWalletBlockStatusMutation,
  useGetAllWalletsQuery,
  useGetMyWalletQuery,
} = walletApi;
