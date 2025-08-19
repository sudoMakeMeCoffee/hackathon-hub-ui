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
      <div className="bg-secondary py-4 mt-[70px] md:ml-[250px] pb-[100px] md:py-4">
        <Outlet />
      </div>

      <DashboardBottomNav />
    </div>
  );
};

export default DashboardLayout;
