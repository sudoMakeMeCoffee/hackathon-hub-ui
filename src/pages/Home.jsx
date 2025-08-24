import SideBarMenu from "../components/SideBarMenu";
import PostsSection from "../components/PostsSection";
import MobileTopBar from "../components/MobileTopBar";

const Home = () => {
  return (
    <div className=" w-full  bg-primary text-white mt-[70px] md:mt-0">
      <MobileTopBar/>
      <SideBarMenu />
      <PostsSection />
    </div>
  );
};

export default Home;
