import React, { useState, useRef, useEffect } from 'react';
import './slider.css';

interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  valueLabelDisplay?: 'on' | 'auto' | 'off';
}

const Slider: React.FC<SliderProps> = ({
  value = 0,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  valueLabelDisplay = 'off',
}) => {
  const [sliderValue, setSliderValue] = useState(value);
  const trackRef = useRef<HTMLDivElement>(null);
  const [_trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.offsetWidth);
    }
  }, []);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (trackRef.current) {
        const rect = trackRef.current.getBoundingClientRect();
        let newValue =
          ((e.clientX - rect.left) / rect.width) * (max - min) + min;
        newValue = Math.round(newValue / step) * step;
        newValue = Math.max(min, Math.min(max, newValue));
        setSliderValue(newValue);
        if (onChange) onChange(newValue);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    handleMouseMove(event.nativeEvent);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const percent = ((sliderValue - min) / (max - min)) * 100;

  return (
    <div
      className={`slider-container ${size} ${disabled ? 'disabled' : ''}`}
    >
      <div
        className={`slider-track ${variant}`}
        ref={trackRef}
        onMouseDown={handleMouseDown}
      >
        <div
          className="slider-thumb"
          style={{ left: `${percent}%` }}
          tabIndex={0}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={sliderValue}
          aria-disabled={disabled}
        ></div>
        <div
          className="slider-range"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      {valueLabelDisplay !== 'off' && (
        <div className="slider-value-label">{sliderValue}</div>
      )}
    </div>
  );
};

export default Slider;
