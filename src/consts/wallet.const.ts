import { Role } from "@/consts/user.const";

export const WalletTabs = [
  {
    label: "All Wallets",
    value: "all",
  },
  {
    label: "Agent Wallets",
    value: Role.AGENT,
  },
  {
    label: "User Wallets",
    value: Role.USER,
  },
];
