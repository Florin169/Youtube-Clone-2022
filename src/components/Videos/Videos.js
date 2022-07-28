import React from "react";
import useFetchVideos from "../../hooks/useFetchVideos";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import SkeletonVideo from "./SkeletonVideo";
import { Link } from "react-router-dom";

const Videos = () => {
  const { loading } = useFetchVideos();

  const videos = useSelector((state) => state.videos.videos);

  return (
    <div className="px-20 py-5 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
      {videos.map((video) => (
        <Link to={`/video/${video.id.videoId}`} key={video.id.videoId}>
          {loading ? <SkeletonVideo /> : <VideoCard video={video.snippet} />}
        </Link>
      ))}
    </div>
  );
};

export default Videos;
