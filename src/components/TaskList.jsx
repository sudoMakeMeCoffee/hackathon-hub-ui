import { useEffect, useState } from "react";
import axios from "axios";
import { TiTick } from "react-icons/ti";
import { FiWatch } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import TaskCard from "./TaskCard";

const TaskList = ({tasks}) => {
  

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
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
            <TaskCard task={task}/>
        ))}
    </div>
  );
};

export default TaskList;
