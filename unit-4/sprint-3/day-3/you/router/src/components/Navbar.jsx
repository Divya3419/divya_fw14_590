import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
/// you can go another page using navigate
  const handleChange=(id)=>{
if(id==1){
  navigate("/product/1")
}
if(id==2){
  navigate("/product/2")
}
  }
  return (
    <div>Navbar
        <div>
    {/* not use A tag because its refresh whole page */}
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
         <button onClick={()=>handleChange(1)}>go to Product1</button>
         <button onClick={()=>handleChange(2)}>go to Product2</button>

        </div>
    </div>
  )
}

export default Navbar