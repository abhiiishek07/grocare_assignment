import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import pageNumReducer from "./pageNumSlice";
const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    pageNum: pageNumReducer,
  },
});
export default store;
