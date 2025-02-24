import React from 'react'
import {Route, Routes} from "react-router-dom"
import Login from './Login'
import Books from './Books'
import EditBooks from './EditBooks'
import SingleBooks from './SingleBooks'
import RequiredAuth from '../component/RequiredAuth'
const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Books/>} />
            <Route path="/books/:id" element={<SingleBooks/>}/>
            <Route path="/books/:id/edit" element={
            <RequiredAuth>
            <EditBooks/>
            </RequiredAuth>
            }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<h2>page not found</h2> } />
        </Routes>
    </div>
  )
}

export default MainRoute