import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'

const Todo = () => {
    const[todo,setTodo]=useState("")
    const {addTodo,todoList}=useContext(TodoContext)

    const handleChange=(e)=>{
      setTodo(e.target.value)
    }
  return (
    <div>
        <h1>Todo</h1>
        <input type="text" value={todo} placeholder="Enter Todo" onChange={handleChange}/>
        <button onClick={()=>{
            addTodo(todo)
            console.log(todo)
            setTodo("")
        }}>Add Todo</button>

        {todoList.map((ele)=>(<div>{ele.text}</div>))}
    </div>
  )
}

export default Todo