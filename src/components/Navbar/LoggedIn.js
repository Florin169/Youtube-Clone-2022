import React from "react";
import { BiVideoPlus } from "react-icons/bi";
import { BsBell } from "react-icons/bs";

const LoggedIn = ({ user }) => {
  return (
    <div className="flex items-center space-x-5">
      <BiVideoPlus className="w-6 h-6 cursor-pointer" />
      <BsBell className="w-6 h-6 cursor-pointer" />
      <div className="w-8 h-8 rounded-full bg-slate-400 cursor-pointer">
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
