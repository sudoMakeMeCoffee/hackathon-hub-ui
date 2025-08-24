import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const MobileBottomNav = () => {
  const isActive = () => {};
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
      </div>
    </div>
  );
};

export default MobileBottomNav;
