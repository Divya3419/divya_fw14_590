import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate()
  const handleClick=()=>{
    navigate("/login")
  }
  return (
    <div style={{display:"flex"}}>
      <div data-cy="navbar-home-link">
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        <button data-cy="navbar-login-button" onClick={handleClick}>LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
