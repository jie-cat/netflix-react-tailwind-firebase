import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item, id }) => {
  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[250px] xl:w-[280px] inline-block cursor-pointer p-2 relative">
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt="wefg"
        />

        {/* 遮罩 */}
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black hover:opacity-80 text-white opacity-0">
          <p className="white-space-normal font-bold  flex justify-center h-full items-center">
            {item?.title}
          </p>
          <p className="absolute top-4 left-4">
            <FaRegHeart size={20} />
          </p>
        </div>
      </div>
      ;
    </>
  );
};

export default Movie;
