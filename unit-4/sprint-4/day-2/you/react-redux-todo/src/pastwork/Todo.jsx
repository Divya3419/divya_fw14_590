import React from 'react'

const Todo = ({id,value}) => {

    const handleDelete=()=>{

    }
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Todo