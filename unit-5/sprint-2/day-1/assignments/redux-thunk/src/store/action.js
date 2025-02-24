import axios from "axios"
import { ADD_TODOS_FAILURE, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./action.type"


export const getTodos=(dispatch)=>{
    dispatch(getTodosRequest())
    axios.get("http://localhost:8080/todos")
    .then((r)=>dispatch( getTodosSuccess(r.data)))
    .catch((e)=>dispatch(getTodosFailure(e)))
}
export const getTodosRequest=()=>{
    return{type:GET_TODOS_REQUEST}
}

export const getTodosSuccess=(payload)=>{
    return{type:GET_TODOS_SUCCESS,payload}
}

export const getTodosFailure=()=>{
    return{type:GET_TODOS_FAILURE}
}

//add todo
export const addTodosRequest=()=>{
    return{type:ADD_TODOS_REQUEST}
}

export const addTodosSuccess=(payload)=>{
    return{type:ADD_TODOS_SUCCESS,payload}
}

export const addTodosFailure=()=>{
    return{type:ADD_TODOS_FAILURE}
}

