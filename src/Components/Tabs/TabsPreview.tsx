import React from 'react'
import Tabs from '.';

const TabsPreview = () => {
  const tabLabels = ['Tab 1', 'Tab 2', 'Tab 3'];
  const tabContent = [
    <div key="tab1">Content for Tab 1</div>,
    <div key="tab2">Content for Tab 2</div>,
    <div key="tab3">Content for Tab 3</div>,
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tabs Component Example</h2>

      {/* Tabs Example */}
      <Tabs labels={tabLabels} defaultActiveTab={0}>
        {tabContent}
      </Tabs>
    </div>
  );
}

export default TabsPreview