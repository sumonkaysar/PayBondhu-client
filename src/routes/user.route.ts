import AddMoney from "@/pages/Dashboard/AddMoney";
import MyTransactions from "@/pages/Dashboard/MyTransactions";
import Settings from "@/pages/Dashboard/Settings";
import CashOut from "@/pages/Dashboard/User/CashOut";
import Profile from "@/pages/Dashboard/User/Profile";
import SendMoney from "@/pages/Dashboard/User/SendMoney";
import Wallet from "@/pages/Dashboard/User/Wallet";
import WithdrawMoney from "@/pages/Dashboard/User/WithdrawMoney";

export const userSidebarItems = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Wallet",
        url: "/user/wallet",
        component: Wallet,
      },
      {
        title: "Profile",
        url: "/user/profile",
        component: Profile,
      },
      {
        title: "Settings",
        url: "/user/settings",
        component: Settings,
      },
    ],
  },
  {
    title: "Transaction",
    items: [
      {
        title: "My Transactions",
        url: "/user/my-transactions",
        component: MyTransactions,
      },
      {
        title: "Add Money",
        url: "/user/add-money",
        component: AddMoney,
      },
      {
        title: "Withdraw Money",
        url: "/user/withdraw-money",
        component: WithdrawMoney,
      },
      {
        title: "Send Money",
        url: "/user/send-money",
        component: SendMoney,
      },
      {
        title: "Cash Out",
        url: "/user/cash-out",
        component: CashOut,
      },
    ],
  },
];
