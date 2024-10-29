// MenuItem.tsx
import React from 'react';
import '../Menu/menu.css'

interface MenuItemProps {
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  disabled?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, disabled = false, children, icon }) => {
  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <li
      className={`menu-item ${disabled ? 'disabled' : ''}`}
      onClick={handleClick}
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
    >
      {icon && <span className="menu-item-icon">{icon}</span>}
      <span className="menu-item-text">{children}</span>
    </li>
  );
};

export default MenuItem;
