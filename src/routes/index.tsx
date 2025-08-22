import App from "@/App";
import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Register from "@/pages/Register";
import { userSidebarItems } from "@/routes/user.route";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter } from "react-router";

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
        Component: Home,
      },
      ...generateRoutes(userSidebarItems),
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
