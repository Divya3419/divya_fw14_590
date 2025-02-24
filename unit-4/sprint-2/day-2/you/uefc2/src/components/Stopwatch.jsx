import React,{useState,useRef} from 'react'

const Stopwatch = () => {
const timerid=useRef(null)
    const[stop,setStop]=useState(0)
    
    const start=()=>{
        if(!timerid.current){
       let id= setInterval(()=>{
            setStop((prev)=>prev+1)
        },1000)
        timerid.current=id
    }
    }

    const pause=()=>{
        clearInterval(timerid.current)
        timerid.current=null
    }
    const reset=()=>{
        clearInterval(timerid.current)
        setStop(0)
        timerid.current=null
    }
  return (
    <div>Stopwatch:{stop}
        <button onClick={start}>start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pause}>pause</button>
    </div>
  )
}

export default Stopwatch