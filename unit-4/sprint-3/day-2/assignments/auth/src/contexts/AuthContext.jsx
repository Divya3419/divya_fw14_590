import React,{useState,createContext} from 'react'

 export const AuthContext=createContext();

export const AuthProvider=({children})=>{

const[isLogin,setisLogin]=useState(false);

const login=()=>{
    setisLogin(true);
}
const logout=()=>{
    setisLogin(false);
}
// for token
const token=()=>{
postdata()

}
let postdata=async()=>{
    let res=await fetch(`https://reqres.in/api/login`,{
        method:"POST",
        headers:{"content-type": "application/json"},
        body: JSON.stringify({
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        })
    });
    let data=await res.json();
    setisLogin(data);
    console.log(data)
}

    return(
        <AuthContext.Provider value={{isLogin,login,logout,token}}>
            {children}
        </AuthContext.Provider>
    )
}