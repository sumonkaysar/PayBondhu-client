import { baseApi } from "../../baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (data) => ({
        url: "/users/register",
        method: "POST",
        data,
      }),
    }),
    updateUserInfo: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["USER"],
    }),
    updateUserStatus: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/users/${userId}/status`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: ["ALL_USER"],
    }),
    userInfo: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/users/all-users",
        method: "GET",
      }),
      providesTags: ["ALL_USER"],
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUpdateUserInfoMutation,
  useUpdateUserStatusMutation,
  useUserInfoQuery,
  useGetAllUsersQuery,
} = userApi;
