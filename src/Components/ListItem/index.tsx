import React from 'react';
import '../List/list.css'

interface ListItemProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  icon,
  onClick,
  selected = false,
  disabled = false,
}) => {
  const className = `list-item ${onClick ? 'clickable' : ''} ${
    selected ? 'selected' : ''
  } ${disabled ? 'disabled' : ''}`;

  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <div
      className={className}
      onClick={handleClick}
      tabIndex={onClick && !disabled ? 0 : undefined}
      role={onClick ? 'button' : undefined}
      aria-disabled={disabled}
    >
      {icon && <div className="list-item-icon">{icon}</div>}
      <div className="list-item-content">
        <div className="list-item-title">{title}</div>
        {subtitle && <div className="list-item-subtitle">{subtitle}</div>}
      </div>
    </div>
  );
};

export default ListItem;
