import React,{useState} from 'react'
import {v4 as uuid} from 'uuid'
import {useDispatch,useSelector} from 'react-redux'
///import { addTodo } from '../../redux/Todo/todoAction.js';
import {getTodosloading,getTodoserror,getTodossuccess} from "../../redux/Todo/todoAction.js"


const Todoinput = () => {
    const[title,setTitle]=useState(" ");
    
    const dispatch=useDispatch()

    const handleAdd=()=>{
      const payload={
          id:uuid(),
          title,
          status: false,

      }  
     
          fetch(`http://localhost:3000/todos`,{
              method: "POST",
              body:JSON.stringify(payload),
              headers: {
                "content-type": "application/json"
              }
            
            })
            .then(()=>{dispatch(getTodosloading())
              fetch(`http://localhost:3000/todos`)
              .then((res)=>res.json())
              .then((res)=>dispatch(getTodossuccess(res)))
              .catch((error)=>dispatch(getTodoserror()))
            })
      

      setTitle("");

    }
  return(
    <div>
        <input type="text"
         value={title} 
         onChange={(e)=>setTitle(e.target.value)} />


        <button onClick={handleAdd}>add</button>
    </div>
  )
}

export default Todoinput