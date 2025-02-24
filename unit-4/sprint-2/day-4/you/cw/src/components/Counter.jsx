import React,{useState} from 'react';


const Counter1=()=>{
    const[count,setCount]=useState(0);
    let x=0;

    console.log("valueof x",x);


    return(
        <>
        <h1> Counter:  {count}</h1>
        <button onClick={()=>{setCount(count+1);
        x=x+1;
        console.log("new",x);
        }}>inc</button>
        <button onClick={()=>{setCount(count-1)}}>dec</button>
        </>
        
    )
}
export default Counter1;





