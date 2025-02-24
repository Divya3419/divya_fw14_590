import React, { useState } from 'react'

interface TodoInputProps{
    handleAdd:()=>void
}
const TodoInput = ({handleAdd}:TodoInputProps) => {
    const[text,setText]=useState("")

    const handleChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
        setText(e.target.value)
    }

  return (
    <div>
        <input type="text" value={text} />
        <button>add</button>
    </div>
  )
}

export default TodoInput