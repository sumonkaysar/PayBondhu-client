import CashIn from "@/pages/Dashboard/Agent/CashIn";
import MyTransactions from "@/pages/Dashboard/MyTransactions";
import Profile from "@/pages/Dashboard/Profile";
import AddMoney from "@/pages/Dashboard/User/AddMoney";
import Wallet from "@/pages/Dashboard/Wallet";

export const agentSidebarItems = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Wallet",
        url: "/agent/wallet",
        component: Wallet,
      },
      {
        title: "Profile",
        url: "/agent/profile",
        component: Profile,
      },
    ],
  },
  {
    title: "Transaction",
    items: [
      {
        title: "My Transactions",
        url: "/agent/my-transactions",
        component: MyTransactions,
      },
      {
        title: "Add Money",
        url: "/agent/add-money",
        component: AddMoney,
      },
      {
        title: "Cash In",
        url: "/agent/cash-in",
        component: CashIn,
      },
    ],
  },
];
