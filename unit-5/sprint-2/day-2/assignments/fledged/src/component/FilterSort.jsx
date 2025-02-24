import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {useSearchParams} from "react-router-dom"
import { getBooks } from '../store/AppReducer/action'

const FilterSort = () => {
    const[searchParams,setSearchParams]=useSearchParams()
  const urlCategory=searchParams.getAll("category")
  const urlSort=searchParams.getAll("sortBy")
  const[category,setCategory]=useState(urlCategory || [])
  const[sortBy,setSortBy]=useState(urlSort[0] || "")

  const dispatch=useDispatch()

  const handleCheckbox=(e)=>{
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
//console.log(category)


useEffect(()=>{
  if(category || sortBy){
    let params={}
category && (params.category=category)
sortBy && (params.sortBy=sortBy)
    setSearchParams(params)
  
  }
    },[category,setSearchParams,sortBy,dispatch])
//console.log(searchParams)


    // sort
  const handleSort=(e)=>{
    setSortBy(e.target.value)
  }
///console.log(sortBy)


  
  return (
    <div>
     <h3>Filter</h3> 
     <div>
      <div>
        <input type="checkbox"
        onChange={handleCheckbox}
        value="Novel"
        defaultChecked={category.includes("Novel")}
        />
        <label>Novel</label>
      </div>
      <div>
        <input type="checkbox"
        onChange={handleCheckbox}
        value="Science_Fiction"
        defaultChecked={category.includes("Science_Fiction")} />
        <label>Science_Fiction</label>
      </div>
      <div>
        <input type="checkbox"
        onChange={handleCheckbox}
        value="Motivational"
        defaultChecked={category.includes("Motivational")} />
        <label>Motivational</label>
      </div>
      <div>
        <input type="checkbox"
        onChange={handleCheckbox}
        value="Thriller"
        defaultChecked={category.includes("Thriller")} />
        <label>Thriller</label>
      </div>
      
     </div>

     {/* //sort */}
      <h3>Sort</h3>
      <div onChange={handleSort}>
        <input type="radio"
         value="asc"
          name="sortBy"
          defaultChecked={sortBy=="asc"} 
           />Ascending

        <input type="radio"
         value="desc"
          name="sortBy"
           defaultChecked={sortBy=="desc"}
           /> Decending
      </div>

    </div>
  )
}

export default FilterSort