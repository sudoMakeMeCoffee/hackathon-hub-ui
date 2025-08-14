import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import BottomBarMenu from "./components/BottomBarMenu";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Navbar />
      <BottomBarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
