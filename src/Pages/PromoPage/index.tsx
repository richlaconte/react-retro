import React from 'react';
import './PromoPage.css';
import { FaGithub, FaArrowRight, FaCheckCircle, FaUser, FaChartPie } from 'react-icons/fa';
import Accordion from '../../Components/Accordion';
import AccordionItem from '../../Components/AccordionItem';
import Badge from '../../Components/Badge';
import Button from '../../Components/Button';
import Checkbox from '../../Components/CheckBox';
import Chip from '../../Components/Chip';
import Progress from '../../Components/Progress';
import Slider from '../../Components/Slider/Slider';
import Switch from '../../Components/Switch';
import ToggleButton from '../../Components/ToggleButton';


const PromoPage: React.FC = () => {
  return (
    <div className="promo-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img src="logo.png" alt="RetroUI Logo" className="logo" />
        <h1>RetroUI Component Library</h1>
        <p className="subtitle">
          Design delightful, retro-inspired interfaces with ease.
        </p>
        <Button variant="primary">
          Get Started <FaArrowRight />
        </Button>
        <Button variant="secondary">
          <FaGithub /> View on GitHub
        </Button>
      </section>

      {/* Features Built with RetroUI */}
      <section className="features-section">
        <h2>Built-Out Features with RetroUI</h2>

        {/* Feature 1: Dashboard Overview */}
        <div className="feature">
          <img src="feature-image.png" alt="Dashboard Overview" />
          <div className="feature-details">
            <h3>Interactive Dashboard</h3>
            <p>
              Build beautiful dashboards with RetroUI components, featuring real-time charts, user data, and intuitive controls.
            </p>
            <div className="dashboard-demo">
              <Badge content={4}>
                <FaUser size={48} />
              </Badge>
              <Progress variant="circular" mode="determinate" value={75} showValue />
              <Slider value={50} />
            </div>
          </div>
        </div>

        {/* Feature 2: Settings Page */}
        <div className="feature">
          <img src="feature-image.png" alt="Settings Page" />
          <div className="feature-details">
            <h3>Settings Management</h3>
            <p>
              Create feature-rich settings pages using RetroUI's switches, sliders, and checkboxes.
            </p>
            <div className="settings-demo">
              <Switch label="Enable Dark Mode" />
              <Checkbox label="Receive Email Notifications" />
              <Slider value={75} />
            </div>
          </div>
        </div>

        {/* Feature 3: User Profile */}
        <div className="feature">
          <img src="feature-image.png" alt="User Profile Page" />
          <div className="feature-details">
            <h3>User Profile Page</h3>
            <p>
              Enhance user profile pages with chips, toggle buttons, and custom badges that add personality to your UI.
            </p>
            <div className="profile-demo">
              <Chip label="Pro Member" variant="success" />
              <ToggleButton value="notifications" selected={true} onChange={() => {}} label="Notifications" />
              <Chip label="Beta Tester" variant="primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Component Highlights */}
      <section className="components-section">
        <h2>Component Highlights</h2>
        <div className="components-grid">
          {/* Component Card Example */}
          <div className="component-card">
            <h3>Accordion</h3>
            <Accordion>
              <AccordionItem id="acc1" header="Expandable Section">
                <p>This is an example of an accordion, great for FAQs and details.</p>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="component-card">
            <h3>Chip</h3>
            <Chip label="Example Chip" variant="primary" />
          </div>
          <div className="component-card">
            <h3>Toggle Button</h3>
            <ToggleButton value="bold" selected={true} onChange={() => {}} label="Bold" />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases-section">
        <h2>Endless Possibilities</h2>
        <div className="use-cases">
          <div className="use-case">
            <FaChartPie size={64} />
            <h3>Custom Dashboards</h3>
            <p>
              Build dashboards that display data with a retro touch, combining charts, badges, and progress indicators.
            </p>
          </div>
          <div className="use-case">
            <FaCheckCircle size={64} />
            <h3>Form Validation</h3>
            <p>
              Use RetroUI checkboxes, sliders, and switches to create engaging forms with clear and playful feedback.
            </p>
          </div>
          <div className="use-case">
            <FaUser size={64} />
            <h3>User Profiles</h3>
            <p>
              Make user profiles stand out with badges, chips, and custom styling that brings personality to every profile page.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Developers Are Saying</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"RetroUI is exactly what I needed to give my project a unique, playful edge. The components are easy to use and beautifully designed!"</p>
            <h4>- Alex R., Frontend Developer</h4>
          </div>
          <div className="testimonial">
            <p>"I love the nostalgic vibe RetroUI brings. It's fun, stylish, and makes my applications stand out!"</p>
            <h4>- Jamie L., UI/UX Designer</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Get Started Today</h2>
        <p>
          Join the growing community of developers using RetroUI to bring creativity and personality to their projects.
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
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PromoPage;
