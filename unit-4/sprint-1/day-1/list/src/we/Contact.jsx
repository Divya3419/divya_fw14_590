import  React from 'react';

const Contact=(props)=>{
    console.log(props)
    return(
        <h2 style={{backgroundColor:"red",width:"150px",borderRadius:"10px",color:"white"}}>{props.one}</h2>
        )
}
export default Contact