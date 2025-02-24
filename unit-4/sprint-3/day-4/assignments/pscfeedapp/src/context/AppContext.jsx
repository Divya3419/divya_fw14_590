import { createContext, useReducer, useState } from "react";

export const AppContext=createContext()
const initialstate={
    isAuth:false,
    token:null
}
const reducer=(state,action)=>{
switch (action.type){
    case "LOGIN_SUCCESS":{
        return{
            ...state,
            isAuth:true,
            token:action.token
        }

        }
        case "LOGOUT_SUCCESS":{
            return{
                ...state,
                isAuth:false,
                token:null
            }
    
            }
            case "LOGIN_FAILURE":{
                return{
                    ...state,
                    isAuth:false,
                    token:null
                }
        
                }  
       default: {
       return state 
       }         
}
}
export const AppProvider=({children})=>{

    const[state,dispatch]=useReducer(reducer,initialstate)


    return(
    <AppContext.Provider value={{state,dispatch}}>{children}</AppContext.Provider>
    )
}