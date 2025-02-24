import React from 'react';


const TodoItem=({ele})=>{
    
    return(
        <div >
        <h1 style={{width:"92%",height:"55px",margin:"auto",backgroundColor:"white",borderRadius:"10px",marginTop:"40px",marginBottom:"20px"}} >{ele.title}</h1>
        

        </div>
        
   
        )
}

export default TodoItem;