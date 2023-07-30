import { createSlice } from "@reduxjs/toolkit";

import { AppState, Post } from "@/src/types/types";
import { generateDateById, sortByDate } from "@/src/helpers/Functions";

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
      /**
       * Map new array with assigning generated date by post id
       */
      const list = payload.map((item) => {
        return {
          ...item,
          date: generateDateById(item.id),
        };
      });

      /**
       * Sort the posts by date
       */
      const sortedPosts = [...sortByDate(list)];

      /**
       * Assign them to state
       */
      state.posts = sortedPosts;
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
