import React,{useState} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import {useContext} from 'react'


const Loginform = () => {
    const [form,setForm]=useState({});

const {login,token}=useContext(AuthContext);


    const handleSubmit =(e)=>{
        e.preventDefault();
        login();
        token();
    }

    const  handleChange =(e)=>{
        const inputName=e.target.name;
setForm({...form,[inputName]:e.target.value});
    }
  return (
    <div>Loginform
    <div>
        <form onSubmit={handleSubmit} >
<div>
    <label>username</label>
    <input type="text" onChange={handleChange} name="username"/>
</div>
<div>
    <label >password</label>
    <input type="text" onChange={handleChange} name="password"/>
</div>
<div>
    <button type="submit">Login</button>
</div>
        </form>
    </div>
    </div>
  )
}

export default Loginform