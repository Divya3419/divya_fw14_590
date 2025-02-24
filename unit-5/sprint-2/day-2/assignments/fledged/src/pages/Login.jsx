import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { login } from '../store/AuthReducer/action'

const Login = () => {
const [email,setEmail]=useState("eve.holt@reqres.in")
const[password,setPassword] = useState("cityslicka")
const dispatch =useDispatch()
const navigate=useNavigate()
const location=useLocation()
const from=location.state?.from?.pathname || "/"

const handleSubmit=(e)=>{
  e.preventDefault();
  
  if(email && password){
    dispatch(login({email, password}))
    .then((r)=>{
      if(r.type==="AUTH_SUCCESS"){
navigate(from,{replace:true})
      }
    })
  }
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User Email</label>
        <input type="email"
        value={email} 
        onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <label>User Password</label>
        <input type="password"
         value={password} 
         onChange={(e)=>setPassword(e.target.value)} />
      <br />
      <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login