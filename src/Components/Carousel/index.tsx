import React, { useState } from 'react';
import './carousel.css';
import { FaChevronLeft, FaChevronRight, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import IconButton from '../IconButton';

interface CarouselProps {
  children: React.ReactNode[];
  orientation?: 'horizontal' | 'vertical';
  controlsOutside?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ children, orientation = 'horizontal', controlsOutside }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div style={{ display: 'flex' }}>
      <div className={`carousel-container ${orientation} ${controlsOutside ? 'controls-outside' : ''}`}>
        <div className="carousel-wrapper">
          <div
            className="carousel-content"
            style={{
              transform: orientation === 'horizontal'
                ? `translateX(-${currentIndex * 100}%)`
                : `translateY(-${currentIndex * 100}%)`
            }}
          >
            {children.map((child, index) => (
              <div key={index} className="carousel-item">
                {child}
              </div>
            ))}
          </div>
        </div>
        <IconButton onClick={goToPrevious} ariaLabel='Previous' className='carousel-button prev-button'>
          {orientation === 'horizontal' ? <FaChevronLeft /> : <FaChevronUp />}
        </IconButton>
        <IconButton onClick={goToNext} ariaLabel='Next' className='carousel-button next-button'>
          {orientation === 'horizontal' ? <FaChevronRight /> : <FaChevronDown />}
        </IconButton>
        <div className="carousel-dots">
          {children.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;