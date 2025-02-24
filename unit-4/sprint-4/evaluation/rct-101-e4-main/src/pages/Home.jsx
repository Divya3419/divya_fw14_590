import React, { useEffect } from "react";
import { productApi } from "../store/product/product.actions";
import {useDispatch, useSelector} from "react-redux"

const Home = () => {
  const dispatch =useDispatch()

  const {data}=useSelector((state)=> state.product)

  useEffect(()=>{
if(data.length===0){
  dispatch(productApi())
}
  },[dispatch])
  return <div>
    {data.map((ele)=>{
      return <div key={ele.id}>
        <h1>{ele.name}</h1>
      <h3>{ele.description}</h3>
      </div>
      
    })}
  </div>;
};

export default Home;
