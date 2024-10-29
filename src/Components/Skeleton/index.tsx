import React from 'react';
import './skeleton.css';

interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  animation?: 'pixel' | 'none';
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  animation = 'pixel',
  width,
  height,
  style,
  className = '',
}) => {
  const classes = `skeleton ${variant} ${animation} ${className}`.trim();

  const inlineStyles: React.CSSProperties = {
    width,
    height,
    ...style,
  };

  return <div className={classes} style={inlineStyles}></div>;
};

export default Skeleton;
