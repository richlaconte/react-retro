import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import { FaGithub, FaArrowRight, FaPlay, FaArrowLeft, FaPause } from 'react-icons/fa';
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
import Slider from '../../Components/Slider';
import Select from '../../Components/Select';
import TextField from '../../Components/TextField';
import Carousel from '../../Components/Carousel';

const LandingPage: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [loading, setLoading] = useState(false);
  const [play, setPlay] = useState(true);
  const [progress, setProgress] = useState(75);
  const [progressColor, setProgressColor] = useState('success');
  const [buttonColor, setButtonColor] = useState('primary');

  const [songName, setSongName] = useState('Peace of mind');
  const [artistName, setArtistName] = useState('Boston');

  const navigate = useNavigate();
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={reactRetroLogo} alt="RetroUI Logo" className="logo" />
        <p className="subtitle">
          Because life's too short to keep using MUI.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <Button variant="primary" onClick={() => navigate('/design')} iconEnd={<FaArrowRight />}>
            Get Started
          </Button>
          <Button variant="secondary" iconStart={<FaGithub />} onClick={() => window.open('https://github.com/richlaconte/react-retro', '_blank')}>
            View on GitHub
          </Button>
        </div>
      </section>
      <section className="features-section bg-secondary" style={{ paddingTop: '16px'}}>
      {
        showAlert && 
        <Alert variant="success" title="Get started now!" onClose={() => setShowAlert(false)}>
          <Code withCopy>npm i react-retro</Code>
        </Alert>
      }
        <div style={{ display: 'flex', marginTop: '22px', overflow: 'auto', paddingBottom: '10px' }}>
          <div style={{ display: 'flex', gap: '16px', paddingRight: '8px', paddingLeft: '4px', paddingTop: '4px' }}>
            <Card style={{ width: '250px', padding: '0px', backgroundColor: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px'}}>
                <Progress variant="circular" mode="determinate" color='success' size='large' value={75} showValue />
                <div style={{ flexGrow: 1, textAlign: 'left' }}>
                  <p>Page views</p>
                  <h3>432,391</h3>
                </div>
              </div>
            </Card>
            <Card style={{ width: '250px', padding: '0px', backgroundColor: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px'}}>
                <Progress variant="circular" mode="determinate" color='success' size='large' value={75} showValue valueType='positive' />
                <div style={{ flexGrow: 1, textAlign: 'left' }}>
                  <p>Page views</p>
                  <h3>432,391</h3>
                </div>
              </div>
            </Card>
            <Card style={{ width: '250px', padding: '0px', backgroundColor: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px'}}>
                <Progress variant="circular" mode="determinate" color='success' size='large' value={75} showValue valueType='positive' />
                <div style={{ flexGrow: 1, textAlign: 'left' }}>
                  <p>Page views</p>
                  <h3>432,391</h3>
                </div>
              </div>
            </Card>
            <Card style={{ width: '250px', padding: '0px', backgroundColor: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px'}}>
                <Progress variant="circular" mode="determinate" color='success' size='large' value={75} showValue />
                <div style={{ flexGrow: 1, textAlign: 'left' }}>
                  <p>Page views</p>
                  <h3>432,391</h3>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className='bg-secondary' style={{ paddingBottom: '48px' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <div>
            <Card>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '320px' }}>
                <Switch checked={loading} onChange={() => setLoading(!loading)} style={{ marginRight: '8px'}} label='Show loading state' />
                <p style={{ marginBottom: '8px' }}>Song progress value</p>
                <Slider value={progress} onChange={(value) => {
                    setPlay(true)
                    setProgress(value)
                  }} 
                />
                <TextField
                  variant='contained'
                  label="Song name"
                  placeholder="Enter song name"
                  value={songName}
                  onChange={(e) => setSongName(e.target.value)}
                />
                <TextField
                  label="Artist name"
                  variant='contained'
                  placeholder="Enter artist name"
                  value={artistName}
                  onChange={(e) => setArtistName(e.target.value)}
                />
                <Select
                  value={progressColor}
                  onChange={(value) => setProgressColor(value)}
                  label="Progress bar color"
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
                <Select
                  value={buttonColor}
                  onChange={(value) => setButtonColor(value)}
                  label="Button color"
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
              </div>
            </Card>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Carousel orientation="vertical" style={{ width: '600px' }} buttonColor={buttonColor as any}>
            <div style={{ backgroundColor: '#FFD966', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                        <p style={{ fontWeight: 'bold' }}>{artistName}</p>
                      }
                      {
                        loading ?
                        <Skeleton width={120} height={24} variant="rectangular" /> :
                        <p>{songName}</p>
                      }
                    </div>
                    <div>
                      <Progress variant="linear" mode="determinate" color={play ? progressColor as any : 'secondary'} size='large' value={loading ? 0 : progress} style={{ margin: '0' }} />
                    </div>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                      <IconButton variant={buttonColor as any} ariaLabel='info' disabled={loading}>
                        <FaArrowLeft />
                      </IconButton>
                      <IconButton variant={buttonColor as any} ariaLabel='info' onClick={() => setPlay(!play)} disabled={loading}>
                        {
                          play ? <FaPause /> : <FaPlay />
                        }
                      </IconButton>
                      <IconButton variant={buttonColor as any} ariaLabel='info' disabled={loading}>
                        <FaArrowRight />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div style={{ backgroundColor: '#A2D8FF', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Card>
                Test
              </Card>
            </div>
            <div style={{ backgroundColor: '#98D19F', height: '100%', width: '100%' }}>
              Slide 3 Content
            </div>
          </Carousel>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
          <Button variant='success' iconEnd={<FaArrowRight />} onClick={() => navigate('/design')}>Browse Components</Button>
        </div>
      </section>
      <section className="cta-section">
        <h2>Get Started Today</h2>
        <p>
          Join the community of developers using react-retro to create stunning, retro-inspired applications.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Button variant="primary" onClick={() => navigate('/design')} iconEnd={<FaArrowRight />}>
            Get Started
          </Button>
          <Button variant="secondary" iconStart={<FaGithub />} onClick={() => window.open('https://github.com/richlaconte/react-retro', '_blank')}>
            Contribute
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
        <img src={reactRetroLogo} alt="RetroUI Logo" className="logo" style={{ width: '60px' }} />
          <p>&copy; 2024 react-retro. All rights reserved.</p>
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
