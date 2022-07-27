import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="bg-[#191A1B] h-14 px-10 flex justify-between items-center text-white">
      <div className="flex items-center space-x-4">
        <AiOutlineMenu className="w-6 h-6" />
        <h1 className="font-bold">YOUTUBE</h1>
      </div>
      <div className="h-10 w-[530px] flex items-center border border-gray-800">
        <input
          type="text"
          placeholder="Search"
          className="h-full w-full bg-[#121414] outline-none px-3 focus:border focus:border-blue-900"
        />
        <div className="flex items-center justify-center h-10 w-16 bg-transparent border border-gray-800 cursor-pointer">
          <BsSearch className="w-5 h-5" />
        </div>
      </div>
      <div>
        <button className="flex items-center justify-center px-4 h-9 border border-blue-700 text-blue-700 font-bold">
          <BiUser className="mr-2 font-bold w-5 h-5" />
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
