// layouts/DashboardLayout.jsx
import DashboardSideNav from "../components/dashboard/DashboardSideNav";
import DashboardTopBar from "../components/dashboard/DashboardTopBar";
import DashboardNav from "../components/DashboardNav";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="bg-secondary min-h-screen">
      {/* Sidebar */}
      {/* <DashboardNav /> */}

      <DashboardTopBar/>
      <DashboardSideNav />

      {/* Main content */}
      <div className="bg-secondary min-h-screen py-4 mt-[70px] md:ml-[250px]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
