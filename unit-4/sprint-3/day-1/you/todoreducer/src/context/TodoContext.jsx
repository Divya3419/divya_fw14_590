import { createContext, useReducer } from "react";


export const TodoContext=createContext()

const initialstate={
    todoList:[]
}

const reducer = (state,{type,payload}) =>{
    switch(type){
        case " ADD_TODO":
            return{
                todoList:[...state.todoList,{

                    text:payload,
                    completed:false
                }]
            }
        

        default: 
        return state
    }
}


export const TodoProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,initialstate)

    const value={
        todoList:state.todoList,
        addTodo:(data)=>{
            dispatch({type:"ADD_TODO",payload:data})
        }
    }
    return(
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    )
}