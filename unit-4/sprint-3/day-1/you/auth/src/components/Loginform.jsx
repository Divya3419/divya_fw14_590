import React,{useContext, useState} from 'react'
import { AuthContext } from '../Context/AuthContext'

export const Loginform = () => {
    const[form,setForm]=useState({})

    const{login}=useContext(AuthContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
        login({form})
        
    }

    const handleChange=(e)=>{
        let inputName=e.target.name;
        setForm({...form,[inputName]:e.target.value})
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <label>Name</label>
            <input type="text" name="usernname" onChange={handleChange}/>
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} />

            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Loginform