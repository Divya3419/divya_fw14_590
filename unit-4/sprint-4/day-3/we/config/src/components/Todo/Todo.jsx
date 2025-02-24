import Todoinput from "./Todoinput"
import Todoitem from "./Todoitem"
import { useSelector } from "react-redux"
import React from 'react'

export const Todo = () => {
 // const {todos}=useSelector((state) => state.todos)

 const {loading,error,todos2}=useSelector((state)=> state.todos2)
  //console.log(todos2)
    
  return  loading ? <h1>Loading...</h1> :error ? <h1>Error check your concections...</h1> :(
    <div>
      <Todoinput/>
      {todos2.map((item) => (
        <Todoitem key={item.id}  {...item}/>
    ))}
    </div>
  )
}

