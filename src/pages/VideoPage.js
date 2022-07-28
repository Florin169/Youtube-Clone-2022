import React, { useEffect, useState } from "react";
import VideoInfo from "../components/VideoPage/VideoInfo";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import Social from "../components/VideoPage/Social";
import { useParams, Link } from "react-router-dom";
import SuggestedVideo from "../components/VideoPage/SuggestedVideo";
import { useSelector } from "react-redux";
import axios from "axios";
import ReactPlayer from "react-player";

const VideoPage = () => {
  const [video, setVideo] = useState({});

  const { id } = useParams();
  const videos = useSelector((state) => state.videos.videos);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyAmfgQgHB5D9uhUFAWEGUiJvXuKXnbXcA4`,
    }).then((res) => setVideo(res?.data?.items[0]));
  }, []);

  console.log(video);

  return (
    <div className="text-white px-10 lg:px-24 py-5 block lg:flex lg:space-x-7">
      <div className="flex-1">
        <div className="w-full h-[720px] bg-red-200">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className="mt-5">
          <h1 className="font-semibold text-lg">{video?.snippet?.title}</h1>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center space-x-4">
              <p>100k views</p>
              <p>2 hours ago</p>
            </div>

            <div className="flex items-center space-x-6">
              <Social icon={<AiOutlineLike />} text="LIKE" />
              <Social icon={<AiOutlineDislike />} text="DISLIKE" />
              <div className="hidden xl:flex xl:items-center space-x-6">
                <Social icon={<RiShareForwardLine />} text="SHARE" />
                <Social icon={<HiDownload />} text="DOWNLOAD" />
                <Social icon={<MdOutlinePlaylistAdd />} text="SAVE" />
              </div>
            </div>
          </div>
        </div>
        <VideoInfo video={video} />
      </div>
      <div className="w-full lg:w-[402px] h-screen space-y-3">
        {videos?.map((video) => (
          <Link key={video.id.videoId} to={`/video/${video.id.videoId}`}>
            <SuggestedVideo video={video.snippet} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
