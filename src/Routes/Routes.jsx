import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  { path: "/", Component: Layout },
  {
    path: "/user/login",
    Component: Login,
  },
]);

export default router;
