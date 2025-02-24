import { getLocalData, saveLocalData } from "../../utlis/localStorage"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, 
    REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS }
     from "./action.type"

const initialState={
    isAuth:getLocalData("token")? true: false,
    token: getLocalData("token") || "",
    isLoading:false,
    isError: false,
}

export const  reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case REGISTER_REQUEST:{
            return{...state,isLoading:true}
        }
        case REGISTER_SUCCESS:{
            return{...state,isLoading:false}
        }
        case REGISTER_FAILURE:{
            return{...state,isLoading:false,isError:true}
        }

        case LOGIN_REQUEST:{
            return{...state,isLoading:true}
        }
        case LOGIN_SUCCESS:{
            saveLocalData("token",payload)
            return{...state,isLoading:false,isAuth:true,token:payload}
        }
        case LOGIN_FAILURE:{
            return{...state,isLoading:false,isError:true.valueOf,isAuth:false,token:""}
        }
        default:
            return state
    }
}