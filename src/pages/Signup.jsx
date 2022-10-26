import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// auth
import { UserAuth } from "../contexts/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, user } = UserAuth(); //解構賦值
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block w-full h-screen "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/e01f0456-dd48-455d-9b52-a0d7c7363811/TW-zh-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="netflix-bg-img"
      />
      {/* 遮罩 */}
      <div className="bg-black/60 fixed left-0 top-0 w-full h-screen"></div>
      {/* 內容區塊 */}
      <div className="fixed left-0 top-0 z-50 w-full py-24 ">
        <div className="w-[450px] h-[600px] bg-black/80 mx-auto text-white p-10">
          <h1 className="font-bold text-3xl my-5">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-2 bg-gray-700 outline-none my-2 rounded"
              type="email"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 px-2 bg-gray-700 outline-none my-2 rounded"
              type="text"
              placeholder="Password"
            />
            <button className="w-full p-2 bg-red-600 my-5 font-bold">
              Sign Up
            </button>
          </form>
          <div className="flex justify-between items-center text-gray-700">
            <p>
              <input className="mr-1 cursor-pointer" type="checkbox" />
              Remember me
            </p>
            <p className="cursor-pointer">Need help?</p>
          </div>
          <p className="text-white my-5">
            <span className="text-gray-700">Already subcribed to Netflex?</span>
            <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
