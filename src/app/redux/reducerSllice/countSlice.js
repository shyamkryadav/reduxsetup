import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};
export const coutSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state, action) => {},
    decrement: (state, action) => {},
  },
});
export const { increment, decrement } = coutSlice.actions;
export default coutSlice.reducer;
