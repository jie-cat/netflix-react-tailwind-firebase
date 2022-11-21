import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
// components
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(fetchURL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }, [fetchURL]);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowID);
    // console.log(slider);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + rowID);
    // console.log(slider);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  // console.log(movies);

  return (
    <>
      <h2 className="text-white font-bold p-4">{title}</h2>
      <div className="relative text-white flex items-center  cursor-pointer group">
        <AiFillLeftCircle
          onClick={slideLeft}
          className="absolute left-0 z-10  opacity-50 hover:opacity-100 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full whitespace-nowrap items-center overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {movies.map((item, index) => (
            <Movie key={index} item={item} />
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

export default Row;
