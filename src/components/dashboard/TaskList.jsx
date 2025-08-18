import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

const TaskList = ({ tasks, setShowAddTaskForm }) => {
  return (
    <div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
        <Link
          to={"add"}
          className="bg-white rounded-md shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-5 w-full cursor-pointer group flex items-center justify-center"
        >
          <FaPlus className="text-4xl text-gray-300" />
        </Link>
      </div>
    </div>
  );
};

export default TaskList;
