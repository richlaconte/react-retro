import React, { FC } from 'react'

import './button.css'

const Button: FC<{ 
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  onClick?: (e?: any) => void
  id?: string
  style?: React.CSSProperties
  children: React.ReactNode 
}> = ({
  variant = 'primary',
  onClick,
  id,
  style,
  children
}) => {
  return (
    <button 
      id={id}
      className={`button ${variant}-button`}
      onClick={onClick}
      style={{...style}}
    >{children}</button>
  )
}

export default Button