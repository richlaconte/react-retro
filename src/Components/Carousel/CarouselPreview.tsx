import React from 'react';
import Carousel from '.';

const App: React.FC = () => {
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
