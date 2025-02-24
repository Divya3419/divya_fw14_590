import React, { useState } from 'react'
import Header from './Header'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
interface TodoItemProps{
    id:number,
    title:string,
    status:boolean,
}

const Todo = () => {
    const[todos,setTodos]=useState([])
    const handleAdd=(title:string)=>{

    }
  return (
    <div>
<Header label="Todos"/>
<TodoInput onClick={handleAdd}/>

{todos.map((ele)=>{
    return <TodoItem key={ele.id} {...ele}/>
})}
    </div>
  )
}

export default Todo