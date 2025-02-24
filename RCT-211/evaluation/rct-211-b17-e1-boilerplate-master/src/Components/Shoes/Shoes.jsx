import React,{ useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";
import axios from "axios"
import ShoeCard from './ShoeCard/ShoeCard'

const Shoes = () => {
  const dispatch=useDispatch()
  const shoes=useSelector((state)=> state.shoes)

  const getShoes = () =>{
    dispatch(getShoesRequest())
    axios.get("http://localhost:8080/shoes")
    .then((r)=>dispatch( getShoesSuccess(r.data)))
    .catch((e)=>dispatch(getShoesFailure(e)))
  }
  useEffect(()=>{
getShoes()
  },[])
//console.log(shoes)
  return <div>
    
    {shoes.map((ele)=>{
      return <ShoeCard key={ele.id} ele={ele}/>
    })}
  </div>;
};

export default Shoes;
