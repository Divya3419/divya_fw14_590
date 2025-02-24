import React, { useState } from "react";
import styles from "./Todo.module.css";

const Todoitem = ({ ele, itemsDelete }) => {
  const [isComplete, setisComplete] = useState(ele.isComplete);

  return (
    <div style={{ display: "flex" }} key={ele.id}>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={(e) => {
          setisComplete(e.target.checked);
        }}
      />

      <div
        className={isComplete ? styles.strike : ""}
        // className={styles.value}
      >
        {ele.value}
      </div>

      <button onClick={() => itemsDelete(ele.id)}>Delete</button>
    </div>
  );
};

export default Todoitem;
