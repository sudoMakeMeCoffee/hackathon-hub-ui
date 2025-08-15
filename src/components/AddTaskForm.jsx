import { useEffect, useState } from "react";
import axios from "axios";

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assigneeIds, setAssigneeIds] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [subTasks, setSubTasks] = useState([
    { title: "", description: "", assigneeIds: [], searchQuery: "" },
  ]);

  const getAllUsers = () => {
    axios
      .get("http://localhost:8080/api/v1/user", {
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

  const handleSubmit = async () => {
    const payload = { title, description, assigneeIds, subTasks };
    axios
      .post("http://localhost:8080/api/v1/task", payload, {withCredentials: true})
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
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold">Create Task</h2>

      {/* Title */}
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded p-2"
      />

      {/* Description */}
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border rounded p-2"
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
        />
        <div className="flex flex-wrap gap-2">
          {users
            .filter((u) =>
              u.username.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((u) => (
              <button
                key={u.id}
                onClick={() =>
                  toggleAssignee(assigneeIds, setAssigneeIds, u.id)
                }
                className={`px-3 py-1 rounded border ${
                  assigneeIds.includes(u.id)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {u.username}
              </button>
            ))}
        </div>
      </div>

      {/* Subtasks */}
      <div className="space-y-4">
        <p className="font-medium">Subtasks:</p>
        {subTasks.map((sub, i) => (
          <div key={i} className="p-3 border rounded space-y-2">
            <input
              type="text"
              placeholder="Subtask Title"
              value={sub.title}
              onChange={(e) => updateSubTask(i, "title", e.target.value)}
              className="w-full border rounded p-2"
            />
            <textarea
              placeholder="Subtask Description"
              value={sub.description}
              onChange={(e) => updateSubTask(i, "description", e.target.value)}
              className="w-full border rounded p-2"
            />

            {/* Subtask Assignees Search */}
            <input
              type="text"
              placeholder="Search subtask assignees..."
              value={sub.searchQuery || ""}
              onChange={(e) => updateSubTask(i, "searchQuery", e.target.value)}
              className="w-full border rounded p-2 mb-2"
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
                      onClick={() => toggleSubTaskAssignee(i, u.id)}
                      className={`px-3 py-1 rounded border ${
                        sub.assigneeIds.includes(u.id)
                          ? "bg-green-500 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {u.username}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addSubTask}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          + Add Subtask
        </button>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Create Task
      </button>
    </div>
  );
};

export default AddTaskForm;
