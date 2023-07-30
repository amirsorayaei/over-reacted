import { createSlice } from "@reduxjs/toolkit";

import { AppState, Post } from "@/src/types/types";

const initialState: AppState = {
  posts: [],
  theme: "dark",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    /**
     * Setting all the posts to redux
     * @param {AppState} state
     * @param {Object} param
     */
    setPosts(state: AppState, param: { payload: Post[] }) {
      const { payload } = param;
      state.posts = payload;
    },
    /**
     * Toggling theme
     * @param {AppState} state
     */
    toggleTheme(state: AppState) {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme, setPosts } = appSlice.actions;

export default appSlice.reducer;
