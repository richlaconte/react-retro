import React, { FC } from 'react'

import './button.css'

const Button: FC<{ 
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  onClick?: (e?: any) => void
  id?: string
  style?: React.CSSProperties
  iconStart?: React.ReactNode
  iconEnd?: React.ReactNode
  disabled?: boolean
  children: React.ReactNode 
}> = ({
  variant = 'primary',
  onClick,
  id,
  style,
  iconStart,
  iconEnd,
  disabled,
  children
}) => {
  return (
    <button 
      id={id}
      className={`button ${variant}-button${disabled ? ' disabled' : ''}`}
      onClick={onClick}
      style={{...style}}
    >
      {iconStart && <div className="button-icon">{iconStart}</div>}
      {children}
      {iconEnd && <div className="button-icon">{iconEnd}</div>}
    </button>
  )
}

export default Button