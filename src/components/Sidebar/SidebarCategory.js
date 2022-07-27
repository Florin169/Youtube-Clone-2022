import React from "react";

const SidebarCategory = ({ text, icon }) => {
  return (
    <div className="w-full h-10 pl-7 flex items-center hover:bg-[#2e3031] transition duration-300 cursor-pointer space-x-7">
      <span className="text-2xl">{icon}</span>
      <h1>{text}</h1>
    </div>
  );
};

export default SidebarCategory;
