import React from 'react';
import './avatarGroup.css';
import Avatar from '../Avatar';

interface AvatarGroupProps {
  children: React.ReactNode[];
  max?: number;
  size?: 'small' | 'medium' | 'large';
  overlap?: boolean;
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, max, size = 'small', overlap = true }) => {
  const avatarsToShow = max ? children.slice(0, max) : children;
  const remainingCount = max && children.length > max ? children.length - max : 0;

  return (
    <div className={`avatar-group avatar-group-${size} ${overlap ? 'avatar-group-overlap' : ''}`}>
      {avatarsToShow.map((child, index) => (
        <div key={index} className="avatar-group-item">
          {child}
        </div>
      ))}
      {remainingCount > 0 && (
        <Avatar initials={`+${remainingCount}`} size={size} className='avatar-group-item avatar-group-more' />
      )}
    </div>
  );
};

export default AvatarGroup;
