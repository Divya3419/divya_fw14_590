import React, { useState } from "react";
import { nanoid } from "nanoid";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    if (task.trim() === "") return;
    let taskObj = {
      id: nanoid(),
      title: task.trim(),
      status: false,
    };
    setTodo([...todo, taskObj]);
    setTask("");
  };

  const handleChecked = (id) => {
    setTodo(
      todo.map((ele) => {
        if (ele.id === id) {
          return {
            ...ele,
            status: !ele.status,
          };
        } else {
          return ele;
        }
      })
    );
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((ele) => ele.id !== id));
  };
  return (
    <>
      {todo.map((ele) => {
        return (
          <div key={ele.id} style={{ display: "flex" }}>
            <input
              type="checkbox"
              checked={ele.status}
              onChange={() => handleChecked(ele.id)}
            />
            <h1 style={{ textDecoration: ele.status ? "line-through" : "" }}>
              {ele.title}
            </h1>
            <button onClick={() => handleDelete(ele.id)}>Delete</button>
          </div>
        );
      })}

      <input
        type="text"
        placeholder="Write Something"
        value={task}
        onChange={handleChange}
      />

      <button onClick={handleClick}>+</button>
    </>
  );
};
export default Todo;
