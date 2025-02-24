import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { getCountries, updateTask } from "../Redux/action";

import {useDispatch,useSelector} from "react-redux"
export const Editpage = () => {
const[city,setCity]=useState("")
const[pop,setPop]=useState("")
const dispatch=useDispatch()
const countries=useSelector((state)=>state.countries)

const updateHandler=(type)=>{
if(type=="cityandpop"){
  dispatch(updateTask({city:city,population:pop}))
  .then((r)=>dispatch(getCountries()))
}
}

  return (
    <Box>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Capital City</Text>
        <Input data-cy="capital-city" value={city} onChange={(e)=>setCity(e.target.value)} />
      </Box>
      <Box>
        <Text>Population</Text>
        <Input data-cy="population" value={pop} onChange={(e)=>setPop(e.target.value)} />
      </Box>
      <Button data-cy="update-button" onClick={()=>{updateHandler("cityandpop")}}>Update</Button>
    </Box>
  );
};

export default Editpage;
