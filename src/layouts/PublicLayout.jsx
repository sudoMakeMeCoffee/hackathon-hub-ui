import { Outlet } from "react-router-dom";
import Navbar from "../components/public/Navbar";
import "../Public.css";

const PublicLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
