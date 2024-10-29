import React, { useState } from 'react'
import Button from '../../Components/Button';
import List from '../../Components/List';
import ListItem from '../../Components/ListItem';
import Dashboard from '../../Components/Dashboard';
import { Outlet, useNavigate, Link } from 'react-router-dom';

const index = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  
  const closeModal = () => setModalOpen(false);

  const [standardText, setStandardText] = useState('');
  const [containedText, setContainedText] = useState('');
  const [standardMultiText, setStandardMultiText] = useState('');
  const [containedMultiText, setContainedMultiText] = useState('');

  const [selectedOption, setSelectedOption] = useState('');

  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
  };

  const handleClick = (action: string) => {
    alert(`IconButton clicked: ${action}`);
  };

  const handleItemClick = (item: string) => {
    alert(`Clicked on ${item}`);
  };

  const sidebarContent = (
    <List>
      <ListItem title="Overview" onClick={() => navigate('/design')} />
      <ListItem title="Accordion" onClick={() => navigate('/design/accordion') } />
      <ListItem title="Alert" onClick={() => navigate('/design/alert') } />
      <ListItem title="Autocomplete" onClick={() => navigate('/design/autocomplete') } />
      <ListItem title="Avatar" onClick={() => navigate('/design/avatar') } />
      <ListItem title="Badge" onClick={() => navigate('/design/badge') } />
      <ListItem title="Button" onClick={() => navigate('/design/button') } />
      <ListItem title="Card" onClick={() => navigate('/design/card') } />
      <ListItem title="Checkbox" onClick={() => navigate('/design/checkbox') } />
      <ListItem title="Chip" onClick={() => navigate('/design/chip') } />
      <ListItem title="Code" onClick={() => navigate('/design/code') } />
      <ListItem title="Icon Button" onClick={() => navigate('/design/iconbutton') } />
      <ListItem title="List" onClick={() => navigate('/design/list') } />
      <ListItem title="Menu" onClick={() => navigate('/design/menu') } />
      <ListItem title="Modal" onClick={() => navigate('/design/modal') } />
      <ListItem title="Popover" onClick={() => navigate('/design/popover') } />
      <ListItem title="Progress" onClick={() => navigate('/design/progress') } />
      <ListItem title="Select" onClick={() => navigate('/design/select') } />
      <ListItem title="Slider" onClick={() => navigate('/design/slider') } />
      <ListItem title="Switch" onClick={() => navigate('/design/switch') } />
      <ListItem title="Skeleton" onClick={() => navigate('/design/skeleton') } />
      <ListItem title="Text Field" onClick={() => navigate('/design/textfield') } />
      <ListItem title="Toggle Button" onClick={() => navigate('/design/togglebutton') } />
    </List>
  );

  const navbarContent = (
    <>
      <Link to="/" className="navbar-item">
        Home
      </Link>
      <Link to="/design" className="navbar-item">
        Components
      </Link>
      <Button variant='secondary' >Sign In</Button>
    </>
  );

  const logo = <img src="logo.png" alt="Logo" />;

  const modalFooter = (
    <>
      <Button variant='secondary' onClick={closeModal}>
        Cancel
      </Button>
      <Button variant='primary' onClick={closeModal}>
        Confirm
      </Button>
    </>
  );

  return (
    <Dashboard
      sidebarContent={sidebarContent}
      navbarContent={navbarContent}
      logo={logo}
    >
      <Outlet />
    </Dashboard>
  )
}

export default index