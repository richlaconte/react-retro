// Menu.tsx
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './menu.css';

interface MenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ anchorEl, open, onClose, children }) => {
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, onClose]);

  if (!open || !anchorEl) {
    return null;
  }

  // Calculate the position of the menu
  const rect = anchorEl.getBoundingClientRect();
  const style: React.CSSProperties = {
    position: 'absolute',
    top: rect.bottom + window.scrollY,
    left: rect.left + window.scrollX,
  };

  return ReactDOM.createPortal(
    <ul className="menu" ref={menuRef} style={style} role="menu" aria-labelledby={anchorEl.id}>
      {children}
    </ul>,
    document.body
  );
};

export default Menu;
