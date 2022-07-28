import React, { useEffect, useState } from "react";
import axios from "axios";
import { getVideos } from "../redux/features/videosSlice";
import { useDispatch } from "react-redux";

const useFetchVideos = () => {
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState("");
  const dispatch = useDispatch();

  const loadMoreVideos = () => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=football&pageToken=${nextPage}&key=AIzaSyAmfgQgHB5D9uhUFAWEGUiJvXuKXnbXcA4`,
    }).then((res) => {
      dispatch(getVideos(res.data.items));
      setNextPage(res.data.nextPageToken);
    });

    setLoading(false);
  };

  useEffect(() => {
    loadMoreVideos();

    window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreVideos();
      }
    });
  }, []);

  return { loading };
};

export default useFetchVideos;
