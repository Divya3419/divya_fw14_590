import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import { login } from "../Redux/action";

import { saveLocalData } from "../utils/localStorage";
const Login = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const isLoading = useSelector((state) => state.isLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
const [data,setData]= useState([])


  const handleLogin = (e) => {
    e.preventDefault();
    if (name && password) {
      const payload = {
        name:name,
       password: password,
      };
      
      dispatch(login(payload)).then((res)=>{
        setData(res)
        console.log(res)
        if(data.length>0){
        var flag=false
        for(let i=0;i<data.length;i++){
            if(data[i].name===payload.name && data[i].password===payload.password){
              flag =true
              saveLocalData("userData",JSON.stringify(data[i]))
            }
            
        }
        if(flag){
            alert("Login Successfully")
            navigate("/")
        }else{
            alert("Invalid Username or Password")
        }
      }
      
    })
 
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleLogin}
                isLoading={isLoading}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
