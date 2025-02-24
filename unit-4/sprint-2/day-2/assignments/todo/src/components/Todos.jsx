import  React,  {useEffect, useState}from 'react';
import AddTodo from './AddTodo'
import {Todo} from './Todo';

const Todos=()=>{
    const[todos,setTodos]=useState([]);


    
    const onAdd=(newTodo)=>{
        
         setTodos([...todos,newTodo])
    }

   
useEffect(()=>{
    const getdata=async()=>{
        try{
        let res=await fetch(`http://localhost:3000/todos`)
        let data=await res.json()
        console.log(data)
        setTodos(data)
        }
        catch(error){
            console.log(error);
        }
            }
    getdata()
},[])
    
    return(
        <>
        <div>
<AddTodo onAdd={onAdd}/>

{todos.map((ele)=>{
<Todo key={ele.id}  ele={ele}/>

})}
</div>
        </>
        
    )
}
export default Todos