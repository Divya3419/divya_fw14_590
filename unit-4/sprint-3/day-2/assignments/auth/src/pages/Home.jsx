import React from 'react'
import {useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext'

const Home = () => {
const { logout,isLogin} = useContext(AuthContext);

return (
    <div>
        <h1>Home :</h1>
        <h1>{isLogin.token}</h1>
    <button onClick={logout} >Logout</button>
    </div>
  )
}

export default Home