import React from 'react';
import './homepage.css';
import { FaUser, FaBold } from 'react-icons/fa';
import Accordion from '../../Components/Accordion';
import AccordionItem from '../../Components/AccordionItem';
import Badge from '../../Components/Badge';
import Checkbox from '../../Components/CheckBox';
import Chip from '../../Components/Chip';
import Progress from '../../Components/Progress';
import Skeleton from '../../Components/Skeleton';
import Slider from '../../Components/Slider/Slider';
import Switch from '../../Components/Switch';
import ToggleButton from '../../Components/ToggleButton';


const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="homepage-header">
        <img src="logo.png" alt="Component Library Logo" className="logo" />
        <h1>Welcome to the RetroUI Component Library</h1>
        <p>
          A collection of retro-inspired, playful components designed for modern web applications.
        </p>
        <a href="#get-started" className="cta-button">Get Started</a>
      </header>

      {/* Components Showcase */}
      <section className="components-showcase">
        <h2>Components</h2>

        {/* Accordion */}
        <div className="component-section" id="accordion">
          <h3>Accordion</h3>
          <p>
            The Accordion component allows users to expand and collapse sections of content.
          </p>
          <Accordion>
            <AccordionItem id="acc1" header="Accordion Item 1">
              <p>This is the content of the first accordion item.</p>
            </AccordionItem>
            <AccordionItem id="acc2" header="Accordion Item 2">
              <p>This is the content of the second accordion item.</p>
            </AccordionItem>
          </Accordion>
          <pre className="code-snippet">
            {`<Accordion>
  <AccordionItem id="acc1" header="Accordion Item 1">
    <p>This is the content of the first accordion item.</p>
  </AccordionItem>
  <AccordionItem id="acc2" header="Accordion Item 2">
    <p>This is the content of the second accordion item.</p>
  </AccordionItem>
</Accordion>`}
          </pre>
        </div>

        {/* Badge */}
        <div className="component-section" id="badge">
          <h3>Badge</h3>
          <p>
            The Badge component displays a small count or status indicator.
          </p>
          <Badge content={5}>
            <FaUser size={32} />
          </Badge>
          <pre className="code-snippet">
            {`<Badge content={5}>
  <FaUser size={32} />
</Badge>`}
          </pre>
        </div>

        {/* Chip */}
        <div className="component-section" id="chip">
          <h3>Chip</h3>
          <p>
            The Chip component displays small pieces of information.
          </p>
          <Chip
            label="Example Chip"
            variant="primary"
            onDelete={() => alert('Chip deleted')}
          />
          <pre className="code-snippet">
            {`<Chip
  label="Example Chip"
  variant="primary"
  onDelete={() => alert('Chip deleted')}
/>`}
          </pre>
        </div>

        {/* Checkbox */}
        <div className="component-section" id="checkbox">
          <h3>Checkbox</h3>
          <p>
            The Checkbox component allows users to select one or more items from a set.
          </p>
          <Checkbox label="Accept Terms and Conditions" />
          <pre className="code-snippet">
            {`<Checkbox label="Accept Terms and Conditions" />`}
          </pre>
        </div>

        {/* Slider */}
        <div className="component-section" id="slider">
          <h3>Slider</h3>
          <p>
            The Slider component lets users select a value from a range.
          </p>
          <Slider value={50} />
          <pre className="code-snippet">
            {`<Slider value={50} />`}
          </pre>
        </div>

        {/* Switch */}
        <div className="component-section" id="switch">
          <h3>Switch</h3>
          <p>
            The Switch component is used to toggle between two states.
          </p>
          <Switch label="Enable Notifications" />
          <pre className="code-snippet">
            {`<Switch label="Enable Notifications" />`}
          </pre>
        </div>

        {/* Progress */}
        <div className="component-section" id="progress">
          <h3>Progress</h3>
          <p>
            The Progress component displays the progress of a task.
          </p>
          <Progress variant="circular" mode="determinate" value={75} showValue />
          <pre className="code-snippet">
            {`<Progress variant="circular" mode="determinate" value={75} showValue />`}
          </pre>
        </div>

        {/* Skeleton */}
        <div className="component-section" id="skeleton">
          <h3>Skeleton</h3>
          <p>
            The Skeleton component acts as a placeholder while content is loading.
          </p>
          <Skeleton variant="text" width="80%" />
          <Skeleton variant="rectangular" width="100%" height={100} />
          <pre className="code-snippet">
            {`<Skeleton variant="text" width="80%" />
<Skeleton variant="rectangular" width="100%" height={100} />`}
          </pre>
        </div>

        {/* ToggleButton */}
        <div className="component-section" id="toggle-button">
          <h3>ToggleButton</h3>
          <p>
            The ToggleButton component allows users to change a setting between two states.
          </p>
          <ToggleButton
            value="bold"
            selected={true}
            onChange={() => {}}
            label="Bold"
            icon={<FaBold />}
          />
          <pre className="code-snippet">
            {`<ToggleButton
  value="bold"
  selected={true}
  onChange={() => {}}
  label="Bold"
  icon={<FaBold />}
/>`}
          </pre>
        </div>

        {/* Menu */}
        <div className="component-section" id="menu">
          <h3>Menu</h3>
          <p>
            The Menu component displays a list of actions or options.
          </p>
          <p>(Interactive example omitted for brevity)</p>
          <pre className="code-snippet">
            {`<Menu anchorEl={anchorEl} open={menuOpen} onClose={handleClose}>
  <MenuItem onClick={handleProfile}>Profile</MenuItem>
  <MenuItem onClick={handleSettings}>Settings</MenuItem>
</Menu>`}
          </pre>
        </div>

        {/* Popover */}
        <div className="component-section" id="popover">
          <h3>Popover</h3>
          <p>
            The Popover component displays content in a floating container.
          </p>
          <p>(Interactive example omitted for brevity)</p>
          <pre className="code-snippet">
            {`<Popover anchorEl={anchorEl} open={popoverOpen} onClose={handleClose}>
  <div>Popover Content</div>
</Popover>`}
          </pre>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="get-started" id="get-started">
        <h2>Get Started</h2>
        <p>
          Integrate the RetroUI Component Library into your project and start building beautiful, retro-inspired interfaces today!
        </p>
        <pre className="code-snippet">
          {`npm install retro-ui-library`}
        </pre>
        <p>
          Read the documentation and explore more examples on our <a href="#">GitHub repository</a>.
        </p>
      </section>

      {/* Footer */}
      <footer className="homepage-footer">
        <p>&copy; 2023 RetroUI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
