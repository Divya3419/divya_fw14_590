import React,{useState} from 'react'
import style from './Counter.module.css'
const Counter = ({initialvalue}) => {
  const [count,setCount]=useState(+(initialvalue))
  return (
    <div>
      {count%2==0 ?
     <h1 style={{color:"green"}}>Counter :{count}</h1>:
     <h1 style={{color:"red"}}>Counter :{count}</h1>}
      <button className={style.btn} onClick={()=> {setCount(count+1)}}>Increment</button>
      <button className={style.btn} onClick={()=> {setCount(count-1)}}>Decerement</button>
      <button className={style.btn} onClick={()=> {setCount(count*2)}}>Double</button>

      </div>
  )
}

export default Counter
