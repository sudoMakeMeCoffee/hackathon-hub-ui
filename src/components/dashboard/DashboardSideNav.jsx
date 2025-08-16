import React from "react";
import { FaListCheck } from "react-icons/fa6";
import { GrDashboard } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi";
import { MdDashboard, MdOutlineDashboard } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const DashboardSideNav = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-[70px] min-w-[250px] left-0 h-screen bg-secondary shadow-sm border-r border-gray-200  z-40 hidden md:block">
      <div className="p-3 flex flex-col gap-3">
        <Link
          className={`flex items-center w-full hover:bg-gray-200 p-3 gap-3 rounded-md text-sm transition-all ${
            isActive("/dashboard") ? "font-semibold scale-102 bg-gray-200" : "opacity-70"
          }`}
          to="/dashboard"
        >
          <MdOutlineDashboard className="text-lg"/>
          <span>Dashboard</span>
        </Link>

        <Link
          className={`flex items-center w-full hover:bg-gray-200 p-3 gap-3 rounded-md text-sm transition-all ${
            isActive("/dashboard/tasks") ? "font-semibold scale-102 bg-gray-200" : "opacity-70"
          }`}
          to="/dashboard/tasks"
        >
          <FaListCheck className="text-lg"/>
          <span>Tasks</span>
        </Link>

         <Link
          className={`flex items-center w-full hover:bg-gray-200 p-3 gap-3 rounded-md text-sm transition-all ${
            isActive("/dashboard/users") ||  isActive("/dashboard/users/add") ? "font-semibold scale-102 bg-gray-200" : "opacity-70"
          }`}
          to="/dashboard/users"
        >
          <HiOutlineUsers className="text-lg"/>
          <span>Users</span>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSideNav;
