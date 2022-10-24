import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 z-[100] absolute w-full">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
        NETFLIX
      </h1>
      <div>
        <button className="text-slate-100 py-2 px-6">Sign in</button>
        <button className="bg-red-600 py-2 px-6 text-slate-100">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
