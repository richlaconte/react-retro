import React, { useState } from 'react'
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Menu from '.';
import MenuItem from '../MenuItem';
import Button from '../Button';

const MenuPreview = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setAnchorEl(null);
  };

  const handleItemClick = (action: string) => {
    alert(`You clicked ${action}`);
    handleMenuClose();
  };

  return (
    <div style={{ padding: '20px' }}>
      <Button
        onClick={handleMenuClick}
        id="menu-button"
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Open Menu
      </Button>
      <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleMenuClose}>
        <MenuItem icon={<FaUser />} onClick={() => handleItemClick('Profile')}>
          Profile
        </MenuItem>
        <MenuItem icon={<FaCog />} onClick={() => handleItemClick('Settings')}>
          Settings
        </MenuItem>
        <MenuItem icon={<FaSignOutAlt />} onClick={() => handleItemClick('Logout')}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default MenuPreview