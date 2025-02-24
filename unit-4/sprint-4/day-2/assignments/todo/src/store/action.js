
import {GET_TODOS,DELETE_TODOS} from './actiontype'

export const getTodos=async(dispatch)=>{
    let r=await fetch(`http://localhost:3000/todo`);
    let d=await r.json();
    dispatch({
        type:GET_TODOS,
        payload:d,
    })
}

export const deleteTodos=async(dispatch,id)=>{
    let r=await fetch(`http://localhost:3000/todo/${id}`);

    dispatch({
        type:DELETE_TODOS,
        payload:id,
    })
}