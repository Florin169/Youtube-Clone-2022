import { configureStore } from "@reduxjs/toolkit";
import videosSlice from "./features/videosSlice";

const store = configureStore({
  reducer: {
    videos: videosSlice,
  },
});

export default store;
