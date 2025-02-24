import React,{useState} from "react";
import {Button,Modal,ModalBody,Input,Select,RadioGroup,Radio, useDisclosure} from "@chakra-ui/react"
const AddProduct = () => {
const[newdata,setData]=useState({})
  const { isOpen, onOpen, onClose } = useDisclosure()

const post=async () => {
  let res=await fetch(`http://localhost:8080/products`,{
    method: 'POST',
    headers: { 'Content-Type': 'application'},
    body: JSON.stringify({...newdata})
  })
  let data= await res.json()
  console.log(data)
  setData(data)
}

  const handleSubmit = (e)=>{
e.preventDefault();
post()
  }



  const handleChange=(e)=>{
  const raw=e.taget.name   

  setData({...newdata,[raw]:e.target.value})
  }
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>Add New Product</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6}>
          Title
          <Input data-cy="add-product-title" onChange={handleChange} name="title" placeholder="Product Title"/>
          Category
          <Select data-cy="add-product-category"  onChange={handleChange} placeholder="Category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
             Gender
          <RadioGroup data-cy="add-product-gender"  onChange={handleChange}>
            <Radio data-cy="add-product-gender-male" name="gender" >male</Radio>
            <Radio data-cy="add-product-gender-female" name="gender">female</Radio>
            <Radio data-cy="add-product-gender-unisex" name="gender">unisex</Radio>
          </RadioGroup>
          Price
          <Input data-cy="add-product-price"  onChange={handleChange} name="price" placeholder="price"/>
          <Button data-cy="add-product-submit-button" onClick={handleSubmit}>Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
