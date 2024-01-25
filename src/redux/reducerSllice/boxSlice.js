import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  width:30,
  height:30,
  background:'red',
  radious:50,
};
export const boxSlice = createSlice({
  name: "box",
  initialState,
  reducers: {
    chnageWidth: (state, action) => {
      state.width=state.width + 10;
      state.height=state.height + 10;
      state.radious=state.radious - 10;
    },
    changeBackroundcolor:(state,action)=>{
      state.background=action.payload;
    }
   
  },
});
export const { chnageWidth,changeBackroundcolor } = boxSlice.actions;
export default boxSlice.reducer;
