import React from 'react';
import './sidebar.css';

interface SidebarProps {
  logo?: React.ReactNode;
  children: React.ReactNode;
  collapsed?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ logo, children, collapsed = false }) => {
  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      {logo && <div className="sidebar-logo">{logo}</div>}
      <nav className="sidebar-content">{children}</nav>
    </div>
  );
};

export default Sidebar;
