import type { Role, Status } from "@/consts/auth.const";

export interface IUser {
  _id?: string;
  name: string;
  phoneNumber: string;
  password: string;
  role: keyof typeof Role;
  status: keyof typeof Status;
  wallet: string;
}
