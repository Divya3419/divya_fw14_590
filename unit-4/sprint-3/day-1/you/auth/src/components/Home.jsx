import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const Home = () => {
    const{logout,isAuth}=useContext(AuthContext)

  return (
    <div>Home:
        <p>{isAuth.token}</p>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home