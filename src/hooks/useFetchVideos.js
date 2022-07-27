import React, { useEffect } from "react";
import axios from "axios";
import { getVideos } from "../redux/features/videosSlice";
import { useDispatch } from "react-redux";

const useFetchVideos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=football&key=AIzaSyAmfgQgHB5D9uhUFAWEGUiJvXuKXnbXcA4
  }, []);

  return {};
};

export default useFetchVideos;
