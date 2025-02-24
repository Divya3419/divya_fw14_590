
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addtodo, gettodo } from '../store/action'

const Todo = () => {
    const ref=useRef()
    const dispatch =useDispatch()
    const {data:todos,isLoading,isError}= useSelector((state)=> state.todo.gettodos)

    const addNew=()=>{
        let value=ref.current.value
       // console.log(value)
        addtodo(dispatch,{
value:value,
isCompleted:false,
        })
       ref.current.value=null;
       
    }

 useEffect(()=>{
gettodo(dispatch)
    },[])

    if(isLoading) return <h1>LOADING....</h1>

    else if(isError) return <h1>somthing went wrong</h1>


  return (
    <div>
       <input ref={ref} type="text" />
       <button onClick={addNew}>add</button> 
       <br />
       <br />
       {todos.map((ele)=>(
           <div key={ele.id}>
             <Link to={`/todo/${ele.id}`}>{ele.value}</Link> 
             </div>
       ))}
    </div>
  )
}

export default Todo