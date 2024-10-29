import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import { FaGithub, FaArrowRight, FaPlay, FaArrowLeft, FaPause } from 'react-icons/fa';
import Accordion from '../../Components/Accordion';
import AccordionItem from '../../Components/AccordionItem';
import Button from '../../Components/Button';
import Progress from '../../Components/Progress';
import Skeleton from '../../Components/Skeleton';

import reactRetroLogo from '../../assets/reactRetroLogo.png';
import Alert from '../../Components/Alert';
import Code from '../../Components/Code';
import Card from '../../Components/Card';
import Switch from '../../Components/Switch';
import IconButton from '../../Components/IconButton';

import boston from '../../assets/boston.jpg'
import Slider from '../../Components/Slider/Slider';
import Select from '../../Components/Select';

const LandingPage: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [loading, setLoading] = useState(false);
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(75);
  const [progressColor, setProgressColor] = useState('success');
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={reactRetroLogo} alt="RetroUI Logo" className="logo" />
        <p className="subtitle">
          Build beautiful, retro-inspired interfaces with ease.
        </p>
        <Button variant="primary" onClick={() => navigate('/design')}>
          Get Started <FaArrowRight />
        </Button>
        <Button variant="secondary">
          <FaGithub /> View on GitHub
        </Button>
      </section>
      <section className="features-section bg-secondary" style={{ paddingTop: '16px'}}>
      {
        showAlert && 
        <Alert variant="success" title="Get started now!" onClose={() => setShowAlert(false)}>
          <Code withCopy>npm i react-retro</Code>
        </Alert>
      }
        <div style={{ display: 'flex', gap: '16px', marginTop: '22px', justifyContent: 'center' }}>
          <Card style={{ width: '240px', padding: '0px', backgroundColor: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px'}}>
              <Progress variant="circular" mode="determinate" color='success' size='large' value={75} showValue />
              <div style={{ flexGrow: 1, textAlign: 'left' }}>
                <p>Page views</p>
                <h3>432,391</h3>
              </div>
            </div>
          </Card>
          <Card style={{ width: '240px', padding: '0px', backgroundColor: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px'}}>
              <Progress variant="circular" mode="determinate" color='success' size='large' value={75} showValue valueType='positive' />
              <div style={{ flexGrow: 1, textAlign: 'left' }}>
                <p>Page views</p>
                <h3>432,391</h3>
              </div>
            </div>
          </Card>
          <Card style={{ width: '240px', padding: '0px', backgroundColor: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px'}}>
              <Progress variant="circular" mode="determinate" color='success' size='large' value={75} showValue valueType='positive' />
              <div style={{ flexGrow: 1, textAlign: 'left' }}>
                <p>Page views</p>
                <h3>432,391</h3>
              </div>
            </div>
          </Card>
          <Card style={{ width: '240px', padding: '0px', backgroundColor: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px'}}>
              <Progress variant="circular" mode="determinate" color='success' size='large' value={75} showValue />
              <div style={{ flexGrow: 1, textAlign: 'left' }}>
                <p>Page views</p>
                <h3>432,391</h3>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <section className='bg-secondary'>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div>
            <Accordion style={{ width: '400px' }}>
              <AccordionItem id="state" header="State">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Switch checked={loading} onChange={() => setLoading(!loading)} style={{ marginRight: '8px'}} />
                    <p>Show loading state</p>
                  </div>
                  <div>
                    <p style={{ marginBottom: '8px' }}>Song progress value</p>
                    <Slider value={progress} onChange={(value) => {
                        setPlay(true)
                        setProgress(value)
                      }} 
                    />
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem id="content" header="Content">
                Test
              </AccordionItem>
              <AccordionItem id='style' header="Style">
                <Select
                  value={progressColor}
                  onChange={(value) => setProgressColor(value)}
                  label="Color"
                  options={
                    [
                      { value: 'primary', label: 'Primary' },
                      { value: 'secondary', label: 'Secondary' },
                      { value: 'success', label: 'Success' },
                      { value: 'warning', label: 'Warning' },
                      { value: 'error', label: 'Error' },
                    ]
                  }
                />

              </AccordionItem>
            </Accordion>
          </div>
          <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Card style={{ width: '400px', padding: '12px', height: '140px', backgroundColor: 'white' }}>
              <div style={{ display: 'flex', gap: '12px', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {
                    loading ?
                    <Skeleton width={140} height={140} variant="rectangular" /> :
                    <img src={boston} style={{ width: '140px', borderRadius: '8px' }} />
                  }
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow:1 }}>
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {
                      loading ?
                      <Skeleton width={120} height={24} variant="rectangular" /> :
                      <p style={{ fontWeight: 'bold' }}>Boston</p>
                    }
                    {
                      loading ?
                      <Skeleton width={120} height={24} variant="rectangular" /> :
                      <p>Peace of mind</p>
                    }
                  </div>
                  <div>
                    <Progress variant="linear" mode="determinate" color={play ? 'success' : 'secondary'} size='large' value={loading ? 0 : progress} style={{ margin: '0' }} />
                  </div>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    <IconButton variant="primary" ariaLabel='info' disabled={loading}>
                      <FaArrowLeft />
                    </IconButton>
                    <IconButton variant="primary" ariaLabel='info' onClick={() => setPlay(!play)} disabled={loading}>
                      {
                        play ? <FaPause /> : <FaPlay />
                      }
                    </IconButton>
                    <IconButton variant="primary" ariaLabel='info' disabled={loading}>
                      <FaArrowRight />
                    </IconButton>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases-section">
        <h2>Endless Possibilities</h2>
        <div className="use-cases">
          <div className="use-case">
            <img src="hero-image.png" alt="Dashboard Example" />
            <h3>Build Engaging Dashboards</h3>
            <p>
              Create dashboards that not only provide valuable insights but also offer a delightful user experience.
            </p>
          </div>
          <div className="use-case">
            <img src="hero-image.png" alt="Landing Page Example" />
            <h3>Design Stunning Landing Pages</h3>
            <p>
              Make a lasting first impression with landing pages that captivate your audience.
            </p>
          </div>
          {/* Add more use cases as needed */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Developers Are Saying</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"RetroUI has completely transformed the way I build interfaces. The components are easy to use and the design is simply amazing!"</p>
            <h4>- Alex P., Frontend Developer</h4>
          </div>
          <div className="testimonial">
            <p>"I love the unique aesthetic of RetroUI. It adds a fun and engaging element to my projects."</p>
            <h4>- Maria S., UI/UX Designer</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Get Started Today</h2>
        <p>
          Join the community of developers using RetroUI to create stunning, retro-inspired applications.
        </p>
        <Button variant="primary">
          Download Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <img src="logo.png" alt="RetroUI Logo" className="footer-logo" />
          <p>&copy; 2023 RetroUI. All rights reserved.</p>
          <div className="social-links">
            <a href="#"><FaGithub size={24} /></a>
            {/* Add more social links if needed */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
