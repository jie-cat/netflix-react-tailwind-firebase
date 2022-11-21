import React from "react";
// react-icons
import { AiOutlineClose } from "react-icons/ai";
// video
import { Player } from "video-react";
import trailerVideo from "../assets/trailer.mp4";

const Video = ({ setVideo }) => {
  return (
    <>
      {/* trailer */}
      <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-[10000] w-full h-full flex justify-center items-center backdrop-blur-lg">
        <Player autoPlay={true} muted={false} fluid={false}>
          <source src={trailerVideo} />
        </Player>

        <AiOutlineClose
          onClick={() => setVideo(false)}
          className="text-white/70 hover:text-white absolute top-[30px] right-[30px] cursor-pointer"
          size={50}
        />
      </div>
    </>
  );
};

export default Video;
