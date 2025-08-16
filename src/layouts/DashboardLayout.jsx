// layouts/DashboardLayout.jsx
import DashboardSideNav from "../components/dashboard/DashboardSideNav";
import DashboardTopBar from "../components/dashboard/DashboardTopBar";
import DashboardNav from "../components/DashboardNav";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="bg-secondary min-h-[100vh-70px]">
      {/* Sidebar */}
      {/* <DashboardNav /> */}

      <DashboardTopBar/>
      <DashboardSideNav />

      {/* Main content */}
      <div className="bg-secondary min-h-screen md:p-4 mt-[70px]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
