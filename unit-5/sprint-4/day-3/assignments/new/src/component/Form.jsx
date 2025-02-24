import React, { useState } from 'react'
import { Box ,Input,Heading,Button,PinInput,Stack, PinInputField,HStack} from '@chakra-ui/react';
const Form = () => {
    const[loading,setLoading]=useState(false)
    const[otp,setOtp]=useState("")
  return (
    <Box>
        <Heading>Form</Heading>
        <Stack gap="10px">
        <Box>
            <Input type="email" placeholder="Email"/>
            </Box>
            <Box>
            <Input type="password" placeholder="Password"/>
            </Box>
            <Box>
            <HStack>
            <p>otp is {otp}</p>
  <PinInput value={otp} onChange={(value)=>setOtp(value)}>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
</Box>
<Box>
<Button onClick={()=>setLoading(true)}>Sign Up</Button>
</Box>
</Stack>
    </Box>
  )
}

export default Form