import React from 'react';
import './chip.css';

interface ChipProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  onDelete?: () => void;
  disabled?: boolean;
}

const Chip: React.FC<ChipProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  icon,
  onDelete,
  disabled = false,
}) => {
  return (
    <div
      className={`chip ${variant} ${size} ${disabled ? 'disabled' : ''}`}
    >
      {icon && <div className="chip-icon">{icon}</div>}
      <span className="chip-label">{label}</span>
      {onDelete && !disabled && (
        <button
          className="chip-delete"
          onClick={onDelete}
          aria-label="Delete"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Chip;
