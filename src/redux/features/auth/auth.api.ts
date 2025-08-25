import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type { ILoginResponse, INewAccessToken } from "@/types/auth.type";
import {
  changePasswordSchema,
  loginSchema,
} from "@/validations/auth.validation";
import type z from "zod";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      IResponse<ILoginResponse>,
      z.infer<typeof loginSchema>
    >({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
      invalidatesTags: ["USER"],
    }),
    logout: builder.mutation<IResponse<null>, null>({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
      }),
      invalidatesTags: ["USER"],
    }),
    changePassword: builder.mutation<
      IResponse<null>,
      z.infer<typeof changePasswordSchema>
    >({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "PATCH",
        data,
      }),
    }),
    getNewAccessToken: builder.mutation<IResponse<INewAccessToken>, null>({
      query: () => ({
        url: "/auth/refresh-token",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useChangePasswordMutation,
  useGetNewAccessTokenMutation,
} = authApi;
