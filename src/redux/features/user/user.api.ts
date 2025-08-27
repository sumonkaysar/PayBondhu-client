import { baseApi } from "@/redux/baseApi";
import type { IResponse } from "@/types";
import type {
  IUpdateUserStatusArg,
  IUser,
  IUsersQueryParams,
  IUserStats,
} from "@/types/user.type";
import { contactSchema } from "@/validations/contact.validation";
import {
  registerSchema,
  updateUserNameSchema,
} from "@/validations/user.validation";
import type z from "zod";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation<
      IResponse<IUser>,
      z.infer<typeof registerSchema>
    >({
      query: (data) => ({
        url: "/users/registers",
        method: "POST",
        data,
      }),
    }),
    updateUserInfo: builder.mutation<
      IResponse<IUser>,
      z.infer<typeof updateUserNameSchema>
    >({
      query: (data) => ({
        url: "/users",
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["USER"],
    }),
    updateUserStatus: builder.mutation<IResponse<IUser>, IUpdateUserStatusArg>({
      query: ({ userId, ...data }) => ({
        url: `/users/${userId}/status`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["ALL_USER"],
    }),
    userInfo: builder.query<IResponse<IUser>, null>({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    getAllUsers: builder.query<IResponse<IUser[]>, IUsersQueryParams>({
      query: (params) => ({
        url: "/users/all-users",
        method: "GET",
        params,
      }),
      providesTags: ["ALL_USER"],
    }),
    getUserStats: builder.query<IResponse<IUserStats>, null>({
      query: () => ({
        url: "/users/stats",
        method: "GET",
      }),
      providesTags: ["TRANSACTION", "USER"],
    }),
    contactUs: builder.mutation<IResponse<null>, z.infer<typeof contactSchema>>(
      {
        query: (data) => ({
          url: "/users/contact-us",
          method: "POST",
          data,
        }),
      }
    ),
  }),
});

export const {
  useUserRegisterMutation,
  useUpdateUserInfoMutation,
  useUpdateUserStatusMutation,
  useUserInfoQuery,
  useGetAllUsersQuery,
  useGetUserStatsQuery,
  useContactUsMutation,
} = userApi;
