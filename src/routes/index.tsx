import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";

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
    Component: App,
  },
  {
    path: "/register",
    Component: App,
  },
]);

export default router;
