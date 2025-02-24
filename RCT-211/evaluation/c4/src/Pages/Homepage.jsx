import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Button
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { deleteCountry, getCountries } from "../Redux/action";

import {Link as RouteLink,useParams} from "react-router-dom"


const Homepage = () => {
  const countries=useSelector((state)=>state.countries)
  const dispatch =useDispatch()
  const {id}=useParams()

  useEffect(()=>{

  dispatch(getCountries())

  },[])
  

//  console.log(countries)

const handleChange=(value)=>{
  // if(value=="asc"){
  //   population.sort((a,b)=>{return a-b})
  // }
  // else{
  //   population.sort((a,b)=>{return b-a})
  // }
}

const handleDelete=(id)=>{
let newData=countries.filter((ele)=>
  ele.id!==id
)
console.log(newData)
dispatch(deleteCountry(id,newData)).then(()=>dispatch(getCountries()))
}
  return (
    <Box>
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup onChange={(value)=>{handleChange(value)}}>
          <Stack direction="row">
            <Radio data-cy="asc" value="asc" >
              Ascending
            </Radio>
            <Radio data-cy="desc" value="desc" >
              Descending
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <TableContainer border=" 2px solid black" maxWidth="xxl">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Capital</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
           
            {/* map through the fetched country list, to form table rows */}
          {countries.map((ele)=>{
            return <Tr key={ele.id}>
              <Th>{ele.country}</Th>
              <Th>{ele.city}</Th>
              <Th>{ele.population}</Th>
              <Th><RouteLink to={`/country/${ele.id}`}><Button>Edit</Button></RouteLink></Th>
              <Th><Button onClick={()=>handleDelete(ele.id)}>Delete</Button></Th>
            </Tr>
          })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
