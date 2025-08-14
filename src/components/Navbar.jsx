import React from "react";
import logo from "../assets/logo1.svg";
const Navbar = () => {
  return (
    <div className="w-full h-[60px] bg-primary fixed top-0 left-0 right-0 z-100  flex items-center justify-center">
      <div className="min-w-[7rem] items-center justify-between flex">
        <img src={logo} alt="" className="w-[100px]" />
      </div>
    </div>
  );
};

export default Navbar;
