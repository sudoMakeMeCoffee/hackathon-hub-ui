import SideBarMenu from "../components/SideBarMenu";
import PostsSection from "../components/PostsSection";

const Home = () => {
  return (
    <div className="container w-full h-full bg-primary text-white flex  ">
      <SideBarMenu />
      <PostsSection />
    </div>
  );
};

export default Home;
