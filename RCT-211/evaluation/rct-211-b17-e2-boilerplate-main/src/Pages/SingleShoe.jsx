import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getShoes } from "../Redux/AppReducer/action";
const SingleShoe = () => {
  const {id}=useParams()
  const shoes=useSelector((state)=>state.AppReducer.shoes)

  const dispatch=useDispatch()
  const[currShoes,setCurrShoes]=useState({})

  useEffect(()=>{
dispatch(getShoes())

  },[])

  //console.log(shoes)

  useEffect(()=>{
    if(id){
      const temp=shoes.find((ele)=>ele.id===Number(id))
    
      temp && setCurrShoes(temp)
    }
    },[shoes,id])
    
    console.log(currShoes)
  return (
    <div>
      <h2>{currShoes.name}</h2>
      <div>
        <img src={currShoes.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{currShoes.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
