import React from "react";
import { Outlet } from "react-router-dom";
import MobileTopBar from "../components/MobileTopBar";
import SideBarMenu from "../components/SideBarMenu";
import MobileBottomNav from "../components/MobileBottomNav";

const PublicLayout = () => {
  return (
    <div className="text-secondary">
      <MobileTopBar />
      <SideBarMenu />
      {/* Main content */}
      <div className="bg-primary min-h-screen mt-[70px] md:mt-0">
        <Outlet />
      </div>
      <MobileBottomNav />
    </div>
  );
};

export default PublicLayout;
