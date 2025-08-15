import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import { WiDirectionUpRight } from "react-icons/wi";
import TaskInfoCard from "./TaskInfoCard";

const TaskCard = ({ task }) => {
  return (
    <div className={`bg-white p-4 rounded-lg border  shadow-md hover:shadow-lg transition-shadow duration-300 w-full cursor-pointer`}>
      <div className="flex  justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">{task.title}</h1>
          <span className="text-sm">{task.subTasks.length} Sub Tasks</span>
          <span className={`text-xs ${task.complted ? "text-green-500" : "text-gray-500"}`}>{task.completed ? "Completed"  : "Pending"}</span>
        </div>
      </div>
      <TaskInfoCard task={task}/>
    </div>
  );
};

export default TaskCard;
