
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getTodos } from '../store/action'
import Todoinput from './Todoinput'

const Todo = () => {
const dispatch=useDispatch()
const todos=useSelector((state)=> state.todos)

   
    useEffect(()=>{
        if(todos?.length===0){
           dispatch(getTodos)
          
        }
    },[])

    //console.log(todos)
  return (
    <div>
        Todo
        <Todoinput/>
        {todos?.map((ele)=>{
            return <div key={ele.id}>{ele.title}</div>
        })}
        </div>
  )
}

export default Todo