import { baseApi } from "@/redux/baseApi";
import type { ILoginResponse } from "@/redux/features/auth/auth.type";
import type { IResponse } from "@/types";
import { loginSchema } from "@/validations/auth.validation";
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
    }),
    logout: builder.mutation<null, null>({
      query: () => ({
        url: "/auth/logout",
        method: "GET",
      }),
      invalidatesTags: ["USER"],
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/reset-password",
        method: "PATCH",
        data,
      }),
    }),
    getNewAccessToken: builder.mutation({
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
