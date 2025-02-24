import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { deleteTodoRequest, deleteTodosFailure, deleteTodosSuccess, 
    toggleTodoRequest, toggleTodosFailure, toggleTodosSuccess } from '../store/action'
const SingleTodo = () => {
    const todos = useSelector(state=>state.todos)
const {id}=useParams()
const dispatch=useDispatch()
const navigate=useNavigate()
 const[currentTodo,setcurrentTodo]=useState({})

    const toggleStatus=(id,newStatus)=>{
dispatch(toggleTodoRequest())
axios.patch(`http://localhost:8080/todos/${id}`,{completed:newStatus})
.then((r)=>{
    dispatch(toggleTodosSuccess(r.data))
    navigate("/")
})
.catch((e)=>dispatch(toggleTodosFailure(e)))

    }
    const removeTodo=(id)=>{
        dispatch(deleteTodoRequest())
    axios.delete(`http://localhost:8080/todos/${id}`)
    .then((r)=>dispatch(deleteTodosSuccess(r.data)))
    .catch((err)=>dispatch(deleteTodosFailure(err)))
    }
    
useEffect(()=>{
   let currentTodo= todos.find((ele)=>ele.id===Number(id))
  currentTodo && setcurrentTodo(currentTodo)

},[todos,id])

    console.log(todos)


  return (
    <div>
        <h1>{currentTodo?.title} ,{currentTodo?.completed?"True":"False"}</h1>
        <button onClick={()=>toggleStatus(currentTodo.id,!currentTodo.completed)}>toggle</button>
        <button onClick={()=>removeTodo(currentTodo.id)}>Delete</button>
       <Link to={`/todos/${currentTodo.id}/edit`}><button>edit</button></Link>
        </div>
  )
}

export default SingleTodo