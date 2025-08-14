import SideBarMenu from "../components/SideBarMenu";
import PostsSection from "../components/PostsSection";

const Home = () => {
  return (
    <div className="container w-full h-screen bg-primary text-white ">
      <SideBarMenu />
      <PostsSection />
    </div>
  );
};

export default Home;
