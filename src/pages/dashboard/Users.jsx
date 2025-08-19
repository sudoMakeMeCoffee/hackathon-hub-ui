import React, { use, useEffect, useState } from "react";
import api from "../../api/axios";
import { PiPlus } from "react-icons/pi";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAuthStore from "../../store/AuthStore";
import { MdDeleteOutline } from "react-icons/md";
import ConfirmPopup from "../../components/ConfirmPopup";

const Users = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [users, setUsers] = useState([]);

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

  const deleteUser = (userId) => {
    if (window.confirm("You want to delete this user ?")) {
      api
        .delete(`/api/v1/user/${userId}`, { withCredentials: true })
        .then((res) => {
          console.log("User deleted successfully:", res.data);
          setUsers(users.filter((user) => user.id !== userId));
        })
        .catch((err) => {
          console.error("Error deleting user:", err);
        });
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-bold">User Management</h1>
        <Link
          to={"add"}
          className="text-sm bg-primary text-secondary px-3 py-2 rounded-md font-semibold flex items-center gap-1 hover:opacity-80 transition-all"
        >
          <FaPlus className="" />
          Add User
        </Link>
      </div>

      <div className="mt-8">
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-primary text-left font-semibold ">
                <th className="py-3">Full Name</th>
                <th className="py-3">Email</th>
                <th className="py-3">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-t border-gray-300 hover:bg-primary/10 cursor-pointer text-left"
                >
                  <td className="py-3">{user.username}</td>
                  <td className="py-3">{user.email}</td>
                  <td className="py-3">{user.role}</td>
                  <td>
                    <button
                      className="text-sm text-red-500 hover:underline"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* mobile view */}
      <div className="flex flex-col gap-2 md:hidden">
        {users.map((user) => (
          <div className="flex items-center justify-between bg-white rounded-md shadow-lg border border-gray-200  p-5 w-full">
            <div className="flex items-center gap-2">
              <div className="w-[40px] h-[40px]">
                <img
                  src={`https://avatar.iran.liara.run/username?username=${user.username}`}
                  className="w-full h-full"
                />
              </div>

              <div className="text-sm">
                <h1 className="font-bold">{user.username}</h1>
                <span className="text-xs">
                  {user.email}{" "}
                  <span className="text-blue-500">{user.role}</span>
                </span>
              </div>
            </div>

            <MdDeleteOutline
              className="text-red-400 hover:text-red-500 text-xl cursor-pointer"
              onClick={() => deleteUser(user.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
