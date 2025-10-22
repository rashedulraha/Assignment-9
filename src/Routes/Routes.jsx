import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout";
import Login from "../Pages/Login";
import User from "../Layouts/User";
import Register from "../Pages/Register";
import Sellers from "../Pages/Sellers";
import Wishlist from "../Pages/Wishlist";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: Home },
      {
        path: "/seller",
        Component: Sellers,
      },
      {
        path: "/wishlist",
        Component: Wishlist,
      },
    ],
  },

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
