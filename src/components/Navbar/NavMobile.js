import React from "react";
import { AiFillHome, AiOutlineHistory } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";

const NavMobile = () => {
  return (
    <div className="flex items-center justify-between w-full h-14 md:hidden bg-black text-white px-2 fixed bottom-0">
      <div className=" flex flex-col items-center justify-center">
        <AiFillHome className="w-6 h-6" />
        <h1 className="text-sm">Home</h1>
      </div>
      <div className=" flex flex-col items-center justify-center">
        <AiOutlineHistory className="w-6 h-6" />
        <h1 className="text-sm">History</h1>
      </div>
      <div className=" flex flex-col items-center justify-center">
        <IoIosAddCircleOutline className="w-10 h-10 " />
      </div>
      <div className=" flex flex-col items-center justify-center">
        <MdOutlineSubscriptions className="w-6 h-6" />
        <h1 className="text-sm">Subscriptions</h1>
      </div>
      <div className=" flex flex-col items-center justify-center">
        <MdOutlineVideoLibrary className="w-6 h-6" />
        <h1 className="text-sm">Library</h1>
      </div>
    </div>
  );
};

export default NavMobile;
