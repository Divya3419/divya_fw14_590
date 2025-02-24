import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

import { useState } from 'react';

import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { register } from '../Redux/action';
import { REGISTER_SUCCESS } from '../Redux/action.type';




const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [mobile,setMobile] = useState("");
  const [name, setName] = useState("");
  const [description,setDescription] = useState("")

    const dispatch=useDispatch()
  
   const navigate=useNavigate()
  

    const handleSubmit=(e)=>{
      e.preventDefault();
      let payload = {
        name: name,
        email: email,
        username: username,
        password: password,
        mobile: mobile,
        description: description
    };
dispatch(register(payload)).then((r)=>{
  if(r===REGISTER_SUCCESS){
    alert("valid")
    navigate("/login",{replace:true})
  }
  else{
    alert("invalid")
  }
})
    }
    
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
            Create Account
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
              <HStack>
                <Box>
                  <FormControl id="Name" isRequired>
                    <FormLabel> Name</FormLabel>
                    <Input type="text" value={name} onChange={(e)=>
                    {setName(e.target.value)}}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="userName" isRequired>
                    <FormLabel>User Name</FormLabel>
                    <Input type="text" value={username} onChange={(e)=>
                    {setUsername(e.target.value)}}/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e)=>
                    
                    {setEmail(e.target.value)}} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type="password" 
                  value={password} onChange={(e)=>
                    
                    {setPassword(e.target.value)}}/>
                  <InputRightElement h={'full'}>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Box>
                  <FormControl id="mobile" isRequired>
                    <FormLabel>Mobile</FormLabel>
                    <Input type="number" value={mobile} onChange={(e)=>
                    {setMobile(e.target.value)}} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="description" isRequired>
                    <FormLabel>Description</FormLabel>
                    <Input type="text" value={description} onChange={(e)=>
                    
                    {setDescription(e.target.value)}} />
                  </FormControl>
                </Box>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.300'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  type="submit"
                  >
                  Sign up
                </Button>
              </Stack>
              </form>

            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  


export default Register