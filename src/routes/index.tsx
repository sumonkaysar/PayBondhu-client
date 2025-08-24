import App from "@/App";
import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Register from "@/pages/Register";
import { adminSidebarItems } from "@/routes/admin.route";
import { agentSidebarItems } from "@/routes/agent.route";
import { userSidebarItems } from "@/routes/user.route";
import { generateRoutes } from "@/utils/generateRoutes";
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
    Component: DashboardLayout,
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
    Component: DashboardLayout,
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
    Component: DashboardLayout,
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
