import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { IUpdateWalletStatusArg, IWallet } from "@/types/wallet.type";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateWalletBlockStatus: builder.mutation<
      IResponse<IWallet[]>,
      IUpdateWalletStatusArg
    >({
      query: ({ walletId, ...data }) => ({
        url: `/wallets/${walletId}/block-status`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["WALLET"],
    }),
    getAllWallets: builder.query<IResponse<IWallet[]>, null>({
      query: () => ({
        url: "/wallets/all-wallets",
        method: "GET",
      }),
      providesTags: ["WALLET"],
    }),
    getMyWallet: builder.query<IResponse<IWallet>, null>({
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
