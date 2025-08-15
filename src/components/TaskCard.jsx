import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import { WiDirectionUpRight } from "react-icons/wi";
import { Link } from "react-router-dom";

const TaskCard = ({ task }) => {
  // Count completed subtasks
  const completedSubtasks = task.subTasks.filter((s) => s.completed).length;
  const allSubtasksCompleted =
    task.subTasks.length > 0 && completedSubtasks === task.subTasks.length;

  return (
    <Link
      to={`${task.id}`}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-5 w-full cursor-pointer group"
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">
            {task.title}
          </h2>
          <p className="text-sm text-gray-500">
            {task.subTasks.length} Subtask
            {task.subTasks.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {task.completed || allSubtasksCompleted ? (
            <CiCircleCheck
              className="text-green-500 text-2xl"
              title="Completed"
            />
          ) : (
            <FaRegClock className="text-yellow-500 text-2xl" title="Pending" />
          )}
        </div>
      </div>

      {task.subTasks.length > 0 && (
        <div className="mt-4">
          <div className="bg-gray-200 rounded-full h-2 w-full overflow-hidden">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-500"
              style={{
                width: `${(completedSubtasks / task.subTasks.length) * 100}%`,
              }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {completedSubtasks}/{task.subTasks.length} Subtasks Completed
          </p>
        </div>
      )}
    </Link>
  );
};

export default TaskCard;
