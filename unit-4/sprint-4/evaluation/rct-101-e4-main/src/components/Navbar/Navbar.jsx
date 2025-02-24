import React from "react";

import {useDispatch,useSelector} from "react-redux"
import { logoutApi } from "../../store/auth/auth.actions";


const Navbar = () => {
  
  const dispatch=useDispatch()
  const {isAuthenticated}=useSelector((state)=> state.auth)

  const handleClick=()=>{
dispatch(logoutApi())
  }

  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <a data-cy="navbar-home-link" href="/">Home</a>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count"></div>
        <button data-cy="navbar-login-logout-button" onClick={handleClick}>
          {isAuthenticated ? "Logout":"Login"}
          </button>
      </div>
    </div>
  );
};

export default Navbar;
