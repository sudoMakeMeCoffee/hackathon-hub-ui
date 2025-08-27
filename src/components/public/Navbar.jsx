import { Link } from "react-router-dom";
import logo from "../../assets/logo-light.svg";
const Navbar = () => {
  return (
    <div className="w-full h-[70px] fixed top-0 right-0 flex items-center  justify-between wrapper">
      <div>
        <img src={logo} alt="" className="w-[120px]" />
      </div>

      <div>
        <Link to="#team" className="text-white text-3xl text-center m-4">
          Team
        </Link>
        <Link to="#events" className="text-white text-3xl text-center m-4">
          Events
        </Link>
        <Link
          to="#testimonials"
          className="text-white text-3xl text-center m-4"
        >
          Testimonials
        </Link>
        <Link to="#contact" className="text-white text-3xl text-center m-4">
          Contact
        </Link>
        <Link to="#algoxplore" className="text-white text-3xl text-center m-4">
          AlgoXplore 1.0
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
