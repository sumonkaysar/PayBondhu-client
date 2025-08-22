import AllUsers from "@/pages/Dashboard/Admin/AllUsers";
import Analytics from "@/pages/Dashboard/Admin/Analytics";

export const agentSidebarItems = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Wallet",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Transaction",
    items: [
      {
        title: "All Users",
        url: "/admin/all-users",
        component: AllUsers,
      },
    ],
  },
];
