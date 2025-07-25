import React, { useReducer} from 'react'
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
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {Link as RouteLink, Navigate, useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { register } from '../Redux/AuthReducer/action';
import { REGISTER_SUCCESS } from '../Redux/AuthReducer/action.type';

const SignUp = () => {
  const [name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[username,setUsername]=useState("")
  const[number,setNumber]=useState(0)
  const[description,setDescription]=useState("")
  const [showPassword, setShowPassword] = useState(false);

    const dispatch=useDispatch()
   const navigate=useNavigate()
  
    const handleSignup=()=>{
dispatch(register()).then((r)=>{
  if(r===REGISTER_SUCCESS){
    navigate("/login",{replace:true})
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
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="Name" isRequired>
                    <FormLabel> Name</FormLabel>
                    <Input type="text" value={name} onChange={(e)=>
                    setter({type:"name",payload:e.target.value})}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="userName" isRequired>
                    <FormLabel>User Name</FormLabel>
                    <Input type="text" value={username} onChange={(e)=>
                    setter({type:"username",payload:e.target.value})}/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e)=>
                    setter({type:"email",payload:e.target.value})} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} 
                  value={password} onChange={(e)=>
                    setter({type:"password",payload:e.target.value})}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Box>
                  <FormControl id="mobile" isRequired>
                    <FormLabel>Mobile</FormLabel>
                    <Input type="number" value={number} onChange={(e)=>
                    setter({type:"mobile",payload:e.target.value})} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="description" isRequired>
                    <FormLabel>Description</FormLabel>
                    <Input type="text" value={description} onChange={(e)=>
                    setter({type:"description",payload:e.target.value})} />
                  </FormControl>
                </Box>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSignup}
                  >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <RouteLink to="/login" color={'blue.400'}>Login</RouteLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
  


export default SignUp