import React, { useState,useContext } from 'react'
import axios from 'axios'
import {AppContext} from "../context/AppContext"
import { Navigate } from 'react-router-dom'

const Login = () => {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const {state,dispatch}=useContext(AppContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
      
        axios({
            url:"https://reqres.in/api/login",
            method:"POST",
            data:{
            email,password
                
            },
        })
        .then((r)=>{
            alert("Login Successful")
          dispatch({
            type:"LOGIN_SUCCESS",
            token:r.data.token
          })
        })
        .catch((err)=>{
            console.log(err.message)
            alert("error")
        })

    }
if(state.isAuth){
  return <Navigate to="/users"/>
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
    <input type="text" name="email" placeholder="Enter your email address" onChange={(e)=>setEmail(e.target.value)}/>
    <input type="current-password" name="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
    <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login