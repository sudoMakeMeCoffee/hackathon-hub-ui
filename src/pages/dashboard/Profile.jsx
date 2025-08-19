import React, { useEffect, useState } from "react";
import useAuthStore from "../../store/AuthStore";
import { BeatLoader } from "react-spinners";
import api from "../../api/axios";

const Profile = () => {
  const { user } = useAuthStore();

  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    newPassword: "",
  });

  useEffect(() => {
    setErrors({ newPassword: "" });
  }, [newPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword == "") {
      setErrors((prev) => ({
        ...prev,
        newPassword: "New Password is required.",
      }));

      return;
    }

    if (newPassword.length < 8) {
      setErrors((prev) => ({
        ...prev,
        newPassword: "New Password must have minimum 8 characters.",
      }));

      return;
    }

    setIsLoading(true);

    api
      .put(
        "/api/v1/auth/change-password",
        {
          newPassword: newPassword,
        },
        { withCredentials: true }
      )
      .then((res) => {
        alert("Password Changed Successfully.");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div className="w-full">
        <div className="flex items-center gap-2">
          <div className="w-[50px] h-[50px]">
            <img
              src={`https://avatar.iran.liara.run/username?username=${user.username}`}
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-bold">
              {user.username}{" "}
              <span className="text-gray-400">({user.position})</span>
            </h1>
            <span className="text-sm flex items-center gap-2 ">
              <span>{user.email}</span>
              <span
                className={`${
                  user.role == "ADMIN"
                    ? "bg-green-200 text-green-500"
                    : "bg-blue-200 text-blue-500"
                } text-xs p-1 rounded-sm`}
              >
                {user.role}
              </span>
            </span>
          </div>
        </div>

        <div className="h-[.5px] w-full bg-gray-400 my-8"></div>

        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-1 w-full max-w-[400px]"
        >
          <div className="flex flex-col gap-1"></div>
          <input
            type="text"
            placeholder="New Password"
            name="newPassword"
            className="border border-gray-200 bg-secondary text-sm rounded-md px-3 py-2 focus:outline-none focus:border-primary transition-all"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
            disabled={isLoading}
          />
          <span className="text-sm font-light text-red-500">
            {errors.newPassword}
          </span>
          <div />

          <button
            type="submit"
            className="text-sm bg-primary text-secondary px-3 py-2 rounded-md font-semibold max-w-max"
            disabled={isLoading}
          >
            {isLoading ? (
              <BeatLoader color={"#ffffff"} loading={isLoading} size={3} />
            ) : (
              "Change Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
