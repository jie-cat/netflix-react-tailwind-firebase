import React, { useState, useEffect } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
// auth
import { db } from "../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { UserAuth } from "../contexts/AuthContext";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);

  const { user } = UserAuth(); //監測登入的狀態

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.saveShow); // savedShow []
    });
  }, [user?.email]);

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    // console.log(slider);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    // console.log(slider);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  // 刪除

  const movieRef = doc(db, "users", `${user?.email}`); //取得資料

  const deleteShow = async (passedID) => {
    try {
      // 篩選後的movies
      const result = movies.filter((item) => item.id !== passedID);

      await updateDoc(movieRef, {
        saveShow: result,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h2 className="text-gray-500 font-bold p-4 hidden sm:block">My Shows</h2>

      <div className="relative text-white flex items-center  cursor-pointer group top-[20%] sm:top-0">
        <AiFillLeftCircle
          onClick={slideLeft}
          className="absolute left-0 z-10  opacity-50 hover:opacity-100 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full whitespace-nowrap items-center overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {movies.map((item, index) => (
            <div
              key={index}
              className="w-[160px] sm:w-[200px] md:w-[250px] xl:w-[280px] inline-block cursor-pointer p-2 relative"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.image}`}
                alt="movie image"
              />

              {/* 遮罩 */}
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black hover:opacity-80 text-white opacity-0">
                <p className="white-space-normal font-bold  flex justify-center h-full items-center">
                  {item?.title}
                </p>
                <p
                  onClick={() => deleteShow(item.id)}
                  className="absolute top-4 right-4"
                >
                  <AiOutlineClose size={20} />
                </p>
              </div>
            </div>
          ))}
        </div>
        <AiFillRightCircle
          onClick={slideRight}
          className="absolute right-0 z-10  opacity-50 hover:opacity-100 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShows;
