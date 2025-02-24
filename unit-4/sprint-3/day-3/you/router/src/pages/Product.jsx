import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  const[show,setShow]=useState([])

  useEffect(()=>{
const fetchdata=async()=>{
  let r= await fetch("http://localhost:8081/product")
  let d=await r.json()
  console.log(d)
  setShow(d)
}
fetchdata()
  },[])
  return (
    <div>
      product:map
    <div>
      {show.map((ele)=>{
        return(
          <div key={ele.id}>
            <Link to={`/product/${ele.id}`}>{ele.name}</Link>
          </div>
        )
      })}
    </div>
    <Outlet/>
    </div>
  )
}

export default Product
