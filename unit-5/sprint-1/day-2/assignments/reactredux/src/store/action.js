import { ADD_TODOS_FAILURE, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS,
     DELETE_TODOS_FAILURE, DELETE_TODOS_REQUEST, DELETE_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, TOGGLE_TODOS_FAILURE, TOGGLE_TODOS_REQUEST, TOGGLE_TODOS_SUCCESS } from "./action.type"

export const getTodoRequest=()=>{
    return {type:GET_TODOS_REQUEST}
}

export const getTodosSuccess=(payload)=>{
return {type:GET_TODOS_SUCCESS,payload}
}

export const getTodosFailure=()=>{
return {type:GET_TODOS_FAILURE}
}   

//add
export const addTodoRequest=()=>{
    return {type:ADD_TODOS_REQUEST}
}

export const addTodosSuccess=(payload)=>{
return {type:ADD_TODOS_SUCCESS,payload}
}

export const addTodosFailure=()=>{
return {type:ADD_TODOS_FAILURE}
}

//toggle
export const toggleTodoRequest=()=>{
    return {type:TOGGLE_TODOS_REQUEST}
}

export const toggleTodosSuccess=(payload)=>{
return {type:TOGGLE_TODOS_SUCCESS,payload}
}

export const toggleTodosFailure=()=>{
return {type:TOGGLE_TODOS_FAILURE}
}

//delete

export const deleteTodoRequest=()=>{
    return {type:DELETE_TODOS_REQUEST}
}

export const deleteTodosSuccess=(payload)=>{
return {type:DELETE_TODOS_SUCCESS,payload}
}

export const deleteTodosFailure=()=>{
return {type:DELETE_TODOS_FAILURE}
}