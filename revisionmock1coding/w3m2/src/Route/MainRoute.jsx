import React from 'react'
import Navbar from '../Components/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import Employees from '../Pages/Employees'
const MainRoute = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/employees" element={<Employees/>}/>
         </Routes>
    </>
  )
}

export default MainRoute