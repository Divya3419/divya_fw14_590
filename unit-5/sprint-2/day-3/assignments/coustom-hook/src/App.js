import logo from './logo.svg';
import './App.css';

import GitHubSearch from './component/GitHubSearch';
import useTimer from './component/useTimer';
import { useEffect, useState } from 'react';
import useThrottle from './component/useThrottle';


function App() {
  
  const ready=useTimer(5000)
  const[count,setCount]=useState(0)

  function debouncer(callback,delay){
    let debounceId
    return function(){
      debounceId && clearTimeout(debounceId)
      debounceId=setTimeout(()=>{
callback()
      },delay)

    }
  }

  const handleScroll=()=>{
    setCount((prev)=>prev+1)
  }
  useThrottle(()=>{
    console.log(count)
  },1000)
  useEffect(()=> {
window.addEventListener("scroll",debouncer(handleScroll,1000))
return()=>{
window.removeEventListener("scroll",debouncer(handleScroll,1000))
}
  },[])
    return (
    <div className="App">
      <h2>Assignment-1</h2>
      <h3>{ready ?"Ready":"Not Ready"}</h3>
      
      <h2>Assignment-2</h2>

         <GitHubSearch/>
         <div style={{position:"sticky",top:"100px"}}>
         <h3 > scroll count :{count}</h3>
         </div>
         

    </div>
  );
}

export default App;
