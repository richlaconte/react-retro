import React, { useEffect } from 'react';
import './modal.css';

import { FaTimes } from 'react-icons/fa';
import IconButton from '../IconButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  // Add useEffect to handle Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Esc') {
        onClose();
      }
    };

    // Add event listener when modal is open
    document.addEventListener('keydown', handleEscape);

    // Clean up event listener when modal is closed or unmounted
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header">
        <IconButton
          variant="secondary"
          onClick={onClose}
          size='small'
          ariaLabel="Close modal"
        >
          <FaTimes />
        </IconButton>
        {title && title}
        </div>
        <div className="modal-content">{children}</div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;
