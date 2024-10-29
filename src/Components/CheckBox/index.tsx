import React from 'react';
import './checkbox.css';

interface CheckboxProps {
  id?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked = false,
  onChange,
  label,
  disabled = false,
  variant = 'primary',
  size = 'medium',
}) => {
  const inputId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`checkbox-container ${size} ${disabled ? 'disabled' : ''}`}>
      <input
        type="checkbox"
        id={inputId}
        className={`checkbox-input ${variant}`}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={inputId} className="checkbox-label">
        <span className="checkbox-box">
          {checked && (
            <svg
              className="checkbox-checkmark"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                d="M4 12l6 6L20 6"
              />
            </svg>
          )}
        </span>
        {label && <span className="checkbox-text">{label}</span>}
      </label>
    </div>
  );
};

export default Checkbox;
