import React from 'react';
import './avatar.css';

interface AvatarProps {
  src?: string
  alt?: string
  name?: string
  initials?: string
  icon?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  backgroundColor?: string
  textColor?: string
  square?: boolean
  className?: string
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  name,
  initials,
  icon,
  size = 'medium',
  backgroundColor = '#A2D8FF',
  textColor = '#333333',
  square = false,
  className
}) => {
  if (name) {
    const nameArray = name.split(' ');
    if (nameArray.length > 1) {
      initials = nameArray[0].charAt(0) + nameArray[1].charAt(0);
    } else {
      initials = nameArray[0].charAt(0);
    }
  }

  return (
    <div
      className={`avatar-container ${square ? 'square' : ''} ${size}` + (className ? ` ${className}` : '')}
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
