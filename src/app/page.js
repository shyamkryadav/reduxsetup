"use client";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const counter = useSelector(state => state);
  console.log(counter);

  return (
    <div>page</div>
  )
};
export default page;
