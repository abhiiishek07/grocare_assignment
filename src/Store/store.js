import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import selectedVideoReducer from "./selectedVideoSlice";
const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    selectedVideo: selectedVideoReducer,
  },
});
export default store;
