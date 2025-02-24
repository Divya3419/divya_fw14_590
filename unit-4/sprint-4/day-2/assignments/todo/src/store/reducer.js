import React from 'react'
import {GET_TODOS,DELETE_TODOS} from './actiontype'


const reducer = (state,action) => {
  switch(action.type) {
case GET_TODOS:{
  return{
    ...state,
    todos:action.payload,
  }
}
case DELETE_TODOS:{
  return{
    ...state,
    todos:state.todos.filter(todo => todo.id !== action.payload),
  }
}
  }
  
}

export default reducer