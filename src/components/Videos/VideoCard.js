import React from "react";

const VideoCard = () => {
  return (
    <div className="w-[360px] h-[310px] mb-10">
      <div className="h-[201px] w-full bg-red-100">
        <img src="" alt="" className="w-full h-full bg-cover" />
      </div>
      <div className="mt-3 flex space-x-3">
        <div className="h-full">
          <div className="w-10 h-10 rounded-full bg-green-100"></div>
        </div>

        <div>
          <h1 className="text-white font-semibold text-lg">Title</h1>
          <p className="text-sm text-[#9F9F9F]">Channel</p>
          <div className="flex items-center space-x-3 text-sm text-[#9F9F9F]">
            <p>100 views</p>
            <p>2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
