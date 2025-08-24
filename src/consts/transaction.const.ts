import { Role } from "@/consts/user.const";

export const TransactionType = {
  CASH_IN: "CASH_IN",
  CASH_OUT: "CASH_OUT",
  SEND_MONEY: "SEND_MONEY",
  ADD_MONEY: "ADD_MONEY",
  WITHDRAW: "WITHDRAW",
};

export const TransactionStatus = {
  PENDING: "PENDING",
  COMPLETED: "COMPLETED",
  REVERSED: "REVERSED",
};

export const TransactionTabs = [
  {
    label: "All",
    value: "all",
    requiredRoles: Object.values(Role),
  },
  {
    label: "Send",
    value: TransactionType.SEND_MONEY,
    requiredRoles: [Role.USER, Role.ADMIN],
  },
  {
    label: "Cash In",
    value: TransactionType.CASH_IN,
    requiredRoles: Object.values(Role),
  },
  {
    label: "Cash Out",
    value: TransactionType.CASH_OUT,
    requiredRoles: Object.values(Role),
  },
  {
    label: "Add Money",
    value: TransactionType.ADD_MONEY,
    requiredRoles: Object.values(Role),
  },
  {
    label: "Withdraw",
    value: TransactionType.WITHDRAW,
    requiredRoles: [Role.USER, Role.ADMIN],
  },
];
