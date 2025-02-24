import React,{useEffect, useState} from 'react'
import Todoinput from './Todoinput';

const Todos = () => {
    const[todos,setTodos]=useState([]);
    useEffect(()=>{
        fetch(``)
        .then((r)=>r.json())
        .then((d)=>setTodos(d));
    },[])

  return (
    <div>Todos:{todos.length-1}

    
    <div>
<Todoinput/>
    </div>
    </div>
  )
}

export default Todos