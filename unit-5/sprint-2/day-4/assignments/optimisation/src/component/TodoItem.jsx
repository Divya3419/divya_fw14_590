import React, { memo, useMemo } from 'react'

const delay=(ms)=>{
  const start=Date.now()
  while(Date.now()-start<ms){
    continue
  }
  return true
}
const TodoItem = ({status,id,title,handleToggle,handleDelete}) => {
const isDelay= useMemo(()=>delay(200),[]) 
  return (
    <div>
      {title}  ,
       {status? "TRUE":"FALSE"}
       <button onClick={()=>handleToggle(id)}>Toggle</button>
       <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}
// function areEqual(prevProps,nextProps){
// if(prevProps.id===nextProps.id && prevProps.status===nextProps.status){
//   return true
// }
// return false
// }
export default memo(TodoItem)