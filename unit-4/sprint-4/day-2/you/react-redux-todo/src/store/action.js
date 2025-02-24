import {INCREMENT,DECREMENT,
     ADD_TODO, COMPLETE_TODO, DELETE_TODO, UPDATE_TODO, GET_TODO,
      GET_TODO_ERROR, GET_TODO_LOADING, ADD_TODO_ERROR, ADD_TODO_LOADING} from './actiontypes';
import axios from 'axios'

// counter
export const inc=()=>({type: INCREMENT})
export const dec=()=>({type: DECREMENT})

//todo



export const addtodo=(dispatch,payload)=>{
    dispatch({type: ADD_TODO_LOADING})
    axios
    .post("http://localhost:8080/todos",payload)
    .then((r)=> dispatch({type:ADD_TODO,payload:r.data}) )
    .catch(()=>dispatch({type:ADD_TODO_ERROR}))
    
}

export const completetodo=(id)=>({type: COMPLETE_TODO,payload:id})

export const deletetodo=(id)=>({type: DELETE_TODO,payload:id})

export const updatetodo=(payload)=>({type: UPDATE_TODO,payload})



export const gettodo=(dispatch)=>
{
    dispatch({type:GET_TODO_LOADING})
    return axios
    .get("http://localhost:8080/todos")
    .then((r)=> dispatch({type:GET_TODO,payload:r.data}))
    .catch(()=> dispatch({type:GET_TODO_ERROR}))
}
