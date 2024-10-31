import React from 'react';
import './radiogroup.css';

interface RadioGroupProps {
  options: { value: string; label: string; disabled?: boolean }[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  size?: 'small' | 'medium' | 'large'; // Size variant for radio buttons
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  name,
  size = 'medium',
}) => {
  return (
    <div className={`radio-group ${size}`}>
      {options.map((option) => (
        <label
          key={option.value}
          className={`radio-option ${option.disabled ? 'disabled' : ''}`}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => !option.disabled && onChange(option.value)}
            disabled={option.disabled}
          />
          <span className="radio-button" />
          <span className="radio-label">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
