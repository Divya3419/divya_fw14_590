import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const[data,setData]=useState([])
  const[loading,setLoding]=useState(true)
  const[error,setError]=useState(false)

  useEffect(()=>{
axios.get(url)
.then((r)=>setData(r.data.items),
setLoding(false))
.catch((e)=>setError(true),setLoding(false))


  },[url])

  return {data,loading,error}
}

export default useFetch