import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="fixed top-0 right-0 flex items-center justify-center">
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
        <Link
          to="#algoxplore"
          className="text-white text-3xl text-center m-4"
        >
          AlgoXplore 1.0
        </Link>
      </div>
  );
};

export default Navbar;
