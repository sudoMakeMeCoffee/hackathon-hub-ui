// layouts/DashboardLayout.jsx
import DashboardNav from "../components/DashboardNav";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex bg-secondary min-h-screen">
      {/* Sidebar */}
      <DashboardNav />

      {/* Main content */}
      <div className="md:ml-[70px] flex-1 bg-secondary min-h-screen p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
