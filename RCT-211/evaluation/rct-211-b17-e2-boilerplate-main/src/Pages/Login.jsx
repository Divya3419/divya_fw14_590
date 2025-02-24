import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const[email,setEmail]=useState("eve.holt@reqres.in")
  const[password,setPassword]=useState("cityslicka")

  
  const dispatch=useDispatch()
  const location=useLocation()
const from=location.state?.from?.pathname || "/"

  const navigate=useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email && password){
      dispatch(login({email,password}))
      .then((r)=>{
        if(r.type==="LOGIN_SUCCESS"){
  navigate(from,{replace:true})
        }
      })

    }
  }
 // console.log(login)
  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-cy="login-email" 
          type="email"
          value={email} 
          onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input data-cy="login-password"
          type="password"
          value={password}
           onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button type="submit" data-cy="login-submit">
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
