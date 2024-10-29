import { useState } from 'react'
import Slider from './Slider';

const SliderPreview = () => {
  const [value, setValue] = useState(50);

  const handleSliderChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Slider Example</h2>
      <Slider
        value={value}
        onChange={handleSliderChange}
        min={0}
        max={100}
        step={5}
        variant="success"
        size="medium"
        valueLabelDisplay="on"
      />
    </div>
  );
}

export default SliderPreview