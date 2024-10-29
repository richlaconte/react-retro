import React from 'react';
import './avatar.css';

interface AvatarProps {
  src?: string; // Image URL
  alt?: string; // Alt text for the image
  initials?: string; // Initials to display if no image is provided
  icon?: React.ReactNode; // Icon to display if no image or initials are provided
  size?: 'small' | 'medium' | 'large'; // Size variant
  backgroundColor?: string; // Custom background color
  textColor?: string; // Custom text color
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  initials,
  icon,
  size = 'medium',
  backgroundColor = '#A2D8FF', // Default light blue
  textColor = '#333333', // Default dark grey
}) => {
  return (
    <div
      className={`avatar-container ${size}`}
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
