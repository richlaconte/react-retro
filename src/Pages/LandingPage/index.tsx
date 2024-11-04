import React, { useEffect, useState } from 'react';
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
import mountains from '../../assets/mountains.webp'

import Slider from '../../Components/Slider';
import Select from '../../Components/Select';
import TextField from '../../Components/TextField';
import Carousel from '../../Components/Carousel';
import Chip from '../../Components/Chip'
import Modal from '../../Components/Modal';
import { FaArrowUp, FaInfo } from 'react-icons/fa6';
import AvatarGroup from '../../Components/AvatarGroup';
import Avatar from '../../Components/Avatar';

const LandingPage: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [loading, setLoading] = useState(false);
  const [play, setPlay] = useState(true);
  const [progress, setProgress] = useState(75);
  const [progressColor, setProgressColor] = useState('success');
  const [buttonColor, setButtonColor] = useState('primary');

  const [songName, setSongName] = useState('Peace of mind');
  const [artistName, setArtistName] = useState('Boston');

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = () => {
    setMessages([...messages, message]);
    setMessage('');
  }

  useEffect(() => {
    const messagesContainer = document.getElementById('messages');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight + 100;
    }
  }, [messages]);

  const [artistModalOpen, setArtistModalOpen] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src={reactRetroLogo} alt="RetroUI Logo" className="logo" />
        <p className="subtitle">
          Because life's too short to use MUI again.
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
          <div style={{ display: 'flex', gap: '16px', paddingRight: '8px', paddingLeft: '4px', paddingTop: '4px', margin: 'auto' }}>
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
                <IconButton ariaLabel='info' size='small' variant={buttonColor as any} style={{ position: 'absolute', right: '10px', top: '10px' }} onClick={() => setArtistModalOpen(true)} disabled={loading}>
                  <FaInfo />
                </IconButton>
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
              <Card style={{ padding: '0px', overflow: 'hidden', width: '300px' }}>
                <div style={{ overflow: 'hidden', height: '100px' }}>
                  <img src={mountains} width='300' style={{ marginTop: '-90px' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '8px', paddingRight: '8px', paddingTop: '4px', paddingBottom: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <h3 style={{ margin: '0' }}>Project UI</h3>
                    <Chip label='Active' size='small' variant='success' flat />
                  </div>
                  <div>
                    <Progress variant="circular" mode="determinate" color='success' size='small' value={75} showValue />
                  </div>
                </div>
                <div style={{ padding: '8px' }}>
                  <p>
                    Tired of their projects looking like everything else they see, the team is searching for something new.
                  </p>
                </div>
                <div style={{ padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <AvatarGroup
                    size='small'
                    max={3}
                  >
                    <Avatar
                      name="Johann Sebastian Bach"
                      src="https://cdn.britannica.com/61/114461-050-E9206DB5/Johann-Sebastian-Bach-oil-canvas-Elias-Gottlieb-1746.jpg?w=400&h=300&c=crop"
                      size='small'
                    />
                    <Avatar
                      name="Wolfgang Amadeus Mozart"
                      src="https://theclassicreview.com/wp-content/uploads/2018/08/Mozart-Beginners-Guide-2024-1200-630.webp"
                      size='small'
                    />
                    <Avatar
                      name="Weird Al Yankovic"
                      src="https://cdn.houstonpublicmedia.org/wp-content/uploads/2019/06/13152325/Weird_Al_Yankovic-1200x800.jpg"
                      size='small'
                    />
                    <Avatar
                      name="Antonio Vivaldi"
                      src="https://www.kennedy-center.org/globalassets/education/resources-for-educators/classroom-resources/artsedge/artists/vivaldi-antonio.jpg"
                      size='small'
                    />
                  </AvatarGroup>
                  <Button variant={buttonColor as any} onClick={() => navigate('/design')}>Details</Button>
                </div>
              </Card>
            </div>
            <div style={{ backgroundColor: '#98D19F', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Card style={{ padding: '0px', overflow: 'hidden', width: '300px' }}>
                <div style={{ display: 'flex', padding: '8px', gap: '12px', borderBottom: '2px solid black' }}>
                  <Avatar
                    name="Johann Sebastian Bach"
                    src="https://cdn.britannica.com/61/114461-050-E9206DB5/Johann-Sebastian-Bach-oil-canvas-Elias-Gottlieb-1746.jpg?w=400&h=300&c=crop"
                    size='small'
                  />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ margin: '0' }}>Jojo Sebastian</h3>
                    <p style={{ margin: '0', fontSize: '16px', marginTop: '-4px' }}>Active ~270yrs ago</p>
                  </div>
                </div>
                <div style={{ padding: '8px', height: '200px', overflow: 'auto' }} id="messages">
                  <Card flat style={{ padding: '6px', marginLeft: '80px' }} bgColor='primary'>
                    Hey Jojo, what's your favorite movie line?
                  </Card>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '8px', alignItems: 'center' }}>
                    <Avatar
                      name="Johann Sebastian Bach"
                      src="https://cdn.britannica.com/61/114461-050-E9206DB5/Johann-Sebastian-Bach-oil-canvas-Elias-Gottlieb-1746.jpg?w=400&h=300&c=crop"
                      size='small'
                    />
                    <Card flat style={{ padding: '6px', marginRight: '40px' }}>
                      I'll be bach.
                    </Card>
                  </div>
                  {
                    messages.map((msg) => 
                      <Card flat style={{ padding: '6px', marginLeft: '80px', marginTop: '8px' }} bgColor='primary'>
                        {msg}
                      </Card>
                    )
                  }
                </div>
                <div style={{ padding: '8px', display: 'flex', alignItems: 'center', borderTop: '2px solid black' }}>
                  <TextField
                    variant="contained"
                    style={{ flexGrow: 1 }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') sendMessage();
                    }}
                  />
                  <IconButton square ariaLabel='Send' size='small' onClick={sendMessage}>
                    <FaArrowUp />
                  </IconButton>
                </div>
              </Card>
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
      <Modal 
        isOpen={artistModalOpen} 
        onClose={() => setArtistModalOpen(false)} 
        title="Boston info" 
        footer={
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="secondary" onClick={() => setArtistModalOpen(false)}>Close</Button>
            <Button variant="primary" onClick={() => window.open('https://en.wikipedia.org/wiki/Boston_(band)', '_blank')}>Read More</Button>
          </div>
        }
      >
        <div>
          <p>Boston is an American rock band formed in Boston, Massachusetts in 1975. The band's core members include multi-instrumentalist, founder and leader Tom Scholz, who played the majority of instruments on the band's 1976 self-titled debut album, and former lead vocalist Brad Delp, among a number of other musicians who varied from album to album.</p>
          <a href="https://en.wikipedia.org/wiki/Boston_(band)" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;
