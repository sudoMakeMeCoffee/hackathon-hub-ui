import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";
import api from "../api/axios";

const PostsSection = () => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    api
      .get("/api/v1/post", { withCredentials: true })
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="w-full p-4 h-max min-h-screen flex flex-col items-center">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default PostsSection;
