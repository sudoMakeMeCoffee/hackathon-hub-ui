import React from "react";
import { MdOutlineExplore, MdOutlineLeaderboard } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";

const BottomBarMenu = () => {
  return (
    <div className="w-full h-[60px] bg-black items-center justify-evenly px-4 flex md:hidden fixed bottom-0 left-0 right-0 z-50">
      <div className="flex items-center gap-4 cursor-pointer">
        <MdOutlineExplore className="text-3xl font-normal" />
      </div>

      <div className="flex items-center gap-4 cursor-pointer">
        <VscOrganization className="text-3xl font-normal" />
      </div>

      <div className="flex items-center gap-4 cursor-pointer">
        <MdOutlineLeaderboard className="text-3xl font-normal" />
      </div>
    </div>
  );
};

export default BottomBarMenu;
