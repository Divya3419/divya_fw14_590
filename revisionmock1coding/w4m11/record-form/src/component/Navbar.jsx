import { Grid,Button } from "@chakra-ui/react";
import React from "react";
import {Link, useNavigate} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import { getLocalData } from "../utils/localStorage";

const Navbar = () => {
  const isAuth=useSelector((state)=> state.isAuth)
  // let name=getLocalData("username")
  // console.log(name)
  const navigate=useNavigate()
console.log(isAuth)
  const handleLogout=()=>{
    if(isAuth){
navigate("/login")
    }
  }
  return (
    <Grid templateColumns="repeat(4,1fr)" gap={15} bg="black" color="white" h="70px" fontSize="20px" padding="15px">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      <Button bg="blue" w="50%" onClick={handleLogout}>Logout</Button>
    </Grid>
  );
};

export default Navbar;
