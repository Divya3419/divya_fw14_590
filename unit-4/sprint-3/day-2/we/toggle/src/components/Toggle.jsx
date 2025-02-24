import React, { useContext } from 'react'
import { ToggleContext } from '../contexts/ToggleContext'

const Toggle = () => {
  const{toggleTheme,isLight}=useContext(ToggleContext)

  return (
      <>
      
    <div>
      <h1>Divya Dashboard</h1>
 <button style={{backgroundColor:"black",color:"white",fontSize:"20px",borderRadius:"15px"}} onClick={toggleTheme}>
   {isLight ? "Dark Mode":"Light Mode"}</button>
   
   
    </div>
    </>
    
  )
}

export default Toggle