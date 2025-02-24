import React, { createContext,useContext,useState } from "react";
import {AuthContext} from "../Context/AuthContext"
export const CartContext = createContext();

export const CartProvider=({children})=>{
    const {isAuth}=useContext(AuthContext);
    const[count,setCount]=useState(0)

    const addtocart=()=>{
        setCount(count+1)
    }

    
    const buy=()=>{
        if(isAuth)
        console.log("buy")
        else 
        console.log("first login")
    }
    return <CartContext.Provider value={{count,addtocart,buy}}>
    {children}
    </CartContext.Provider>
}
