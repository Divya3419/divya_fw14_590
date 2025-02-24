import React, { useState } from 'react'
import { Box,Flex, Stack ,Button,Text} from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const isAuth=useSelector((state)=> state.AuthReducer.isAuth)
  const tasks=useSelector((state)=> state.AppReducer.tasks)


  const [selectedTag,setSelectedtag]=useState([])


  
  return (
    <Box border="1px solid red" width="250px"height="100vh" >
        <Stack>
          <Box height="15vh" border="1px solid red">
{/* //user profile */}

          </Box>
          <Box height="70vh" border="1px solid black">
<Box border="1px solid black">

  <Flex border="1px solid red" justifyContent="space-between">
    <Text>All</Text>
    <Text>4</Text>
    </Flex>
    <Flex border="1px solid red" justifyContent="space-between">
    <Text>Personal</Text>
    <Text>4</Text>
    </Flex>

    <Flex border="1px solid red" justifyContent="space-between">
    <Text>Official</Text>
    <Text>4</Text>
    </Flex>

    <Flex border="1px solid red" justifyContent="space-between">
    <Text>Others</Text>
    <Text>4</Text>
    </Flex>
  </Box>

          </Box >
          <Box border="1px solid red">
          <Button width="100%">{isAuth && "Logout"}</Button>
          </Box>
        </Stack>


    </Box>

  )
}

export default SideBar