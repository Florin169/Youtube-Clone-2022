import React from "react";

const SkeletonVideo = () => {
  return (
    <div className="w-[360px] h-[310px] mb-10 animate-pulse">
      <div className="h-[201px] w-full bg-slate-700"></div>
      <div className="mt-3 flex space-x-3">
        <div className="h-full">
          <div className="w-10 h-10 rounded-full bg-slate-700"></div>
        </div>

        <div className="space-y-2 w-[100%]">
          <div className="w-[60%] h-3 rounded-full bg-slate-700"></div>
          <div className="w-[40%] h-3 rounded-full bg-slate-700"></div>
          <div className="flex items-center space-x-3 text-sm text-[#9F9F9F]">
            <div className="w-[20%] bg-slate-700 rounded-full h-3"></div>
            <div className="w-[20%] bg-slate-700 rounded-full h-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonVideo;
