import React from 'react'

const TodoItem = ({title,id,status}:TodoItemProps) => {
  return (
    <div>
        <p>{id}</p>
        <h1>{title}</h1>
        <h2>{status}</h2>
    </div>
  )
}

export default TodoItem