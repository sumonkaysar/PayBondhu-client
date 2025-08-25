import App from "@/App";
import { Role } from "@/consts/user.const";
import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Register from "@/pages/Register";
import { adminSidebarItems } from "@/routes/admin.route";
import { agentSidebarItems } from "@/routes/agent.route";
import { userSidebarItems } from "@/routes/user.route";
import type { TRole } from "@/types/user.type";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/user",
    Component: withAuth(DashboardLayout, Role.USER as TRole),
    children: [
      {
        index: true,
        element: <Navigate to="wallet" />,
      },
      ...generateRoutes(userSidebarItems),
    ],
  },
  {
    path: "/agent",
    Component: withAuth(DashboardLayout, Role.AGENT as TRole),
    children: [
      {
        index: true,
        element: <Navigate to="wallet" />,
      },
      ...generateRoutes(agentSidebarItems),
    ],
  },
  {
    path: "/admin",
    Component: withAuth(DashboardLayout, Role.ADMIN as TRole),
    children: [
      {
        index: true,
        element: <Navigate to="analytics" />,
      },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
