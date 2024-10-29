import React, { useState, useRef, useEffect } from 'react';
import './select.css';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  error = false,
  helperText,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside or when focus leaves the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedOptionIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown when focus leaves the select component
  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    // Delay to allow focus event to propagate
    setTimeout(() => {
      if (selectRef.current && !selectRef.current.contains(document.activeElement)) {
        setIsOpen(false);
        setFocusedOptionIndex(-1);
      }
    }, 0);
  };

  // Keyboard navigation
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1);

  const handleOptionSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setFocusedOptionIndex(-1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (isOpen && focusedOptionIndex >= 0) {
          handleOptionSelect(options[focusedOptionIndex].value);
        } else {
          setIsOpen(true);
        }
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedOptionIndex(0);
        } else {
          setFocusedOptionIndex((prevIndex) =>
            prevIndex < options.length - 1 ? prevIndex + 1 : 0
          );
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedOptionIndex(options.length - 1);
        } else {
          setFocusedOptionIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : options.length - 1
          );
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setFocusedOptionIndex(-1);
        break;
      case 'Tab':
        // Close dropdown on Tab key press
        setIsOpen(false);
        setFocusedOptionIndex(-1);
        break;
      default:
        break;
    }
  };

  // Generate unique ID for accessibility
  const selectId = label ? `select-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined;

  return (
    <div className="select-container">
      {label && (
        <label className={`select-label ${disabled ? 'disabled' : ''}`} htmlFor={selectId}>
          {label}
        </label>
      )}
      <div
        id={selectId}
        className={`select-input ${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`}
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        ref={selectRef}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby={selectId}
        role="combobox"
        aria-disabled={disabled}
        aria-invalid={error}
        onBlur={handleBlur}
      >
        <span className={`select-placeholder ${value ? 'selected' : ''}`}>
          {value
            ? options.find((option) => option.value === value)?.label
            : placeholder}
        </span>
        <div className="select-arrow">&#9662;</div>
        {isOpen && (
          <ul className="select-dropdown" role="listbox">
            {options.map((option, index) => (
              <li
                key={option.value}
                className={`select-option ${
                  option.value === value ? 'selected' : ''
                } ${focusedOptionIndex === index ? 'focused' : ''}`}
                onMouseDown={(e) => e.preventDefault()} // Prevent focus loss on click
                onClick={() => handleOptionSelect(option.value)}
                role="option"
                aria-selected={option.value === value}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {helperText && (
        <div id={`${selectId}-helper-text`} className={`helper-text ${error ? 'error' : ''}`}>
          {helperText}
        </div>
      )}
    </div>
  );
};

export default Select;
