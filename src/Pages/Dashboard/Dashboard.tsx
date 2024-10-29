import React, { useState } from 'react';
import './Dashboard.css';
import { FaBars, FaBell, FaUser, FaCog, FaSignOutAlt, FaAlignLeft, FaAlignCenter, FaAlignRight } from 'react-icons/fa';
import Accordion from '../../Components/Accordion';
import AccordionItem from '../../Components/AccordionItem';
import Badge from '../../Components/Badge';
import Checkbox from '../../Components/CheckBox';
import Chip from '../../Components/Chip';
import Menu from '../../Components/Menu';
import MenuItem from '../../Components/MenuItem';
import Popover from '../../Components/Popover';
import Skeleton from '../../Components/Skeleton';
import Slider from '../../Components/Slider/Slider';
import Switch from '../../Components/Switch';
import ToggleButton from '../../Components/ToggleButton';


const Dashboard: React.FC = () => {
  // State for Menu
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);

  // State for Popover
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState<HTMLElement | null>(null);

  // State for Settings
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [volume, setVolume] = useState(50);

  // Handlers
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    setMenuAnchorEl(null);
  };

  const handlePopoverClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPopoverAnchorEl(event.currentTarget);
    setPopoverOpen(!popoverOpen);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
    setPopoverAnchorEl(null);
  };

  return (
    <div className="dashboard">
      {/* Navigation Bar */}
      <nav className="navbar">
        <button className="menu-button" onClick={handleMenuClick}>
          <FaBars size={24} />
        </button>
        <h1 className="app-title">RetroBoard</h1>
        <div className="nav-actions">
          <button className="icon-button" onClick={handlePopoverClick}>
            <Badge content={3}>
              <FaBell size={24} />
            </Badge>
          </button>
          <button className="icon-button" onClick={handleMenuClick}>
            <FaUser size={24} />
          </button>
        </div>
      </nav>

      {/* Side Menu */}
      <Menu anchorEl={menuAnchorEl} open={menuOpen} onClose={handleMenuClose}>
        <MenuItem icon={<FaUser />} onClick={handleMenuClose}>
          Profile
        </MenuItem>
        <MenuItem icon={<FaCog />} onClick={handleMenuClose}>
          Settings
        </MenuItem>
        <MenuItem icon={<FaSignOutAlt />} onClick={handleMenuClose}>
          Logout
        </MenuItem>
      </Menu>

      {/* Notifications Popover */}
      <Popover anchorEl={popoverAnchorEl} open={popoverOpen} onClose={handlePopoverClose}>
        <div className="notifications">
          <h3>Notifications</h3>
          <ul>
            <li>You have a new message.</li>
            <li>Your report is ready.</li>
            <li>System maintenance scheduled.</li>
          </ul>
        </div>
      </Popover>

      {/* Main Content */}
      <main className="main-content">
        {/* User Profile Section */}
        <section className="profile-section">
          <h2>Welcome, Jane Doe!</h2>
          <div className="profile-info">
            <div className="avatar">
              <FaUser size={64} />
              <Badge content="Pro" variant="success" />
            </div>
            <div className="profile-details">
              <p>Email: jane.doe@example.com</p>
              <p>Membership: <Chip label="Premium Member" variant="primary" /></p>
              <p>Interests:</p>
              <div className="interests">
                <Chip label="Gaming" variant="secondary" />
                <Chip label="Music" variant="secondary" />
                <Chip label="Art" variant="secondary" />
              </div>
            </div>
          </div>
        </section>

        {/* Settings Panel */}
        <section className="settings-section">
          <h2>Settings</h2>
          <div className="settings-item">
            <Switch
              label="Enable Notifications"
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
            />
          </div>
          <div className="settings-item">
            <label>Volume</label>
            <Slider
              value={volume}
              onChange={(value) => setVolume(value)}
              min={0}
              max={100}
              variant="warning"
              valueLabelDisplay="on"
            />
          </div>
          <div className="settings-item">
            <Checkbox label="Subscribe to newsletter" />
          </div>
          <div className="settings-item">
            <label>Text Alignment</label>
            <div className="toggle-button-group">
              <ToggleButton
                value="left"
                selected={true}
                onChange={() => {}}
                icon={<FaAlignLeft />}
              />
              <ToggleButton
                value="center"
                selected={false}
                onChange={() => {}}
                icon={<FaAlignCenter />}
              />
              <ToggleButton
                value="right"
                selected={false}
                onChange={() => {}}
                icon={<FaAlignRight />}
              />
            </div>
          </div>
        </section>

        {/* Notifications Area */}
        <section className="notifications-section">
          <h2>Recent Activities</h2>
          <Accordion>
            <AccordionItem id="activity1" header="System Update">
              <p>Your system was updated to version 2.0.</p>
            </AccordionItem>
            <AccordionItem id="activity2" header="Backup Completed">
              <p>Your data backup was completed successfully.</p>
            </AccordionItem>
            <AccordionItem id="activity3" header="New Message">
              <p>You received a new message from John.</p>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Loading Content Simulation */}
        <section className="loading-section">
          <h2>Loading Data...</h2>
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="rectangular" width="100%" height={200} />
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 RetroBoard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
