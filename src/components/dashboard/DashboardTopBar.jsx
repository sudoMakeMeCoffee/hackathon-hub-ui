import React from "react";
import logo from "../../assets/logo-dark.svg";
import { BiSearch } from "react-icons/bi";

const DashboardTopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-secondary w-full h-[70px]  flex items-center border-b shadow-sm border-gray-200 z-40">
      <div className="wrapper w-full flex items-center justify-between">
        <img src={logo} alt="" className="w-[110px] " />

        <div className="flex items-center gap-4">
          <input
            type="search"
            placeholder="Search"
            className="border border-gray-200 text-sm rounded-md px-3 py-2 focus:outline-none hidden md:block"
          />

          <BiSearch className="text-xl block md:hidden cursor-pointer"/>

          <button className="text-sm bg-gray-200 px-3 py-2 rounded-md hidden md:block">
            Logout
          </button>

          <button className="w-[35px] h-[35px]">
            <img src="https://avatar.iran.liara.run/username?username=sithija" className="w-full h-full"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopBar;
