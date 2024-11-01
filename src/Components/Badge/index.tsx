import React from 'react';
import './badge.css';

interface BadgeProps {
  content: number | string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  max?: number;
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  content,
  variant = 'primary',
  max = 99,
  children,
}) => {
  const displayContent =
    typeof content === 'number' && content > max ? `${max}+` : content;

  return (
    <div className="badge-container">
      {children}
      <div className={`badge ${variant}`}>
        <span>{displayContent}</span>
      </div>
    </div>
  );
};

export default Badge;
