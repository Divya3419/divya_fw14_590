import React, { forwardRef } from 'react'

const Pin = forwardRef(({onChangesec,handleBackspace},ref) => {

    const handleKey=(e)=>{
        
if(e.keyCode==8){
    handleBackspace(e);
}
else{
    onChangesec(e)
}
    }
    
  return (
    <div>
        <input ref={ref} maxLength={1} onChange={onChangesec}
        onKeyUp={handleKey} 
        
        />
      
    </div>
  )
})

export default Pin