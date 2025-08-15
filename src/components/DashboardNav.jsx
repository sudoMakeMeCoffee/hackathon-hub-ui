import { Link, useLocation } from "react-router-dom";
import { CgAddR } from "react-icons/cg";
import { MdAddTask, MdLogout, MdOutlineDashboard } from "react-icons/md";
import { RiUserAddLine } from "react-icons/ri";

const DashboardNav = () => {
  const location = useLocation();

  // Utility to check if route is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-0 bottom-0 left-0 w-[70px] p-4 h-screen z-50 bg-primary text-secondary hidden md:flex flex-col items-center justify-between gap-10">
      <div>{/* Logo */}</div>

      <div className="flex flex-col items-center gap-10">
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
              isActive("/dashboard/posts") ? "font-bold scale-110" : "opacity-70"
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
      </div>

      <div>
        <MdLogout className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default DashboardNav;
