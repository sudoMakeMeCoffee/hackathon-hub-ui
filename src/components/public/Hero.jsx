import Background from "./Background";

const Hero = () => {
  return (
    <div className="h-screen -z-50">
      <Background />
      <div className="absolute inset-0 left-4 flex flex-col justify-center">
        <div className="text-white text-9xl block">A community for </div>
        <div className="text-white text-9xl block">
          competitive programmers.
        </div>
      </div>
    </div>
  );
};

export default Hero;
