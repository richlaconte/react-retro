import React, { useState } from 'react'
import Switch from '.';

const SwitchPreview = () => {
  const [checked, setChecked] = useState(false);

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Switch Example</h2>
      <Switch
        label="Enable Notifications"
        checked={checked}
        onChange={handleSwitchChange}
        variant="warning"
        size="medium"
      />
    </div>
  );
}

export default SwitchPreview