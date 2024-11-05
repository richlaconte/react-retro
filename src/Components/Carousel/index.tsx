import React, { useState } from 'react';
import './carousel.css';
import { FaChevronLeft, FaChevronRight, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import IconButton from '../IconButton';

interface CarouselProps {
  children: React.ReactNode[];
  buttonColor?: "success" | "primary" | "secondary" | "warning" | "error" | undefined;
  orientation?: 'horizontal' | 'vertical';
  controlsOutside?: boolean;
  onChange?: (index: number) => void;
  value?: number;
  style?: React.CSSProperties;
}

const Carousel: React.FC<CarouselProps> = ({ 
  children, 
  buttonColor, 
  orientation = 'horizontal', 
  controlsOutside, 
  onChange,
  value,
  style 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (onChange && value !== undefined) {
      return onChange(value - 1);
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    if (onChange && value !== undefined) {
      return onChange(value + 1);
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container-parent" style={{ display: 'flex', ...style }}>
      <div className={`carousel-container ${orientation} ${controlsOutside ? 'controls-outside' : ''}`}>
        <div className="carousel-wrapper">
          <div
            className="carousel-content"
            style={{
              transform: orientation === 'horizontal'
                ? `translateX(-${value !== undefined ? (value * 100) : (currentIndex * 100)}%)`
                : `translateY(-${value !== undefined ? (value * 100) : (currentIndex * 100)}%)`
            }}
          >
            {children.map((child, index) => (
              <div key={index} className="carousel-item">
                {child}
              </div>
            ))}
          </div>
        </div>
        <IconButton onClick={goToPrevious} ariaLabel='Previous' className='carousel-button prev-button' variant={buttonColor}>
          {orientation === 'horizontal' ? <FaChevronLeft /> : <FaChevronUp />}
        </IconButton>
        <IconButton onClick={goToNext} ariaLabel='Next' className='carousel-button next-button' variant={buttonColor}>
          {orientation === 'horizontal' ? <FaChevronRight /> : <FaChevronDown />}
        </IconButton>
        <div className="carousel-dots">
          {children.map((_, index) => (
            <div
              key={index}
              className={`dot ${(value !== undefined ? (value === index) : (index === currentIndex)) ? 'active' : ''}`}
              onClick={() => {
                if (onChange && value !== undefined) {
                  return onChange(index);
                }
                setCurrentIndex(index)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
