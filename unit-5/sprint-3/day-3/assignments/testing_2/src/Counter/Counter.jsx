import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
  return (
    <div>
        <h3>Count is {count}</h3>
        <button data-testid="INC" onClick={()=>setCount(count+5)}>ADD</button>
        <button data-testid="DEC" onClick={()=>setCount(count-5)}>REDUCE</button>
        
    </div>
  )
}

export default Counter
