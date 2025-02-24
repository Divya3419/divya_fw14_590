import { createContext, useState } from "react";

export const ToggleContext=createContext()

export const ToggleProvider=({children})=>{
    const[toggle,setToggle]=useState("light")

    const toggleTheme= () => {
        if(toggle==="light"){
            setToggle("dark")
        }
        else{
            setToggle("light")
        }
    }
    return(
        <ToggleContext.Provider 
        value={{toggle,toggleTheme,isLight:toggle==="light"}}>
            {children}</ToggleContext.Provider>
    )
}