import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, addbyx, dividebyx, multibyx, sub, subbyx } from '../Store/action'

const Counter = () => {
    const dispatch=useDispatch()
    const state=useSelector((state)=>state)
    //for calcluator
    const[data,setData]=useState(0)
  return (
    <div>
      <h1>CALCLUATOR</h1>
       <h1>{state.count}</h1> 
        <button onClick={()=>dispatch(add())}>+</button>
     <button onClick={()=>dispatch(sub())}>-</button>
     <br />
     
     <input type="number" value={data} onChange={(e)=>setData(e.target.value)} placeholder="Put value"/> <br />

     <button onClick={()=>dispatch(addbyx(+data))}>addbyx</button> <br />
     <button onClick={()=>dispatch(subbyx(+data))}>subbyx</button> <br />
     <button onClick={()=>dispatch(multibyx(+data))}>multibyx</button> <br />
     <button onClick={()=>dispatch(dividebyx(+data))}>dividebyx</button> 
    </div>
  )
}

export default Counter