import React from 'react'
import "./Button.css"

const Button = ({children,variant,colorSheme,onClick}) => {
  return (
<button data-testid="Button1" className={`btn ${colorSheme || "red"}  
${variant || "ghost"}`}
    onClick={onClick}>
    {children}
    </button>
  )
}

export default Button
