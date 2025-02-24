import  React from 'react';

const Login=(props)=>{
    console.log(props)
    return(
        <h2 style={{backgroundColor:"orange",width:"150px",borderRadius:"10px",color:"white"}}>{props.one}</h2>
    )
}
export default Login