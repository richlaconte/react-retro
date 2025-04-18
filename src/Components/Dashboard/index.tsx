import React from 'react';
import './dashboard.css';
import NavBar from '../NavBar';
import Sidebar from '../Sidebar';

interface DashboardProps {
  children: React.ReactNode;
  sidebarContent: React.ReactNode;
  navbarContent?: React.ReactNode;
  navbarLogo?: React.ReactNode;
  sidebarLogo?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
}

const Dashboard: React.FC<DashboardProps> = ({
  children,
  sidebarContent,
  navbarContent,
  navbarLogo,
  sidebarLogo,
  color = 'secondary',
}) => {
  return (
    <div className="dashboard-container">
      <NavBar logo={navbarLogo} color={color}>{navbarContent}</NavBar>
      <div className="dashboard-content">
        <Sidebar logo={sidebarLogo}>{sidebarContent}</Sidebar>
        <main className="dashboard-main">{children}</main>
      </div>
    </div>
  );
};

export default Dashboard;
