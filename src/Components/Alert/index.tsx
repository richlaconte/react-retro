import React from 'react';
import './alert.css';
import IconButton from '../IconButton';
import { FaTimes } from 'react-icons/fa';

interface AlertProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  icon?: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  variant = 'primary',
  title,
  children,
  onClose,
  icon,
}) => {
  return (
    <div className={`alert ${variant}-alert`} role="alert">
      {icon && <div className="alert-icon">{icon}</div>}
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        <div className="alert-message">{children}</div>
      </div>
      {onClose && (
        <IconButton variant={variant} ariaLabel='Close' size='small' onClick={onClose} aria-label="Close">
          <FaTimes />
        </IconButton>
      )}
    </div>
  );
};

export default Alert;
