import React from "react";

const SuggestedVideo = ({ video }) => {
  return (
    <div className="w-full h-[98px] flex space-x-2">
      <div className="w-[168px] h-full bg-gray-400">
        <img
          src={video?.thumbnails?.medium.url}
          alt="thumbnail"
          className="bg-cover w-full h-full"
        />
      </div>
      <div className="space-y-1 w-[234px]">
        <h1 className="text-sm font-semibold">
          {video?.title.slice(0, 50)}...
        </h1>
        <p className="text-sm text-[#9F9F9F]">{video?.channelTitle}</p>
        <div className="flex items-center text-xs space-x-2 text-[#9F9F9F]">
          <p>100k views</p>
          <p>1 hour ago</p>
        </div>
      </div>
    </div>
  );
};

export default SuggestedVideo;
