import { Link } from 'react-router-dom'
import React from 'react'
import { Box, Button, Grid, GridItem } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Grid templateColumns="repeat(5,1fr)" gap={15} bg="black" color="white" h="70px" fontSize="20px" padding="15px">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/employees">Employees</Link>
        <Button colorScheme='teal' size='sm' w="50%">Logout</Button>
    </Grid>
  )
}

export default Navbar