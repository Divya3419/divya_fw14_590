import React, { useEffect, useState } from "react";
import { loginApi } from "../store/auth/auth.actions";

import {useDispatch, useSelector} from "react-redux"

import {useLocation,useNavigate} from "react-router-dom"

const Login = () => {
  const [login,setLogin]=useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",

  })

  const dispatch=useDispatch()
const {isAuthenticated}=useSelector((state)=> state.auth)
const location=useLocation()
const navigate=useNavigate();



  const handleSubmit=(e)=>{
    e.preventDefault();
   console.log(login)
   dispatch(loginApi())
  }

  const handleChange=(e)=>{
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  }

  useEffect(()=>{
if(isAuthenticated){
  navigate(location.state.pathname || "/",{replace:true})
}
  },[navigate,isAuthenticated])


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-cy="login-email" name="email" type="email" value={login.email} onChange={handleChange}/>
        <br />
        <input data-cy="login-password" name="password" type="password" value={login.password} onChange={handleChange} />
        <br />
        <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
