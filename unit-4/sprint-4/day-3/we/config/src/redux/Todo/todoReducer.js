import { ADD_TODO } from "./todoAction"
import {GET_TODOS_ERROR,GET_TODOS_SUCCESS,GET_TODOS_LOADING} from "./todoAction"

import { loadData, saveData } from "../../utils/localStorage"
// const initialState={
//     todos:loadData("todos") || []
// }

// export  const todoReducer = (state=initialState,action)=>{
//     switch(action.type){
//         case ADD_TODO:
//             const updateTodo=[...state.todos,action.payload]
//             saveData("todos",updateTodo)
//             return{
//                 todos:updateTodo
//                 }
//         default:
//             return state   ;     
//     }
// }



const initialState2={
    todos2:loadData("todos") || []
}

 export const todoReducer2=(state=initialState2,action) => {
    switch (action.type) {

case GET_TODOS_LOADING:
    return{
...state,
loading:true,
error: false,
todos2: []
    }

    case GET_TODOS_SUCCESS:
        const updateTodo=[...state.todos2,action.payload]
        saveData("todos",updateTodo)
        return{
            ...state,
            loading:false,
            error: false,
            todos2:updateTodo
        }
 case GET_TODOS_ERROR:
return{
    ...state,
    loading:false,
    error: true
}
    default:
      return   state
    }
}