import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getTodoRequest, getTodosFailure, getTodosSuccess } from '../store/action'
import AddTodo from './AddTodo'
import TodoList from './TodoList'


const Todos = () => {
  const dispatch=useDispatch()
  const todos=useSelector(state=>state.todos)

  const getTodos=()=>{
    dispatch(getTodoRequest())
    axios
    .get("http://localhost:8080/todos") // or axios.get("/todos") and write pending code on index.js
    .then((r)=>dispatch(getTodosSuccess(r.data)))
    .catch((e)=>dispatch(getTodosFailure(e)))
  }
  useEffect(()=>{
    if(todos ?.length==0){
      getTodos()
    }

  },[])
  console.log(todos)
  
  return (
    <div>
      <h3>Todos</h3> 
      <AddTodo/>
      <TodoList todoList={todos}/>
         </div>
  )
}

export default Todos