import React from "react";
import { BiHome } from "react-icons/bi";
import logo from "../assets/logo1.svg";
import { FaMagnifyingGlass, FaWheelchair } from "react-icons/fa6";
import {
  MdExplore,
  MdOutlineAdd,
  MdOutlineExplore,
  MdOutlineLeaderboard,
} from "react-icons/md";
import { FaRegSquarePlus } from "react-icons/fa6";
import { SlOrganization } from "react-icons/sl";

const SideBarMenu = () => {
  return (
    <div className=" border-gray-700 p-10 hidden md:flex flex-col gap-[80px] text-secondary  h-screen fixed top-0 left-0 z-50">
      <img src={logo} alt="Hackathon Hub" className="w-[120px]" />
      {/* <h1>HB</h1> */}

      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-4 cursor-pointer">
          <MdExplore className="text-2xl" />
          <span className="text-md font-semibold">Explore</span>
        </div>

        <div className="flex items-center gap-4 cursor-pointer">
          <FaMagnifyingGlass className="text-2xl" />
          <span className="text-md">Search</span>
        </div>

        <div className="flex items-center gap-4 cursor-pointer">
          <SlOrganization className="text-2xl" />
          <span className="text-md">Join With Us</span>
        </div>

        <div className="flex items-center gap-4 cursor-pointer">
          <MdOutlineLeaderboard className="text-2xl" />
          <span className="text-md">Leaderboard</span>
        </div>

        <div className="flex items-center gap-4 cursor-pointer">
          <FaRegSquarePlus className="text-2xl" />
          <span className="text-md">Create</span>
        </div>

        {/* <div className="flex items-center gap-2 cursor-pointer">
          <svg
            aria-label="Home"
            class="x1lliihq x1n2onr6 x5n08af"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
            data-darkreader-inline-fill=""
          >
            <title>Home</title>
            <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path>
          </svg>
          <span className="text-md">Home</span>
        </div> */}
      </div>

      {/* <div>
        <FaWheelchair />
      </div> */}
    </div>
  );
};

export default SideBarMenu;
