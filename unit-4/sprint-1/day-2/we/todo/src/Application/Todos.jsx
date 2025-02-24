import React, { useState } from "react";
import TodosList from "./TodosList";
import styles from "./Todo.module.css";


const Todos = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    setData([...data, { id: Date.now(), title: title,status:false }]);
    setTitle(" ")
  };

  return (
    <div className={styles.container}>
      <TodosList data= {data}/>
      <input
        className={styles.int}
        type="text"
        value={title}
        placeholder="Write Something"
        onChange={(e) => handleChange(e)}
      />
      <button className={styles.btn} onClick={handleClick}>+</button>

    </div>
  );
};

export default Todos;
