import { Link, useLocation } from "react-router-dom";
import { CgAddR } from "react-icons/cg";
import { MdAddTask, MdLogout, MdOutlineDashboard } from "react-icons/md";
import { RiProfileLine, RiUserAddLine } from "react-icons/ri";
import axios from "axios";
import { ImProfile } from "react-icons/im";
import api from "../api/axios";

const DashboardNav = () => {
  const location = useLocation();

  // Utility to check if route is active
  const isActive = (path) => location.pathname === path;

  const logout = () => {
    api
      .post(
        "/api/v1/auth/logout",
        {},
        { withCredentials: true }
      )
      .then(() => {
        window.location.href = "/";
      })
      .catch((err) => {
        console.error("Logout failed:", err);
      });
  };

  return (
    <div className="fixed md:top-0 bottom-0 left-0 right-0 w-full md:w-[70px] p-4 h-[70px] md:h-screen z-100 bg-primary text-secondary  md:flex flex-row md:flex-col items-center justify-between gap-10">
      <div>{/* Logo */}</div>

      <div className="flex md:flex-col items-center gap-10 justify-evenly md:justify-normal">
        <Link to="/dashboard">
          <MdOutlineDashboard
            className={`text-2xl cursor-pointer transition-all ${
              isActive("/dashboard") ? "font-bold scale-110" : "opacity-70"
            }`}
          />
        </Link>

        <Link to="/dashboard/tasks">
          <MdAddTask
            className={`text-2xl cursor-pointer transition-all ${
              isActive("/dashboard/tasks")
                ? "font-bold scale-110"
                : "opacity-70"
            }`}
          />
        </Link>

        <Link to="/dashboard/posts">
          <CgAddR
            className={`text-2xl cursor-pointer transition-all ${
              isActive("/dashboard/posts")
                ? "font-bold scale-110"
                : "opacity-70"
            }`}
          />
        </Link>

        <Link to="/dashboard/users">
          <RiUserAddLine
            className={`text-2xl cursor-pointer transition-all ${
              isActive("/dashboard/users")
                ? "font-bold scale-110"
                : "opacity-70"
            }`}
          />
        </Link>

        <Link to="/dashboard/profile">
          <ImProfile
            className={`text-2xl cursor-pointer transition-all ${
              isActive("/dashboard/profile")
                ? "font-bold scale-110"
                : "opacity-70"
            }`}
          />
        </Link>
      </div>

      <div className="hidden md:flex" onClick={logout}>
        <MdLogout className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default DashboardNav;
