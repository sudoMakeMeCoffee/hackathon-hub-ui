import React from "react";
import { BiHome } from "react-icons/bi";
import logo from "../assets/logo-light.svg";
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
    <div className=" p-6 hidden md:flex flex-col gap-[80px] text-secondary  h-screen fixed top-0 left-0 z-50">
      <img src={logo} alt="Hackathon Hub" className="w-[120px]" />

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

        
      </div>

     
    </div>
  );
};

export default SideBarMenu;
