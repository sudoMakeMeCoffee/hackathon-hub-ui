// layouts/DashboardLayout.jsx
import DashboardBottomNav from "../components/dashboard/DashboardBottomNav";
import DashboardSideNav from "../components/dashboard/DashboardSideNav";
import DashboardTopBar from "../components/dashboard/DashboardTopBar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="bg-secondary">
      {/* Sidebar */}
      {/* <DashboardNav /> */}

      <DashboardTopBar />
      <DashboardSideNav />

      {/* Main content */}
      <div className="bg-secondary wrapper min-h-screen  pt-[80px]  md:ml-[250px] pb-[100px]">
        <Outlet />
      </div>

      <DashboardBottomNav />
    </div>
  );
};

export default DashboardLayout;
