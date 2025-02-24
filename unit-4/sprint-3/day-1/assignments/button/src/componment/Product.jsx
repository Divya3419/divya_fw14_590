import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import Cart from './Cart'

const Product = () => {
  const {isAuth}=useContext(AuthContext)
  return (
    <div>Product :{isAuth ? "welcome name" :"please first login the page"}
        <Cart/>
    </div>
  )
}

export default Product