import { BiDotsHorizontal } from "react-icons/bi";
import {timeAgo} from "../utils/utils"
const Post = ({ post }) => {
  return (
    <div>
      <div className="flex flex-col gap-3 w-full md:w-[550px] max-w-[550px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={`https://avatar.iran.liara.run/username?username=${post.createdBy.username}`}
              alt=""
              className="w-[45px] h-[45px] rounded-full"
            />
            <div className="text-sm">
              <div className="flex gap-2 ">
                <span className="font-bold">{post.createdBy.username}</span>
                <span className="text-gray-600">• {timeAgo(post.createdAt)}</span>
              </div>
              <span className="text-sm text-gray-600">{post.createdBy.position}</span>
            </div>
          </div>
          <BiDotsHorizontal className="text-lg cursor-pointer" />
        </div>

        <div className="w-full rounded-md">
          <div>
            <img src={`${process.env.REACT_APP_API_URL}/uploads/${post.imagePath}`} alt="" className="w-full rounded-md" />
          </div>
        </div>

        <p className="text-sm">
         {post.caption}
          <span className="text-gray-300 text-sm cursor-pointer">more</span>
        </p>
      </div>
      <div className="w-full h-[0.4px] bg-gray-600 my-10"></div>
    </div>
  );
};

export default Post;
