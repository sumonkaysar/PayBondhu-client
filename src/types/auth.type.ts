import type { Status } from "@/consts/auth.const";

export interface IUser {
  _id?: string;
  name: string;
  phoneNumber: string;
  password: string;
  role: TRole;
  status: keyof typeof Status;
  wallet: string;
}
