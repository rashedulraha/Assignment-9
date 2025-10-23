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
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";
import Profile from "../Pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: Home },
      {
        path: "/seller",
        element: (
          <PrivetRoutes>
            <Sellers />
          </PrivetRoutes>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivetRoutes>
            <Wishlist />
          </PrivetRoutes>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoutes>
            <Details />
          </PrivetRoutes>
        ),
      },
      {
        path: "/our-story-details",
        Component: OurStoryDetails,
      },
      {
        path: "/profile",
        Component: Profile,
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
