import React, { useCallback, useState } from 'react'
import TodoItem from './TodoItem'
import {v4 as uuid} from "uuid"
const initialstate = [
{id:1,status:false,title:"taks1"},
{id:2,status:false,title:"taks2"},
{id:3,status:false,title:"taks3"}
]
const Todo = () => {
const[todos,setTodos]=useState(initialstate)
const[currtodos,setCurrTodos]=useState("")

const handleChange=(e)=>{
    setCurrTodos(e.target.value)
}

const handleClick=()=>{
    const payload={id:uuid(),status:false,title:currtodos}
    setTodos([...todos,payload])
    setCurrTodos("")

}

const handleToggle=useCallback((id)=>{
setTodos((prev)=>prev.map((ele)=>ele.id===id?{...ele,status:!ele.status}:ele))


},[])


const handleDelete=useCallback((id)=>{
setTodos((prev)=>prev.filter((ele)=>ele.id!==id))


},[])
  return (
    <div>
       <h1>Todo</h1> 
        <input type="text" value={currtodos} onChange={handleChange}/>
        <button onClick={handleClick}>add</button>
        {todos.map((ele)=>{
            return <TodoItem key={ele.id} {...ele}
            handleDelete={handleDelete} handleToggle={handleToggle}/>
        })}
        </div>
  )
}

export default Todo