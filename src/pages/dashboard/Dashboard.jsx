import { BsHeartPulse } from "react-icons/bs";
import { FaImages, FaListCheck } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoIosPulse } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="w-full min-h-[calc(100vh-156px)] wrapper">
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-bold">Dashboard Overview</h1>
      </div>

      <div className="mt-8">
        <h1 className="font-semibold text-lg mb-4">Key Metrics</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-md shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-5 w-full cursor-pointer flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <HiOutlineUsers className="text-lg text-blue-500" />
              <span className="text-sm font-semibold text-gray-600">
                Total Users
              </span>
            </div>

            <h1 className="font-semibold text-4xl">125</h1>
          </div>

          <div className="bg-white rounded-md shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-5 w-full cursor-pointer flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <FaListCheck className="text-lg text-blue-500" />
              <span className="text-sm font-semibold text-gray-600">
                Total Tasks
              </span>
            </div>

            <h1 className="font-semibold text-4xl">79</h1>
          </div>

          <div className="bg-white rounded-md shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-5 w-full cursor-pointer flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <FaImages className="text-lg text-blue-500" />
              <span className="text-sm font-semibold text-gray-600">
                Total Posts
              </span>
            </div>

            <h1 className="font-semibold text-4xl">8</h1>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-lg font-semibold flex items-center gap-1 mb-4">
            <IoIosPulse />
            Recent Activity
          </h1>

          <div className="bg-white rounded-md shadow-lg border border-gray-200 w-full">
            <div className="flex items-center justify-between border-b border-x-gray-200 p-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <p className="text-sm">
                <b>Sithija Kaveeshwara</b> added a new task:{" "}
                <span className="text-blue-500">
                  "Please inform to the foc"
                </span>
              </p>
              <span className="text-xs text-gray-500">5 mins ago</span>
            </div>

            <div className="flex items-center justify-between border-b border-x-gray-200 p-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <p className="text-sm">
                <b>Sithija Kaveeshwara</b> added a new task:{" "}
                <span className="text-blue-500">
                  "Please inform to the foc"
                </span>
              </p>
              <span className="text-xs text-gray-500">5 mins ago</span>
            </div>
            <div className="flex items-center justify-between border-b border-x-gray-200 p-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <p className="text-sm">
                <b>Sithija Kaveeshwara</b> added a new task:{" "}
                <span className="text-blue-500">
                  "Please inform to the foc"
                </span>
              </p>
              <span className="text-xs text-gray-500">5 mins ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
