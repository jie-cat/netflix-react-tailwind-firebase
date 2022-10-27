import React from "react";
import { Link, useNavigate } from "react-router-dom";
// auth
import { UserAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-between p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="font-bebas-neue text-red-600 text-5xl font-black cursor-pointer">
          NETFLIX
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-slate-100 py-2 px-6">Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 py-2 px-6 text-slate-100"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-slate-100 py-2 px-6">Sign in</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 py-2 px-6 text-slate-100">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
