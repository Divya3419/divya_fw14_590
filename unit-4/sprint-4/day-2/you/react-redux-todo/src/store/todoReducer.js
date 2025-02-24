import { ADD_TODO, ADD_TODO_ERROR, ADD_TODO_LOADING, 
    COMPLETE_TODO, DELETE_TODO, 
    GET_TODO, GET_TODO_ERROR, GET_TODO_LOADING, UPDATE_TODO } from "./actiontypes";

let initialState={
    addtodos:{
        data:{},
        isLoading:false,
        isError:false,
    
    },
    gettodos:{
        data:[],
    isLoading:false,
    isError:false,

    }
    
}
export const todoReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_TODO:{
return{...state,
    gettodos:{
        ...state.gettodos,
        isLoading:false,
    data:payload

    }
    }
        }

        case GET_TODO_ERROR:{
            return{...state,
                gettodos:{
                    ...state.gettodos,isError:true,
                    isLoading:false,
                }
                
            }
        }

        case GET_TODO_LOADING:{
            return{...state,
                gettodos:{
                  ...state.gettodos,isLoading:true
                }
                
            }
        }

       case ADD_TODO:{
return{...state,
    gettodos:{
        data:[...state.gettodos.data,payload]
    },
    addtodos:{
        ...state.addtodos,
        isLoading:false,
    data:payload

    }
    }
        }

        case ADD_TODO_ERROR:{
            return{...state,
                addtodos:{
                    ...state.addtodos,isError:true,
                    isLoading:false,
                }
                
            }
        }

        case ADD_TODO_LOADING:{
            return{...state,
                addtodos:{
                  ...state.addtodos,isLoading:true
                }
                
            }
        }


 
case DELETE_TODO:{
     return{...state}
        }
        
 case COMPLETE_TODO:{
     return{...state}
         }
                                
 case UPDATE_TODO:{
    return{...state}
     }

default:{
    return state
}
    }
}