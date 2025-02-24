import axios from 'axios'
import React, { useEffect, useState } from 'react'

import styles from "./Search.module.css"

const Search = () => {
    const[show,setShow]=useState([])
    const[search,setSearch]=useState("meerut")
   
useEffect(()=>{
    const fetchApi=async()=>{
        const url=`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&cnt=7&appid=847d75de4265051f3b09b1b6a2474c30`
        const res=await fetch(url)
        const data=await res.json()
       //console.log(data)
    setShow(data.list)
    }
    fetchApi()
    },[search])
console.log(show)



  return (
    <div>
      <div className={styles.box}>
      <img src="https://i.pinimg.com/736x/9b/56/f5/9b56f50e5f4a28da700b0c991d96b5c7.jpg" alt="" />
        <input 
        className={styles.int}
        type="text" 
        value={search} 
        onChange={(e)=>{setSearch(e.target.value)}} />

        <img src="https://cdn4.vectorstock.com/i/1000x1000/60/53/search-icon-magnifier-icon-vector-20716053.jpg" alt="" />
        </div>
        <div className={styles.data}>{!show ?(
          <h4>No City Found</h4>
        ):(
          <>
          {show.map((ele)=>{
            return <div className={styles.days} key={ele.dt}>
              <p>Days</p>
              <div className={styles.temp}>
                
              <p >{ele.main.temp_max}°</p>
              <p >{ele.main.temp_min}°</p>
              
              </div>
              <img src="https://freepngimg.com/download/sun/23611-7-sun.png" alt="" />
              <p>Sunny</p>
              </div>
           })}
           </>
        )}
                
        </div>
    </div>
  )
}

export default Search