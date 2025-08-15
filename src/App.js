import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import BottomBarMenu from "./components/BottomBarMenu";
import CreatePost from "./components/CreatePost";
import Posts from "./pages/Posts";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Dashboard routes with sidebar */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<Tasks/>}/>
          <Route path="users" element={<Users />} />
          <Route path="posts" element={<Posts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
