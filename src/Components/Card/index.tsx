import React, { FC } from 'react'
import './card.css'

const Card: FC<{
  header?: string
  footer?: React.ReactNode
  style?: React.CSSProperties
  className?: string
  flat?: boolean
  disableHover?: boolean
  bgColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  children: React.ReactNode
}> = ({
  header,
  footer,
  style,
  className,
  flat,
  disableHover,
  bgColor,
  children,
}) => {
  return (
    <div className={`card${flat ? ' flat' : ''}${disableHover ? ' disable-hover' : ''}${bgColor ? ` bg-${bgColor}` : ''} ${className}`} style={{...style}}>
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