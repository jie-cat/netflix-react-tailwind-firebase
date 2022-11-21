import React, { useState } from "react";
import { useLocation } from "react-router-dom";
// react-icon
import { FaPlay, FaPlus } from "react-icons/fa";
import { AiOutlinePlayCircle } from "react-icons/ai";
// components
import Video from "../components/Video";
// firebase
import { UserAuth } from "../contexts/AuthContext";
import { db } from "../firebase.js";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

const Introduce = () => {
  // Movie component資料

  const location = useLocation();

  const { bgImage } = location.state;
  const { title } = location.state;
  const { date } = location.state;
  const { adult } = location.state;
  const { overview } = location.state;
  const { id } = location.state;
  // 登入資料;
  let { user } = UserAuth();

  // 把加到清單資料送到資料庫
  const saveShow = () => {
    const movieID = doc(db, "users", `${user?.email}`); // 對應後端資料格式
    if (user?.email) {
      updateDoc(movieID, {
        saveShow: arrayUnion({
          id: id,
          title: title,
          image: bgImage,
        }),
      });
      console.log("save success!!");
    } else {
      alert("please login to save a movie");
    }
  };

  //  控制video開關
  const [video, setVideo] = useState(false);

  return (
    <>
      <div>
        {/* banner */}
        <div className="text-white relative w-full min-h-screen py-0 px-[100px] flex justify-start items-center">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${bgImage}`}
            alt="movie pic"
          />
          {/* Overlay */}
          <div className="bg-gradient-to-r from-black w-full h-full absolute top-0 left-0"></div>

          {/* content */}
          <div className="relative z-1 max-w-[550px]">
            {/* movie title */}
            <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
            <h4 className="font-bold text-white/50 mt-[10px]">
              <span className="pl-0 py-0 px-[10px] border-r-2 border-white/50">
                {date?.slice(0, 4)}
              </span>
              <span className="py-0 px-[10px] border-r-2 border-white/50 text-white">
                <i className="px-[8px] bg-red-600 inline-block rounded-sm ">
                  {adult ? 18 + "+" : 12 + "+"}
                </i>
              </span>
              {/* 因為API沒有片長資訊和電影種類, 所以放假資料 :(  */}
              <span className="py-0 px-[10px] border-r-2 border-white/50">
                1h 55min
              </span>
              <span className="border-none py-0 px-[10px] border-r-2 border-white/50">
                Action
              </span>
            </h4>
            <p className="font-bold leading-6 mt-[10px] mx-0 mb-[20px]">
              {overview}
            </p>
            {/* button */}
            <div className="relative ">
              <button
                className="relative inline-block mr-[10px] bg-red-600 py-[6px] px-[20px] no-underline font-bold tracking-wide uppercase"
                href="#"
              >
                <FaPlay className="inline-block mr-2" />
                Play
              </button>
              <button
                onClick={() => saveShow()}
                className="relative inline-block mr-[10px] bg-black border border-white/10 py-[6px] px-[20px] no-underline font-bold tracking-wide uppercase hover:bg-red-600"
                href="#"
              >
                <FaPlus className="inline-flex mr-2" />
                My List
              </button>
            </div>
          </div>
          <a className="absolute bottom-[35px] left-[100px] inline-flex items-center uppercase no-underline tracking-wide text-lg cursor-pointer">
            <AiOutlinePlayCircle
              onClick={() => setVideo(true)}
              className="mr-2 hover:scale-150 hover:mr-6 hover:text-white/50"
              size={70}
            />
            Watch Trailer
          </a>
        </div>

        {/* trailer video */}
        {video ? <Video setVideo={setVideo} /> : null}
      </div>
    </>
  );
};

export default Introduce;
