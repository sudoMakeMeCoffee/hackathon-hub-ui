import { useEffect, useState } from "react";
import axios from "axios";
import { TiTick } from "react-icons/ti";
import { FiWatch } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.post(
          "http://localhost:8080/api/v1/task/all",
          {},
          { withCredentials: true }
        );
        setTasks(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, []);

  const toggleTaskStatus = async (
    taskId,
    isSubTask = false,
    parentId = null
  ) => {
    try {
      await axios.patch(`/api/tasks/${taskId}/toggle`);
      setTasks((prev) =>
        prev.map((task) => {
          if (isSubTask && task.id === parentId) {
            return {
              ...task,
              subTasks: task.subTasks.map((sub) =>
                sub.id === taskId ? { ...sub, completed: !sub.completed } : sub
              ),
            };
          } else if (!isSubTask && task.id === taskId) {
            return { ...task, completed: !task.completed };
          }
          return task;
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold">Tasks</h2>
      {tasks?.map((task) => {
        const allSubtasksCompleted =
          task.subTasks?.length > 0 &&
          task.subTasks.every((sub) => sub.completed);

        return (
          <div
            key={task.id}
            className="border rounded-lg p-4 bg-white shadow space-y-3"
          >
            {/* Main Task */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {allSubtasksCompleted && (
                  <span className="text-green-500 text-lg">✔</span>
                )}
                <h3
                  className={`text-lg font-medium ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.title}
                </h3>
              </div>
              <button
                onClick={() => toggleTaskStatus(task.id)}
                className={`px-3 py-1 rounded ${
                  task.completed ? "bg-green-500 text-white" : "bg-gray-200"
                }`}
              >
                {task.completed ?  <TiTick/> : <MdOutlineWatchLater/>}
              </button>
            </div>
            <p className="text-sm text-gray-600">{task.description}</p>
            <p className="text-xs text-gray-500">
              Assignees:{" "}
              {task.taskAssignees?.map((u) => u.username).join(", ") || "None"}
            </p>

            {/* Subtasks */}
            {task.subTasks?.length > 0 && (
              <div className="pl-4 border-l space-y-2">
                {task.subTasks.map((sub) => (
                  <div
                    key={sub.id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      {sub.completed && (
                        <span className="text-green-500 text-lg">✔</span>
                      )}
                      <p
                        className={`${
                          sub.completed ? "line-through text-gray-500" : ""
                        }`}
                      >
                        {sub.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* <p className="text-xs text-gray-500">
                        Assignees:{" "}
                        {sub.subTaskAssignees
                          ?.map((u) => u.username)
                          .join(", ") || "None"}
                      </p> */}
                      <button
                        onClick={() => toggleTaskStatus(sub.id, true, task.id)}
                        
                      >
                        {task.completed ?  <TiTick/> : <MdOutlineWatchLater/>}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
