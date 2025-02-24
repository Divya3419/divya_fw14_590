import {useSelector} from "react-redux";
import { Navigate, useLocation } from 'react-router-dom'

//Create the HOC for protected Routes
const ReqAuth = ({children}) => {
    const data=useSelector((state)=>state.AuthReducer.data)
const location=useLocation()
console.log(data.isAuth)
    if(data.isAuth){
<Navigate to="/login" state={{from:location}} replace/>
    }
  return children
};

export default ReqAuth;
