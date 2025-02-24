import { ADD_TODOS_FAILURE, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, DELETE_TODOS_FAILURE, DELETE_TODOS_REQUEST, DELETE_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, TOGGLE_TODOS_FAILURE, TOGGLE_TODOS_REQUEST, TOGGLE_TODOS_SUCCESS } from "./action.type"

const initialState={
    todos:[],
    isLoading:false,
    isError:false,
}
export const todoReducer=(state=initialState,{type,payload})=>{
switch(type){
    case GET_TODOS_REQUEST:{
        return{...state,isLoading:true,isError:false}
    }
    case GET_TODOS_SUCCESS:{
return{...state,isLoading:false,isError:false,todos:payload}
    }
    case GET_TODOS_FAILURE:{
        return{...state,isLoading:false,isError:true}
    }
    case ADD_TODOS_REQUEST:{
        return{...state,isLoading:true,isError:false}
    }
    case ADD_TODOS_SUCCESS:{
        let newTodos=[...state.todos,payload]
return{...state,isLoading:false,isError:false,todos:newTodos}
    }
    case ADD_TODOS_FAILURE:{
        return{...state,isLoading:false,isError:true}
    }

    case TOGGLE_TODOS_REQUEST:{
        return{...state,isLoading:true,isError:false}
    }
    case TOGGLE_TODOS_SUCCESS:{

        let newtoggleTodos=state.todos.map((ele)=>
        ele.id===payload.id ? payload:ele
        )
return{...state,isLoading:false,isError:false,todos:newtoggleTodos}
    }
    case TOGGLE_TODOS_FAILURE:{
        return{...state,isLoading:false,isError:true}
    }
    
    case DELETE_TODOS_REQUEST:{
        return{...state,isLoading:true,isError:false}
    }
    case DELETE_TODOS_SUCCESS:{
const leftTodos=state.todos.filter(ele=>ele.id!==payload)
return{...state,isLoading:false,isError:false,todos:leftTodos}
    }
    case DELETE_TODOS_FAILURE:{
        return{...state,isLoading:false,isError:true}
    }
   
    default:
        return state
}
}