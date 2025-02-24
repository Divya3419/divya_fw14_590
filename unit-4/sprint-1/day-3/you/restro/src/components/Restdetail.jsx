import React, { useState } from "react";
import data from "../data.json";
import { Itemdetail } from "./Itemdetail";

export const Restro = () => {
  return (
    <>
      <h1>Restaurant Detail</h1>
      {data.map((ele) => {
        return <Itemdetail key={ele.id} ele={ele} />;
      })}
    </>
  );
};
