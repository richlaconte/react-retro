import React from 'react';
import './code.css';
import { FaClipboard } from 'react-icons/fa';
import IconButton from '../IconButton';

interface CodeProps {
  children: string; // The code snippet
  variant?: 'inline' | 'block'; // Variant for inline or block code
  withCopy?: boolean; // Option to include a copy button
  style?: React.CSSProperties
}

const Code: React.FC<CodeProps> = ({ children, variant = 'inline', withCopy = false, style }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
  };

  return (
    <div className={`code-container ${variant}`} style={{...style}}>
      <code>{children}</code>
      {withCopy && variant ==='block' && (
        <IconButton className="copy-button" variant="secondary" ariaLabel="Copy" square size="small" onClick={copyToClipboard}>
          <FaClipboard />
        </IconButton>
      )}
      {withCopy && variant ==='inline' && (
        <IconButton className='copy-button-inline' variant="secondary" ariaLabel="Copy" square size="tiny" noOutline onClick={copyToClipboard}>
          <FaClipboard />
        </IconButton>
      )}
    </div>
  );
};

export default Code;
