import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full sticky top-4 flex items-center justify-between z-50">
      <div className="text-white text-5xl text-center font-bold">
        Hackathon Hub
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
