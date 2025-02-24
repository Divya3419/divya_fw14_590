import React,{useState} from 'react'

const Todo = () => {
    const[todo,setTodo]=useState("")
    const[data,setData]=useState([])
  return (
    <div>
     <h1>Todo</h1>
<input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
<button onClick={()=>setData([...data,{id:Date.now(),value:todo}])} >+</button>
    </div>
  )
}

export default Todo

