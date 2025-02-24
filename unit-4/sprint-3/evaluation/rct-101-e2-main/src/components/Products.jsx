import React,{useState,useEffect}from "react";
import AddProduct from "./AddProduct"
import Pagination from "./Pagination"
import Product from "./Product"
import axios from "axios"
import {Flex,Grid} from "@chakra-ui/react"

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
 
  const[show,setShow]=useState([])

  useEffect(() =>{
axios.get("http://localhost:8080/products?_page=${page}&_limit=9")
.then((r)=>{
  setShow(r.data)
 // console.log(r.data)
})
  },[])
  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct/>
      <Grid>{/* List of Products */}
      {show.map((ele)=>{
        return  <Product key={ele.id} ele={ele}/>
      })}
     
      </Grid>
      <Pagination/>
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
