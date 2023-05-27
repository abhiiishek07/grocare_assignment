import { createSlice } from "@reduxjs/toolkit";
const selectedVideoSlice = createSlice({
  name: "selectedVideo",
  initialState: {
    id: "",
    pageNum: 0,
  },
  reducers: {
    setSelectedVideo(state, action) {
      return (state = action.payload);
    },
  },
});
export const { setSelectedVideo } = selectedVideoSlice.actions;
export default selectedVideoSlice.reducer;
