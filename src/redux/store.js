import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import videosSlice from "./features/videosSlice";

const store = configureStore({
  reducer: {
    videos: videosSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
