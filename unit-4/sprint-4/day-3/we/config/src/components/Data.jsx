import React from 'react'
import {useLocation} from "react-router-dom"

const Data = () => {
    const location=useLocation();
  return (
    <div>
        {location.state.title}
    </div>
  )
}

export default Data