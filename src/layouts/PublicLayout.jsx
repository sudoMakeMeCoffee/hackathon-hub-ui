import { Outlet } from "react-router-dom";
import Navbar from "../components/public/Navbar";
import "../Public.css";

const PublicLayout = () => {
  return (
    <div className="bg-primary text-secondary">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
