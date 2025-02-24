import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navabar from '../component/Navabar'
import All from './All'
import Css from './Css'
import Html from './Html'
import Javascript from './Javascript'

const MainRoute = () => {
  return (
    <div>
      <Navabar/>
        <Routes>
            <Route path="/" element={<All/> }/>
            <Route path="/html" element={<Html/> }/>
            <Route path="/css" element={<Css/> }/>
            <Route path="/javascript" element={<Javascript/> }/>

        </Routes>
    </div>
  )
}

export default MainRoute