import React from "react";
import Shoes from "../Shoes/Shoes";

const Navbar = () => {
  return (
    <div style={{ padding: "0.5rem 1rem" }}>
      <div>
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>
      <div>
        <Shoes/>
      </div>
    </div>
  );
};

export default Navbar;
