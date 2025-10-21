import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout";
import Login from "../Pages/Login";
import User from "../Layouts/User";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  { path: "/", Component: Layout },

  {
    path: "/user",
    Component: User,
    children: [
      {
        path: "/user/login",
        Component: Login,
      },
      { path: "/user/register", Component: Register },
    ],
  },
]);

export default router;
