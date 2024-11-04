import React from 'react';
import './textfield.css';

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: () => void;
  multiline?: boolean;
  rows?: number;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  variant?: 'standard' | 'contained';
  autocomplete?: string;
  style?: React.CSSProperties;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  value,
  onChange,
  onKeyDown,
  onFocus,
  multiline = false,
  rows = 3,
  error = false,
  helperText,
  disabled = false,
  variant = 'standard',
  autocomplete = 'off',
  style
}) => {
  // Generate unique ID for accessibility
  const inputId = label ? `textfield-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined;

  const inputClassName = `textfield-input ${variant} ${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`;
  const labelClassName = `textfield-label ${disabled ? 'disabled' : ''}`;
  const helperTextClassName = `helper-text ${error ? 'error' : ''}`;

  const inputProps = {
    id: inputId,
    className: inputClassName,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    'aria-invalid': error,
    'aria-describedby': helperText ? `${inputId}-helper-text` : undefined,
  };

  return (
    <div className="textfield-container" style={{ ...style }}>
      {label && (
        <label className={labelClassName} htmlFor={inputId}>
          {label}
        </label>
      )}
      {multiline ? (
        <textarea {...inputProps} rows={rows} onKeyDown={onKeyDown} onFocus={onFocus} autoComplete={autocomplete} />
      ) : (
        <input type="text" {...inputProps} onKeyDown={onKeyDown} onFocus={onFocus} autoComplete={autocomplete} />
      )}
      {helperText && (
        <div id={`${inputId}-helper-text`} className={helperTextClassName}>
          {helperText}
        </div>
      )}
    </div>
  );
};

export default TextField;
