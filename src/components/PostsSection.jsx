import React from "react";
import Post from "./Post";

const PostsSection = () => {
  return (
    <div className="w-full p-4 h-max min-h-screen flex flex-col items-center gap-6">
      <Post
        src={
          "https://thumbs.dreamstime.com/b/sea-water-ocean-wave-surfing-surface-colorful-vibrant-sunset-barrel-shape-124362369.jpg"
        }
      />
      <Post
        src={
          "https://images.pexels.com/photos/13439521/pexels-photo-13439521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
      />
    </div>
  );
};

export default PostsSection;
