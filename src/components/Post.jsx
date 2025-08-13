import React from "react";
import { BiDotsHorizontal, BiDotsVertical } from "react-icons/bi";

const Post = () => {
  return (
    <div className="w-full max-w-[500px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiQSSoCfHsEuLIcJA7R8TuWfJFl02NABEPQ&s"
            alt=""
            className="w-[50px] h-[50px] rounded-full"
          />
          <div className="">
            <div className="flex gap-2 text-sm">
              <span className="font-bold">K.K. Joshua Persiloyer</span>
              <span className="text-gray-600">• 9h</span>
            </div>
            <span className="text-sm text-gray-600">Presidant</span>
          </div>
        </div>
        <BiDotsVertical />
      </div>

      <div className="w-full max-w-full">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjIStYFzo7WSkORtaLOJnU7rEsQiv_wzazQ&s"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
