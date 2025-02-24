import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation ,Navigate} from 'react-router-dom'

const RequiredAuth = ({ children}) => {
    let location=useLocation()
    const isAuth=useSelector((state)=> state.AuthReducer.isAuth)
    ///console.log(isAuth)
    if(!isAuth){
return <Navigate to="/login" state={{from:location}}/>
    }
    return children
}

export default RequiredAuth