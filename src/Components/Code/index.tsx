import React from 'react';
import './code.css';
import { FaClipboard } from 'react-icons/fa';
import IconButton from '../IconButton';

interface CodeProps {
  children: string; // The code snippet
  variant?: 'inline' | 'block'; // Variant for inline or block code
  withCopy?: boolean; // Option to include a copy button
  maxHeight?: string;
  style?: React.CSSProperties;
}

const Code: React.FC<CodeProps> = ({ children, variant = 'inline', withCopy = false, maxHeight, style }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
  };

  return (
    <div className={`code-container ${variant}`} style={{ padding: maxHeight ? '0px' : '8px', paddingLeft: '8px', ...style}}>
      {
        maxHeight ?
        <div style={{ maxHeight: maxHeight, overflow: 'auto', width: '100%' }}>
          <code style={{ overflow: 'auto' }}>{children}</code>
        </div>
        :
        <code style={{ overflow: 'auto' }}>{children}</code>
      }
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
