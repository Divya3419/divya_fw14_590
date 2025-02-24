import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./action.type"


const initialState={

    isAuth:false,
    token:"",
    isLoading:false,
    isError:false,
}

export const AuthReducer = (state = initialState,{type,payload})=>{
switch(type){
    case AUTH_REQUEST:{
        return{...state,isLoading:true,isError:false}
    }
    case AUTH_SUCCESS:{
        return{...state,isLoading:false,isError:false,isAuth:true,token:payload}
    }
    case AUTH_FAILURE:{
        return{...state,isLoading:false,isError:true,isAuth:false,token:""}
    }
    default:
        return state
}

}