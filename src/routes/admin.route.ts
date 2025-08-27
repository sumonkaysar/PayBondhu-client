import AllTransactions from "@/pages/Dashboard/Admin/AllTransactions";
import AllUsers from "@/pages/Dashboard/Admin/AllUsers";
import AllWallets from "@/pages/Dashboard/Admin/AllWallets";
import Analytics from "@/pages/Dashboard/Admin/Analytics";
import ProfilePage from "@/pages/Dashboard/Admin/Profile";
import Settings from "@/pages/Dashboard/Settings";

export const adminSidebarItems = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
      {
        title: "Profile",
        url: "/admin/profile",
        component: ProfilePage,
      },
      {
        title: "Settings",
        url: "/admin/settings",
        component: Settings,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "All Users",
        url: "/admin/all-users",
        component: AllUsers,
      },
      {
        title: "All Wallets",
        url: "/admin/all-wallets",
        component: AllWallets,
      },
      {
        title: "All Transactions",
        url: "/admin/all-transactions",
        component: AllTransactions,
      },
    ],
  },
];
