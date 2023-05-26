import { createSlice } from "@reduxjs/toolkit";
const pageNumSlice = createSlice({
  name: "pageNum",
  initialState: 0,
  reducers: {
    setPageNum(state, action) {
      return (state = action.payload);
    },
  },
});
export const { setPageNum } = pageNumSlice.actions;
export default pageNumSlice.reducer;
