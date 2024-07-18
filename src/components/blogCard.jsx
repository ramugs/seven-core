import React from "react";
import DefaultImage from "../assests/images/defaultImage.jpg";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ item, index }) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-8 my-5 rounded-lg shadow-xl">
      <div className="md:col-span-2 sm:col-span-3 col-span-8  h-[250px] rounded-lg p-4 ">
        <img
          src={item?.urlToImage ? item?.urlToImage : DefaultImage}
          className="rounded-lg object-cover w-full h-full shadow-lg"
        />
      </div>
      <div className="md:col-span-6 sm:col-span-5 col-span-8 p-4">
        <div className="flex items-center gap-1">
          <span className="text-darkGrey text-14">By </span>{" "}
          <span className="text-darkBlue text-14 font-bold">
            {item?.author}
          </span>
          <span className="text-darkGrey text-14"> Published at </span>{" "}
          <span className="text-purple text-14 font-bold">
            {moment(item?.publishedAt).format("d MMM yyyy")}
          </span>
        </div>
        <div className="py-3">
          <span className="text-26 font-semibold text-darkBlue">
            {item?.title}
          </span>
        </div>
        <div>
          <span className="text-darkGrey">{item?.description}</span>
        </div>

        <div className="py-2">
          <span className="text-14 text-darkGrey">Source: </span>
          <span className="text-14 text-darkBlue font-semibold">
            {item?.source?.name}
          </span>
        </div>

        <div>
          <button
            type="button"
            className="text-white bg-blue2 text-16 font-bold px-2 py-1 rounded-md"
            onClick={() => navigate(`/${index + 1}`)}
          >
            See details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
