import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";

const Task = () => {
  const { taskid } = useParams();
  const [task, setTask] = useState(null);

  const fetchTask = () => {
    api
      .get(`/api/v1/task/${taskid}`, {
        withCredentials: true,
      })
      .then((res) => setTask(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTask();
  }, [taskid]);

  if (!task) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading task...
      </div>
    );
  }

  const completeSubtask = (taskId, subtaskId) => {
    const userConfirmed = window.confirm(
      "Do you want to mark this sub task as complete?"
    );

    if (userConfirmed) {
      api
        .put(
          `/api/v1/task/${taskId}/subtasks/${subtaskId}/complete`,
          {},
          { withCredentials: true }
        )
        .then(() => {
          fetchTask();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="w-full min-h-[calc(100vh-156px)] flex flex-col gap-1 wrapper">
      {/* Main Task */}
      <div className="bg-white rounded-md shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-5 w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{task.title}</h1>
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              task.completed
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {/* {task.completed ? "Completed" : "In Progress"} */}
          </span>
        </div>
        {task.description && (
          <p className="mt-3 text-gray-600">{task.description}</p>
        )}
      </div>

      {/* Main Task Assignees */}
      <div className="bg-white rounded-md shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-5 w-full">
        <h2 className="text-lg font-semibold mb-4">Assignees</h2>
        <div className="flex gap-4 flex-wrap">
          {task.taskAssignees?.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-2 shadow-sm hover:shadow-md transition"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                {user.username[0]}
              </div>
              <div>
                <p className="font-medium">{user.username}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtasks */}
      <div className="bg-white rounded-md shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 p-5 w-full">
        <h2 className="text-lg font-semibold mb-4">Subtasks</h2>
        {task.subTasks?.map((subtask) => (
          <div
            key={subtask.id}
            className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <p
                className={`font-medium ${
                  subtask.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {subtask.title}
              </p>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  subtask.completed
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {subtask.completed ? "Done" : "Pending"}
              </span>
              {!subtask.completed && (
                <button
                  className="text-sm btn-primary btn-md"
                  onClick={() => completeSubtask(task.id, subtask.id)}
                >
                  Mark as completed
                </button>
              )}
            </div>
            {subtask.description && (
              <p className="text-sm text-gray-500 mt-1">
                {subtask.description}
              </p>
            )}

            {/* Subtask Assignees */}
            {subtask.subTaskAssignees?.length > 0 && (
              <div className="mt-3">
                <p className="text-sm font-medium mb-1">Assignees:</p>
                <div className="flex gap-3 flex-wrap">
                  {subtask.subTaskAssignees.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center gap-2 bg-white rounded-lg px-3 py-1 border shadow-sm"
                    >
                      <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm">
                        {user.username[0]}
                      </div>
                      <p className="text-sm">{user.username}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
