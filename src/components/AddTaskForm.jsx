import { useEffect, useState } from "react";
import axios from "axios";
import { CgClose } from "react-icons/cg";
import api from "../api/axios";
import { BeatLoader } from "react-spinners";
import { FaCross, FaPlus } from "react-icons/fa6";
import { IoClose, IoPulse } from "react-icons/io5";

const AddTaskForm = ({ setShowAddTaskForm }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assigneeIds, setAssigneeIds] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [subTasks, setSubTasks] = useState([
    { title: "", description: "", assigneeIds: [], searchQuery: "" },
  ]);

  const getAllUsers = () => {
    api
      .get("/api/v1/user", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Users fetched successfully:", res.data);
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const toggleAssignee = (list, setList, id) => {
    if (list.includes(id)) {
      setList(list.filter((a) => a !== id));
    } else {
      setList([...list, id]);
    }
  };

  const updateSubTask = (index, field, value) => {
    const updated = [...subTasks];
    updated[index][field] = value;
    setSubTasks(updated);
  };

  const toggleSubTaskAssignee = (index, id) => {
    const updated = [...subTasks];
    if (updated[index].assigneeIds.includes(id)) {
      updated[index].assigneeIds = updated[index].assigneeIds.filter(
        (a) => a !== id
      );
    } else {
      updated[index].assigneeIds.push(id);
    }
    setSubTasks(updated);
  };

  const addSubTask = () => {
    setSubTasks([
      ...subTasks,
      { title: "", description: "", assigneeIds: [], searchQuery: "" },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { title, description, assigneeIds, subTasks };

    if (title == "" || description == "" || subTasks.length < 1) {
      alert("Main Task title and Description and atleast 1 sub task Required ");
      return;
    }

    if (assigneeIds.length < 1) {
      alert("Task should have atleast one assignee ");
      return;
    }

    if (subTasks[0].title == "") {
      alert("Sub task title is empty ");
      return;
    }

    setIsLoading(true);

    api
      .post("/api/v1/task", payload, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success) {
          alert("Task created successfully!");
          setTitle("");
          setDescription("");
          setAssigneeIds([]);
          setSubTasks([
            { title: "", description: "", assigneeIds: [], searchQuery: "" },
          ]);
        } else {
          alert("Failed to create task: " + res.data.message);
        }
      })
      .catch((err) => {
        console.error("Error creating task:", err);
        alert("Error creating task.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-4 mt-8">
        {/* Title */}
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-200 bg-secondary text-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary transition-all"
          disabled={isLoading}
        />

        {/* Description */}
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-200 bg-secondary text-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary transition-all"
          disabled={isLoading}
        />

        {/* Main Assignees Search */}
        <div>
          <p className="font-medium mb-2">Assign to:</p>
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border rounded p-2 mb-2"
            disabled={isLoading}
          />
          <div className="flex flex-wrap gap-2">
            {users
              .filter((u) =>
                u.username.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((u) => (
                <button
                  key={u.id}
                  type="button"
                  onClick={() =>
                    toggleAssignee(assigneeIds, setAssigneeIds, u.id)
                  }
                  className={`px-3 py-2 rounded-md text-sm flex items-center gap-1 ${
                    assigneeIds.includes(u.id)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {assigneeIds.includes(u.id) ? <IoClose /> : <FaPlus />}
                  {u.username}
                </button>
              ))}
          </div>
        </div>

        {/* Subtasks */}
        <div className="space-y-4">
          <p className="font-medium">Subtasks:</p>
          {subTasks.map((sub, i) => (
            <div key={i} className="p-3 border flex flex-col rounded space-y-2">
              <input
                type="text"
                placeholder="Subtask Title"
                value={sub.title}
                onChange={(e) => updateSubTask(i, "title", e.target.value)}
                className="border border-gray-200 bg-secondary text-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary transition-all"
                disabled={isLoading}
              />
              <textarea
                placeholder="Subtask Description"
                value={sub.description}
                onChange={(e) =>
                  updateSubTask(i, "description", e.target.value)
                }
                className="border border-gray-200 bg-secondary text-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary transition-all"
                disabled={isLoading}
              />

              {/* Subtask Assignees Search */}
              <input
                type="text"
                placeholder="Search sub task assignees..."
                value={sub.searchQuery || ""}
                onChange={(e) =>
                  updateSubTask(i, "searchQuery", e.target.value)
                }
                className="w-full border rounded p-2 mb-2"
                disabled={isLoading}
              />

              <div>
                <p className="mb-1 text-sm font-medium">Assign to:</p>
                <div className="flex flex-wrap gap-2">
                  {users
                    .filter((u) => assigneeIds.includes(u.id)) // only main task assignees
                    .filter((u) =>
                      u.username
                        .toLowerCase()
                        .includes((sub.searchQuery || "").toLowerCase())
                    )
                    .map((u) => (
                      <button
                        key={u.id}
                        type="button"
                        onClick={() => toggleSubTaskAssignee(i, u.id)}
                        className={`px-3 py-2 rounded-md text-sm flex items-center gap-1 ${
                          sub.assigneeIds.includes(u.id)
                            ? "bg-green-500 text-white"
                            : "bg-gray-200"
                        }`}
                      >
                        {sub.assigneeIds.includes(u.id) ? (
                          <IoClose />
                        ) : (
                          <FaPlus />
                        )}
                        {u.username}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="bg-gray-200 px-3 py-2 text-sm  rounded-md"
            onClick={addSubTask}
            disabled={isLoading}
          >
            + Add Subtask
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="text-sm bg-primary text-secondary px-3 py-2 rounded-md font-semibold"
          disabled={isLoading}
        >
          {isLoading ? (
            <BeatLoader color={"#ffffff"} loading={isLoading} size={3} />
          ) : (
            "Create Task"
          )}
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
