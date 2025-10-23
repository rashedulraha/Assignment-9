import { createBrowserRouter } from "react-router";
import Layout from "../Layouts/Layout";
import Login from "../Pages/Login";
import User from "../Layouts/User";
import Register from "../Pages/Register";
import Sellers from "../Pages/Sellers";
import Wishlist from "../Pages/Wishlist";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import ForgotPassword from "../Pages/ForgotPassword";
import OurStoryDetails from "../Pages/OurStoryDetails";
import Details from "../Pages/Details";

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
      {
        path: "/our-story-details",
        Component: OurStoryDetails,
      },
      {
        path: "/details/:id",
        Component: Details,
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
      { path: "/user/forgotPassword", Component: ForgotPassword },
    ],
  },
]);

export default router;
