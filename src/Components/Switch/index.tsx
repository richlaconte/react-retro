import React from 'react';
import './switch.css';

interface SwitchProps {
  id?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  style?: React.CSSProperties;
}

const Switch: React.FC<SwitchProps> = ({
  id,
  checked = false,
  onChange,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  label,
  style
}) => {
  const inputId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`switch-container ${size} ${disabled ? 'disabled' : ''}`} style={{ ...style }}>
      <input
        type="checkbox"
        id={inputId}
        className="switch-input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={inputId} className={`switch-label ${variant}`}>
        <span className="switch-slider"></span>
      </label>
      {label && <span className="switch-text">{label}</span>}
    </div>
  );
};

export default Switch;
