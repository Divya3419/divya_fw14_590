
import {GET_TODOS_ERROR,GET_TODOS_SUCCESS,GET_TODOS_LOADING} from "./todoAction"




const initialState2={
    loading:false,
error: false,
todos2: []
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
        // const updateTodo=[...state.todos2,action.payload]
        // saveData("todos",updateTodo)
        return{
            ...state,
            loading:false,
            error: false,
            todos2:action.payload
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