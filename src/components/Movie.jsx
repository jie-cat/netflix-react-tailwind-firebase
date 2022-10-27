import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
// auth
import { UserAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

const Movie = ({ item, id }) => {
  const [like, setLike] = useState(false);

  let { user } = UserAuth();

  const saveShow = () => {
    setLike(true);
    const movieID = doc(db, "users", `${user?.email}`); // 對應後端資料格式
    if (user?.email) {
      updateDoc(movieID, {
        saveShow: arrayUnion({
          id: item.id,
          title: item.title,
          image: item.poster_path,
        }),
      });
    } else {
      alert("please login to save a movie");
    }
  };

  return (
    <>
      <div className="w-[160px] sm:w-[200px] md:w-[250px] xl:w-[280px] inline-block cursor-pointer p-2 relative">
        <img
          className="w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt="movie image"
        />

        {/* 遮罩 */}
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black hover:opacity-80 text-white opacity-0">
          <p className="white-space-normal font-bold  flex justify-center h-full items-center">
            {item?.title}
          </p>
          <p onClick={saveShow} className="absolute top-4 left-4">
            {like ? <FaHeart size={20} /> : <FaRegHeart size={20} />}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
