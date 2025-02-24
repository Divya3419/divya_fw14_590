import React, { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom"
import { useDispatch } from 'react-redux'


const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const[searchParams,setSearchParams]=useSearchParams()
  const urlCategory=searchParams.getAll("category")
  
  const[category,setCategory]=useState(urlCategory || [])

  const dispatch=useDispatch()

  const handleChange=(e)=>{
    const option=e.target.value 
    let newCategory=[...category]
    if(category.includes(option)){
      newCategory.splice(newCategory.indexOf(option),1)
    }
    else{
      newCategory.push(option)
    }
setCategory(newCategory)
  }

  useEffect(()=>{
if(category){
  let params={}
  category &&(params.category=category)
  setSearchParams(params)
  
}
  },[category,dispatch,setSearchParams])
  
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox"
           value="Sneakers" 
           defaultChecked={category.includes("Sneakers")}
           onChange={handleChange}/>
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" 
          defaultChecked={category.includes("Loafers")}
          value="Loafers" onChange={handleChange} />
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" 
          defaultChecked={category.includes("Canvas")}
          value="Canvas" onChange={handleChange} />
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" 
          defaultChecked={category.includes("Boots")}
          value="Boots" onChange={handleChange} />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
