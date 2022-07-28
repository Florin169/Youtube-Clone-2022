import React, { useEffect, useState } from "react";
import axios from "axios";
import { getVideos } from "../redux/features/videosSlice";
import { useDispatch } from "react-redux";

const useFetchVideos = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=football&key=AIzaSyAmfgQgHB5D9uhUFAWEGUiJvXuKXnbXcA4",
    }).then((res) => dispatch(getVideos(res.data.items)));

    setLoading(false);
  }, []);

  return { loading };
};

export default useFetchVideos;
