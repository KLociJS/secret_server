import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

import "./Layout.css";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='main-wrapper'>
        <main className='main-container'>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
