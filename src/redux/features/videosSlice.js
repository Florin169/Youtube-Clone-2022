import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  video: {},
  user: {},
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    getVideos: (state, action) => {
      state.videos = action.payload;
    },

    getUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { getVideos, getUser } = videosSlice.actions;

export default videosSlice.reducer;
