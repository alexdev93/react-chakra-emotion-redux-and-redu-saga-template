import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, Track } from "./stateAndTypes";

const trackSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    fetchSongStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSongSuccess: (state, action: PayloadAction<Track[]>) => {
      state.tracks = action.payload;
      state.loading = false;
    },
    fetchSongFailure: (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchSongStart, fetchSongSuccess, fetchSongFailure } =
  trackSlice.actions;

export default trackSlice.reducer;
