import React, { useState } from "react";
import data from "../data.json";
import { Itemdetail } from "./Itemdetail";

export const Restro = () => {
  return (
    <>
      <h1>Restaurant Detail</h1>
      <button>Rating</button>
      <button>1 Star</button>
      <button>2 Star</button>
      <button>3 Star</button>
      <button>4 Star</button>
      <button>Cash Payment</button>
      <button>Card Payment</button>
      <button>All Payment</button>
      <h2>All Dishes</h2>
      {data.map((ele) => {
        return <Itemdetail key={ele.id} ele={ele} />;
      })}
    </>
  );
};
