import React from "react";
import VideoInfo from "../components/VideoPage/VideoInfo";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import Social from "../components/VideoPage/Social";

const VideoPage = () => {
  return (
    <div className="text-white px-10 lg:px-24 py-5 block lg:flex lg:space-x-7">
      <div className="flex-1">
        <div className="w-full h-[720px] bg-red-200"></div>
        <div className="mt-5">
          <h1 className="font-semibold text-lg">
            FRENKIE DE JONG WANTS CHELSEA MOVE! : 40M DUMFRIES WANTED AT RWB -
            Is He NEEDED? || Chelsea News
          </h1>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-4">
              <p>100k views</p>
              <p>2 hours ago</p>
            </div>

            <div className="flex items-center space-x-6">
              <Social icon={<AiOutlineLike />} text="LIKE" />
              <Social icon={<AiOutlineDislike />} text="DISLIKE" />
              <Social icon={<RiShareForwardLine />} text="SHARE" />
              <Social icon={<HiDownload />} text="DOWNLOAD" />
              <Social icon={<MdOutlinePlaylistAdd />} text="SAVE" />
            </div>
          </div>
        </div>
        <VideoInfo />
      </div>
      <div className="w-full lg:w-[402px] h-screen bg-green-200"></div>
    </div>
  );
};

export default VideoPage;
