import React from 'react';
import './progress.css';

import { FaAngleDown, FaAngleUp } from "react-icons/fa"

interface ProgressProps {
  variant?: 'circular' | 'linear';
  mode?: 'indeterminate' | 'determinate';
  value?: number;
  size?: 'small' | 'medium' | 'large';
  showValue?: boolean;
  valueType?: 'number' | 'percentage' | 'positive' | 'negative';
  valuePosition?: 'center' | 'top' | 'bottom';
  label?: string;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  style?: React.CSSProperties;
}

const Progress: React.FC<ProgressProps> = ({
  variant = 'circular',
  mode = 'indeterminate',
  value = 0,
  size = 'medium',
  showValue = false,
  valueType = 'percentage',
  valuePosition = 'center',
  label,
  color = 'primary',
  style
}) => {
  if (variant === 'circular') {
    return (
      <div className={`progress-container circular ${size} ${color}`} style={{ ...style }}>
        {label && valuePosition === 'top' && (
          <div className="progress-label">{label}</div>
        )}
        <div
          className={`progress-circle ${mode} ${color}`}
          role="progressbar"
          aria-valuenow={mode === 'determinate' ? value : undefined}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {mode === 'determinate' && (
            <svg className="progress-svg" viewBox="22 22 44 44">
              <circle
                className="progress-circle-bg"
                cx="44"
                cy="44"
                r="20.2"
                fill="none"
                strokeWidth="3.6"
              />
              <circle
                className="progress-circle-fg"
                cx="44"
                cy="44"
                r="20.2"
                fill="none"
                strokeWidth="3.6"
                strokeDasharray={`${Math.round(
                  (value / 100) * 126
                )}, 126`}
              />
            </svg>
          )}
          {mode === 'indeterminate' && (
            <div className="progress-spinner"></div>
          )}
          {showValue && valuePosition === 'center' && mode === 'determinate' && valueType === 'percentage' && (
            <div className="progress-value">{`${Math.round(value)}%`}</div>
          )}
          {showValue && valuePosition === 'center' && mode === 'determinate' && valueType === 'number' && (
            <div className="progress-value">{`${Math.round(value)}`}</div>
          )}
          {showValue && valuePosition === 'center' && mode === 'determinate' && valueType === 'positive' && (
            <div className="progress-value positive" style={{ transform: 'rotate(90deg)' }}><FaAngleUp /></div>
          )}
          {showValue && valuePosition === 'center' && mode === 'determinate' && valueType === 'negative' && (
            <div className="progress-value"><FaAngleDown /></div>
          )}
        </div>
        {label && valuePosition === 'bottom' && (
          <div className="progress-label">{label}</div>
        )}
      </div>
    );
  } else {
    return (
      <div className={`progress-container linear ${size} ${color}`} style={{ ...style }}>
        {label && valuePosition === 'top' && (
          <div className="progress-label">{label}</div>
        )}
        <div
          className={`progress-bar ${mode} ${color}`}
          role="progressbar"
          aria-valuenow={mode === 'determinate' ? value : undefined}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {mode === 'determinate' && (
            <div
              className="progress-bar-inner"
              style={{ width: `${value}%` }}
            ></div>
          )}
          {mode === 'indeterminate' && (
            <div className="progress-bar-indeterminate"></div>
          )}
        </div>
        {showValue && mode === 'determinate' && (
          <div
            className={`progress-value ${
              valuePosition === 'top' ? 'above' : 'below'
            }`}
          >{`${Math.round(value)}%`}</div>
        )}
        {label && valuePosition === 'bottom' && (
          <div className="progress-label">{label}</div>
        )}
      </div>
    );
  }
};

export default Progress;
