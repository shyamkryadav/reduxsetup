"use client";
import React from "react";
import { useSelector ,useDispatch} from "react-redux";
// import { decrement, increment } from "@/redux/reducerSllice/countSlice";
import {chnageWidth,changeBackroundcolor } from "@/redux/reducerSllice/boxSlice";
const page = () => {
  const {count} = useSelector(state => state.count);
  const {width,height,background,radious} = useSelector(state => state.box);
  const dispatch= useDispatch();

  return (
    
    <div style={{width:width+'px',height:height+'px',background,borderRadius:radious}}>
      <div>
      </div>
      <br></br>
      <input placeholder="Enter a color" onChange={(e)=>dispatch(changeBackroundcolor(e.target.value))}/>
      <h1 >count is:{count}</h1>
     <button onClick={()=>dispatch(chnageWidth())}>Increment</button>
     {/* <button onClick={()=>dispatch(decrement())}>Decrement</button> */}
    </div>

  )
};
export default page;
