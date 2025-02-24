import React from 'react'
import Todo from '../component/Todo'
import SingleTodo from './SingleTodo'

import {Route,Routes} from "react-router-dom"
const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Todo/>}/>
            <Route path="/todo/:id" element={<SingleTodo/>}/>            
        </Routes>
    </div>
  )
}

export default MainRoutes