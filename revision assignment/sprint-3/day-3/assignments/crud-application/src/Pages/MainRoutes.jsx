import React from 'react'
import {Route, Routes} from "react-router-dom"
import SideBar from '../components/SideBar'
import RequiredAuth from '../hoc/RequiredAuth'
import HomePage from './HomePage'
import Login from './Login'
import SignUp from './SignUp'

import {Stack} from "@chakra-ui/react"
const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={
            <RequiredAuth>
              <Stack direction="row">
             <SideBar/>
            <HomePage/>
            </Stack>
            </RequiredAuth>
            }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes