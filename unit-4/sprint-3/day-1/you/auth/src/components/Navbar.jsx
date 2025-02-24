import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import Loginform from './Loginform'
import { Button, Outer } from './Styled'

const Navbar = () => {
    const {isAuth,login,logout}=useContext(AuthContext)

  return (
    <Outer>
        <Button onClick={login}>login</Button>
        
        </Outer>
  )
}

export default Navbar
