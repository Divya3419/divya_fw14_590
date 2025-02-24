import { useState } from "react";

export const useCounter = ({initialValue,minValue,maxValue}) => {

const[count,setCount]=useState(initialValue)

const incCount=(value)=>{
    if(count<maxValue){
        setCount(count+value)
    }
    else{
        setCount(count)
    }

}

const decCount=(value)=>{
    if(count>minValue){
setCount(count-value)
    }
    else{
        setCount(count)
    }
   
}
return { count, incCount, decCount}

};
