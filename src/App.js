import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Users from "./pages/dashboard/Users";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import Posts from "./pages/dashboard/Posts";
import Tasks from "./pages/dashboard/Tasks";
import Task from "./pages/dashboard/Task";
import ProtectedRoute from "./components/ProtectedRoute";
import axios from "axios";
import useAuthStore from "./store/AuthStore";
import { useEffect } from "react";
import Profile from "./pages/dashboard/Profile";
import api from "./api/axios";
import AddUser from "./pages/dashboard/AddUser";
import Loader from "./components/Loader";
import AddTask from "./pages/dashboard/AddTask";

function App() {
    const { isAuthenticated, setIsAuthenticated, user, setUser, setAuthLoading } = useAuthStore();

  useEffect(() => {
    api
      .post(
        "/api/v1/auth/check-auth",
        {},
        { withCredentials: true }
      )
      .then((res) => {
        setUser(res.data.data);
        setIsAuthenticated(true);
      })
      .catch(() => {
        setUser(null);
        setIsAuthenticated(false);
      })
      .finally(() => {
        setAuthLoading(false); // ✅ set loading false after check
      });
  }, []);
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="tasks/:taskid" element={<Task />} />
            <Route path="users" element={<Users />} />
            <Route path="users/add" element={<AddUser />} />
            <Route path="tasks/add" element={<AddTask />} />
            <Route path="posts" element={<Posts />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
