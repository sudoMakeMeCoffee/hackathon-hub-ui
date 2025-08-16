import { useEffect, useState } from "react";
import axios from "axios";
import { TiTick } from "react-icons/ti";
import { FiWatch } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import TaskCard from "./TaskCard";
import useAuthStore from "../store/AuthStore";

const TaskList = ({ tasks, setShowAddTaskForm }) => {
  const { user, isAuthenticated } = useAuthStore();
  //   const toggleTaskStatus = async (
  //     taskId,
  //     isSubTask = false,
  //     parentId = null
  //   ) => {
  //     try {
  //       await axios.patch(`/api/tasks/${taskId}/toggle`);
  //       setTasks((prev) =>
  //         prev.map((task) => {
  //           if (isSubTask && task.id === parentId) {
  //             return {
  //               ...task,
  //               subTasks: task.subTasks.map((sub) =>
  //                 sub.id === taskId ? { ...sub, completed: !sub.completed } : sub
  //               ),
  //             };
  //           } else if (!isSubTask && task.id === taskId) {
  //             return { ...task, completed: !task.completed };
  //           }
  //           return task;
  //         })
  //       );
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-primary">Tasks</h2>
        {isAuthenticated && user.role == "ADMIN" && (
          <button
            className="bg-primary text-secondary px-4 py-2 rounded hover:opacity-80"
            onClick={() => setShowAddTaskForm(true)}
          >
            + Add New Task
          </button>
        )}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
