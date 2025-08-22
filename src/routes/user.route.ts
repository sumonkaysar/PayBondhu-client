import CashOut from "@/pages/Dashboard/Agent/CashOut";
import MyTransactions from "@/pages/Dashboard/MyTransactions";
import Profile from "@/pages/Dashboard/Profile";
import AddMoney from "@/pages/Dashboard/User/AddMoney";
import SendMoney from "@/pages/Dashboard/User/SendMoney";
import WithdrawMoney from "@/pages/Dashboard/User/WithdrawMoney";
import Wallet from "@/pages/Dashboard/Wallet";

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
    ],
  },
  {
    title: "Transaction",
    items: [
      {
        title: "My Transactions",
        url: "/user/transactions",
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
