import React from "react";
import { Outlet } from "react-router";

const User = () => {
  return (
    <div className="flex flex-col h-screen">
      <Outlet />
    </div>
  );
};

export default User;
