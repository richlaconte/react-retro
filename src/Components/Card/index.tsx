import React, { FC } from 'react'
import './card.css'

const Card: FC<{
  header?: string
  footer?: React.ReactNode
  style?: React.CSSProperties
  children: React.ReactNode
}> = ({
  header,
  footer,
  style,
  children,
}) => {
  return (
    <div className='card' style={{...style}}>
      {header && <div className='card-header'>{header}</div>}
      <div className='card-content'>
        {children}
      </div>
      {
        footer &&
        <div className='card-footer'>
          {footer}
        </div>
      }
    </div>
  )
}

export default Card