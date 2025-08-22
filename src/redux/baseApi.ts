import axiosBaseQuery from "@/redux/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["USER", "ALL_USER", "WALLET", "TRANSACTION"],
  endpoints: () => ({}),
});
