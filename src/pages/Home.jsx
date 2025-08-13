import React from "react";
import SideBarMenu from "../components/SideBarMenu";
import PostsSection from "../components/PostsSection";

const Home = () => {
  return (
    <div className="container flex gap-3">
      <SideBarMenu />
      <PostsSection/>
    </div>
  );
};

export default Home;
