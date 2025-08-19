import { BsHeartPulse } from "react-icons/bs";
import { FaImages, FaListCheck } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoIosPulse } from "react-icons/io";
import api from "../../api/axios";
import { useEffect, useState } from "react";
import { timeAgo } from "../../utils/utils";

const Dashboard = () => {
  const [dashboardData, setDashBoardData] = useState({});

  const fetchDashboardData = () => {
    api
      .get("/api/v1/dashboard", { withCredentials: true })
      .then((res) => {
        setDashBoardData(res.data.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

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

            <h1 className="font-semibold text-4xl">
              {dashboardData?.totalUsers}
            </h1>
          </div>

          <div className="bg-white rounded-md shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-5 w-full cursor-pointer flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <FaListCheck className="text-lg text-blue-500" />
              <span className="text-sm font-semibold text-gray-600">
                Total Tasks
              </span>
            </div>

            <h1 className="font-semibold text-4xl">{dashboardData.totalTasks}</h1>
          </div>

          <div className="bg-white rounded-md shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-5 w-full cursor-pointer flex flex-col items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <FaImages className="text-lg text-blue-500" />
              <span className="text-sm font-semibold text-gray-600">
                Total Posts
              </span>
            </div>

            <h1 className="font-semibold text-4xl">{dashboardData.totalPosts}</h1>
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-lg font-semibold flex items-center gap-1 mb-4">
            <IoIosPulse />
            Recent Activity
          </h1>

          <div className="bg-white rounded-md shadow-lg border border-gray-200 w-full">
            {dashboardData?.recentTasks?.map((task) => (
              <div className="flex items-center justify-between border-b border-x-gray-200 p-5 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <p className="text-sm">
                  <b>An Admin</b> added a new task:{" "}
                  <span className="text-blue-500">{task.title}</span>
                </p>
                <span className="text-xs text-gray-500">
                  {timeAgo(task.createdAt)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
