import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Cart = () => {
  const {addtocart}=useContext(CartContext)
  return (
    <div>Cart
        <button onClick={addtocart}>add to cart</button>
    </div>
  )
}

export default Cart