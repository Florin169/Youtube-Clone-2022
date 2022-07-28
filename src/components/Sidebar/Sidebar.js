import React from "react";
import SidebarCategory from "./SidebarCategory";
import { AiFillHome, AiOutlineHistory, AiOutlineScissor } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineOndemandVideo,
  MdOutlineWatchLater,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="w-[240px] bg-[#191A1B] text-white h-screen pt-5 hidden lg:block">
      <div>
        <SidebarCategory text="Home" icon={<AiFillHome />} />
        <SidebarCategory text="Explore" icon={<FaRegCompass />} />
        <SidebarCategory text="Shorts" icon={<AiFillHome />} />
        <SidebarCategory
          text="Subscription"
          icon={<MdOutlineSubscriptions />}
        />
      </div>

      <div className="w-[95%] h-px bg-[#2e3031] my-5"></div>

      <div>
        <SidebarCategory text="Library" icon={<MdOutlineVideoLibrary />} />
        <SidebarCategory text="History" icon={<AiOutlineHistory />} />
        <SidebarCategory text="Your videos" icon={<MdOutlineOndemandVideo />} />
        <SidebarCategory text="Watch later" icon={<MdOutlineWatchLater />} />
        <SidebarCategory text="Your clips" icon={<AiOutlineScissor />} />
      </div>

      <div className="w-[95%] h-px bg-[#2e3031] my-5"></div>
      <div className="pl-7">
        <h1 className="font-semibold text-gray-400 text-sm">SUBSCRIPTIONS</h1>
      </div>
    </div>
  );
};

export default Sidebar;
