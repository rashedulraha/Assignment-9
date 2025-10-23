import React, { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import { Navigate } from "react-router";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (user) {
    return children;
  }

  return <Navigate to={"/user/login"}></Navigate>;
};

export default PrivetRoutes;
