import React, { useEffect, useState } from "react";
import Post from "./Post";
import axios from "axios";

const PostsSection = () => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    axios
      .get("http://localhost:8080/api/v1/post", { withCredentials: true })
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
        <Post src={`http://localhost:8080/uploads/${post.imagePath}`} />
      ))}
    </div>
  );
};

export default PostsSection;
