import { CgAddR } from "react-icons/cg";
import { MdAddTask, MdLogout, MdOutlineDashboard } from "react-icons/md";
import { RiUserAddLine } from "react-icons/ri";


const DashboardNav = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 w-[70px] p-4 h-screen z-50 bg-primary text-secondary flex flex-col items-center justify-between gap-10">
      <div>{/* Logo */}</div>

      <div className="flex flex-col items-center gap-10 ">
        <div>
          <MdOutlineDashboard className="text-2xl" />
        </div>

        <div>
          <MdAddTask className="text-2xl" />
        </div>

        <div>
          <CgAddR className="text-2xl" />
        </div>

        <div>
          <RiUserAddLine className="text-2xl" />
        </div>
      </div>
      <div>
        <MdLogout className="text-2xl  cursor-pointer" />
      </div>
    </div>
  );
};

export default DashboardNav;


