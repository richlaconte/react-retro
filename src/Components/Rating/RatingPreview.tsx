import React, { useState } from 'react'
import Rating from '.';

const RatingPreview = () => {
  const [rating, setRating] = useState(3);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Rating Component Example</h2>

      {/* Rating Example */}
      <Rating
        value={rating}
        max={5}
        size="large"
        onChange={(value) => {
          setRating(value);
          console.log('Rating selected:', value);
        }}
      />
    </div>
  );
}

export default RatingPreview