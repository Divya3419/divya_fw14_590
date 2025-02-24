import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../component/Navbar'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Users from '../pages/Users'
import UsersPage from '../pages/UsersPage'
import PrivateRoute from './PrivateRoute'


const Allroutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/users" element={
            <PrivateRoute>
            <Users/>
            </PrivateRoute>
            
            }/>
            <Route path="/users/:id" element={
            <PrivateRoute>
            <UsersPage/>
            </PrivateRoute>
            
            }/>
        </Routes>
    </div>
  )
}

export default Allroutes