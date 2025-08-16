import React, { useState } from "react";
import useAuthStore from "../store/AuthStore";
import axios from "axios";
import api from "../api/axios";

const Profile = () => {
  const [newPassword, setNewPassword] = useState("");
  const [isLaoding, setIsLoading] = useState(false);
  const { user } = useAuthStore();

  const handleSubmit = (e) => {

    if(newPassword == ""){
        return
    }

    setIsLoading(true)

    e.preventDefault();
    api.put(
      "/api/v1/auth/change-password",
      {
        newPassword: newPassword,
      },
      { withCredentials: true }
    ).then((res) => {
        alert("Password Changed Successfully.")
    }).catch((err) => {
        console.log(err)
    }).finally(() => {
        setIsLoading(false)
    })

  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl md:shadow-lg p-8 mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Profile
      </h1>

      {/* User details */}
      <div className="space-y-4">
        <div>
          <span className="block text-sm text-gray-500">Username</span>
          <p className="text-lg font-medium text-gray-800">{user.username}</p>
        </div>
        <div>
          <span className="block text-sm text-gray-500">Email</span>
          <p className="text-lg font-medium text-gray-800">{user.email}</p>
        </div>
        <div>
          <span className="block text-sm text-gray-500">Role</span>
          <p className="text-lg font-medium text-gray-800">{user.role}</p>
        </div>
        <div>
          <span className="block text-sm text-gray-500">User ID</span>
          <p className="text-sm font-mono text-gray-600 break-all">{user.id}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-gray-200"></div>

      {/* Change password */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Change Password
        </label>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full input-field input-md"
          disabled={isLaoding}
        />
        <button
          type="submit"
          className="w-full btn-primary btn-md"
          disabled={isLaoding}
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default Profile;
