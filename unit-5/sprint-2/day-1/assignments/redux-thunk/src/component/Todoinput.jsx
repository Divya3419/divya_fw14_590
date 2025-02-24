import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodosFailure, addTodosRequest, addTodosSuccess, getTodos } from '../store/action'

import axios from "axios"

const Todoinput = () => {

    const[inputTodo,setinputTodo]=useState("")
const dispatch=useDispatch()

    const handleAdd=()=>{
const payload={
    title:inputTodo,
    status: false,
}
setinputTodo("")
dispatch(addTodosRequest())
        axios.post("http://localhost:8080/todos",payload)
        .then((r)=>dispatch( addTodosSuccess(r.data)))
         .then(()=>dispatch(getTodos))
        .catch((e)=>dispatch(addTodosFailure(e)))
       
    }
  return (
    <div>
        <input type="text" value={inputTodo} onChange={(e)=>setinputTodo(e.target.value)} />
        <button onClick={handleAdd}>add</button>
    </div>
  )
}

export default Todoinput