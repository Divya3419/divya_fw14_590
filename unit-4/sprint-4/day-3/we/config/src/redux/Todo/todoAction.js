//actiontype
export const ADD_TODO="ADD_TODO";

export const GET_TODOS_LOADING="GET_TODOS_LOADING";
export const GET_TODOS_SUCCESS="GET_TODOS_SUCCESS"
export const GET_TODOS_ERROR="GET_TODOS_ERROR";


//  action create


export const addTodo=(payload)=>({
    type:ADD_TODO,
    payload
})


export const getTodosloading=()=>({
    type:GET_TODOS_LOADING
})

export const getTodossuccess=(payload)=>({
    type:GET_TODOS_SUCCESS,
    payload
})

export const getTodoserror=()=>({
    type:GET_TODOS_ERROR
})



