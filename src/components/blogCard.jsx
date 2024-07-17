import React from "react";
import DefaultImage from "../assests/images/defaultImage.jpg";
import moment from "moment";

const BlogCard = ({ item }) => {
  return (
    <div className="grid grid-cols-8 my-5 rounded-lg shadow-xl">
      <div className="md:col-span-2 sm:col-span-3 col-span-8  h-[250px] rounded-lg p-4 ">
        <img
          src={item?.urlToImage ? item?.urlToImage : DefaultImage}
          className="rounded-lg object-cover w-full h-full shadow-lg"
        />
      </div>
      <div className="md:col-span-6 sm:col-span-5 col-span-8 p-4">
        <div className="flex items-center gap-3">
          <span className="bg-lightGrey py-1 px-2 rounded-md text-12 font-bold">
            {item?.source?.name}
          </span>
          <span className="text-purple text-12 font-bold">
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
          <span className="text-14 text-darkGrey">Author:</span>
          <span className="text-14 text-darkBlue font-semibold">
            {" "}
            {item.author}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
