import axios from 'axios'
import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodoRequest, addTodosFailure, addTodosSuccess } from '../store/action'
const AddTodo = () => {
  const[todo,setTodo]=useState("")
  const dispatch=useDispatch()

  const addTodo=(payload)=>{
dispatch(addTodoRequest())
axios.post("http://localhost:8080/todos",payload)
.then((r)=>dispatch(addTodosSuccess(r.data)))
.catch((e)=>dispatch(addTodosFailure(e)))
  }

  const handleClick=()=>{
if(todo){
  const payload={title:todo,completed:false}
  addTodo(payload)
  setTodo("")
}
  }
  return (
    <div>
      <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
      <button onClick={handleClick}>add</button>
    </div>
  )
}

export default AddTodo