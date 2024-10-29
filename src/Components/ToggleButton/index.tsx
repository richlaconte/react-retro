import React from 'react';
import './togglebutton.css';

interface ToggleButtonProps {
  value: string;
  selected: boolean;
  onChange: (event: React.MouseEvent<HTMLElement>, value: string) => void;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  label?: string;
  icon?: React.ReactNode;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  value,
  selected,
  onChange,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  label,
  icon,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!disabled) {
      onChange(event, value);
    }
  };

  return (
    <button
      className={`toggle-button ${variant} ${size} ${
        selected ? 'selected' : ''
      } ${disabled ? 'disabled' : ''}`}
      onClick={handleClick}
      disabled={disabled}
      aria-pressed={selected}
    >
      {icon && <span className="toggle-button-icon">{icon}</span>}
      {label && <span className="toggle-button-label">{label}</span>}
    </button>
  );
};

export default ToggleButton;
