import { Role } from "@/consts/auth.const";
import type { ComponentType } from "react";

export type TRole = keyof typeof Role;

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

interface IMeta {
  page: number;
  limit: number;
  totalPage: number;
  total: number;
}

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
  meta?: IMeta;
}

export interface IUserInfoResponse {
  _id: string;
  name: string;
  phoneNumber: string;
  password: string;
  role: TRole;
  status: string;
  createdAt: string;
  updatedAt: string;
  wallet: string;
}
