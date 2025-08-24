import AllUsers from "@/pages/Dashboard/Admin/AllUsers";
import Analytics from "@/pages/Dashboard/Admin/Analytics";

export const adminSidebarItems = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "Users",
    items: [
      {
        title: "All Users",
        url: "/admin/all-users",
        component: AllUsers,
      },
    ],
  },
];
