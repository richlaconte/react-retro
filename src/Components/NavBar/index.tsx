import React from 'react';
import './navbar.css';

interface NavBarProps {
  logo?: React.ReactNode;
  color?: string;
  children?: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ logo, color, children }) => {
  return (
    <header className={`navbar ${color ? `bg-${color}` : ''}`}>
      <div className="navbar-logo">{logo}</div>
      <nav className="navbar-menu">{children}</nav>
    </header>
  );
};

export default NavBar;
