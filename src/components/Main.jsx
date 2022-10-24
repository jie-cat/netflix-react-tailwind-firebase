import React, { useState, useEffect } from "react";
import axios from "axios";
// api
import requests from "../Requests";

const Main = () => {
  const [movies, setMovies] = useState([]);

  // 隨機抽樣
  const movie = movies[Math.floor(Math.random() * movies.length)];
  console.log(movie);

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }, []);

  // 內容太多時做裁切
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        {/* 遮罩 */}
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        {/* background image */}
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt={movie?.title}
          />
        </div>
        {/* content */}
        <div className="absolute top-[20%] w-full p-4 md:p-8">
          <h1 className="text-2xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="flex w-full p-2 my-2">
            <button className="bg-slate-100 text-black py-2 px-5">Play</button>
            <button className="bg-inherit text-slate-100 border  border-slate-100 py-2 px-5 ml-2">
              Watch Later
            </button>
          </div>
          <p className="text-slate-400 my-2">Released: {movie?.release_date}</p>
          <p className="w-full md:w-[70%] xl:w-[50%] 3xl:w-[35%]">
            {truncateString(movie?.overview, 1500)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
