import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from '../store/action'

const Counter = () => {
    const dispatch=useDispatch()
    const count= useSelector((state)=> state.counter.count)
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={()=>dispatch(inc())}>+</button>
        <button onClick={()=>dispatch(dec())}>-</button>
    </div>
  )
}

export default Counter