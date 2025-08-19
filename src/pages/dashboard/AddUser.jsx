import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { PiPlus } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import AddUserForm from "../../components/dashboard/AddUserForm";

const AddUser = () => {
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
    api
      .delete(`/api/v1/user/${userId}`, { withCredentials: true })
      .then((res) => {
        console.log("User deleted successfully:", res.data);
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-bold">Add New User</h1>
        {/* <button className="text-sm bg-primary text-secondary px-3 py-2 rounded-md font-semibold flex items-center gap-1 hover:opacity-80 transition-all">
          <FaPlus className="" />
          Add User
        </button> */}
      </div>

      <AddUserForm />
    </div>
  );
};

export default AddUser;
