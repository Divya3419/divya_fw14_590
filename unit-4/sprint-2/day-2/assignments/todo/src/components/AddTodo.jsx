import  React ,  {useState} from 'react';


const AddTodo = ({onAdd})=>{
    
    const [newTodo,setnewTodo]=useState("");
    const postdata=async(value)=>{
        let res=await fetch('http://localhost:3000/todos',{
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify( {
                value,
                completed:false,
            })
        })
    let data= await res.json()
    onAdd(data)
        
    }
   
    return(
        <div>
            <input type="text" placeholder="enter todo" value={newTodo} onChange={(e)=>setnewTodo(e.target.value)} />
       
       <button onClick={()=>{
           let value=newTodo.trim()
           if(value){
               postdata(value);
    setnewTodo("");
    }
    }}
    >add</button>
        </div>
    )
}
export default AddTodo