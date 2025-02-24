import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Pin from './Pin'
const PinInput = ({length,onChangefirst}) => {
  
    const[inputBox]=useState(new Array(length).fill(1))
    const inputRef=useRef([])
    // for data show for every stage
    const[inputValue,setInputValue] =useState(
      new Array(length).fill(""))
      
    //console.log(inputRef.current)

    const handleChange=(e,index)=>{
      inputValue[index]=e.target.value
      setInputValue(inputValue)
      if(e.target.value.length && index<length-1){
        inputRef.current[index+1].focus()
      }
      onChangefirst(inputValue.join(""))
//console.log(inputValue)
    }

    const handleBackspace=(e,index)=>{
      if(index >0){
        inputRef.current[index-1].focus()
      }
      inputValue[index]=e.target.value
      setInputValue(inputValue)
      onChangefirst(inputValue.join(""))
      
    }


    const handlePaste=(e)=>{
      e.preventDefault();
const data=e.clipboardData
.getData("text")
.split("")
.filter((ele,index)=> index<length)
data.forEach((value,index)=>{
  inputValue[index]=value
  inputRef.current[index].value=value
  if(index<length-1){
    inputRef.current[index+1].focus()
  }
})
    }
  return (

    <div style={{display:"flex",justifyContent:"center"}} onPaste={handlePaste}>
        {inputBox.map((ele,index)=>{
            return <Pin ref={(element)=>{
              // console.log(element);
              inputRef.current[index]=element
            }}
             key={index} 
            onChangesec={(e)=>handleChange(e,index)}
            handleBackspace={(e)=>handleBackspace(e,index)}
            />
        })}
    </div>
  )

}


PinInput.propTypes={
length:PropTypes.number.isRequired,
onChangefirst: PropTypes.func
}


export default PinInput