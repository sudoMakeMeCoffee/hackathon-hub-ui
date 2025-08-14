import SideBarMenu from "../components/SideBarMenu";
import PostsSection from "../components/PostsSection";

const Home = () => {
  return (
    <div className="container w-full h-full bg-black text-white flex flex-col items-center">
      {/* <SideBarMenu /> */}
      <PostsSection />
    </div>
  );
};

export default Home;
