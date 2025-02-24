import React from 'react'
import Home from '../pages/Home'
import {Routes,Route} from "react-router-dom"
import SingleProfile from '../pages/SingleProfile'
const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:id" element={<SingleProfile/>}/>
        </Routes>
    </div>
  )
}

export default MainRoute