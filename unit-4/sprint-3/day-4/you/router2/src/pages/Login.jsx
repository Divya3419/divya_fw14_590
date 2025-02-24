
import React, { useContext,useState } from 'react'

import { AuthContext } from '../contexts/AuthContext'

const Login = () => {
  
const[logIn,setLogin]=useState({})
const {login}=useContext(AuthContext)

const handleSubmit=(e)=>{
e.preventDefault();
login()

console.log(logIn)
}

const handleChange=(e)=>{
  
  const {name,value}=e.target
  setLogin({...logIn,[name]:value})
}
//   const {token,login}=useContext(AuthContext);

//   const navigate =useNavigate();
//   const location=useLocation();

//   const from = location.state?.from?.pathname || "/";



// useEffect(()=>{
//   if(token){
//     navigate(from,{replace:true});
//   }
// },[token])

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type="email" placeholder="enter email" name="email"  onChange={handleChange}/>
      <input type="password" name="password" onChange={handleChange}/>
      <button type="submit">Login</button>
      </form>
      </div>
  )
}

export default Login