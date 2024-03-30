import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div className=" relative w-[90vw]">
      <Outlet />
    </div>
  );
};

export default Layout;
