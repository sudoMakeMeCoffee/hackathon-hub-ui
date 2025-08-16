import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isValidEmail } from "../../utils/utils";
import { CiWarning } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import useAuthStore from "../../store/AuthStore";
import api from "../../api/axios";
import Loader from "../Loader";
import { BeatLoader, ClipLoader } from "react-spinners";

const AddUserForm = ({ showAddUserForm, setShowAddUserForm }) => {
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useAuthStore();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [position, setPosition] = useState("");
  const [err, setErr] = useState("");
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    position: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const checkEmail = async () => {
    setErrors((prev) => ({
      ...prev,
      email: !isValidEmail(email) ? "Enter a valid email" : "",
    }));
  };

  useEffect(() => {
    setErrors("");
    const timeout = setTimeout(() => {
      if (email) {
        checkEmail();
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [email]);

  useEffect(() => {
    setErrors("");
  }, [password, email, fullName, role, position]);

  const addUser = async () => {
    try {
      setIsLoading(true);
      const res = await api.post(
        "/api/v1/auth/add-user",
        {
          username: fullName,
          email: email,
          password: password,
          role: role,
        },
        {
          withCredentials: true,
        }
      );
      setIsLoading(false);
      setShowAddUserForm(false);
    } catch (error) {
      setErr(error.response?.data?.message);
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors("");
    checkEmail();
    if (password.length < 1) {
      setErrors((prev) => ({
        ...prev,
        password: "Password is required",
      }));
      return;
    }

    if (fullName.length < 1) {
      setErrors((prev) => ({
        ...prev,
        fullName: "Full Name is required",
      }));
      return;
    }

    if (role.length < 1) {
      setErrors((prev) => ({
        ...prev,
        position: "Position is required",
      }));
      return;
    }

    if (role.length < 1) {
      setErrors((prev) => ({
        ...prev,
        role: "Role is required",
      }));
      return;
    }

    addUser();
  };
  return (
    <form
      className="flex flex-col gap-4 w-full max-w-[400px]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <span className="font-light text-sm"></span>
        {err && (
          <>
            <br />
            <div className="bg-red-200 px-3 py-3 rounded-md">
              <span className="flex items-center gap-1 text-sm font-light text-red-500">
                <CiWarning className="text-lg" /> {err}
              </span>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          className="border border-gray-200 bg-secondary text-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary transition-all"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
          disabled={isLoading}
        />
        <span className="text-sm font-light text-red-500">
          {errors.fullName}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="border border-gray-200 bg-secondary text-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary transition-all"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={isLoading}
        />
        <span className="text-sm font-light text-red-500">{errors.email}</span>
      </div>

      <div className="flex flex-col gap-1">
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="border border-gray-200 bg-secondary text-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary transition-all"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          disabled={isLoading}
        />
        <span className="text-sm font-light text-red-500">
          {errors.password}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <select
          name="position"
          id=""
          className="border border-gray-200 bg-secondary text-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary transition-all"
          disabled={isLoading}
          onChange={(e) => setPosition(e.target.value)}
        >
          <option value="" disabled selected>
            Select Position
          </option>
          <option value="President">President</option>
          <option value="Vice President">Vice President</option>
          <option value="Member">Member</option>
        </select>
        <span className="text-sm font-light text-red-500">
          {errors.position}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <select
          name="role"
          id=""
          className="border border-gray-200 bg-secondary text-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary transition-all"
          disabled={isLoading}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="" disabled selected>
            Select Role
          </option>
          <option value="ADMIN">Admin</option>
          <option value="EDITOR">Editor</option>
        </select>
        <span className="text-sm font-light text-red-500">{errors.role}</span>
      </div>

      <button
        type="submit"
        className="text-sm bg-primary text-secondary px-3 py-2 rounded-md font-semibold"
        disabled={isLoading}
      >
        {isLoading ? (
          <BeatLoader color={"#ffffff"} loading={isLoading} size={3} />
        ) : (
          "Add User"
        )}
      </button>
    </form>
  );
};

export default AddUserForm;
