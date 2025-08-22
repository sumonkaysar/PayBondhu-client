import { baseApi } from "@/redux/baseApi";
import type { IWalletUpdateData } from "@/redux/features/wallet/wallet.type";
import type { IResponse, IWalletResponse } from "@/types";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateWalletBlockStatus: builder.mutation<
      IResponse<IWalletResponse>,
      IWalletUpdateData
    >({
      query: ({ walletId, data }) => ({
        url: `/wallets/${walletId}/block-status`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["WALLET"],
    }),

    getAllWallets: builder.query<IResponse<IWalletResponse[]>, null>({
      query: () => ({
        url: "/wallets/all-wallets",
        method: "GET",
      }),
      providesTags: ["WALLET"],
    }),

    getMyWallet: builder.query<IResponse<IWalletResponse>, null>({
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
