import React,{useState,useEffect} from 'react'

const Timer = () => {
    const[timer,setTimer]=useState(10)

    useEffect(()=>{
        
       let id= setInterval(()=>{
        if(timer<1){
            clearInterval(id)
        }
else
           setTimer(timer-1)
        },1000)
        return()=>{
            clearInterval(id)
        }
        
    },[timer])
  return (
    <div>Timer:
        {timer}
    </div>
  )
}

export default Timer