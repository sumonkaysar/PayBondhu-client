import AddMoney from "@/pages/Dashboard/AddMoney";
import CashIn from "@/pages/Dashboard/Agent/CashIn";
import Profile from "@/pages/Dashboard/Agent/Profile";
import Wallet from "@/pages/Dashboard/Agent/Wallet";
import MyTransactions from "@/pages/Dashboard/MyTransactions";
import Settings from "@/pages/Dashboard/Settings";

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
      {
        title: "Settings",
        url: "/agent/settings",
        component: Settings,
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
