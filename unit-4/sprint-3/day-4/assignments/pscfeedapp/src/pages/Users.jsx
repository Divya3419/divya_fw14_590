import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'
const Users = () => {

    const[data,setData]=useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const[page,setPage]= useState(Number(searchParams.get("page")) || 1);

    useEffect(()=>{
// axios({
//     url:"https://reqres.in/api/users",
//     method:"GET",
// })
setSearchParams({
    page
  });
axios.get("https://reqres.in/api/users")
.then((r)=>{
    setData(r.data.data)
    console.log(r.data.data)
})
.catch((err)=>{
console.log("check user data")
})
    },[page])

  return (
      <div>
          <button disabled={page==1} onClick={()=>setPage(1)} >1</button>
          <button disabled={page==2} onClick={()=>setPage(2)} >2</button>
    <div>
    
{data.map((ele)=>{
    return(
        <div key={ele.id}>
            <img src={ele.avatar}/>
         <p>{ele.first_name}</p>   
         <Link to={`/users/${ele.id}`}>SEE MORE</Link>
            </div>
           
    )
})}
    </div>
    </div>
  )
}

export default Users