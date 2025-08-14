import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import BottomBarMenu from "./components/BottomBarMenu";
function App() {
  return (
    <Router>
      <Navbar />
      <BottomBarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
