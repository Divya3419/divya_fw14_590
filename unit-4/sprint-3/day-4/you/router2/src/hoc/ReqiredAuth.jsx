import React from 'react'
import { useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';



const ReqiredAuth = ({children}) => {
    const {isAuth}=useContext(AuthContext)
const {pathname}=useLocation();
///console.log(location)

    if(isAuth){
        return children;
    }
    return  (
        //redirectional code
    <Navigate to="/login"
    state={{from:pathname}}
    replace
    />
    )
  
}

export default ReqiredAuth