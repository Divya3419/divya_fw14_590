import React, { useState } from 'react'
import useFetch from './useFetch'


const GitHubSearch = () => {
  
    const[query,setQuery]=useState("")
    const[page,setPage]=useState(1)
    const {loading,error,data}=useFetch(
      `http://api.github.com/search/users?q=${ query || `masai`} && page=${page}`
      )
    
    
//console.log(loading,error,data)
//console.log(query)
const handlePage=(value)=>{
  if(page+value<1){
    return false
  }
setPage(page+value)
}

const handleClick=()=>{
  
}
  return (
    <div>
        <h1>GitHubSearch</h1>
        
        <input value={query} 
        type="search"
         onChange={(e)=>setQuery(e.target.value)} />
         
        <button onClick={handleClick}>Search</button>
        <br />
        <button onClick={()=>handlePage(-1)}>Prev</button>
        <button onClick={()=>handlePage(+1)}>Next</button>
        <br />

        {loading && "Loading..."}
        {error && "Check Api....."}
       { data.length>0 && data.map((ele)=>{
        return <h1 key={ele.id}>{ele.login}</h1>
       })}
    </div>
  )
}

export default GitHubSearch