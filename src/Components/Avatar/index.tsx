import React from 'react';
import './avatar.css';

interface AvatarProps {
  src?: string
  alt?: string
  initials?: string
  icon?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  backgroundColor?: string
  textColor?: string
  square?: boolean
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  initials,
  icon,
  size = 'medium',
  backgroundColor = '#A2D8FF',
  textColor = '#333333',
  square = false
}) => {
  return (
    <div
      className={`avatar-container ${square ? 'square' : ''} ${size}`}
      style={{ backgroundColor, color: textColor }}
    >
      {src ? (
        <img src={src} alt={alt} className="avatar-image" />
      ) : initials ? (
        <span className="avatar-initials">{initials}</span>
      ) : icon ? (
        <span className="avatar-icon">{icon}</span>
      ) : (
        <span className="avatar-placeholder">?</span>
      )}
    </div>
  );
};

export default Avatar;
