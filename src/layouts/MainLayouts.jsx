import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const MainLayouts = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayouts;
