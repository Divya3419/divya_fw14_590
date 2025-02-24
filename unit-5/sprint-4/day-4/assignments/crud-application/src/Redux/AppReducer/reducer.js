import { GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./action.type"

const initialState={
    tasks:[],
    isLoading:false,
    isError:false
}

export const  reducer=(state= initialState,{type,payload})=>{
    switch(type){
        // case GET_TODOS_REQUEST:{
        //     return {...state,isLoading,isError,todos}
        // }
        // case GET_TODOS_SUCCESS:{
        //     return {...state,isLoading,isError,todos}
        // }
        // case GET_TODOS_FAILURE:{
        //     return {...state,isLoading,isError,todos}
        // }
        default:
            return state
    }
}