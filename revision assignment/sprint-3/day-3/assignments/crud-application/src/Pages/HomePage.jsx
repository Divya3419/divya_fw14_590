import { Box,Flex,Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"

const HomePage = () => {
  const [searchParams]=useSearchParams()
const tasks=useSelector((state)=> state.AppReducer.tasks)
const dispatch=useDispatch()
const handleTask=()=>{
//dispatch(getTasks())
}
  useEffect(()=>{
if(tasks.length==0){
handleTask()
}
  },[])
  return (
  <Box  width="80%">
<Flex justifyContent="space-around" gap="15px">

    <Box border="2px solid green" height="100vh" width="100%">
{/* ///todo */}
<Box>
  <Text textAlign="center">TODO</Text>
</Box>
  </Box>
  
  <Box border="2px solid green" height="100vh" width="100%">
{/* in-progress*/}
<Box>
  <Text textAlign="center">IN-PROGRESS</Text>
</Box>
  </Box>
  <Box border="2px solid green" height="100vh" width="100%">
{/* ///done */}
<Box>
  <Text textAlign="center">DONE</Text>
</Box>
  </Box>
  </Flex>
  </Box>
  )
}

export default HomePage