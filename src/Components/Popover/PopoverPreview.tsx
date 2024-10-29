import React, { useState } from 'react'
import Popover from '.';
import Button from '../Button';

const PopoverPreview = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
    setAnchorEl(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Button
        onClick={handlePopoverClick}
        id="popover-button"
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Open Popover
      </Button>
      <Popover anchorEl={anchorEl} open={popoverOpen} onClose={handlePopoverClose}>
        <h3>Popover Title</h3>
        <p>This is the content of the popover.</p>
      </Popover>
    </div>
  );
}

export default PopoverPreview