import React, { useState, ReactNode } from 'react';
import './tabs.css';

interface TabsProps {
  labels: string[]; // Labels for each tab
  children: ReactNode[]; // Content for each tab
  defaultActiveTab?: number; // Default tab index to be active
}

const Tabs: React.FC<TabsProps> = ({ labels, children, defaultActiveTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {labels.map((label, index) => (
          <div
            key={index}
            className={`tab-label ${index === activeTab ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {label}
          </div>
        ))}
        <div className="tab-indicator" style={{ left: `calc(${activeTab} * 100%)` }} />
      </div>
      <div className="tabs-content">{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
