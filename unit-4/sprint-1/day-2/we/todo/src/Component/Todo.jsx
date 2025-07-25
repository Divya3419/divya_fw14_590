import React, { useState } from "react";
import Todoitem from "./Todoitem";
import styles from "./Todo.module.css";
const Todo = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const itemDelete = (id) => {
    let newTodo = todo.filter((ele) => ele.id !== id);
    setTodo(newTodo);
  };

  return (
    <div style={{ margin: "auto" }}>
      {todo.map((ele) => (
        <Todoitem key={ele.id} ele={ele} itemsDelete={itemDelete} />
      ))}

      <input
        className={styles.int}
        value={value}
        onChange={handleChange}
        placeholder="Write Something"
      />

      <button
        className={styles.btn}
        onClick={() => {
          setTodo([...todo, { id: Date.now(), value: value, status: false }]);
          setValue("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default Todo;
