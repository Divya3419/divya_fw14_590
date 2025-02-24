import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { getTodoserror, getTodosloading, getTodossuccess } from '../../redux/Todo/todoAction'

const Todoitem = ({title,id}) => {
  const navigate=useNavigate();
  const dispatch=useDispatch()
const handleDelete=()=>{
  

fetch(`http://localhost:3000/todos/${id}`,{
  method: 'DELETE',
  headers:{
    "content-type": "application/json"
  },

})
.then(()=>{dispatch(getTodosloading())
  fetch(`http://localhost:3000/todos`)
  .then((res)=>res.json())
  .then((res)=>dispatch(getTodossuccess(res)))
  .catch((error)=>dispatch(getTodoserror()))
})
}

const handleClick=()=>{
navigate("/todo/:id",{state:{title}})


}
  return (
    <div style={{border:"2px solid black"}} >
      <h3 onClick={handleClick}>{title}</h3>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Todoitem