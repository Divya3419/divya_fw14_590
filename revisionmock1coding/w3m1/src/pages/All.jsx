import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from "./All.module.css"

const All = () => {
  const[data,setData]=useState([])
  const[page,setPage]=useState(1)

  useEffect(()=>{
    axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:all&page=${page}&per_page=10`)
    .then((r)=>
    setData(r.data.items)
  
  )
  },[page])
  
  data.sort((a,b)=>{
    return b.stargazers_count  - a.stargazers_count 

  }) 
  //console.log(data)
  
  return (
    <>
    <button onClick={()=>setPage(page+1)}>Next</button>
    <button onClick={()=>setPage(page-1)}>Prev</button>
    <div className={styles.container}>{data.map((ele)=>{
      return <a href={ele.clone_url} key={ele.id}> <div key={ele.id}>
        <img src={ele.owner.avatar_url} alt="" />
<p>{ele.name}</p>
<p>{ele.language}</p>

<p>{ele.stargazers_count} Starts</p>
<p>{ele.forks_count} forks</p>
</div>
      </a>
    })}</div>
    </>
  )
  
}

export default All