import React, { useState } from "react";
import style from "./Counter.module.css";
const Count = (props) => {
  const [count, setCount] = useState(+props.initialvalue);
  const handleInc = (value) => {
    setCount(count + value);
  };
  const handleDec = (value) => {
    setCount(count - value);
  };

  const handleDouble=(value)=>{
setCount(count * value)
  }
  return (
    <div>
      {count % 2 == 0 ? (
        <h1 style={{ color: "green" }}>Counter : {count}</h1>
      ) : (
        <h3 style={{ color: "red" }}>Counter : {count}</h3>
      )}
      <button className={style.btn} onClick={() => handleInc(1)}>
        Increment
      </button>
      <button className={style.btn} onClick={() => handleDec(1)}>
        Decrement
      </button>
      <button className={style.btn} onClick={() => handleDouble(2)}>
        Double
      </button>
    </div>
  );
};

export default Count;
