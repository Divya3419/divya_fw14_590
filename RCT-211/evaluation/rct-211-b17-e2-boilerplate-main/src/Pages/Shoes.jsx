import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";
import ShoeCard from "../Components/ShoeCard";
import { getShoes } from "../Redux/AppReducer/action";
import {Link,useLocation,useSearchParams} from "react-router-dom"

const Shoes = () => {
  
  const shoes=useSelector((state)=>state.AppReducer.shoes)
  const dispatch=useDispatch()
  const[searchParams]=useSearchParams()
    const location=useLocation()

//   useEffect(()=>{
// dispatch(getShoes())
//   },[])

  useEffect(()=>{
    if(shoes.length===0 || location.search){
    let getShoesParams={
        params:{
          category:searchParams.getAll("category"),
         }
    }
    dispatch(getShoes(getShoesParams))
    }
    },[ location.search])
  //console.log(shoes)
  return (
    <div>
      <Filter />
      <div>
        {shoes.map((ele)=>{
return <Link key={ele.id} to={`/shoes/${ele.id}`}><ShoeCard key={ele.id} {...ele}/>
           </Link>
        })}
              </div>
    </div>
  );
};

export default Shoes;
