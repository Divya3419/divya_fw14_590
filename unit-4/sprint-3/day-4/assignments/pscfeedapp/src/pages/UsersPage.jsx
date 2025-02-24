import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const UsersPage = () => {

    const[data,setData]=useState([])
    const params=useParams()
    console.log(params)

    useEffect(()=>{
// axios({
//     url:"https://reqres.in/api/users",
//     method:"GET",
// })
axios.get(`https://reqres.in/api/users/${params.id}`)
.then((r)=>{
    
    console.log(r)
    setData(r.data.data)
})
.catch((err)=>{
console.log("check user data")
})
    },[])

console.log(data)
    return(
        <div key={data.id}>
            <img src={data.avatar} width="100px" alt={data.email} />
        <div>ID: {data.id}</div>
        <div>Name: {data.first_name}</div>
        <div>Last Name: {data.last_name}</div>
        <div>Email: {data.email}</div> 
            </div>
    )
    
  
}

export default UsersPage