import React,{ useEffect} from 'react'
import  {useSelector, useDispatch } from 'react-redux';
import Todo from './Todo'
import Todoinput from './Todoinput'
import {getTodos} from '../store/action'

const Todos = () => {
    

    const todos = useSelector((state)=>state.todos)
    //now dispatch

    const dispatch = useDispatch();

    useEffect(()=>{
      getTodos(dispatch);

    },[])
  return (
    <div>Todos-size:{todos.length-1}
        <div>
            <Todoinput/>
        </div>
        {todos.map(ele=>
             <Todo key={ele.id} {...ele}/>)}
    </div>
  )
}

export default Todos
