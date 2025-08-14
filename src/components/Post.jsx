import { BiDotsHorizontal } from "react-icons/bi";

const Post = ({ src }) => {
  return (
    <div>
      <div className="flex flex-col gap-3 w-full md:w-[550px] max-w-[550px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiQSSoCfHsEuLIcJA7R8TuWfJFl02NABEPQ&s"
              alt=""
              className="w-[45px] h-[45px] rounded-full"
            />
            <div className="text-sm">
              <div className="flex gap-2 ">
                <span className="font-bold">K.K. Joshua Persiloyer</span>
                <span className="text-gray-600">• 9h</span>
              </div>
              <span className="text-sm text-gray-600">Presidant</span>
            </div>
          </div>
          <BiDotsHorizontal className="text-lg cursor-pointer" />
        </div>

        <div className="w-full   rounded-md">
          <div>
            <img src={src} alt="" className="w-full rounded-md" />
          </div>
        </div>

        <p className="text-sm">
          Get set for a sensational music experience at the iconic Port City
          Colombo ... Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Commodi necessitatibus repudiandae maxime minus nihil quasi, provident
          asperiores aliquam magnam, obcaecati itaque iste, ipsum aliquid
          temporibus odio! Nam illo doloremque tempora.
          <span className="text-gray-300 text-sm cursor-pointer">more</span>
        </p>
      </div>
      <div className="w-full h-[0.4px] bg-gray-600 my-10"></div>
    </div>
  );
};

export default Post;
