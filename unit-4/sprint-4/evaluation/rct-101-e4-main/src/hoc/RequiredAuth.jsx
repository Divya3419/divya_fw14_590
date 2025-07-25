import { useSelector } from "react-redux";
import { useLocation,Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const {isAuthenticated}=useSelector((state)=> state.auth)
  const location=useLocation()
  const from={
    pathname:location.pathname
  }
  if(isAuthenticated) return children;

  return <Navigate to="/login" state={from} replace/>

};

export default RequiredAuth;
