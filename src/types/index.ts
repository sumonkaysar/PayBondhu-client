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
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  wallet: string;
}
