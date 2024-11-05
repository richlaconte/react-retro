import React, { useState } from 'react';
import Carousel from '.';
import List from '../List';
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaExclamationCircle } from 'react-icons/fa';
import ListItem from '../ListItem';

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div style={{ padding: '20px' }}>
      <h2>Carousel Component Example</h2>

      {/* Horizontal Carousel Example */}
      <Carousel orientation="horizontal">
        <div style={{ backgroundColor: '#A2D8FF', height: '100%', width: '100%' }}>
          Slide 1 Content
        </div>
        <div style={{ backgroundColor: '#FFD966', height: '100%', width: '100%' }}>
          Slide 2 Content
        </div>
        <div style={{ backgroundColor: '#98D19F', height: '100%', width: '100%' }}>
          Slide 3 Content
        </div>
      </Carousel>

      <h3 style={{ marginTop: '40px' }}>Controlled Carousel Example</h3>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px', alignItems: 'center' }}>
        <List>
          <ListItem
            icon={<FaCheckCircle />}
            title="Slide 1"
            onClick={() => setActiveIndex(0)}
            selected={activeIndex === 0}
          />
          <ListItem
            icon={<FaTimesCircle />}
            title="Slide 2"
            onClick={() => setActiveIndex(1)}
            selected={activeIndex === 1}
          />
          <ListItem
            icon={<FaInfoCircle />}
            title="Slide 3"
            subtitle="Customize your notification settings"
            onClick={() => setActiveIndex(2)}
            selected={activeIndex === 2}
          />
        </List>
        <Carousel orientation="horizontal" value={activeIndex} onChange={setActiveIndex} style={{ flexGrow: 1 }}>
          <div style={{ backgroundColor: '#A2D8FF', height: '100%', width: '100%' }}>
            Slide 1 Content
          </div>
          <div style={{ backgroundColor: '#FFD966', height: '100%', width: '100%' }}>
            Slide 2 Content
          </div>
          <div style={{ backgroundColor: '#98D19F', height: '100%', width: '100%' }}>
            Slide 3 Content
          </div>
        </Carousel>
      </div>

      {/* Vertical Carousel Example */}
      <div style={{ marginTop: '40px' }}>
        <h3>Vertical Carousel Example</h3>
        <Carousel orientation="vertical">
          <div style={{ backgroundColor: '#A2D8FF', height: '100%', width: '100%' }}>
            Slide 1 Content
          </div>
          <div style={{ backgroundColor: '#FFD966', height: '100%', width: '100%' }}>
            Slide 2 Content
          </div>
          <div style={{ backgroundColor: '#98D19F', height: '100%', width: '100%' }}>
            Slide 3 Content
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default App;
