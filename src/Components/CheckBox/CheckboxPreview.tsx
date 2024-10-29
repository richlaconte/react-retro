import React, { useState } from 'react'
import Checkbox from '.';

const CheckBoxPreview = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Checkbox Example</h2>
      <Checkbox
        label="Accept Terms and Conditions"
        checked={checked}
        onChange={handleCheckboxChange}
        variant="primary"
        size="medium"
      />
    </div>
  );
}

export default CheckBoxPreview