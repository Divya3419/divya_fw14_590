import React,{createContext} from 'react'
import {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const navigate=useNavigate();
    const[isAuth,setAuth]=useState(false)
const {state}=useLocation()

    // const[token,setToken]=useState("");

    // const login=async()=>{

    //     let res= await fetch(`https://reqres.in/api/login`,{
    //         method:"POST",
    //         headers:{
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             "email": "eve.holt@reqres.in",
    //             "password": "cityslicka"
    //         })
    //     })
    //     let data=await res.json();
    //     console.log(data);
    //     setToken(data.token);

    // }
const login=()=> {
    setAuth(true)
    if(state.from){
        navigate(state.from,{replace:true})
    }
    else{
    navigate("/")
    }
}
    const logout=()=>{
        setAuth(false);
        navigate("/")
    }
    return(
      <AuthContext.Provider value={{isAuth,login,logout}}>
          {children}
      </AuthContext.Provider>  
    )
}