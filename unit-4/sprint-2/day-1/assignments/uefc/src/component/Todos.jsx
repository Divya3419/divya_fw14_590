import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./Todo";

const Todos = () => {
  const [todovalue, setTodovalue] = useState("");
  const [todo, setTodo] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(1);

  const saveInfo = () => {
    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: todovalue,
        isCompleted: false,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        setTodo([...todo, d]);
        setTodovalue("");
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/todos?_page=${page}&_limit=${limit}`)
      .then((r) => {
        setTodo(r.data);
        setTotal(Number(r.headers["x-total-count"]));
      });
    // let data=async()=>{
    // let r=await axios.get("http://localhost:8080/todos")
    //   //console.log(r.data)
    //   setTodo(r.data)
    // }
    // data();
  }, [page, limit]);

  return (
    <div>
      <h1>Todos</h1>
      <input value={todovalue} 
      onChange={(e) => setTodovalue(e.target.value)} />
      <button onClick={saveInfo}>add</button>

      {todo.map((ele) => (
        <Todo key={ele.id} {...ele} />
      ))}
      <button disabled={page <= 1} onClick={() => {setPage(page - 1)}}>{`<`}</button>
      <select onChange={(e) => setLimit(Number(e.target.value))}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button
        disabled={total <= page * limit}
        onClick={() => {
          setPage(page + 1);
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default Todos;
