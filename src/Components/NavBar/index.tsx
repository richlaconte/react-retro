import React from 'react';
import './navbar.css';

interface NavBarProps {
  logo?: React.ReactNode;
  children?: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = ({ logo, children }) => {
  return (
    <header className="navbar">
      <div className="navbar-logo">{logo}</div>
      <nav className="navbar-menu">{children}</nav>
    </header>
  );
};

export default NavBar;
