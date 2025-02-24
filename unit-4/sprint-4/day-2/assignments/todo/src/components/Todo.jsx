import React from 'react'
import {useDispatch} from 'react-redux'


const Todo = ({id,value}) => {

  const dispatch=useDispatch()

  const handleDelete=async()=>{
    deleteTodos(dispatch,id);

  }
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Todo