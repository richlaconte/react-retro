// Popover.tsx
import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './popover.css';

interface PopoverProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  showArrow?: boolean;
}

const Popover: React.FC<PopoverProps> = ({
  anchorEl,
  open,
  onClose,
  children,
  position = 'bottom',
  showArrow = true,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
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

  // Calculate the position of the popover
  const rect = anchorEl.getBoundingClientRect();
  const popoverStyle: React.CSSProperties = {
    position: 'absolute',
    top: rect.bottom + window.scrollY,
    left: rect.left + window.scrollX,
  };

  if (position === 'top') {
    popoverStyle.top = rect.top + window.scrollY - 10; // Adjust as needed
  } else if (position === 'left') {
    popoverStyle.top = rect.top + window.scrollY;
    popoverStyle.left = rect.left + window.scrollX - 10; // Adjust as needed
  } else if (position === 'right') {
    popoverStyle.top = rect.top + window.scrollY;
    popoverStyle.left = rect.right + window.scrollX;
  }

  return ReactDOM.createPortal(
    <div className={`popover ${position}`} ref={popoverRef} style={popoverStyle}>
      {showArrow && <div className={`popover-arrow ${position}`}></div>}
      <div className="popover-content">{children}</div>
    </div>,
    document.body
  );
};

export default Popover;
