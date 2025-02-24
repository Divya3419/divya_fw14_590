import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
  const[products,setProducts]=useState({})
  const{id}=useParams()
  //console.log(id)
// when you want to name in line no-19
  useEffect(()=>{
    if(id){
fetch(`http://localhost:8080/product/${id}`)
.then((r)=>r.json())
.then((d)=>setProducts(d))
    }
  },[id])
  
  return (
    <div>Products Id:{id}
    <h1>{products.name}</h1>
    </div>
  )
}

export default Products