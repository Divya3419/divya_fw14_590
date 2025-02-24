import { useState } from "react";



function Button(){
    const[state,setState]=useState("divya")

    const handleName=()=>{
        
        setState("punit");
    }
    return(
        <>
        <h1>{state}</h1>
        <button onClick={handleName}>Click</button>
        </>
        
    )
}
export default Button