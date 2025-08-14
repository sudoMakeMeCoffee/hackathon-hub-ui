import React from "react";
import { BiHome } from "react-icons/bi";
import logo from "../assets/logo1.svg";
import { FaWheelchair } from "react-icons/fa6";
import { MdOutlineExplore, MdOutlineLeaderboard } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";

const SideBarMenu = () => {
  return (
    <div className="border-r-[0.1px] border-gray-700 p-5 hidden md:flex flex-col pr-[100px] gap-10  h-screen">
      <img src={logo} alt="Hackathon Hub" className="w-[100px]" />
      {/* <h1>HB</h1> */}

      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4 cursor-pointer">
          <MdOutlineExplore className="text-3xl font-normal" />
          <span className="text-md">Explore</span>
        </div>

        <div className="flex items-center gap-4 cursor-pointer">
          <VscOrganization className="text-3xl font-normal" />
          <span className="text-md">Join With Us</span>
        </div>

        <div className="flex items-center gap-4 cursor-pointer">
          <MdOutlineLeaderboard className="text-3xl font-normal" />
          <span className="text-md">Leaderboard</span>
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
