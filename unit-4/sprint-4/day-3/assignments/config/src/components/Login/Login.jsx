import React,{useState} from 'react'
import axios from 'axios'
import { loginFailure, loginSuccess } from '../../redux/Auth/loginAction'
import {shallowEqual, useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'



const Login = () => {

  const {isLoading,isError}=useSelector((state)=> state.auth,shallowEqual)
console.log(isLoading)
const[email,setEmail]=useState("")

const[password,setPassword]=useState("")

const dispatch=useDispatch();
const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();

        
        axios.post(`https://reqres.in/api/login`, {
          email,
          password,
        })
        .then((response) => {
          dispatch(loginSuccess(response.data.token));
          navigate("/");
        })
        .catch((error) => {
          dispatch(loginFailure(error));
        });
        }
    

  return (
    <div>
        <h1>Login form</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
        <br/>
        <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <input type="submit" />
        </form>
    </div>
  )
}

export default Login