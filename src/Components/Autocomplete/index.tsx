import React, { useState, useRef, useEffect } from 'react';
import './autocomplete.css';
import TextField from '../TextField';

export interface Option {
  label: string;
  value: string;
}

interface AutocompleteProps {
  options: Option[];
  placeholder?: string;
  label?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  onChange?: (value: Option | null) => void;
  disabled?: boolean;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  options,
  placeholder = 'Select an option',
  label,
  variant = 'primary',
  size = 'medium',
  onChange,
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const autocompleteRef = useRef<HTMLDivElement>(null);

  const filteredOptions = inputValue ? options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  ) : options;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
    setShowOptions(true);
    setHighlightedIndex(-1);
  };

  const handleOptionClick = (option: Option) => {
    setInputValue(option.label);
    setShowOptions(false);
    setHighlightedIndex(-1);
    if (onChange) {
      onChange(option);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (showOptions) {
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setHighlightedIndex((prevIndex) =>
          prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : prevIndex
        );
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setHighlightedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : -1));
      } else if (event.key === 'Enter') {
        event.preventDefault();
        if (highlightedIndex >= 0) {
          handleOptionClick(filteredOptions[highlightedIndex]);
        }
      } else if (event.key === 'Escape') {
        setShowOptions(false);
        setHighlightedIndex(-1);
      }
    } else {
      if (event.key === 'ArrowDown') {
        setShowOptions(true);
      }
    }
  };

  return (
    <div
      className={`autocomplete-container ${variant} ${size} ${
        disabled ? 'disabled' : ''
      }`}
      ref={autocompleteRef}
    >
      <TextField
        placeholder={placeholder}
        variant='contained'
        value={inputValue}
        label={label}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => !disabled && setShowOptions(true)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={showOptions}
        aria-controls="autocomplete-listbox"
        autocomplete='off'
      />
      {showOptions && filteredOptions.length > 0 && (
        <div
          className='autocomplete-options-container'
        >
          <ul
            className="autocomplete-options"
            role="listbox"
            id="autocomplete-listbox"
          >
            {filteredOptions.map((option, index) => (
              <li
                key={option.value}
                className={`autocomplete-option ${
                  highlightedIndex === index ? 'highlighted' : ''
                }`}
                onMouseDown={() => handleOptionClick(option)}
                role="option"
                aria-selected={highlightedIndex === index}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
