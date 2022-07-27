import React from "react";

const VideoInfo = () => {
  return (
    <div className="border-y border-gray-700 py-5 my-3 flex space-x-4">
      <div className="w-14">
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-semibold">Channel Name</h1>
            <p className="text-xs">150k subscribers</p>
          </div>

          <div>
            <button className="w-[117px] h-9 bg-[#A41E1D] font-semibold text-sm text-white rounded-sm">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <p className="mt-5 w-full lg:w-[50%] text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem ipsam aliquid ab eius, repellendus perspiciatis magni,
          distinctio autem quibusdam id tenetur debitis ea quod voluptatem porro
          corrupti? Nemo, ratione asperiores?
        </p>
      </div>
    </div>
  );
};

export default VideoInfo;
