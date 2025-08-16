import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../store/AuthStore";

const ProtectedRoute = () => {
  const { isAuthenticated, authLoading } = useAuthStore();
  const location = useLocation();

  if (authLoading) {
    return <div>Loading...</div>; // or spinner
  }

    console.log(isAuthenticated);


  if (!isAuthenticated) {

    // send user to login, keep the URL they tried to visit
    return <Navigate to={`/login?redirect=${location.pathname}`} replace />;
  }

  return <Outlet />; // render children if authenticated
};

export default ProtectedRoute;
