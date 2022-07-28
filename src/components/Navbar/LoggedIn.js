import React from "react";
import { BiVideoPlus } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const LoggedIn = ({ user }) => {
  const logOut = () => {
    signOut(auth);
  };

  return (
    <div className="flex items-center space-x-5">
      <BiVideoPlus className="w-6 h-6 cursor-pointer hidden md:block" />
      <BsBell className="w-6 h-6 cursor-pointer hidden md:block" />
      <div
        className="w-8 h-8 rounded-full bg-slate-400 cursor-pointer"
        onClick={logOut}
      >
        <img
          src={user?.photoURL}
          alt="user"
          className="w-full h-full bg-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default LoggedIn;
