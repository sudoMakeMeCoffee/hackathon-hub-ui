import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isValidEmail } from "../utils/utils";
import { CiWarning } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import useAuthStore from "../store/AuthStore";

const AddUserForm = ({ showAddUserForm, setShowAddUserForm }) => {
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useAuthStore();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [err, setErr] = useState("");
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const checkEmail = async () => {
    setErrors((prev) => ({
      ...prev,
      email: !isValidEmail(email) ? "Enter a valid email" : "",
    }));
  };

  useEffect(() => {
    setErr("");
    const timeout = setTimeout(() => {
      if (email) {
        checkEmail();
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [email]);

  useEffect(() => {
    setErr("");
  }, [password]);

  const signIn = async () => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/add-user",
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
      setShowAddUserForm(false)
    } catch (error) {
      setErr(error.response?.data?.message);
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    checkEmail();
    if (password.length < 1) {
      setErrors((prev) => ({
        ...prev,
        password: "Password is required",
      }));
      return;
    }

    signIn();
  };
  return (
    <form className="flex flex-col gap-4 w-full max-w-[400px]">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-medium flex items-center justify-between">
          Add New User
          <CgClose
            className="text-primary cursor-pointer"
            onClick={() => setShowAddUserForm(false)}
          />
        </h1>
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
          className="input-field input-md"
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
          type="email"
          placeholder="Email"
          name="email"
          className="input-field input-md"
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
          className="input-field input-md"
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
          name="role"
          id=""
          className="input-field input-md"
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

      <button type="submit" className="btn-primary btn-md" disabled={isLoading}>
        Add
        {isLoading && (
          <div className=" ml-1 animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
        )}
      </button>
      <button
        type="button"
        className="btn-secondary btn-md"
        disabled={isLoading}
        onClick={() => setShowAddUserForm(false)}
      >
        Cancel
      </button>
    </form>
  );
};

export default AddUserForm;
