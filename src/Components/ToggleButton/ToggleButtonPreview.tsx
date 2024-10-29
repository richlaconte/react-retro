import React, { useState } from 'react'
import { FaBold, FaAlignLeft, FaAlignCenter, FaAlignRight } from 'react-icons/fa';
import ToggleButton from '.';

const ToggleButtonPreview = () => {
  const [selected, setSelected] = useState(false);

  const handleToggle = (_event: React.MouseEvent<HTMLElement>, _value: string) => {
    setSelected(!selected);
  };

  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (_event: React.MouseEvent<HTMLElement>, value: string) => {
    setAlignment(value);
  };

  return (
    <div>
      <div style={{ padding: '20px' }}>
        <h2>Single ToggleButton</h2>
        <ToggleButton
          value="bold"
          selected={selected}
          onChange={handleToggle}
          label="Bold"
          icon={<FaBold />}
          variant="primary"
          size="medium"
        />
      </div>
      <div style={{ padding: '20px' }}>
        <h2>ToggleButton Group</h2>
        <div className="toggle-button-group">
          <ToggleButton
            value="left"
            selected={alignment === 'left'}
            onChange={handleAlignment}
            icon={<FaAlignLeft />}
            variant="secondary"
          />
          <ToggleButton
            value="center"
            selected={alignment === 'center'}
            onChange={handleAlignment}
            icon={<FaAlignCenter />}
            variant="secondary"
          />
          <ToggleButton
            value="right"
            selected={alignment === 'right'}
            onChange={handleAlignment}
            icon={<FaAlignRight />}
            variant="secondary"
          />
        </div>
      </div>
    </div>
  )
}

export default ToggleButtonPreview