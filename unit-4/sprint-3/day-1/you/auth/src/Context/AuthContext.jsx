import { createContext, useEffect, useState } from "react";

export const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const[isAuth,setAuth]=useState(false)

    const login=()=>{
        // call fake api
        fetch("https://reqres.in/api/login",{
            method:"POST",
             headers:{"content-type": "application/json"},
             body: JSON.stringify({
                 "email": "eve.holt@reqres.in",
                "password": "cityslicka"
                    })
                }).then((r)=> r.json())
                .then((d)=>{
              setAuth(d.token)
              console.log(d)
              localStorage.setItem("token",d.token)
                })
    }
    
const logout=()=>{

    setAuth(false)
    localStorage.setItem("token","")
}

useEffect(()=>{
let token=localStorage.getItem("token")
if(token){
    setAuth(token)
}
},[])
    



    return(
        <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>
    )
}

