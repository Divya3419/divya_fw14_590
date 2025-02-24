import React from 'react'
import Home from './Home'
import {Route, Routes} from "react-router-dom"
import SingleTodo from '../component/SingleTodo'
import EditTodo from '../component/EditTodo'
const Routing = () => {
  return (
    <div>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/todos/:id" element={<SingleTodo/>}/>
  <Route path="/todos/:id/edit" element={<EditTodo/>}/>
</Routes>

    </div>
  )
}

export default Routing