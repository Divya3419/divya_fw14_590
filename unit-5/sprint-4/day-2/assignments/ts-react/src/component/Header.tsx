import React from 'react'
interface HeaderProps{
    label?: string;
    children?: JSX.Element | JSX.Element[]
}
const Header = ({label="Counter",children}:HeaderProps) => {
  return (
    <div>
        <h1>{label}</h1>
        {children}

    </div>
  )
}

export default Header