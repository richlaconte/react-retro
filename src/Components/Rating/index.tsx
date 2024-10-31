import React, { useState } from 'react';
import './rating.css';
import { FaStar } from 'react-icons/fa';

interface RatingProps {
  value?: number; // Initial value for the rating
  max?: number; // Maximum number of rating items (stars)
  onChange?: (value: number) => void; // Callback when rating is changed
  size?: 'small' | 'medium' | 'large'; // Size variant
}

const Rating: React.FC<RatingProps> = ({
  value = 0,
  max = 5,
  onChange,
  size = 'medium',
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const handleClick = (rating: number) => {
    if (onChange) {
      onChange(rating);
    }
  };

  const handleMouseEnter = (rating: number) => {
    setHoverValue(rating);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  return (
    <div className={`rating-container ${size}`}>
      {[...Array(max)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <FaStar
            key={index}
            className={`star ${hoverValue ? (ratingValue <= hoverValue ? 'hover' : '') : ratingValue <= value ? 'selected' : ''}`}
            onClick={() => handleClick(ratingValue)}
            onMouseEnter={() => handleMouseEnter(ratingValue)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};

export default Rating;
