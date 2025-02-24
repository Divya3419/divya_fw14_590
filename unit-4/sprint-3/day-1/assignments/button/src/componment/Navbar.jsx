import React,{useContext} from 'react'
import Wishlist from './Wishlist'
import {AuthContext} from '../Context/AuthContext'
import { CartContext } from '../Context/CartContext'
import { ThemeContext } from '../Context/ThemeContext'

const Navbar = () => {
  const {isAuth,login,logout}=useContext(AuthContext)
  const{buy}=useContext(CartContext)
  const {toggleTheme,isLight}=useContext(ThemeContext)
  return (
    <div>Navbar
      <button onClick={()=>{
        if(isAuth)
        logout()
        else 
        login("Ok","Done")
      }} >
        {isAuth ?"Login":"Logout"}</button>

        <button onClick={buy}>buy</button>
        
  <button onClick={toggleTheme}>{`make ${isLight ? "Dark":"Light"}`}
  </button>
       {isAuth && <Wishlist/>} 
    </div>
  )
}

export default Navbar