import React, { FC } from 'react'

import './button.css'

const Button: FC<{ 
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  onClick?: (e?: any) => void
  id?: string
  style?: React.CSSProperties
  iconStart?: React.ReactNode
  iconEnd?: React.ReactNode
  children: React.ReactNode 
}> = ({
  variant = 'primary',
  onClick,
  id,
  style,
  iconStart,
  iconEnd,
  children
}) => {
  return (
    <button 
      id={id}
      className={`button ${variant}-button`}
      onClick={onClick}
      style={{...style}}
    >
      {iconStart && <div className="button-icon-start">{iconStart}</div>}
      {children}
      {iconEnd && <div className="button-icon-end">{iconEnd}</div>}
    </button>
  )
}

export default Button