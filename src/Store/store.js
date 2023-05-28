import { configureStore, combineReducers } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import selectedVideoReducer from "./selectedVideoSlice";
import storage from "redux-persist/lib/storage";
import {
  // redux persist to retain Redux state through page refreshes
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  sidebar: sidebarReducer,
  selectedVideo: selectedVideoReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import sidebarReducer from "./sidebarSlice";
// import selectedVideoReducer from "./selectedVideoSlice";
// const store = configureStore({
//   reducer: {
//     sidebar: sidebarReducer,
//     selectedVideo: selectedVideoReducer,
//   },
// });
// export default store;
