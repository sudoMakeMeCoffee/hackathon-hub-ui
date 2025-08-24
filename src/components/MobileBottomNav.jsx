import React from "react";
import { MdExplore, MdOutlineLeaderboard } from "react-icons/md";
import { SlOrganization } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";
import useAuthStore from "../store/AuthStore";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa6";
import { FaRegPlusSquare } from "react-icons/fa";

const MobileBottomNav = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuthStore();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed flex md:hidden items-center bottom-0 left-0 right-0 w-full h-[70px] bg-primary z-50">
      <div className="w-full flex items-center justify-between">
        <Link
          className={`flex justify-center items-center text-secondary w-full transition-all ${
            isActive("/") ? "font-semibold scale-110" : "opacity-70"
          }`}
          to="/"
        >
          <MdExplore className="text-2xl" />
        </Link>
      </div>

      <div className="w-full flex items-center justify-between">
        <Link
          className={`flex justify-center items-center text-secondary w-full transition-all ${
            isActive("/join") ? "font-semibold scale-110" : "opacity-70"
          }`}
          to="/join"
        >
          <SlOrganization className="text-2xl" />
        </Link>
      </div>

      {isAuthenticated && (
        <div className="w-full flex items-center justify-between">
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
        </div>
      )}
      <div className="w-full flex items-center justify-between">
        <Link
          className={`flex justify-center items-center text-secondary w-full transition-all ${
            isActive("/leaderboard") ? "font-semibold scale-110" : "opacity-70"
          }`}
          to="/leaderboard"
        >
          <MdOutlineLeaderboard className="text-2xl" />
        </Link>
      </div>

      {isAuthenticated && (
        <>
          <div className="w-full flex items-center justify-between">
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
        </>
      )}
    </div>
  );
};

export default MobileBottomNav;
