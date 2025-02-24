import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Grid,Button } from "@chakra-ui/react";
import {ButtonGroup,Select} from "@chakra-ui/react";


const Home = () => {
    const [data,setData]=useState([]);
   // const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(()=>{
axios
.get("https://blueproduct.herokuapp.com/patient")
.then((r)=>setData(r.data))

    },[])
   /// console.log(data)
  return (
    <>
    <Grid templateColumns="repeat(4,1fr)" gap="30px" w="80%" margin="auto" marginTop="40px">
        {data.map((ele)=>{
            return <div key={ele.id}>
            <img src={ele.person}/>
            <p>Name : {ele.name}</p>
            <p>Gender : {ele.gender}</p>
            <p>Age: {ele.age}</p>
        <p>Medicine : {ele.medicine_name}</p>
            <p>Qty :{ele.medicine}</p>
            </div>
        })}
</Grid>



<ButtonGroup>
      <Button data-cy="pagination-first-button">First</Button>
      <Button data-cy="pagination-previous-button">Previous</Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3">3</option>
        <option data-cy="pagination-limit-6">6</option>
        <option data-cy="pagination-limit-9">9</option>
      </Select>
      <Button data-cy="pagination-next-button">Next</Button>
      <Button data-cy="pagination-last-button">Last</Button>
    </ButtonGroup>

</>
  )
}

export default Home