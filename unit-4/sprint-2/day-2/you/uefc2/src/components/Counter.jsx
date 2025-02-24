import React,{useState}  from "react"

export const Counter=()=>{
    const[count,setCount]=useState(0);

    return(
        <div>
            <h1>Counter :{count}</h1>
            <div>
                <button onClick={()=> setCount(count+1)}>Inc</button>
                <button onClick={()=> setCount(count-1)}>Dec</button>
            </div>
        </div>
    )
}