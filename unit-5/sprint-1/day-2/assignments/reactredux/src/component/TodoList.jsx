import React from 'react'
import {Link} from "react-router-dom"
const TodoList = ({todoList}) => {
    
  return (
    <div>
        {todoList ?.map((ele)=>{
            return <div key={ele.id}>
                <Link to={`/todos/${ele.id}`}><div>{ele.title}</div></Link>
               
            </div>
           
        })}
    </div>
  )
}

export default TodoList