import React from 'react';
import './iconbutton.css';

interface IconButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large' | 'tiny';
  children: React.ReactNode;
  disabled?: boolean;
  ariaLabel: string;
  square?: boolean;
  className?: string;
  noOutline?: boolean;
  style?: React.CSSProperties
}

const IconButton: React.FC<IconButtonProps> = ({
  variant = 'primary',
  onClick,
  size = 'medium',
  children,
  disabled = false,
  ariaLabel,
  square = false,
  className,
  noOutline,
  style
}) => {
  return (
    <button
      className={`icon-button ${variant}-icon-button ${disabled ? 'disabled' : ''} size-${size} ${square ? 'square' : ''} ${className || ''} ${noOutline ? 'no-outline' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      style={{...style}}
    >
      {children}
    </button>
  );
};

export default IconButton;
