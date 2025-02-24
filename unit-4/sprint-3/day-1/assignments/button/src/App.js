
import React,{useContext,useReducer} from 'react'
import Body from './componment/Body'
import Navbar from './componment/Navbar'
import {ThemeContext} from "./Context/ThemeContext"
import css from "./App.css";

const reducer=(counter,action)=>{
switch (action.type) {
  case "Increment":{
    return  counter+1
  }
  case "Decerement":{
    return counter-1
  }
  default:{
    return counter
  }
}

}
function App(){
  const[counter,dispatch]=useReducer(reducer,0)
  const {isLight}=useContext(ThemeContext)
  return(
    
  <div className={`App ${isLight ? 'light':'dark'}`}>
    counter:{counter}

    <button onClick={()=> dispatch({type:"Decerement"})}>-</button>
    <button onClick={()=> dispatch({type:"Increment"})}>+</button>
  

{/* <Button/> */}


<Navbar/>
<Body/>
</div>
  );
}

export default App