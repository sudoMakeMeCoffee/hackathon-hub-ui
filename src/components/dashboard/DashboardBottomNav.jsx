import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineDashboard } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const DashboardBottomNav = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed flex md:hidden items-center bottom-0 left-0 right-0 w-full h-[70px] bg-primary z-50">
      <div className="w-full flex items-center justify-between">
        <Link
          className={`flex justify-center items-center text-secondary w-full transition-all ${
            isActive("/dashboard") ? "font-semibold scale-110" : "opacity-70"
          }`}
          to="/dashboard"
        >
          <MdOutlineDashboard className="text-2xl" />
        </Link>

        <Link
          className={`flex justify-center items-center text-secondary w-full transition-all ${
            isActive("/dashboard/tasks")
              ? "font-semibold scale-110"
              : "opacity-70"
          }`}
          to="/dashboard/tasks"
        >
          <FaListCheck className="text-2xl" />
        </Link>

        <Link
          className={`flex justify-center items-center text-secondary w-full transition-all ${
            isActive("/dashboard/posts/create")
              ? "font-semibold scale-110"
              : "opacity-70"
          }`}
          to="/dashboard/posts/create"
        >
          <FaRegPlusSquare className="text-2xl" />
        </Link>

        <Link
          className={`flex justify-center items-center text-secondary w-full transition-all ${
            isActive("/dashboard/users") || isActive("/dashboard/users/add")
              ? "font-semibold scale-110"
              : "opacity-70"
          }`}
          to="/dashboard/users"
        >
          <HiOutlineUsers className="text-2xl" />
        </Link>

        <Link
          className={`flex justify-center items-center text-secondary w-full transition-all ${
            isActive("/dashboard/profile")
              ? "font-semibold scale-110"
              : "opacity-70"
          }`}
          to="/dashboard/profile"
        >
          <CgProfile className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default DashboardBottomNav;
