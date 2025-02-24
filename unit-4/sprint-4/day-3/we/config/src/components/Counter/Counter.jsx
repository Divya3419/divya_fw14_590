import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import{increment,decrement,reset} from "../../redux/Counter/action"

export const Counter = () => {
  const count= useSelector((state)=> state.count.count)

  const dispatch = useDispatch()

  return (
    <div> 
      <h1>count:{count}</h1>
      <button onClick={()=>dispatch(increment(3))}>inc by 3</button>
      <button onClick={()=>dispatch(decrement(2))}>dec by 2</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
    
    </div>
  )
}

