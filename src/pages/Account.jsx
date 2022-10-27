import React from "react";
// components
import SavedShows from "../components/SavedShows";

const Account = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block w-full h-[450px] "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/e01f0456-dd48-455d-9b52-a0d7c7363811/TW-zh-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="netflix-bg-img"
      />
      {/* 遮罩 */}
      <div className="bg-black/60 fixed left-0 top-0 w-full h-[450px]"></div>
      {/* 標題 */}
      <div className="absolute left-0 top-[10%] sm:top-[20%] z-50 w-full py-15 px-6 text-white ">
        <h1 className="font-bold text-5xl my-5">My Shows</h1>
      </div>

      {/* 片單 */}
      <SavedShows />
    </div>
  );
};

export default Account;
