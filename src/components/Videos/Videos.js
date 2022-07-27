import React from "react";
import useFetchVideos from "../../hooks/useFetchVideos";
import VideoCard from "./VideoCard";
import axios from "axios";

const Videos = () => {
  useFetchVideos();

  return (
    <div className="px-20 py-5 grid grid-cols-4 gap-4">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
};

export default Videos;
