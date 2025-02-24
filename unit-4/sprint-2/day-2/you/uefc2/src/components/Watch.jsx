import React,{useEffect, useState} from 'react'
import styles from './Watch.module.css'
const Watch = (props) => {
    //console.log(props.time)
const[watch,setWatch]=useState(+(props.start))

useEffect(()=>{
  
 let id=setInterval(()=>{
   if(watch==(+(props.end))){
     setWatch(+(props.start))
   }
   else{
        setWatch(watch+1)
   }
    },1000)
    return ()=>{
        clearInterval(id)
    
}
    
},[watch])
  return (
    <div className={styles.time}>
      <h1>Watch :{watch}</h1>
    
    </div>
  )
}

export default Watch
